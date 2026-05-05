/**
 * /services mobile (`<lg`): same card chrome as desktop (rounded-[38px], gradients, orbit art),
 * full-width flow — no fixed 369×463 canvas box.
 * `neetrino-layout-desktop` (≈744px+): two columns — drop centered max-width so tiles fill each track.
 */
export const SERVICES_MOBILE_CATALOG_CARD_OUTER_CLASS =
  "relative mx-auto flex w-full max-w-[540px] min-w-0 flex-col items-start gap-[30px] overflow-clip rounded-[38px] px-6 py-10 sm:px-8 sm:py-12 md:px-10 md:py-[60px] min-h-[26rem] sm:min-h-[28rem] md:min-h-[463px] neetrino-layout-desktop:mx-0 neetrino-layout-desktop:max-w-none" as const;

/** Catalog section grid: single column phone; two columns iPad mini hybrid (`neetrino-layout-desktop`). */
export const SERVICES_MOBILE_CATALOG_GRID_CLASS =
  "grid grid-cols-1 gap-6 pt-12 sm:gap-8 md:pt-14 neetrino-layout-desktop:grid-cols-2 neetrino-layout-desktop:gap-6" as const;
