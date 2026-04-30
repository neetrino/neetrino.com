import { defineRouting } from "next-intl/routing";

export const locales = ["en", "ru", "hy"] as const;
export type AppLocale = (typeof locales)[number];

export const routing = defineRouting({
  locales: [...locales],
  defaultLocale: "en",
  /** User-facing URLs have no locale segment; locale from cookie / detection. */
  localePrefix: "never",
  /** Same pathname for all locales — hreflang via middleware is not applicable. */
  alternateLinks: false,
});
