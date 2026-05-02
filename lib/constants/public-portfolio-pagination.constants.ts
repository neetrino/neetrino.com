/** Active portfolio cards per page on `lg+` (desktop grid). */
export const PUBLIC_PORTFOLIO_DESKTOP_PAGE_SIZE = 12 as const;

/** Active portfolio cards per page below `lg` (mobile grid). */
export const PUBLIC_PORTFOLIO_MOBILE_PAGE_SIZE = 10 as const;

/**
 * `next/image` `sizes` for desktop portfolio grid (`lg+`).
 * Keep stable to reduce hydration mismatch risk when matching mobile patterns.
 */
export const PUBLIC_PORTFOLIO_DESKTOP_IMAGE_SIZES =
  "(min-width: 1536px) 22vw, (min-width: 1024px) 30vw, 50vw" as const;
