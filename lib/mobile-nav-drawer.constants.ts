/**
 * Mobile nav overlay — inset rounded card (ref. menu with rounded corners).
 */
export const MOBILE_NAV_DRAWER_BACKDROP_CLASS = "absolute inset-0 z-[30] bg-black/40" as const;

/** Clears fixed header; outer shell is `pointer-events-none` so taps reach the backdrop outside the card. */
export const MOBILE_NAV_DRAWER_OUTER_SHELL_CLASS =
  "relative z-[40] flex h-full min-h-0 flex-col items-stretch px-3 pb-8 pt-[4.5rem] pointer-events-none" as const;

export const MOBILE_NAV_DRAWER_CARD_CLASS =
  "pointer-events-auto mx-auto flex w-full max-w-lg min-h-0 max-h-[min(85dvh,calc(100dvh-5.5rem))] flex-col overflow-hidden rounded-[28px] border border-white/12 bg-[rgba(40,43,103,0.52)] shadow-[0_24px_60px_rgba(0,0,0,0.42)]" as const;

export const MOBILE_NAV_DRAWER_SCROLL_REGION_CLASS =
  "min-h-0 flex-1 overflow-y-auto overscroll-contain px-5 pt-5" as const;

export const MOBILE_NAV_DRAWER_FOOTER_CLASS =
  "shrink-0 border-t border-white/10 px-5 pb-5 pt-5" as const;
