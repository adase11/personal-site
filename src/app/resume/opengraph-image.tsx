import { RESUME } from '@/data/routes';
import { OG_CONTENT_TYPE, OG_SIZE, ogCard } from '@/lib/og';

export const alt = RESUME.card.alt;
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

const Image = () => ogCard(RESUME.card);

export default Image;
