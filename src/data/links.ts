/**
 * External URLs that appear in more than one piece of copy: employers, the
 * products, and the frameworks the open-source work landed in.
 *
 * Written inline they drift. Travelers was linked as both `travelers.com` and
 * `www.travelers.com` depending on which file you happened to be editing, and
 * a bad find-and-replace across the prose broke three links at once without
 * anything failing a build.
 */
export const LINKS = {
  fundrise: 'https://fundrise.com',
  realai: 'https://realai.com',
  travelers: 'https://www.travelers.com',
  stripe: 'https://stripe.com',
  springAi: 'https://github.com/spring-projects/spring-ai',
  /** Just my merged pull requests, not the whole repository. */
  springAiPulls:
    'https://github.com/spring-projects/spring-ai/pulls?q=is%3Apr+author%3Aadase11'
} as const;
