import { routing } from "@/i18n/routing";
import type { AppLocale } from "@/lib/i18n/locales";

const EXTERNAL_LINK_PREFIX = /^(https?:\/\/|mailto:|tel:|viber:)/i;

export function stripLocalePrefix(href: string): string {
  if (!href.startsWith("/")) {
    return href;
  }

  const knownPrefix = routing.locales.find(
    (knownLocale) => href === `/${knownLocale}` || href.startsWith(`/${knownLocale}/`),
  );

  if (!knownPrefix) {
    return href;
  }

  const withoutPrefix = href.slice(knownPrefix.length + 1);
  return withoutPrefix.length > 0 ? `/${withoutPrefix}` : "/";
}

/** Path for links when `localePrefix` is `never` (no `/{locale}` in URLs). */
export function localizeHref(href: string, locale: AppLocale): string {
  void locale;
  if (!href.startsWith("/") || EXTERNAL_LINK_PREFIX.test(href)) {
    return href;
  }

  const normalized = stripLocalePrefix(href);
  return normalized.length > 0 ? normalized : "/";
}
