# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Austin Dase's personal website (dase.dev) — a Next.js **App Router** app (`src/app`) deployed on **Vercel**. Originally forked from Michael D'Angelo's [personal-site](https://github.com/mldangelo/personal-site) template, but the styling and most components have since been rewritten.

## Commands

Package manager is **pnpm** (v11, pinned via `packageManager` in `package.json`). Node is pinned to `v24.17.0` in `.nvmrc` and `engines`. A shell defaulting to an older Node will fail on `pnpm` itself — make sure the pinned version is on `PATH`.

- `pnpm install` — install dependencies
- `pnpm dev` — Next.js dev server (webpack) at http://localhost:3000
- `pnpm run build` — production build
- `pnpm start` — serve the production build (`next start`)
- `pnpm run lint` — Biome check with `--write` (config in `biome.json`; also handles import organization)
- `pnpm run lint:ci` — Biome in CI mode, no writes
- `pnpm run typecheck` — `tsc --noEmit`

There is **no test suite**. Nothing is configured and no test files exist; don't assume any command validates behavior.

CI: `.github/workflows/node.js.yml` runs lint, typecheck, and build. Deployment is Vercel's Git integration — there is no deploy workflow in the repo.

TypeScript is v7, which **removed `baseUrl`**. The `@/*` alias is declared with a repo-relative path (`"@/*": ["./src/*"]`) and no `baseUrl`; re-adding one is a build error.

## Architecture

- **Routing**: App Router, `src/app/<route>/page.tsx`. `src/data/routes.tsx` is the single source of truth for every route's path, nav label, `<h1>`, eyebrow, lede, meta description, and social-card copy — add new pages there too, then have the `page.tsx` read `heading`/`eyebrow`/`lede` off the exported route object and call `metadataFor(ROUTE)`. Paths are clean and case-exact, so no lowercasing or `/index` special-casing anywhere.
- **Imports**: use the `@/*` alias (`@/components/ui/section`), not deep relative paths.
- **Layout**: `src/app/layout.tsx` is the only shell — it owns `<html>`/`<body>`, the font variables, the pre-paint theme script, `Navigation`, `<main>`, `Footer`, and Vercel Analytics + Speed Insights. It is a Server Component; the two theme effects live in `src/app/theme-sync.tsx` (`'use client'`).
- **Metadata**: the Metadata API, never `next/head` or a helmet library. Build every page's export with `metadataFor()` from `src/data/routes.tsx`, which wraps `pageMetadata()` in `src/lib/metadata.ts`; call `pageMetadata()` directly only for non-nav pages like `not-found.tsx`. Next **replaces** a page's `openGraph`/`twitter` object rather than deep-merging it, so a page that declares one inline silently drops `og:type`, `og:site_name`, and the Twitter handles. `metadataBase` in the root layout absolutizes the relative canonicals. `pageMetadata` deliberately sets **no** `images`: each route draws its own card from an `opengraph-image.tsx`, and an explicit `images` key outranks the file convention.
- **Social cards**: `src/lib/og.tsx` builds them with `ImageResponse`; each route's `opengraph-image.tsx` is a five-line `ogCard(ROUTE.card)` call into it, so the card copy lives in `routes.tsx` beside the page copy it echoes. Fonts are real `.ttf` files in `assets/` because Satori reads ttf/otf/woff but **not** woff2, it has no cascade (every text element names its font), and any element with more than one child needs an explicit `display`.
- **SEO**: `src/app/sitemap.ts` and `src/app/robots.ts` are generated from `src/data/routes.tsx`. `src/app/person-schema.tsx` emits the `Person` / `WebSite` / `ProfilePage` JSON-LD graph from the root layout — `sameAs` is what ties this domain to the GitHub and LinkedIn profiles, and its URLs come from `PROFILES` in `src/lib/site.ts` so they cannot drift from the contact list.
- **Icons**: `lucide-react` for interface icons; `@icons-pack/react-simple-icons` for brand marks. Simple Icons dropped LinkedIn after a trademark request, so that one mark is drawn locally in `src/components/ui/icons.tsx`.
- **Components**: `src/components/ui/` for shared primitives, `src/components/layout/` for chrome. Anything used by exactly one route is colocated in that route's folder (`src/app/resume/experience.tsx`).
- **Server vs Client**: everything is a Server Component unless it needs state, effects, or browser APIs. Today only `navigation`, `theme-toggle`, `theme-sync`, `project-cell`, and `email-link` carry `'use client'`. Push the directive as deep as possible.
- **Content as data**: Page content is driven by typed modules under `src/data/` (`bio.tsx`, `routes.tsx`, `selected-work.tsx`, `projects.tsx`, `contact.tsx`, `links.ts`, `resume/{degrees,skills,universities,work}.tsx`) rather than hardcoded JSX. To edit site content, edit the `data/` file, not the component.
- **One fact, one home**: the identity facts fan out from `src/data/bio.tsx` — `role`, `company`, `product`, `email`, `title`, and the letterhead `degree` line (built from `resume/degrees.tsx`, so the schools cannot be named three different ways). `lib/site.ts` interpolates `DEFAULT_DESCRIPTION` from them, `person-schema.tsx` reads `role`/`company`, and `routes.tsx` composes the per-page descriptions. A job change should be one edit. `resumeEmail` is the deliberate exception: it appears only on the print letterhead in `src/app/resume/page.tsx`.
- **Recurring external URLs** live in `src/data/links.ts`. Written inline they drift — the same employer was linked with and without `www.`, and a bad find-and-replace across prose once broke three links at once with nothing failing the build.
- **The bio narrative**: `narrative` in `src/data/bio.tsx` is one story read at two lengths. `/about` renders every paragraph; the homepage cover and `profile-card.tsx` render the subset marked `lead` (exported as `bio`). This replaced a `public/data/about.md` that retold the same story in different words, so a message change meant editing both. `/about`'s word count is derived from the paragraphs with `wordCount()` in `src/lib/text.ts`.
- **Resume PDF**: `public/austin-dase-resume.pdf` is *generated*, not hand-maintained — `pnpm build && pnpm resume:pdf` prints `/resume` through the `@media print` block in `theme.css` using headless Chrome (`scripts/build-resume-pdf.mjs`). Edit the print styles or the resume data, never the PDF. It is committed, so regenerate it whenever resume content changes.
- **Client state**: `src/store/cell-store.ts` (collapsible project cards) and `src/store/theme-store.ts` (light/dark/system preference) — small Zustand stores persisted to `localStorage` via `createJSONStorage` with `skipHydration: true`, so their values are only trusted after mount.
- **Theme**: `src/app/layout.tsx` runs a blocking inline script that stamps `data-theme` on `<html>` before first paint, avoiding a flash. It must stay in sync with the persisted shape of `theme-store.ts`.

## Design system — "Ledger, quiet"

All styling is **Tailwind v4**, configured entirely in CSS. There is no `tailwind.config.js` and no SCSS.

`src/styles/theme.css` is the single source of truth and is imported once, in `src/app/layout.tsx`. It defines:

- **Palette tokens** in `@theme` (light) with a `[data-theme='dark']` block overriding the same names: `bg`, `panel`, `fg`, `muted`, `faint`, `rule`, `accent`, `accent-soft`, `accent-fg`, `accent-subtle`, `glow`. Consumers use the generated utilities (`text-muted`, `border-rule`, `bg-accent`) and never hardcode a hex.
- **Type tokens**: `--font-sans` (Geist), `--font-mono` (Geist Mono), `--font-serif` (Newsreader), and size tokens `--text-hero`, `--text-display`, `--text-section`, `--text-label` — used as `text-hero` etc., not as arbitrary values. Fonts are declared in `src/styles/fonts.ts` and their CSS variables go on `<html>` in `layout.tsx` — **not** a wrapper element. `theme.css` declares `--font-sans/serif/mono` at `:root`, and a `var()` that cannot resolve where it is declared poisons the declaration for every descendant.
- **`--container-measure`** (48rem) — the reading measure, applied as `max-w-measure` by the root layout's `<main>`, `Navigation`, and `Footer`. All three must agree or the chrome will not line up with the content.
- **Custom utilities**: `label` (uppercase mono micro-label), `mark` (accent-underlined emphasized term), `sep-dot` / `sep-slash` (inline lists with glyph separators), `btn` / `btn-primary`, `nav-link` (uppercase mono link typography — callers own the colour and underline), `icon-btn` (square hairline icon button — pair with a `size-*`), `skip-link`.
- **Prose overrides**: `.prose` maps the `--tw-prose-*` variables onto the palette tokens. Because those tokens already flip on `data-theme`, `/about` needs no `dark:prose-invert`.
- **`@media print`**: forces the palette back to light (the dark theme prints as a block of ink), hides the site chrome, and sets `html { font-size }` — one number that drives the density of the whole resume PDF. `break-inside: avoid` is scoped to individual `article` entries; applied to a whole company block it exceeded a page and pushed the break upward, leaving a half-empty page.

Two conventions this design depends on:

1. **Hairline rules, not cards.** Boundaries are `border-rule` hairlines. No rounded corners, no shadows, no filled panels except `bg-panel` as a bar track. If you find yourself adding `rounded-*`, it's off-system.
2. **Three type roles.** Serif (`font-serif`) for display and headings — the base layer already applies it to `h1`–`h4`. Sans for body prose. Mono for metadata: dates, labels, numbers, nav.

Two shared primitives express the repeated structures; prefer them over re-typing class strings:

- `src/components/ui/section.tsx` — a top-ruled section with a serif heading. Used by the resume sections and the homepage.
- `src/components/ui/entry.tsx` — the ledger row: dateline in a 104px left column, content right, collapsing to one column below `sm`. Used by degrees and the homepage "Recently" list; `resume/experience.tsx` inlines the same grid because it nests roles under a company header.
- `src/components/ui/page-header.tsx` — the eyebrow + display title + lede block every non-home route opens with.
- `src/components/ui/selected-work.tsx` — the 0→1 products and open-source list, shared by the homepage and `/resume` so the two cannot disagree.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
