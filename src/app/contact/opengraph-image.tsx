import { OG_CONTENT_TYPE, OG_SIZE, ogCard } from '@/lib/og';

export const alt = 'Contact Austin Dase';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

const Image = () =>
  ogCard({
    eyebrow: 'Contact',
    title: 'Get in touch',
    subtitle: 'hi@dase.dev — I read everything, and reply to most of it.'
  });

export default Image;
