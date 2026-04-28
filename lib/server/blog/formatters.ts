import type { AppLocale } from "@/lib/i18n/locales";

const BLOG_DATE_FORMAT_OPTIONS: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "long",
  day: "numeric",
};

export function formatBlogDate(date: Date, locale: AppLocale): string {
  return new Intl.DateTimeFormat(locale, BLOG_DATE_FORMAT_OPTIONS).format(date);
}

export function toDateIso(date: Date): string {
  return date.toISOString().slice(0, 10);
}
