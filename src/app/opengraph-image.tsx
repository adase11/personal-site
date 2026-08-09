import { HOME } from '@/data/routes';
import { OG_CONTENT_TYPE, OG_SIZE, ogCard } from '@/lib/og';

export const alt = HOME.card.alt;
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

/** Root card. Inherited by any route that does not define its own. */
const Image = () => ogCard(HOME.card);

export default Image;
