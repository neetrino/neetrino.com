/**
 * `SiteFooterMobile` renders below `lg` (1024). From `md` (768px) up, viewports behave like iPad mini portrait:
 * drop the phone-only horizontal centering so footer copy aligns to the left gutter (matches wider mobile / tablet).
 * Bottom padding lives on `SITE_FOOTER_MOBILE_BOTTOM_BLEED_CLASS` so icons + copyright can span full width.
 */
export const SITE_FOOTER_MOBILE_SHELL_CLASS =
  "relative z-10 mx-auto w-full min-w-0 max-w-[min(100%,22.75rem)] px-4 pt-[2.875rem] sm:px-5 md:mx-0 md:max-w-none md:px-8" as const;

/** iPad mini (`md`): Company + Services in two columns; phones stay stacked. */
export const SITE_FOOTER_MOBILE_COMPANY_SERVICES_ROW_CLASS =
  "grid grid-cols-1 gap-8 md:grid-cols-2 md:items-start md:gap-x-10 md:gap-y-0" as const;

/** Shared grid cell — Company left / Services right matches DOM order on all breakpoints. */
export const SITE_FOOTER_MOBILE_COMPANY_SERVICES_COLUMN_CLASS = "min-w-0" as const;

/** Design px: services column shift left on `md` (must match Tailwind arbitrary in `SERVICES_COLUMN_CLASS`). */
export const SITE_FOOTER_MOBILE_SERVICES_NUDGE_LEFT_DESIGN_PX = 100 as const;

/** Services column — nudge left on iPad (`md`); phones unchanged. */
export const SITE_FOOTER_MOBILE_SERVICES_COLUMN_CLASS = "min-w-0 md:-translate-x-[200px]" as const;

/**
 * Icons + divider + copyright — **outside** the narrow nav column so `justify-center` / `text-center`
 * align to the viewport (fixes iPad where the column was left-pinned).
 */
export const SITE_FOOTER_MOBILE_BOTTOM_BLEED_CLASS =
  "relative z-10 flex w-full min-w-0 flex-col items-center px-4 pb-10 sm:px-5 md:px-8" as const;

/** Social icon row — full row width so icons sit in the horizontal middle of the footer. */
export const SITE_FOOTER_MOBILE_SOCIAL_ROW_CLASS =
  "mt-8 flex w-full min-w-0 flex-wrap items-center justify-center gap-4" as const;

/** Copyright strip — centered under the icon row. */
export const SITE_FOOTER_MOBILE_COPYRIGHT_CLASS =
  "text-center text-xs font-normal leading-4 text-[#dcd5d5]" as const;

/** Full-bleed divider above copyright (still inside bottom bleed). */
export const SITE_FOOTER_MOBILE_COPYRIGHT_RULE_CLASS =
  "mt-6 w-full min-w-0 border-t border-white/10 pt-6" as const;
