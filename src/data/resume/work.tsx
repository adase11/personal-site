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
 */

export interface IWorkExperience {
  name: string;
  position: string;
  url: string;
  startDate: string;
  endDate?: string;
  summary: string;
  highlights: string[];
}

const work: IWorkExperience[] = [
  {
    name: 'Fundrise',
    position: 'Lead Software Engineer | Engineering Manager',
    url: 'https://fundrise.com',
    startDate: '2022-01-01',
    summary:
      'I lead an engineering team at [Fundrise](https://fundrise.com/), overseeing the development and release of innovative new products. Our most recently released product is [Equitize](https://equitize.app). Blending technical expertise with strategic leadership, I ensure our projects align with overarching business goals while driving the development of high-quality, cutting-edge software. My role involves direct coding contributions, architectural decisions, and close collaboration with executive leadership to tailor technological solutions to business needs.',
    highlights: [
      'Lead a team of engineers with a focus on building AI enabled, modern web applications.',
      'Managed the inception, development, and launch of Equitize, driving the product to process millions of dollars in transactions.',
      'Leverage in an array of technologies including Java, Spring Boot, PostgreSQL, TypeScript, Vue3, and a variety of AWS services.',
      'Pioneered the adoption of cutting-edge technologies and tools inclusing [Testcontainers](https://testcontainers.com/), [Retool](https://retool.com/), [Auth0](https://auth0.com/), Java 21, [JOOQ](https://www.jooq.org/), and [GraphQL](https://graphql.org/).',
      'Routinely engage with our executive and product teams on project requirements and deliverables.'
    ]
  },
  {
    name: 'Fundrise',
    position: 'Senior Software Engineer',
    url: 'https://fundrise.com',
    startDate: '2021-01-01',
    endDate: '2022-01-01',
    summary:
      'As the senior engineer on our "Daily Processing" team, I developed software to process payments, handle KYC, and issue shares. I led several key initiatives, including rewriting ACH processing systems, implementing our transfer agent share reconciliation process, and integrating new payment methods.',
    highlights: [
      'Rewrote ACH processing software, handling over $1 billion in transactions in the first year.',
      'Integrated [Stripe](https://stripe.com/) for debit card funding, processing over 40,000 transactions in the first year.',
      'Developed a new integration with our transfer agent, automating reconciliation of shareholdings.',
      'Created a test data framework used department-wide for local test data generation.'
    ]
  },
  {
    name: 'Fundrise',
    position: 'Software Engineer',
    url: 'https://fundrise.com',
    startDate: '2019-11-01',
    endDate: '2021-01-01',
    summary:
      'Joined Fundrise to build new products like IRA offerings and Short Term Notes. Worked on core systems related to auto-invest scheduling and KYC processes.',
    highlights: [
      'Developed the IRA product offering from inception to deployment.',
      'Built and designed the backend processing of our Short Term Notes product, a new business offering.',
      'Enhanced internal KYC and investment approval processes for increased efficiency.'
    ]
  },
  {
    name: 'Travelers',
    position: 'Associate Software Developer',
    url: 'https://www.travelers.com',
    startDate: '2019-04-01',
    endDate: '2019-11-01',
    summary:
      'Worked on internal tools and machine learning projects at Travelers. Developed deployment execution management tools and handled Java/Spring, Python, and SQL-based systems.',
    highlights: [
      'Developed internal tooling using Java, Spring Boot, and Python.',
      'Collaborated on machine learning projects, utilizing database systems like SQLServer and Oracle.'
    ]
  },
  {
    name: 'Travelers',
    position: 'Senior Software Programmer',
    url: 'https://www.travelers.com',
    startDate: '2017-04-01',
    endDate: '2019-04-01',
    summary:
      'Led development of internal applications and tooling for Travelers using Java and Spring Boot.',
    highlights: [
      'Converted a legacy internal tooling suite from Perl to Python and web-based Java Spring Boot applications.',
      'Worked with Python and Perl systems for internal applications.'
    ]
  },
  {
    name: 'Travelers',
    position: 'Software Programmer',
    url: 'https://www.travelers.com',
    startDate: '2016-03-01',
    endDate: '2017-04-01',
    summary:
      'Started my career at Travelers working on internal development projects involving Java, Python, and SQL-based systems.',
    highlights: [
      'Developed internal tools using Perl, Java, and Spring Boot.',
      'Managed nightly deployments as part of the release train.'
    ]
  }
];

export default work;
