import type { AppLocale } from "@/lib/i18n/locales";

/**
 * Page hero / H1 Megatrox stack: matches portfolio Figma `166:1213` for English (`font-megatrox-figma`
 * + `uppercase`); other locales use `--font-megatrox` (hy → Noto stack) without forced uppercase.
 */
export function pageTitleMegatroxFontClass(locale: AppLocale): string {
  return locale === "en"
    ? "font-megatrox-figma uppercase"
    : "font-[family-name:var(--font-megatrox)]";
}
