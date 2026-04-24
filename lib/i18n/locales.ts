import { locales } from "@/i18n/routing";

export type AppLocale = (typeof locales)[number];

export const APP_LOCALE_SET = new Set<AppLocale>(locales);

export const LOCALE_LABELS: Record<AppLocale, string> = {
  en: "English",
  ru: "Русский",
  hy: "Հայերեն",
};

export const LOCALE_SHORT_LABELS: Record<AppLocale, string> = {
  en: "ENG",
  ru: "РУС",
  hy: "ՀԱՅ",
};

export function isAppLocale(value: string): value is AppLocale {
  return APP_LOCALE_SET.has(value as AppLocale);
}
