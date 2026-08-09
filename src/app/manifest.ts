import type { MetadataRoute } from 'next';
import { SITE_NAME } from '@/lib/site';

/**
 * Replaces the old static public/images/favicon/site.webmanifest, whose icon
 * `src` paths pointed at the site root while the files actually live under
 * /images/favicon — so neither maskable icon ever resolved.
 *
 * Each icon is declared twice, `any` and `maskable`. Declared maskable-only,
 * a launcher assumes the art already carries the safe-zone padding a mask
 * needs and crops into it; the `any` entry is what gets used unmasked.
 */
const manifest = (): MetadataRoute.Manifest => ({
  id: '/',
  name: SITE_NAME,
  short_name: 'Dase',
  description: 'Austin Dase — applied AI and financial infrastructure.',
  start_url: '/',
  scope: '/',
  icons: [
    {
      src: '/images/favicon/web-app-manifest-192x192.png',
      sizes: '192x192',
      type: 'image/png',
      purpose: 'any'
    },
    {
      src: '/images/favicon/web-app-manifest-192x192.png',
      sizes: '192x192',
      type: 'image/png',
      purpose: 'maskable'
    },
    {
      src: '/images/favicon/web-app-manifest-512x512.png',
      sizes: '512x512',
      type: 'image/png',
      purpose: 'any'
    },
    {
      src: '/images/favicon/web-app-manifest-512x512.png',
      sizes: '512x512',
      type: 'image/png',
      purpose: 'maskable'
    }
  ],
  theme_color: '#f6f2ea',
  background_color: '#f6f2ea',
  display: 'standalone'
});

export default manifest;
