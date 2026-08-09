import { OG_CONTENT_TYPE, OG_SIZE, ogCard } from '@/lib/og';

export const alt = 'About Austin Dase';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

const Image = () =>
  ogCard({
    eyebrow: 'About',
    title: 'Austin Dase',
    subtitle:
      'Zero-to-one product engineering at the intersection of applied AI and regulated finance.'
  });

export default Image;
