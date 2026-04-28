import "server-only";
import { BlogPostStatus, type Prisma } from "@/lib/generated/prisma/client";
import { getPrisma } from "@/lib/server/db";
import { getFilledTranslations, type BlogPostFormInput } from "@/lib/server/blog/validation";
import { isAppLocale, type AppLocale } from "@/lib/i18n/locales";

export type AdminBlogTranslation = {
  readonly locale: AppLocale;
  readonly slug: string;
  readonly title: string;
  readonly excerpt: string;
  readonly content: string;
  readonly imageAlt: string | null;
  readonly seoTitle: string | null;
  readonly seoDescription: string | null;
};

export type AdminBlogPost = {
  readonly id: string;
  readonly status: BlogPostStatus;
  readonly coverImageUrl: string | null;
  readonly publishedAt: Date | null;
  readonly createdAt: Date;
  readonly updatedAt: Date;
  readonly displayTitle: string;
  readonly translations: Partial<Record<AppLocale, AdminBlogTranslation>>;
};

export async function getAdminBlogPosts(): Promise<readonly AdminBlogPost[]> {
  const posts = await getPrisma().blogPost.findMany({
    include: { translations: { orderBy: { locale: "asc" } } },
    orderBy: [{ updatedAt: "desc" }],
  });

  return posts.map(toAdminBlogPost);
}

export async function getAdminBlogPost(id: string): Promise<AdminBlogPost | null> {
  const post = await getPrisma().blogPost.findUnique({
    where: { id },
    include: { translations: { orderBy: { locale: "asc" } } },
  });

  return post ? toAdminBlogPost(post) : null;
}

export async function createAdminBlogPost(input: BlogPostFormInput): Promise<string> {
  await assertUniqueSlugs(input);
  const post = await getPrisma().blogPost.create({
    data: {
      status: input.status,
      coverImageUrl: input.coverImageUrl,
      publishedAt: input.publishedAt,
      translations: { create: getFilledTranslations(input).map(toTranslationCreateInput) },
    },
    select: { id: true },
  });

  return post.id;
}

export async function updateAdminBlogPost(id: string, input: BlogPostFormInput): Promise<void> {
  await assertUniqueSlugs(input, id);
  await getPrisma().$transaction(async (tx) => {
    await tx.blogPost.update({
      where: { id },
      data: {
        status: input.status,
        coverImageUrl: input.coverImageUrl,
        publishedAt: input.publishedAt,
      },
    });

    await syncTranslations(tx, id, input);
  });
}

export async function deleteAdminBlogPost(id: string): Promise<void> {
  await getPrisma().blogPost.delete({ where: { id } });
}

async function assertUniqueSlugs(input: BlogPostFormInput, postId?: string): Promise<void> {
  const filledTranslations = getFilledTranslations(input);
  if (filledTranslations.length === 0) {
    return;
  }

  const conflicts = await getPrisma().blogPostTranslation.findMany({
    where: {
      OR: filledTranslations.map((translation) => ({
        locale: translation.locale,
        slug: translation.slug,
      })),
      postId: postId ? { not: postId } : undefined,
    },
    select: { locale: true, slug: true },
  });

  if (conflicts.length > 0) {
    throw new Error(`Slug already exists: ${conflicts[0]?.locale}/${conflicts[0]?.slug}.`);
  }
}

async function syncTranslations(
  tx: Prisma.TransactionClient,
  postId: string,
  input: BlogPostFormInput,
): Promise<void> {
  const filledTranslations = getFilledTranslations(input);
  const filledLocales = new Set(filledTranslations.map((translation) => translation.locale));

  await tx.blogPostTranslation.deleteMany({
    where: { postId, locale: { notIn: [...filledLocales] } },
  });

  for (const translation of filledTranslations) {
    await tx.blogPostTranslation.upsert({
      where: { postId_locale: { postId, locale: translation.locale } },
      create: { postId, ...toTranslationCreateInput(translation) },
      update: toTranslationCreateInput(translation),
    });
  }
}

function toTranslationCreateInput(translation: AdminBlogTranslation) {
  return {
    locale: translation.locale,
    slug: translation.slug,
    title: translation.title,
    excerpt: translation.excerpt,
    content: translation.content,
    imageAlt: translation.imageAlt,
    seoTitle: translation.seoTitle,
    seoDescription: translation.seoDescription,
  };
}

function toAdminBlogPost(post: {
  id: string;
  status: BlogPostStatus;
  coverImageUrl: string | null;
  publishedAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
  translations: readonly {
    locale: string;
    slug: string;
    title: string;
    excerpt: string;
    content: string;
    imageAlt: string | null;
    seoTitle: string | null;
    seoDescription: string | null;
  }[];
}): AdminBlogPost {
  const translations = Object.fromEntries(
    post.translations.flatMap((translation) =>
      isAppLocale(translation.locale) ? [[translation.locale, translation]] : [],
    ),
  ) as Partial<Record<AppLocale, AdminBlogTranslation>>;

  return {
    id: post.id,
    status: post.status,
    coverImageUrl: post.coverImageUrl,
    publishedAt: post.publishedAt,
    createdAt: post.createdAt,
    updatedAt: post.updatedAt,
    displayTitle:
      translations.en?.title ?? translations.ru?.title ?? translations.hy?.title ?? "Untitled",
    translations,
  };
}
