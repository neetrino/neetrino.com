/** Shared corner radius for desktop portfolio hero banner cards (two top cards + smartphone row). */
export const PORTFOLIO_DESKTOP_HERO_BANNER_RADIUS_CLASS = "rounded-[15px]" as const;

/** First desktop portfolio hero banner (`img2661`) — frame matches Figma export. */
export const PORTFOLIO_FIRST_BANNER_WIDTH_PX = 631;
export const PORTFOLIO_FIRST_BANNER_HEIGHT_PX = 364;

/**
 * Tailwind frame for the banner card. Keep in sync with
 * `PORTFOLIO_FIRST_BANNER_WIDTH_PX` / `PORTFOLIO_FIRST_BANNER_HEIGHT_PX` and `next/image` props.
 */
export const PORTFOLIO_FIRST_BANNER_FRAME_CLASS =
  "w-[631px] h-[364px] [aspect-ratio:605/349]" as const;

/** Figma white circle — grid cell overlay (cards 1–2). */
export const PORTFOLIO_DESKTOP_HERO_CARD_DECOR_BUTTON_GRID_WRAPPER_CLASS =
  "col-1 flex size-[78.276px] items-center justify-center ml-[535.86px] mt-[15.86px] relative row-1" as const;

/** Figma white circle — same offset inside a `relative` 631×364 frame (card 3). */
export const PORTFOLIO_DESKTOP_HERO_CARD_DECOR_BUTTON_ABSOLUTE_WRAPPER_CLASS =
  "absolute left-[535.86px] top-[15.86px] z-20 flex size-[78.276px] items-center justify-center" as const;

export const PORTFOLIO_DESKTOP_HERO_CARD_DECOR_BUTTON_ROTATE_CLASS =
  "flex-none rotate-[-36.26deg]" as const;

export const PORTFOLIO_DESKTOP_HERO_CARD_DECOR_BUTTON_INNER_CLASS =
  "bg-white content-stretch flex gap-[4px] items-center justify-center overflow-clip px-[24px] py-[16px] relative rounded-[40px] size-[56px]" as const;
