import { LINKS } from '@/data/links';

/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 * @property {string|undefined} blurb - one plain sentence, used by the homepage
 * "Recently" list where the full summary is too long. Not part of the schema.
 */

export interface IWorkExperience {
  name: string;
  position: string;
  url: string;
  startDate: string;
  endDate?: string;
  summary: string;
  highlights: string[];
  blurb?: string;
}

const work: IWorkExperience[] = [
  {
    name: 'Fundrise',
    position: 'Director of Engineering',
    url: LINKS.fundrise,
    startDate: '2026-01-01',
    blurb: "Leading RealAI's ongoing development.",
    summary: `Engineering direction for AI-enabled products at [Fundrise](${LINKS.fundrise}), including [RealAI](${LINKS.realai}) — hands-on through design, implementation, and review.`,
    highlights: [
      "Leading RealAI's latest set of features and capabilities ahead of an expanded public release.",
      'Own the technical direction for our AI-enabled products: model selection, prompt and context architecture, tool use, and overall harness design.',
      'Work directly with product and company leadership to take concepts from prototype to production systems.'
    ]
  },
  {
    name: 'Fundrise',
    position: 'Lead Software Engineer & Engineering Manager',
    url: LINKS.fundrise,
    startDate: '2022-01-01',
    endDate: '2025-12-31',
    blurb:
      'Took RealAI from early prototype through launch, and shipped Equitize.',
    summary: `Led the engineering shipping new products, including [RealAI](${LINKS.realai}), Fundrise's flagship AI product.`,
    highlights: [
      `Architected and shipped [RealAI](${LINKS.realai}) from conception to launch, establishing the technical roadmap and our LLM engineering practices.`,
      'Built AI-enabled web applications using both React and Vue, Java, as well as Next.js and Spring Boot, PostgreSQL, and AWS.',
      `Contributed \`tool_choice\` support and prompt cache management to [Spring AI](${LINKS.springAi})'s Anthropic integration, both merged into the framework.`,
      'Shipped the Equitize product from conception to launch, scaling to millions in transaction volume.',
      'Adopted modern dev tooling ([Testcontainers](https://testcontainers.com/), [Retool](https://retool.com/), [Auth0](https://auth0.com/), Java 21, [JOOQ](https://www.jooq.org/), [GraphQL](https://graphql.org/)) to reduce development friction and improve team velocity.'
    ]
  },
  {
    name: 'Fundrise',
    position: 'Senior Software Engineer',
    url: LINKS.fundrise,
    startDate: '2021-01-01',
    endDate: '2022-01-01',
    blurb:
      "Worked on the platform's payments systems, including ACH processing and a " +
      'new integration with Stripe.',
    summary:
      'Worked on Daily Processing infrastructure handling payments, KYC, and share issuance.',
    highlights: [
      'Architected new ACH processing system handling $1B+ in annual transaction volume.',
      `Shipped [Stripe](${LINKS.stripe}) debit funding integration, processing 40k+ transactions in year one.`,
      'Automated transfer agent reconciliation, eliminating manual shareholding processing and reconciliation errors.',
      'Built department-wide test data framework, enabling rapid local development iteration across engineering.'
    ]
  },
  {
    name: 'Fundrise',
    position: 'Software Engineer',
    url: LINKS.fundrise,
    startDate: '2019-11-01',
    endDate: '2021-01-01',
    blurb:
      'Shipped the IRA and Short Term Notes products, and built the KYC ' +
      'and auto-invest systems behind them.',
    summary:
      'Responsible for auto-invest scheduling and KYC system development, delivering core infrastructure for new product lines.',
    highlights: [
      'Shipped IRA product from conception to production, establishing new asset class offering.',
      'Designed and shipped Short Term Notes backend processing system.',
      'Streamlined KYC and investment approval workflows, reducing approval time and processing errors.'
    ]
  },
  {
    name: 'Travelers',
    position: 'Associate Software Developer',
    url: LINKS.travelers,
    startDate: '2019-04-01',
    endDate: '2019-11-01',
    summary:
      'Built proprietary software and ML pipeline systems. Developed deployment execution management platform using Java, Spring Boot, and Python.',
    highlights: [
      'Built ML pipeline components working with SQLServer and Oracle data systems.'
    ]
  },
  {
    name: 'Travelers',
    position: 'Senior Software Programmer',
    url: LINKS.travelers,
    startDate: '2017-04-01',
    endDate: '2019-04-01',
    summary:
      'Owned development of internal applications and tools using Java and Spring Boot.',
    highlights: [
      'Migrated legacy Perl tooling suite to modern Python and Java/Spring Boot applications, reducing maintenance overhead and improving developer experience.'
    ]
  },
  {
    name: 'Travelers',
    position: 'Software Programmer',
    url: LINKS.travelers,
    startDate: '2016-03-01',
    endDate: '2017-04-01',
    summary: 'Developed proprietary software and internal systems.',
    highlights: [
      'Shipped proprietary software using Perl, Java, Spring Boot.',
      'Owned release process, executing nightly production deployments as part of deployment train.'
    ]
  }
];

export interface ICompanyHistory {
  name: string;
  url: string;
  /** Roles at this company, most recent first. */
  roles: IWorkExperience[];
  startDate: string;
  endDate?: string;
}

/**
 * Collapses the flat position list into one block per employer.
 *
 * Rendered flat, seven positions across two companies read as seven jobs and
 * the reader has to reconstruct the tenure themselves. Grouped, the shape of
 * the career — one company since 2019, four roles inside it — is legible at a
 * glance. Insertion order is preserved, so the list stays newest-first.
 */
export const byCompany = (positions: IWorkExperience[]): ICompanyHistory[] => {
  const companies = new Map<string, ICompanyHistory>();

  for (const position of positions) {
    const existing = companies.get(position.name);

    if (!existing) {
      companies.set(position.name, {
        name: position.name,
        url: position.url,
        roles: [position],
        startDate: position.startDate,
        endDate: position.endDate
      });
      continue;
    }

    existing.roles.push(position);
    // Positions arrive newest-first, so each subsequent one is the earlier
    // start; the end date is whatever the newest role carried.
    existing.startDate = position.startDate;
  }

  return [...companies.values()];
};

export default work;
