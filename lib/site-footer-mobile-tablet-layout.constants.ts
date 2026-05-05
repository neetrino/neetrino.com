/**
 * `SiteFooterMobile` renders below `lg` (1024).
 * - **Phones (`max-md`):** single narrow column — nav, social row, copyright in one stack (matches pre–May 5 mobile).
 * - **`md`+ (iPad mini / Air / Pro portrait):** full-width nav shell, two-column company/services, services nudge, bottom bleed for icons + copyright.
 */

/** Outer stack — phones: centered narrow column + bottom padding; tablets: full-width flex column (no max-width). */
export const SITE_FOOTER_MOBILE_OUTER_STACK_CLASS =
  "relative z-10 max-md:mx-auto max-md:max-w-[min(100%,22.75rem)] max-md:px-4 max-md:pb-10 max-md:pt-[2.875rem] max-md:sm:px-5 md:mx-0 md:flex md:w-full md:min-w-0 md:max-w-none md:flex-col md:px-0 md:pb-0 md:pt-0" as const;

/** Wraps `<nav>` — `contents` on phones; tablets: horizontal padding + top padding for the nav block. */
export const SITE_FOOTER_MOBILE_NAV_SHELL_CLASS =
  "max-md:contents md:relative md:z-10 md:mx-0 md:w-full md:min-w-0 md:max-w-none md:px-8 md:pt-[2.875rem]" as const;

/** Tablets: two columns; phones: `contents` so company + services stack as direct flex children of `<nav>`. */
export const SITE_FOOTER_MOBILE_COMPANY_SERVICES_ROW_CLASS =
  "max-md:contents md:grid md:grid-cols-2 md:items-start md:gap-x-10 md:gap-y-0" as const;

/** Shared grid cell — Company left / Services right matches DOM order on all breakpoints. */
export const SITE_FOOTER_MOBILE_COMPANY_SERVICES_COLUMN_CLASS = "min-w-0" as const;

/** Design px: services column shift left on `md` (must match Tailwind arbitrary in `SERVICES_COLUMN_CLASS`). */
export const SITE_FOOTER_MOBILE_SERVICES_NUDGE_LEFT_DESIGN_PX = 100 as const;

/** Services column — nudge left on iPad (`md`); phones unchanged. */
export const SITE_FOOTER_MOBILE_SERVICES_COLUMN_CLASS = "min-w-0 md:-translate-x-[200px]" as const;

/**
 * Social + copyright — tablets: full-bleed flex column + horizontal padding; phones: block flow, no outer px (stack handles gutters).
 */
export const SITE_FOOTER_MOBILE_BOTTOM_BLEED_CLASS =
  "relative z-10 w-full min-w-0 flex flex-col items-center px-4 pb-10 sm:px-5 md:px-8 max-md:block max-md:items-stretch max-md:px-0 max-md:pb-0" as const;

/** Social icon row — phones: extra `px-4` per legacy mobile handoff; tablets: full row inside bleed. */
export const SITE_FOOTER_MOBILE_SOCIAL_ROW_CLASS =
  "mt-8 flex w-full min-w-0 flex-wrap items-center justify-center gap-4 max-md:px-4 md:px-0" as const;

/** Copyright strip — centered under the icon row. */
export const SITE_FOOTER_MOBILE_COPYRIGHT_CLASS =
  "text-center text-xs font-normal leading-4 text-[#dcd5d5]" as const;

/** Full-bleed divider above copyright (still inside bottom bleed). */
export const SITE_FOOTER_MOBILE_COPYRIGHT_RULE_CLASS =
  "mt-6 w-full min-w-0 border-t border-white/10 pt-6" as const;
