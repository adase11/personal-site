import type { ReactNode } from 'react';

export const name = 'Austin Dase';
export const email = 'resume@dase.dev';
export const title = 'Director of Engineering, Fundrise';
export const degree = 'M.S. Computer Science, Towson University | B.S. Information Systems, University of Maryland';
export const location = 'Washington, DC / Maryland';

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
        M.S. Computer Science,{' '}
        <a href="https://www.towson.edu">Towson &rsquo;19</a>
      </>
    )
  },
  { id: 'location', body: location }
];

export const earlier =
  'Earlier: Proprietary software and ML pipelines at Travelers, 2016–2019.';

/**
 * Keyed rather than positional so consumers can render a subset — the profile
 * aside takes only the first paragraph. Emphasis marks the two things worth
 * remembering rather than linking every proper noun; the underline is the
 * accent, so it has to stay rare.
 *
 * These all point off-site, so they are plain anchors: next/link is for
 * in-app navigation and buys nothing here.
 */
export const bio: { id: string; body: ReactNode }[] = [
  {
    id: 'work',
    body: (
      <>
        I build software at the intersection of applied AI and financial
        infrastructure. I&apos;m Director of Engineering at{' '}
        <a href="https://fundrise.com" className="mark">
          Fundrise
        </a>
        , where I lead the engineering behind our AI-enabled products —
        including{' '}
        <a href="https://realai.com" className="mark">
          RealAI.
        </a>
      </>
    )
  },
  {
    id: 'approach',
    body: (
      <>
        Most of my work has been zero-to-one: taking a concept through prototype
        to a production system people depend on. RealAI is the current one;
        before it, Equitize, a private-securities platform providing secondary
        market liquidity. Underneath both is a decade of experience in payments,
        KYC, and settlement infrastructure in highly regulated domains.
      </>
    )
  }
];
