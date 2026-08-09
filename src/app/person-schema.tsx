import degrees from '@/data/resume/degrees';
import { DEFAULT_DESCRIPTION, PROFILES, SITE_NAME, SITE_URL } from '@/lib/site';

/**
 * schema.org JSON-LD for the site.
 *
 * The point of the graph is the `sameAs` array: it is what lets a search
 * engine treat this domain, the GitHub account, and the LinkedIn profile as
 * one entity rather than three unrelated pages that happen to share a name.
 * `knowsAbout` is the other half — it is the machine-readable version of the
 * positioning, and it is read by more than search engines now.
 *
 * Emitted once, from the root layout, so every route carries it.
 */

const PERSON_ID = `${SITE_URL}/#person`;
const WEBSITE_ID = `${SITE_URL}/#website`;

/** Curated rather than generated from the skills list: this is the claim
 *  about what I work on, not an inventory of every tool I have touched. */
const KNOWS_ABOUT = [
  'Applied AI',
  'Large language model applications',
  'LLM evaluation',
  'Retrieval-augmented generation',
  'Anthropic Claude API',
  'Software architecture',
  'Payments infrastructure',
  'Financial technology',
  'Distributed systems',
  'Java',
  'Spring Boot',
  'TypeScript',
  'React',
  'Next.js',
  'Python',
  'PostgreSQL',
  'Amazon Web Services'
];

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': PERSON_ID,
      name: SITE_NAME,
      givenName: 'Austin',
      familyName: 'Dase',
      url: SITE_URL,
      image: `${SITE_URL}/images/me.jpeg`,
      description: DEFAULT_DESCRIPTION,
      jobTitle: 'Director of Engineering',
      worksFor: {
        '@type': 'Organization',
        name: 'Fundrise',
        url: 'https://fundrise.com'
      },
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Washington',
        addressRegion: 'DC',
        addressCountry: 'US'
      },
      alumniOf: degrees.map((degree) => ({
        '@type': 'CollegeOrUniversity',
        name: degree.school,
        url: degree.link
      })),
      knowsAbout: KNOWS_ABOUT,
      sameAs: [PROFILES.github, PROFILES.linkedin, PROFILES.x]
    },
    {
      '@type': 'WebSite',
      '@id': WEBSITE_ID,
      url: SITE_URL,
      name: SITE_NAME,
      description: DEFAULT_DESCRIPTION,
      inLanguage: 'en-US',
      publisher: { '@id': PERSON_ID },
      about: { '@id': PERSON_ID }
    },
    {
      '@type': 'ProfilePage',
      '@id': `${SITE_URL}/#profilepage`,
      url: SITE_URL,
      name: SITE_NAME,
      isPartOf: { '@id': WEBSITE_ID },
      mainEntity: { '@id': PERSON_ID }
    }
  ]
};

/**
 * JSON.stringify escapes nothing HTML-significant, so `<` is escaped by hand:
 * an unescaped `</script>` inside the payload would close the tag early. The
 * data here is static, but the guard costs nothing and outlives the assumption.
 */
const PersonSchema = () => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(schema).replace(/</g, '\\u003c')
    }}
  />
);

export default PersonSchema;
