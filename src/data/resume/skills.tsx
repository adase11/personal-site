export interface ISkillGroup {
  name: string;
  items: string[];
}

/**
 * Grouped rather than rated.
 *
 * This used to be a list of self-assigned 1–5 competency scores rendered as
 * bars. Self-assessment is not evidence — the reader has no way to calibrate
 * it, and a "5/5" is a claim you then have to defend — so the numbers said
 * less than the grouping does. The proof lives on /projects and the resume.
 *
 * Applied AI is first because it is the through-line of the current work, not
 * because the list is alphabetical.
 */
const skillGroups: ISkillGroup[] = [
  {
    name: 'Applied AI',
    items: [
      'Anthropic Claude API',
      'OpenAI API',
      'AWS Bedrock',
      'Spring AI',
      'Prompt & context design',
      'Tool use and agent loops',
      'Prompt caching',
      'RAG',
      'Evaluation & regression testing',
      'Machine learning'
    ]
  },
  {
    name: 'Languages',
    items: ['Java', 'TypeScript', 'Python', 'SQL']
  },
  {
    name: 'Backend & data',
    items: [
      'Spring Boot',
      'PostgreSQL',
      'JOOQ',
      'GraphQL',
      'Testcontainers',
      'Event-driven processing'
    ]
  },
  {
    name: 'Web',
    items: ['React', 'Next.js', 'Vue', 'Tailwind CSS']
  },
  {
    name: 'Platform',
    items: ['AWS', 'Vercel', 'Stripe', 'Auth0 / Okta', 'Retool']
  },
  {
    name: 'Domain',
    items: [
      'Payments & ACH',
      'KYC and compliance workflows',
      'Private securities',
      'Regulated systems design'
    ]
  }
];

/** The homepage's quiet slash-separated row. Leads with the current work. */
export const headlineSkills: string[] = [
  'Applied AI',
  'Java',
  'TypeScript',
  'Python',
  'Spring Boot',
  'React / Next.js',
  'Postgres',
  'AWS',
  'Vercel'
];

export default skillGroups;
