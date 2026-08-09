import { OG_CONTENT_TYPE, OG_SIZE, ogCard } from '@/lib/og';

export const alt = 'Austin Dase — Applied AI & Fintech Engineering';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

/** Root card. Inherited by any route that does not define its own. */
const Image = () =>
  ogCard({
    eyebrow: 'Applied AI · Financial infrastructure',
    title: 'Austin Dase',
    subtitle:
      'Director of Engineering at Fundrise. Building AI-enabled products and the payments infrastructure underneath them.'
  });

export default Image;
