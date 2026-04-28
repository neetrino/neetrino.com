/**
 * Figma node `525:1728` — CAT logo badge in the top-left of the second desktop hero card.
 * Intrinsic asset is 2400×1280; badge box scales the mark for the 631×364 frame.
 * Wrapper: 15px inset from the card’s top-left (right and down).
 */
export const PORTFOLIO_SECOND_BANNER_CAT_LOGO_CORNER_WRAPPER_CLASS =
  "pointer-events-none absolute left-[25px] top-[25px] z-10" as const;

/** Badge width — keep in sync with `PORTFOLIO_SECOND_BANNER_CAT_LOGO_BOX_CLASS` (`w-[…]`). */
export const PORTFOLIO_SECOND_BANNER_CAT_LOGO_BOX_WIDTH_PX = 130;

export const PORTFOLIO_SECOND_BANNER_CAT_LOGO_BOX_CLASS =
  "relative h-[69px] w-[130px] shrink-0" as const;
