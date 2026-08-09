/**
 * Site-level constants. The Metadata API in app/layout.tsx reads them, as do
 * the JSON-LD graph in app/person-schema.tsx, the sitemap, and robots.
 */
export const SITE_URL = 'https://dase.dev';

/** The person. Used for og:site_name and as the `| Austin Dase` title suffix. */
export const SITE_NAME = 'Austin Dase';

/**
 * The homepage <title>. Kept under ~60 characters so search results don't
 * truncate it, and carrying the two terms worth matching on — the bare name
 * alone was the single largest wasted surface on the site.
 */
export const SITE_TITLE = 'Austin Dase — Applied AI & Fintech Engineering';

export const TWITTER_HANDLE = '@adase01';
export const SOURCE_REPO = 'https://github.com/adase11/personal-site';

/** Path of the generated resume PDF in public/. See scripts/build-resume-pdf.mjs. */
export const RESUME_PDF_PATH = '/austin-dase-resume.pdf';

/**
 * Canonical profile URLs. Single source of truth: the contact list renders
 * them, and the JSON-LD `sameAs` array uses them to tie this domain to the
 * same person across sites — the main thing that lets a search engine treat
 * the profiles and this site as one entity.
 */
export const PROFILES = {
  github: 'https://github.com/adase11',
  linkedin: 'https://www.linkedin.com/in/austin-dase-40188b63/',
  x: 'https://x.com/adase01'
} as const;

/**
 * The one-line positioning. Leads with what the work actually is rather than
 * with a job title, which reads the same to a person and to a search engine.
 */
export const DEFAULT_DESCRIPTION =
  'Austin Dase is a software engineer in Washington, DC building applied ' +
  'AI and financial infrastructure — currently Director of Engineering at ' +
  'Fundrise, where he leads and builds AI-enabled products including RealAI.';
