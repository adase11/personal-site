#!/usr/bin/env node
/**
 * Renders /resume to public/austin-dase-resume.pdf using the print stylesheet
 * in src/styles/theme.css.
 *
 * The PDF is generated from the page rather than maintained beside it, so the
 * downloaded document and the page it was printed from can never disagree.
 * It is a deliberate manual step — `pnpm run resume:pdf` — because
 * the output is committed to public/, and wiring it into `build` would make
 * the build depend on its own output.
 *
 * Usage:
 *   pnpm run build && pnpm run resume:pdf
 */

import { spawn } from 'node:child_process';
import { access, mkdir, stat } from 'node:fs/promises';
import { createServer } from 'node:net';
import path from 'node:path';
import process from 'node:process';

const OUTPUT = path.join(process.cwd(), 'public', 'austin-dase-resume.pdf');
const ROUTE = '/resume';
const START_TIMEOUT_MS = 60_000;

const CHROME_CANDIDATES = [
  process.env.CHROME_PATH,
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/Applications/Chromium.app/Contents/MacOS/Chromium',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
  '/usr/bin/chromium-browser'
].filter(Boolean);

const findChrome = async () => {
  for (const candidate of CHROME_CANDIDATES) {
    try {
      await access(candidate);
      return candidate;
    } catch {
      // try the next one
    }
  }
  throw new Error(
    'No Chrome or Chromium found. Set CHROME_PATH to a browser binary.'
  );
};

const freePort = () =>
  new Promise((resolve, reject) => {
    const server = createServer();
    server.on('error', reject);
    server.listen(0, '127.0.0.1', () => {
      const { port } = server.address();
      server.close(() => resolve(port));
    });
  });

const waitForServer = async (url) => {
  const deadline = Date.now() + START_TIMEOUT_MS;

  while (Date.now() < deadline) {
    try {
      const res = await fetch(url, { redirect: 'manual' });
      if (res.status < 500) return;
    } catch {
      // not listening yet
    }
    await new Promise((resolve) => setTimeout(resolve, 300));
  }

  throw new Error(`Server did not answer ${url} within ${START_TIMEOUT_MS}ms.`);
};

const run = (command, args, options = {}) =>
  new Promise((resolve, reject) => {
    const child = spawn(command, args, { stdio: 'inherit', ...options });
    child.on('error', reject);
    child.on('exit', (code) =>
      code === 0
        ? resolve()
        : reject(new Error(`${path.basename(command)} exited with ${code}`))
    );
  });

const main = async () => {
  const chrome = await findChrome();
  const port = await freePort();
  const origin = `http://127.0.0.1:${port}`;

  await mkdir(path.dirname(OUTPUT), { recursive: true });

  console.log(`Starting next start on ${origin} …`);
  const server = spawn(
    process.execPath,
    ['node_modules/next/dist/bin/next', 'start', '--port', String(port)],
    { stdio: ['ignore', 'inherit', 'inherit'] }
  );

  const shutdown = () => {
    if (!server.killed) server.kill('SIGTERM');
  };
  process.on('exit', shutdown);
  process.on('SIGINT', () => {
    shutdown();
    process.exit(130);
  });

  try {
    await waitForServer(`${origin}${ROUTE}`);

    console.log(`Printing ${ROUTE} → ${path.relative(process.cwd(), OUTPUT)} …`);
    await run(chrome, [
      '--headless=new',
      '--disable-gpu',
      '--no-sandbox',
      '--no-pdf-header-footer',
      // Lets webfonts and layout settle before the snapshot is taken.
      '--virtual-time-budget=10000',
      `--print-to-pdf=${OUTPUT}`,
      `${origin}${ROUTE}`
    ]);

    const { size } = await stat(OUTPUT);
    if (size === 0) throw new Error('Chrome produced an empty PDF.');
    console.log(`Wrote ${(size / 1024).toFixed(0)} KB.`);
  } finally {
    shutdown();
  }
};

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
