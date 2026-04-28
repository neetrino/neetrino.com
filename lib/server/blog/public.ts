import "server-only";
import { BlogPostStatus } from "@/lib/generated/prisma/client";
import { prisma } from "@/lib/server/db";
import { formatBlogDate, toDateIso } from "@/lib/server/blog/formatters";
import { getMarkdownIntro } from "@/lib/server/blog/markdown";
import type { BlogIndexItem, BlogPost } from "@/lib/server/blog/types";
import type { AppLocale } from "@/lib/i18n/locales";

// Public blog runtime reads are DB-backed; legacy JSON is kept only for seeding.
const PUBLISHED_TRANSLATION_FILTER = {
  slug: { not: "" },
  title: { not: "" },
  excerpt: { not: "" },
  content: { not: "" },
};

export async function getPublishedBlogIndexItems(
  locale: AppLocale,
): Promise<readonly BlogIndexItem[]> {
  const posts = await prisma.blogPost.findMany({
    where: {
      status: BlogPostStatus.PUBLISHED,
      coverImageUrl: { not: null },
      publishedAt: { not: null },
      translations: { some: { locale, ...PUBLISHED_TRANSLATION_FILTER } },
    },
    include: { translations: { where: { locale }, take: 1 } },
    orderBy: [{ publishedAt: "desc" }, { createdAt: "desc" }],
  });

  return posts.flatMap((post) => {
    const translation = post.translations[0];
    if (!translation || !post.coverImageUrl || !post.publishedAt) {
      return [];
    }

    return [toBlogIndexItem(post.id, post.coverImageUrl, post.publishedAt, translation, locale)];
  });
}

export async function getPublishedBlogPostBySlug(
  locale: AppLocale,
  slug: string,
): Promise<BlogPost | null> {
  const translation = await prisma.blogPostTranslation.findUnique({
    where: { locale_slug: { locale, slug } },
    include: { post: true },
  });

  if (!translation || !isPublicPost(translation.post)) {
    return null;
  }

  const indexItem = toBlogIndexItem(
    translation.post.id,
    translation.post.coverImageUrl,
    translation.post.publishedAt,
    translation,
    locale,
  );

  return {
    ...indexItem,
    content: translation.content,
    contentMarkdown: translation.content,
    intro: getMarkdownIntro(translation.content, translation.excerpt),
    seoTitle: translation.seoTitle,
    seoDescription: translation.seoDescription,
  };
}

function isPublicPost(post: {
  status: BlogPostStatus;
  coverImageUrl: string | null;
  publishedAt: Date | null;
}): post is { status: BlogPostStatus; coverImageUrl: string; publishedAt: Date } {
  return (
    post.status === BlogPostStatus.PUBLISHED &&
    post.coverImageUrl !== null &&
    post.publishedAt !== null
  );
}

function toBlogIndexItem(
  id: string,
  imageSrc: string,
  publishedAt: Date,
  translation: {
    slug: string;
    title: string;
    excerpt: string;
    imageAlt: string | null;
  },
  locale: AppLocale,
): BlogIndexItem {
  return {
    id,
    slug: translation.slug,
    dateIso: toDateIso(publishedAt),
    dateLabel: formatBlogDate(publishedAt, locale),
    title: translation.title,
    excerpt: translation.excerpt,
    imageSrc,
    imageAlt: translation.imageAlt ?? "",
  };
}
