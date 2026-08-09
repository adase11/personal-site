import type { Metadata } from 'next';
import { company, discipline, email, name, product, role } from '@/data/bio';
import { pageMetadata } from '@/lib/metadata';
import { DEFAULT_DESCRIPTION, SITE_NAME, SITE_TITLE } from '@/lib/site';

/**
 * Copy for the generated Open Graph card. `src/lib/og.tsx` draws it and the
 * route's `opengraph-image.tsx` is a five-line call into that.
 */
export interface SocialCard {
  /** og:image:alt. */
  alt: string;
  /** Uppercase mono kicker on the card. */
  eyebrow: string;
  title: string;
  subtitle: string;
}

export interface Route {
  path: string;
  /** Nav label, and the `%s | Austin Dase` page title. */
  label: string;
  /** The home route. Renders as the wordmark, and is priority 1 in the sitemap. */
  index?: boolean;
  /** Meta description, and the og/twitter description. */
  description: string;
  /** Overrides the title used on social cards only. */
  socialTitle?: string;
  /** Uppercase mono eyebrow above the PageHeader title. */
  eyebrow?: string;
  /** The <h1>. Defaults to the nav label — /contact reads "Get in touch". */
  heading: string;
  /** One-line lede under the heading, where the page has one. */
  lede?: string;
  card: SocialCard;
}

type RouteInput = Omit<Route, 'card' | 'heading'> & {
  heading?: string;
  card: Partial<SocialCard> & Pick<SocialCard, 'subtitle'>;
};

/**
 * Fills in the card fields that are just the page's own copy again. Written
 * out per route, every heading was typed three times — once for the <h1>, once
 * for the card, once for its alt text — and the three drifted apart.
 */
const route = ({ card, ...rest }: RouteInput): Route => {
  const heading = rest.heading ?? rest.label;

  return {
    ...rest,
    heading,
    card: {
      alt: card.alt ?? `${heading} — ${SITE_NAME}`,
      eyebrow: card.eyebrow ?? rest.eyebrow ?? rest.label,
      title: card.title ?? heading,
      subtitle: card.subtitle
    }
  };
};

/** Shared by the contact page's lede and its social card. */
const REPLY_PROMISE = 'I read everything, and reply to most of it.';

export const HOME = route({
  path: '/',
  label: name,
  index: true,
  description: DEFAULT_DESCRIPTION,
  socialTitle: SITE_TITLE,
  card: {
    alt: SITE_TITLE,
    eyebrow: discipline,
    title: name,
    subtitle: `${role} at ${company.name}. Building AI-enabled products and the payments infrastructure underneath them.`
  }
});

export const ABOUT = route({
  path: '/about',
  label: 'About',
  heading: 'About me',
  description:
    `${name} builds applied AI and financial infrastructure in ` +
    `Washington, DC — currently ${role} at ${company.name}, where ` +
    `he leads and builds ${product.name}.`,
  eyebrow: 'About',
  card: {
    title: name,
    subtitle:
      'Zero-to-one product engineering at the intersection of applied AI and regulated finance.'
  }
});

export const RESUME = route({
  path: '/resume',
  label: 'Resume',
  description:
    `Resume of ${name} — ${role} at ${company.name}. Applied ` +
    'AI and LLM product engineering, payments and settlement infrastructure, ' +
    'Java and Spring Boot, TypeScript, React and Next.js.',
  eyebrow: 'Resume',
  card: {
    title: name,
    subtitle:
      'Ten years building applied AI, payments, and settlement systems — Fundrise, Travelers.'
  }
});

export const PROJECTS = route({
  path: '/projects',
  label: 'Projects',
  description:
    `Open-source contributions by ${name}, including merged work on ` +
    "Spring AI's Anthropic integration, plus talks and graduate research.",
  eyebrow: 'Projects',
  lede: 'Open-source contributions, talks, and research. Expand any entry for detail.',
  card: {
    title: 'Open source, talks & research',
    subtitle:
      "Merged contributions to Spring AI's Anthropic integration, plus talks and graduate research."
  }
});

export const CONTACT = route({
  path: '/contact',
  label: 'Contact',
  heading: 'Get in touch',
  description: `Get in touch with ${name} — email ${email}, or find him on GitHub, LinkedIn, and X.`,
  eyebrow: 'Contact',
  lede: `The fastest way to reach me is email. ${REPLY_PROMISE}`,
  card: { subtitle: `${email} — ${REPLY_PROMISE}` }
});

/**
 * Builds a route's page Metadata. The root has no title of its own — the
 * layout's `title.default` covers it, and passing one would run it through the
 * `%s | Austin Dase` template and repeat the name.
 */
export const metadataFor = (r: Route): Metadata =>
  pageMetadata({
    title: r.index ? undefined : r.label,
    description: r.description,
    path: r.path,
    socialTitle: r.socialTitle
  });

/** Ordered as the nav renders them. The sitemap reads the same list. */
const routes: Route[] = [HOME, ABOUT, RESUME, PROJECTS, CONTACT];

export default routes;
