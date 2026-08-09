export interface ISelectedWork {
  /** Short mono kicker: what kind of thing this is. */
  kind: string;
  title: string;
  href?: string;
  /** Two or three sentences. What it is, and what the work actually was. */
  body: string;
}

/**
 * The three things worth reading first: two products taken from concept to
 * production, and the open-source work that is publicly verifiable. Ordered
 * by what a reader who knows nothing about me should see first, not by date.
 *
 * Deliberately qualitative about RealAI — the numbers behind it are not
 * public.
 */
const selectedWork: ISelectedWork[] = [
  {
    kind: 'Product · 0→1',
    title: 'RealAI',
    href: 'https://realai.com',
    body:
      "Fundrise's AI product, taken from early prototype through public " +
      'launch and now being rebuilt onto Next.js, TypeScript, and Vercel ' +
      'ahead of an expanded release. I own the architecture end to end: ' +
      'model selection, prompt and context design, tool use, evaluation, and ' +
      'the production system serving it.'
  },
  {
    kind: 'Product · 0→1',
    title: 'Equitize',
    body:
      'Fundrise’s private-securities platform, shipped from concept to ' +
      'launch and scaled to millions in transaction volume. Concept, ' +
      'prototype, architecture, and most of the implementation — then the ' +
      'operational work of running it once real money moved through it.'
  },
  {
    kind: 'Infrastructure',
    title: 'Payments, KYC, and settlement at Fundrise',
    body:
      'The systems underneath the platform: an ACH processing architecture ' +
      'handling $1B+ in annual transaction volume, a Stripe debit funding ' +
      'integration that processed 40k+ transactions in its first year, and ' +
      'automated transfer-agent reconciliation replacing a manual process.'
  },
  {
    kind: 'Open source',
    title: 'Spring AI — Anthropic integration',
    href: 'https://github.com/spring-projects/spring-ai/pulls?q=is%3Apr+author%3Aadase11',
    body:
      "Two contributions merged into Spring AI's Anthropic support: " +
      '`tool_choice` controls for Claude function calling, and per-message ' +
      'TTL plus configurable cache-block usage for prompt caching, shipped ' +
      'in 1.1.0-M2.'
  }
];

export default selectedWork;
