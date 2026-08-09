import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';

/**
 * Replaces the static public/robots.txt, which disallowed an /api route that
 * has never existed and — the part that mattered — pointed at no sitemap.
 */
const robots = (): MetadataRoute.Robots => ({
  rules: { userAgent: '*', allow: '/' },
  sitemap: new URL('/sitemap.xml', SITE_URL).href,
  host: SITE_URL
});

export default robots;
