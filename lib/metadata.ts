import type { AppLocale } from "@/lib/i18n/locales";

const SITE_URL = "https://neetrino.com";

function resolvePath(pathname: string): string {
  if (pathname === "/") {
    return "";
  }
  return pathname.startsWith("/") ? pathname : `/${pathname}`;
}

/**
 * Canonical URL without a locale path segment (`localePrefix: "never"`).
 * Locale-specific hreflang alternates are omitted because the public URL is shared.
 */
export function getLocaleAlternates(_locale: AppLocale, pathname: string) {
  const path = resolvePath(pathname);
  return {
    canonical: `${SITE_URL}${path}`,
  };
}
