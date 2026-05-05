import { FIGMA_ASSETS } from "@/lib/figma-assets";
import enBlogPosts from "@/messages/en/blog-posts.json";
import ruBlogPosts from "@/messages/ru/blog-posts.json";
import hyBlogPosts from "@/messages/hy/blog-posts.json";
import type { AppLocale } from "@/lib/i18n/locales";

export type BlogIndexItem = {
  readonly id: string;
  /** URL segment — `/blog/[slug]`. */
  readonly slug: string;
  /** ISO 8601 date for `<time dateTime>`. */
  readonly dateIso: string;
  readonly dateLabel: string;
  readonly title: string;
  readonly excerpt: string;
  readonly imageSrc: string;
  readonly imageAlt: string;
};

export type BlogPostSection = {
  readonly heading: string;
  readonly paragraphs: readonly string[];
};

export type BlogPost = BlogIndexItem & {
  readonly intro: string;
  readonly sections: readonly BlogPostSection[];
};

type BlogSlug = "megatrox-intro" | "megatrox-pipelines" | "megatrox-observability";

type LocalizedBlogPost = {
  dateLabel: string;
  title: string;
  excerpt: string;
  imageAlt: string;
  intro: string;
  sections: readonly BlogPostSection[];
};

const BLOG_POST_BASE: Record<
  BlogSlug,
  { id: string; slug: BlogSlug; dateIso: string; imageSrc: string }
> = {
  "megatrox-intro": {
    id: "megatrox-intro",
    slug: "megatrox-intro",
    dateIso: "2026-03-07",
    imageSrc: FIGMA_ASSETS.imgUiDesign21,
  },
  "megatrox-pipelines": {
    id: "megatrox-pipelines",
    slug: "megatrox-pipelines",
    dateIso: "2026-02-22",
    imageSrc: FIGMA_ASSETS.imgCloudInfrastructure,
  },
  "megatrox-observability": {
    id: "megatrox-observability",
    slug: "megatrox-observability",
    dateIso: "2026-01-15",
    imageSrc: FIGMA_ASSETS.imgAnimation,
  },
};

const BLOG_POSTS_BY_LOCALE: Record<AppLocale, Record<BlogSlug, LocalizedBlogPost>> = {
  en: enBlogPosts as Record<BlogSlug, LocalizedBlogPost>,
  ru: ruBlogPosts as Record<BlogSlug, LocalizedBlogPost>,
  hy: hyBlogPosts as Record<BlogSlug, LocalizedBlogPost>,
};

const BLOG_SLUGS = Object.keys(BLOG_POST_BASE) as BlogSlug[];

export function getBlogPosts(locale: AppLocale): readonly BlogPost[] {
  const localizedPosts = BLOG_POSTS_BY_LOCALE[locale];

  return BLOG_SLUGS.map((slug) => {
    const base = BLOG_POST_BASE[slug];
    const localized = localizedPosts[slug];

    return {
      ...base,
      ...localized,
    };
  });
}

export function getBlogIndexItems(locale: AppLocale): readonly BlogIndexItem[] {
  return getBlogPosts(locale).map((post) => {
    const { intro, sections, ...indexItem } = post;
    void intro;
    void sections;
    return indexItem;
  });
}

export function getBlogPostBySlug(slug: string, locale: AppLocale): BlogPost | undefined {
  return getBlogPosts(locale).find((post) => post.slug === slug);
}
