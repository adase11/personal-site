import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ImageResponse } from 'next/og';

/**
 * Shared builder for the per-route Open Graph cards.
 *
 * The site previously shipped one static jpg for every page, so a link to
 * /resume and a link to /projects previewed identically. These are drawn in
 * the site's own palette and faces, from the same tokens theme.css uses.
 *
 * Satori (behind ImageResponse) reads ttf/otf/woff but not woff2, and has no
 * cascade — every element that renders text names its font explicitly, and
 * any element with more than one child needs an explicit display.
 */

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = 'image/png';

const COLORS = {
  bg: '#f6f2ea',
  fg: '#211b12',
  muted: '#5b5142',
  faint: '#6b614f',
  rule: '#ddd2bc',
  accent: '#93611f'
};

const font = (file: string) => readFile(join(process.cwd(), 'assets', file));

interface OgCardOptions {
  /** Uppercase mono kicker, e.g. "Resume". */
  eyebrow: string;
  /** The serif headline. */
  title: string;
  /** One supporting line under the title. */
  subtitle?: string;
}

export const ogCard = async ({ eyebrow, title, subtitle }: OgCardOptions) => {
  const [serif, mono, sans] = await Promise.all([
    font('newsreader-500.ttf'),
    font('geist-mono-500.ttf'),
    font('geist-400.ttf')
  ]);

  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: COLORS.bg,
        padding: '72px 80px'
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div
          style={{
            fontFamily: 'Geist Mono',
            fontSize: 24,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: COLORS.accent
          }}
        >
          {eyebrow}
        </div>

        <div
          style={{
            marginTop: 28,
            fontFamily: 'Newsreader',
            fontSize: title.length > 28 ? 76 : 96,
            lineHeight: 1.05,
            letterSpacing: '-0.01em',
            color: COLORS.fg
          }}
        >
          {title}
        </div>

        {subtitle && (
          <div
            style={{
              marginTop: 28,
              maxWidth: 820,
              fontFamily: 'Geist',
              fontSize: 30,
              lineHeight: 1.5,
              color: COLORS.muted
            }}
          >
            {subtitle}
          </div>
        )}
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderTop: `1px solid ${COLORS.rule}`,
          paddingTop: 28,
          fontFamily: 'Geist Mono',
          fontSize: 22,
          letterSpacing: '0.06em',
          color: COLORS.faint
        }}
      >
        <div style={{ color: COLORS.accent }}>dase.dev</div>
        <div>Washington, DC</div>
      </div>
    </div>,
    {
      ...OG_SIZE,
      fonts: [
        { name: 'Newsreader', data: serif, style: 'normal', weight: 500 },
        { name: 'Geist Mono', data: mono, style: 'normal', weight: 500 },
        { name: 'Geist', data: sans, style: 'normal', weight: 400 }
      ]
    }
  );
};
