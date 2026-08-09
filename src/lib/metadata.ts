import type { Metadata } from 'next';
import { DEFAULT_DESCRIPTION, SITE_NAME, TWITTER_HANDLE } from '@/lib/site';

interface PageMetadataOptions {
  /** Page title, slotted into the `%s | Austin Dase` template. Omit for the root. */
  title?: string;
  description?: string;
  /** Route path, e.g. '/about'. Becomes the canonical and the og:url. */
  path: string;
  /** Overrides the title used on social cards only. */
  socialTitle?: string;
  card?: 'summary' | 'summary_large_image';
  noindex?: boolean;
}

/**
 * Builds a page's Metadata from the shared social defaults.
 *
 * Next replaces the whole `openGraph` / `twitter` object when a page declares
 * one — it does not deep-merge — so a page that set only `images` silently
 * dropped `og:type`, `og:site_name`, and the Twitter handles. Composing them
 * here keeps every route complete and stops each page from restating them.
 *
 * Images are deliberately absent: each route draws its own card from
 * `opengraph-image.tsx`, and an `images` key here would take precedence over
 * the file convention and pin every page back to one shared picture.
 */
export const pageMetadata = ({
  title,
  description = DEFAULT_DESCRIPTION,
  path,
  socialTitle,
  card = 'summary_large_image',
  noindex = false
}: PageMetadataOptions): Metadata => {
  const cardTitle =
    socialTitle ?? (title ? `${title} | ${SITE_NAME}` : SITE_NAME);

  return {
    ...(title ? { title } : {}),
    description,
    alternates: { canonical: path },
    robots: noindex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      type: 'website',
      siteName: SITE_NAME,
      url: path,
      title: cardTitle,
      description
    },
    twitter: {
      card,
      site: TWITTER_HANDLE,
      creator: TWITTER_HANDLE,
      title: cardTitle,
      description
    }
  };
};
