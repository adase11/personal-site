import { isValidElement, type ReactNode } from 'react';

/**
 * Flattens a static ReactNode to its text content.
 *
 * Only used for counting, and only over the hand-written bio paragraphs, which
 * are plain elements with literal children — it does not render components or
 * resolve anything that needs the React runtime.
 */
const textOf = (node: ReactNode): string => {
  if (node == null || typeof node === 'boolean') return '';
  if (typeof node === 'string' || typeof node === 'number') return String(node);
  if (Array.isArray(node)) return node.map(textOf).join('');

  if (isValidElement<{ children?: ReactNode }>(node)) {
    return textOf(node.props.children);
  }

  return '';
};

/** Whitespace-separated runs containing at least one word character. */
export const wordCount = (node: ReactNode): number =>
  textOf(node)
    .split(/\s+/)
    .filter((token) => /\w/.test(token)).length;
