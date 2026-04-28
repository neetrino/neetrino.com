import enServicePages from "@/messages/en/service-pages.json";
import ruServicePages from "@/messages/ru/service-pages.json";
import hyServicePages from "@/messages/hy/service-pages.json";
import type { AppLocale } from "@/lib/i18n/locales";

export type ServicePageSection = {
  heading: string;
  paragraphs: readonly string[];
};

export type ServiceCatalogEntry = {
  slug: ServiceSlug;
  title: string;
  description: string;
  intro: string;
  sections: readonly ServicePageSection[];
};

const SERVICE_SLUGS = [
  "saas-development",
  "crm-systems",
  "website-development",
  "mobile-app-development",
  "ai-product-development",
  "erp-system",
] as const;

export type ServiceSlug = (typeof SERVICE_SLUGS)[number];

type LocalizedServicePages = Record<
  ServiceSlug,
  Omit<ServiceCatalogEntry, "slug"> & { sections: readonly ServicePageSection[] }
>;

const SERVICE_PAGES_BY_LOCALE: Record<AppLocale, LocalizedServicePages> = {
  en: enServicePages as LocalizedServicePages,
  ru: ruServicePages as LocalizedServicePages,
  hy: hyServicePages as LocalizedServicePages,
};

export const SERVICES_CATALOG = getServicesCatalog("en");

export function getServicesCatalog(locale: AppLocale): readonly ServiceCatalogEntry[] {
  const localizedPages = SERVICE_PAGES_BY_LOCALE[locale];
  return SERVICE_SLUGS.map((slug) => ({
    slug,
    ...localizedPages[slug],
  }));
}

export function isServiceSlug(value: string): value is ServiceSlug {
  return SERVICE_SLUGS.some((slug) => slug === value);
}

export function getServiceBySlug(slug: string, locale: AppLocale): ServiceCatalogEntry | undefined {
  if (!isServiceSlug(slug)) {
    return undefined;
  }
  return getServicesCatalog(locale).find((entry) => entry.slug === slug);
}

/** Collapses intentional line breaks in catalog titles for metadata, breadcrumbs, and compact labels. */
export function serviceTitleSingleLine(title: string): string {
  return title
    .replace(/\r\n/g, "\n")
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .join(" ");
}

export function serviceDetailHref(slug: ServiceSlug): string {
  return `/services/${slug}`;
}
