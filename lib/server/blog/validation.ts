import { z } from "zod";
import { locales } from "@/i18n/routing";
import type { AppLocale } from "@/lib/i18n/locales";

const blogPostStatusSchema = z.enum(["DRAFT", "PUBLISHED"]);
const localeSchema = z.enum(locales);

export type BlogPostFormInput = {
  readonly status: z.infer<typeof blogPostStatusSchema>;
  readonly coverImageUrl: string | null;
  readonly publishedAt: Date | null;
  readonly translations: readonly BlogTranslationFormInput[];
};

export type BlogTranslationFormInput = {
  readonly locale: AppLocale;
  readonly slug: string;
  readonly title: string;
  readonly excerpt: string;
  readonly content: string;
  readonly imageAlt: string | null;
  readonly seoTitle: string | null;
  readonly seoDescription: string | null;
};

export function parseBlogPostFormData(formData: FormData): BlogPostFormInput {
  const input = {
    status: blogPostStatusSchema.parse(readFormValue(formData, "status")),
    coverImageUrl: normalizeOptional(readFormValue(formData, "coverImageUrl")),
    publishedAt: parsePublishedAt(readFormValue(formData, "publishedAt")),
    translations: locales.map((locale) => readTranslation(formData, locale)),
  };

  validateBlogPostInput(input);
  return input;
}

export function getFilledTranslations(
  input: BlogPostFormInput,
): readonly BlogTranslationFormInput[] {
  return input.translations.filter((translation) =>
    [
      translation.slug,
      translation.title,
      translation.excerpt,
      translation.content,
      translation.imageAlt ?? "",
      translation.seoTitle ?? "",
      translation.seoDescription ?? "",
    ].some((value) => value.length > 0),
  );
}

export function sanitizeSlug(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .replace(/[^\p{L}\p{N}]+/gu, "-")
    .replace(/^-+|-+$/g, "");
}

function readTranslation(formData: FormData, locale: AppLocale): BlogTranslationFormInput {
  localeSchema.parse(locale);

  return {
    locale,
    slug: sanitizeSlug(readFormValue(formData, `${locale}.slug`)),
    title: readFormValue(formData, `${locale}.title`).trim(),
    excerpt: readFormValue(formData, `${locale}.excerpt`).trim(),
    content: readFormValue(formData, `${locale}.content`).trim(),
    imageAlt: normalizeOptional(readFormValue(formData, `${locale}.imageAlt`)),
    seoTitle: normalizeOptional(readFormValue(formData, `${locale}.seoTitle`)),
    seoDescription: normalizeOptional(readFormValue(formData, `${locale}.seoDescription`)),
  };
}

function validateBlogPostInput(input: BlogPostFormInput): void {
  const filledTranslations = getFilledTranslations(input);
  const errors = [
    ...validateCoverImage(input),
    ...filledTranslations.flatMap((translation) => validateTranslation(translation, input.status)),
  ];

  if (input.status === "PUBLISHED" && !filledTranslations.some(isPublishableTranslation)) {
    errors.push("At least one complete translation is required before publishing.");
  }

  if (errors.length > 0) {
    throw new Error(errors.join(" "));
  }
}

function validateCoverImage(input: BlogPostFormInput): readonly string[] {
  if (!input.coverImageUrl) {
    return input.status === "PUBLISHED" ? ["coverImageUrl is required before publishing."] : [];
  }

  return isAllowedCoverImageUrl(input.coverImageUrl)
    ? []
    : ["coverImageUrl must start with https:// or /."];
}

function validateTranslation(
  translation: BlogTranslationFormInput,
  status: BlogPostFormInput["status"],
): readonly string[] {
  const errors: string[] = [];
  if (!translation.slug) {
    errors.push(`${translation.locale}: slug is required for filled translation.`);
  }
  if (status === "PUBLISHED" && !isPublishableTranslation(translation)) {
    errors.push(`${translation.locale}: slug, title, excerpt, content and imageAlt are required.`);
  }

  return errors;
}

function isPublishableTranslation(translation: BlogTranslationFormInput): boolean {
  return Boolean(
    translation.slug &&
    translation.title &&
    translation.excerpt &&
    translation.content &&
    translation.imageAlt,
  );
}

function isAllowedCoverImageUrl(value: string): boolean {
  return value.startsWith("https://") || (value.startsWith("/") && !value.startsWith("//"));
}

function normalizeOptional(value: string): string | null {
  const trimmedValue = value.trim();
  return trimmedValue.length > 0 ? trimmedValue : null;
}

function readFormValue(formData: FormData, key: string): string {
  const value = formData.get(key);
  return typeof value === "string" ? value : "";
}

function parsePublishedAt(value: string): Date | null {
  const normalizedValue = normalizeOptional(value);
  if (!normalizedValue) {
    return null;
  }

  const date = new Date(`${normalizedValue}T00:00:00.000Z`);
  if (Number.isNaN(date.getTime())) {
    throw new Error("publishedAt must be a valid date.");
  }

  return date;
}
