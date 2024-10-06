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
      'I lead a team responsible for developing new products and applications, including Equitize, which has facilitated millions of dollars in transactions, as well as a new AI/ML-focused project. I oversee the architecture, collaborate with executive teams, and contribute to back-end development.',
    highlights: [
      'Manage a team of engineers with a focus on building AI enabled, modern web applications.',
      'Lead development of Equitize, facilitating millions of dollars in transactions.',
      'Contribute to backend systems using Spring Boot, Java 21, Postgres, Vue3, and AWS infrastructure.',
      'Coordinate with the our executive team on project requirements and deliverables.',
    ],
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
      'Integrated Stripe for debit card funding, processing over 40,000 transactions in the first year.',
      'Developed a new integration with our transfer agent, automating reconciliation of shareholdings.',
      'Created a test data framework used department-wide for local test data generation.',
    ],
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
      'Enhanced internal KYC and investment approval processes for increased efficiency.',
    ],
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
      'Collaborated on machine learning projects, utilizing database systems like SQLServer and Oracle.',
    ],
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
      'Worked with Python and Perl systems for internal applications.',
    ],
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
      'Managed nightly deployments as part of the release train.',
    ],
  },
];

export default work;
