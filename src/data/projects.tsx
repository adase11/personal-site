export interface IProjectDocument {
  title: string;
  pdf: string;
}

export interface IProject {
  title: string;
  subtitle?: string;
  date: string;
  desc?: string;
  link?: string;
  /** Overrides the default "Visit project" call to action. */
  linkLabel?: string;
  youtube?: string;
  /** Attached PDFs, listed as links rather than embedded. */
  documents?: IProjectDocument[];
  kind?: string;
}

/**
 * Ordered newest first. The graduate papers are collapsed into a single entry:
 * as three separate cards they were half the page and the most dated thing on
 * it, which is not the weighting they deserve next to the merged framework
 * contributions.
 */
const data: IProject[] = [
  {
    title: 'Spring AI — Anthropic tool_choice support',
    date: '2025-10-16',
    desc: "Added tool_choice controls (auto, any, tool, none) for Claude function calling to Spring AI's AnthropicChatOptions, merged into the framework.",
    link: 'https://github.com/spring-projects/spring-ai/pull/4637',
    linkLabel: 'View merged pull request',
    kind: 'open source'
  },
  {
    title: 'Spring AI — Anthropic prompt cache management',
    date: '2025-09-22',
    desc: 'Added per-message TTL and configurable cache-block usage for Anthropic prompt caching, shipped in Spring AI 1.1.0-M2.',
    link: 'https://github.com/spring-projects/spring-ai/pull/4342',
    linkLabel: 'View merged pull request',
    kind: 'open source'
  },
  {
    title: 'Testcontainers Live',
    date: '2023-08-09',
    desc: 'Conversation on running real dependencies in tests with Testcontainers, and what adopting it changed about how our team develops locally.',
    youtube: 'T_DKV7XCNgk',
    kind: 'talk'
  },
  {
    title: 'Graduate research — computer vision and machine learning',
    subtitle: 'M.S. Computer Science, Towson University',
    date: '2019-12-01',
    desc: 'Automated facial expression recognition, and feature selection methods for classification.',
    kind: 'research',
    documents: [
      {
        title: 'A System for Automated Facial Expression Recognition',
        pdf: 'papers/Automated-Facial-Exp.pdf'
      },
      {
        title:
          'A Review of Techniques Related to Automated Facial Expression Recognition',
        pdf: 'papers/LitReview.pdf'
      },
      {
        title: 'Machine Learning Feature Selection and Analysis',
        pdf: 'papers/MachineLearningFeatureSelectionAndAnalysis-Dase.pdf'
      }
    ]
  }
];

export default data;
