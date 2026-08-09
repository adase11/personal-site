import { OG_CONTENT_TYPE, OG_SIZE, ogCard } from '@/lib/og';

export const alt = 'Resume — Austin Dase';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

const Image = () =>
  ogCard({
    eyebrow: 'Resume',
    title: 'Austin Dase',
    subtitle:
      'Ten years building applied AI, payments, and settlement systems — Fundrise, Travelers.'
  });

export default Image;
