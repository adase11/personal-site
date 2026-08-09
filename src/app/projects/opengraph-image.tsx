import { OG_CONTENT_TYPE, OG_SIZE, ogCard } from '@/lib/og';

export const alt = 'Projects — Austin Dase';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

const Image = () =>
  ogCard({
    eyebrow: 'Projects',
    title: 'Open source, talks & research',
    subtitle:
      "Merged contributions to Spring AI's Anthropic integration, plus talks and graduate research."
  });

export default Image;
