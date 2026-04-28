/** Footer “Send” link — default Figma width (`en`, short labels). */
export const footerSendCtaWidthDefaultClassName = "w-[120px]" as const;
/**
 * Wider control for longer `footer.send` (e.g. hy «Ուղարկել», ru «Отправить»).
 * Icon `left` = width − 42px asset − ~7px right inset.
 */
export const footerSendCtaWidthWideClassName = "w-[158px]" as const;
/** Arrow asset `left` for `footerSendCtaWidthDefaultClassName`. */
export const footerSendCtaIconLeftDefaultClassName = "left-[71px]" as const;
/** Arrow asset `left` when using `footerSendCtaWidthWideClassName`. */
export const footerSendCtaIconLeftWideClassName = "left-[109px]" as const;

/** Russian `footer.send` («Отправить») — slightly wider than `hy`. */
export const footerSendCtaWidthRuClassName = "w-[176px]" as const;
/** Arrow `left` for `footerSendCtaWidthRuClassName` (42px icon + ~7px right inset). */
export const footerSendCtaIconLeftRuClassName = "left-[127px]" as const;

/** Locales that use `footerSendCtaWidthWideClassName` / `footerSendCtaIconLeftWideClassName`. */
export const FOOTER_SEND_CTA_WIDE_LOCALES = ["hy", "ru"] as const;

export function isFooterSendCtaWideLocale(locale: string): boolean {
  return (FOOTER_SEND_CTA_WIDE_LOCALES as readonly string[]).includes(locale);
}
