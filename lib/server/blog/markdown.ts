import type { BlogMarkdownSection } from "@/lib/server/blog/types";

const LEVEL_TWO_HEADING_PATTERN = /^##\s+(.+)$/gm;

export function getMarkdownIntro(markdown: string, fallback: string): string {
  const firstHeadingIndex = markdown.search(LEVEL_TWO_HEADING_PATTERN);
  const intro = firstHeadingIndex >= 0 ? markdown.slice(0, firstHeadingIndex) : "";
  const normalizedIntro = intro.trim();

  return normalizedIntro.length > 0 ? normalizedIntro : fallback;
}

export function getMarkdownBody(markdown: string): string {
  const firstHeadingIndex = markdown.search(LEVEL_TWO_HEADING_PATTERN);

  if (firstHeadingIndex < 0) {
    return markdown;
  }

  return markdown.slice(firstHeadingIndex).trim();
}

export function splitMarkdownSections(markdown: string): readonly BlogMarkdownSection[] {
  const matches = [...markdown.matchAll(LEVEL_TWO_HEADING_PATTERN)];
  if (matches.length === 0) {
    const body = markdown.trim();
    return body.length > 0 ? [{ heading: null, body }] : [];
  }

  return matches.map((match, index) => {
    const heading = match[1]?.trim() ?? "";
    const bodyStart = match.index + match[0].length;
    const bodyEnd = matches[index + 1]?.index ?? markdown.length;
    return {
      heading,
      body: markdown.slice(bodyStart, bodyEnd).trim(),
    };
  });
}
