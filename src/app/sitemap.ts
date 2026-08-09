import type { MetadataRoute } from 'next';
import routes from '@/data/routes';
import { SITE_URL } from '@/lib/site';

/**
 * Generated from the same route table the nav renders, so a new page is
 * listed the moment it is navigable — the previous site had no sitemap at
 * all, and a hand-maintained one drifts the first time a route is added.
 */
const sitemap = (): MetadataRoute.Sitemap => {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: new URL(route.path, SITE_URL).href,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: route.index ? 1 : 0.8
  }));
};

export default sitemap;
