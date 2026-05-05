import { config } from "dotenv";
import { PrismaPg } from "@prisma/adapter-pg";
import { withPgSslLibpqCompatFlag } from "../lib/postgres-connection-string";
import { PrismaClient, BlogPostStatus } from "../lib/generated/prisma/client";
import { locales } from "../i18n/routing";
import { getBlogPosts } from "../lib/blog-posts-data";
import type { AppLocale } from "../lib/i18n/locales";
import type { BlogPost, BlogPostSection } from "../lib/blog-posts-data";

config({ path: [".env.local", ".env"] });

// Legacy static blog JSON remains the seed source; runtime public reads come from the DB.
function getDatabaseUrl(): string {
  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) {
    throw new Error("DATABASE_URL is required to seed blog posts.");
  }

  return withPgSslLibpqCompatFlag(databaseUrl);
}

function escapeMarkdown(text: string): string {
  return text.replaceAll("\\", "\\\\").replaceAll("#", "\\#");
}

function sectionsToMarkdown(intro: string, sections: readonly BlogPostSection[]): string {
  const sectionBlocks = sections.map((section) => {
    const paragraphs = section.paragraphs
      .map((paragraph) => escapeMarkdown(paragraph))
      .join("\n\n");
    return `## ${escapeMarkdown(section.heading)}\n\n${paragraphs}`;
  });

  return [escapeMarkdown(intro), ...sectionBlocks].join("\n\n");
}

function postsBySlug(locale: AppLocale): Map<string, BlogPost> {
  return new Map(getBlogPosts(locale).map((post) => [post.slug, post]));
}

async function seedBlogPosts(): Promise<void> {
  const adapter = new PrismaPg({ connectionString: getDatabaseUrl() });
  const prisma = new PrismaClient({ adapter });
  const defaultLocalePosts = getBlogPosts("en");
  const knownSlugs = defaultLocalePosts.map((post) => post.slug);

  const existingTranslations = await prisma.blogPostTranslation.findMany({
    where: { slug: { in: knownSlugs } },
    select: { postId: true },
  });
  const existingPostIds = [
    ...new Set(existingTranslations.map((translation) => translation.postId)),
  ];

  if (existingPostIds.length > 0) {
    await prisma.blogPost.deleteMany({ where: { id: { in: existingPostIds } } });
  }

  const localizedPosts = Object.fromEntries(
    locales.map((locale) => [locale, postsBySlug(locale)]),
  ) as Record<AppLocale, Map<string, BlogPost>>;

  for (const basePost of defaultLocalePosts) {
    await prisma.blogPost.create({
      data: {
        status: BlogPostStatus.PUBLISHED,
        coverImageUrl: basePost.imageSrc,
        publishedAt: new Date(`${basePost.dateIso}T00:00:00.000Z`),
        translations: {
          create: locales.map((locale) => {
            const localizedPost = localizedPosts[locale].get(basePost.slug);
            if (!localizedPost) {
              throw new Error(`Missing ${locale} translation for blog post ${basePost.slug}.`);
            }

            return {
              locale,
              slug: localizedPost.slug,
              title: localizedPost.title,
              excerpt: localizedPost.excerpt,
              content: sectionsToMarkdown(localizedPost.intro, localizedPost.sections),
              imageAlt: localizedPost.imageAlt,
              seoTitle: localizedPost.title,
              seoDescription: localizedPost.excerpt,
            };
          }),
        },
      },
    });
  }

  await prisma.$disconnect();
}

seedBlogPosts().catch((error: unknown) => {
  console.error(error);
  process.exit(1);
});
