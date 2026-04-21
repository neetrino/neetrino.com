import { locales, routing } from "@/i18n/routing";
import type { AppLocale } from "@/lib/i18n/locales";

const SITE_URL = "https://neetrino.com";

function resolvePath(pathname: string): string {
  if (pathname === "/") {
    return "";
  }
  return pathname.startsWith("/") ? pathname : `/${pathname}`;
}

export function getLocaleAlternates(locale: AppLocale, pathname: string) {
  const path = resolvePath(pathname);
  const perLocale = Object.fromEntries(
    locales.map((localeCode) => [localeCode, `${SITE_URL}/${localeCode}${path}`]),
  ) as Record<AppLocale, string>;

  return {
    canonical: perLocale[locale],
    languages: {
      ...perLocale,
      "x-default": `${SITE_URL}/${routing.defaultLocale}${path}`,
    },
  };
}
