# dase.dev

My personal site — [dase.dev](https://dase.dev).

A [Next.js](https://nextjs.org) App Router application written in TypeScript, styled with
[Tailwind v4](https://tailwindcss.com) configured entirely in CSS, and deployed on
[Vercel](https://vercel.com).

It started as a fork of Michael D'Angelo's [personal-site](https://github.com/mldangelo/personal-site),
which I'm grateful for. Very little of that codebase survives: the styling, the component layer,
the content model, and the routing have all since been rewritten.

## Stack

| | |
| --- | --- |
| Framework | Next.js 16, App Router, React 19 Server Components |
| Language | TypeScript 7 |
| Styling | Tailwind CSS v4 — no config file, no SCSS |
| Fonts | Geist, Geist Mono, Newsreader via `next/font` |
| Icons | `lucide-react`, `@icons-pack/react-simple-icons` |
| Client state | Zustand, persisted to `localStorage` |
| Tooling | Biome (lint + format + import sorting) |
| Hosting | Vercel |

There is no test suite.

## Running it

Node is pinned to the version in `.nvmrc`; pnpm is pinned via `packageManager` in `package.json`.

```bash
nvm use && pnpm install && pnpm dev
```

| Script | What it does |
| --- | --- |
| `pnpm dev` | Dev server on http://localhost:3000 |
| `pnpm build` | Production build |
| `pnpm start` | Serve the production build |
| `pnpm lint` | Biome check, with fixes applied |
| `pnpm lint:ci` | Biome in CI mode, no writes |
| `pnpm typecheck` | `tsc --noEmit` |
| `pnpm resume:pdf` | Re-render `/resume` to `public/austin-dase-resume.pdf` |

## How it's organized

Content is data, not markup. Pages read from typed modules under `src/data/` — `bio.tsx`,
`selected-work.tsx`, `projects.tsx`, `resume/`. To change what the site says, edit the data
module, not the component.

```
src/
  app/          routes, plus opengraph-image / sitemap / robots / manifest
  components/   ui/ primitives, layout/ chrome
  data/         all site content
  lib/          metadata helpers, OG card builder, site constants
  styles/       theme.css — the whole design system
```

`src/styles/theme.css` is the single source of truth for the design: palette tokens that flip on
`[data-theme='dark']`, three type roles (serif for display, sans for prose, mono for metadata),
hairline rules instead of cards, and the print stylesheet the resume PDF is rendered from.

### Regenerating the resume PDF

The PDF is printed from the live `/resume` page, so the download and the page cannot disagree.
It is committed to `public/`, so this is a manual step after the resume content changes:

```bash
pnpm build && pnpm resume:pdf
```

## License

[MIT](./LICENSE).
