import type { ReactNode } from 'react';
import { LINKS } from '@/data/links';
import degrees from '@/data/resume/degrees';

export const name = 'Austin Dase';

/** The public address. Site chrome, contact page, and social cards all use it. */
export const email = 'hi@dase.dev';

/**
 * Printed on the resume letterhead only, so replies to a sent resume land in
 * their own inbox. Deliberately does not flow to the site chrome — everything
 * else reads `email`.
 */
export const resumeEmail = 'resume@dase.dev';

export const role = 'Director of Engineering';
export const company = { name: 'Fundrise', url: LINKS.fundrise };
export const product = { name: 'RealAI', url: LINKS.realai };

export const title = `${role}, ${company.name}`;
export const location = 'Washington, DC / Maryland';

const [graduate, undergraduate] = degrees;

/**
 * The degree line on the print-only resume letterhead, built from the same
 * list the Education section and the JSON-LD `alumniOf` array render, so the
 * three cannot disagree about what the schools are called.
 */
export const degree = degrees
  .map((d) => `${d.degree}, ${d.shortSchool}`)
  .join(' · ');

/**
 * The eyebrow above the name. Describes the work rather than the job title —
 * the title is a fact about one employer's ladder, the work is what transfers.
 * The title still appears, in the bio and on the resume.
 */
export const discipline = 'Applied AI · Financial infrastructure';

/** First professional software role — the meta row counts forward from here. */
const CAREER_START = 2016;

const yearsInSoftware = new Date().getFullYear() - CAREER_START;

/** Facts thin enough to sit on one line, rendered as a `·`-separated row. */
export const meta: { id: string; body: ReactNode }[] = [
  { id: 'tenure', body: `${yearsInSoftware} yrs in software` },
  {
    id: 'degree',
    body: (
      <>
        {graduate.degree},{' '}
        <a href={graduate.link}>
          {graduate.university.shortName} &rsquo;
          {String(graduate.year).slice(2)}
        </a>
      </>
    )
  },
  { id: 'location', body: location }
];

export const earlier =
  'Earlier: Proprietary software and ML pipelines at Travelers, 2016–2019.';

export interface BioParagraph {
  id: string;
  /** Also shown in the short bio on the homepage and the profile card. */
  lead?: boolean;
  body: ReactNode;
}

/**
 * One narrative, read at two lengths.
 *
 * The homepage cover and the profile card aside take the paragraphs marked
 * `lead`; /about renders all of them. The long version used to live in
 * public/data/about.md as prose that said the same things in different words,
 * so changing the story meant editing both and hoping they still agreed.
 *
 * These all point off-site, so they are plain anchors: next/link is for
 * in-app navigation and buys nothing here. Emphasis marks the two things worth
 * remembering rather than linking every proper noun; the underline is the
 * accent, so it has to stay rare.
 */
export const narrative: BioParagraph[] = [
  {
    id: 'work',
    lead: true,
    body: (
      <>
        I build software at the intersection of applied AI and financial
        infrastructure. I&apos;m {role} at{' '}
        <a href={company.url} className="mark">
          {company.name}
        </a>
        , where I lead the engineering behind our AI-enabled products —
        including{' '}
        <a href={product.url} className="mark">
          {product.name}
        </a>{' '}
        — and still contribute daily. I&apos;ve been here since 2019, working
        with the team to build a better financial system for the individual.
      </>
    )
  },
  {
    id: 'approach',
    lead: true,
    body: (
      <>
        Most of my work has been zero-to-one: taking a concept through prototype
        to a production system people depend on. {product.name} is the current
        one; before it, Equitize, a private-securities platform providing
        secondary market liquidity. Underneath both is a decade of experience in
        payments, KYC, and settlement infrastructure in highly regulated
        domains.
      </>
    )
  },
  {
    id: 'pattern',
    body: (
      <>
        The pattern is usually the same: talk through the idea with the people
        who want it, build a proof of concept quickly enough that we can argue
        with something tangible, then take the parts that survive into
        production and own them once they&apos;re carrying live traffic and real
        money.
      </>
    )
  },
  {
    id: 'infrastructure',
    body: (
      <>
        That infrastructure work spans a decade in regulated domains: ACH
        processing handling $1B+ a year, a <a href={LINKS.stripe}>Stripe</a>{' '}
        debit funding integration, KYC and investment approval workflows, share
        issuance and reconciliation, and insurance rating. That background is
        why I&apos;m careful about evaluation and failure modes in AI systems.
        When you&apos;ve shipped software that moves other people&apos;s money,
        &ldquo;it mostly works&rdquo; is not a finished sentence.
      </>
    )
  },
  {
    id: 'open-source',
    body: (
      <>
        I contribute to open source where the work overlaps with what I&apos;m
        building. Most recently that&apos;s been{' '}
        <a href={LINKS.springAi}>Spring AI</a>&rsquo;s Anthropic integration —{' '}
        <code>tool_choice</code> support for Claude function calling, and
        per-message TTL and cache-block controls for prompt caching, both merged
        into the framework.
      </>
    )
  },
  {
    id: 'earlier',
    body: (
      <>
        Before {company.name} I spent three years at{' '}
        <a href={LINKS.travelers}>Travelers</a> working on proprietary software,
        rating systems, and machine learning pipelines. I have an M.S. in
        Computer Science from <a href={graduate.link}>{graduate.shortSchool}</a>{' '}
        and a B.S. in Information Systems from the{' '}
        <a href={undergraduate.link}>{undergraduate.shortSchool}</a>.
      </>
    )
  },
  {
    id: 'outside',
    body: (
      <>
        Outside of work I&apos;m an avid podcast listener —{' '}
        <a href="https://www.acquired.fm">Acquired</a>,{' '}
        <a href="https://joincolossus.com/series/invest-like-the-best/">
          Invest Like the Best
        </a>
        , and <a href="https://fundrise.com/investor-update/695/view">Onward</a>{' '}
        — and I listen to a lot of{' '}
        <a href="https://www.marshmusician.com/">Marsh</a>,{' '}
        <a href="https://www.aboveandbeyond.nu/">Above &amp; Beyond</a>, and{' '}
        <a href="https://www.enamourmusic.com/">Enamour</a> while I write code.
      </>
    )
  }
];

/** The short bio: the opening paragraphs of the same narrative. */
export const bio = narrative.filter((paragraph) => paragraph.lead);
