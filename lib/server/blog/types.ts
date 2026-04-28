export type BlogIndexItem = {
  readonly id: string;
  readonly slug: string;
  readonly dateIso: string;
  readonly dateLabel: string;
  readonly title: string;
  readonly excerpt: string;
  readonly imageSrc: string;
  readonly imageAlt: string;
};

export type BlogPost = BlogIndexItem & {
  readonly content: string;
  readonly contentMarkdown: string;
  readonly intro: string;
  readonly seoTitle: string | null;
  readonly seoDescription: string | null;
};

export type BlogMarkdownSection = {
  readonly heading: string | null;
  readonly body: string;
};
