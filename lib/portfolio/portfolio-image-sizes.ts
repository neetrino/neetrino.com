/**
 * `next/image` `sizes` for portfolio cards in the `lg:hidden` grid and home projects grid.
 * Keep this exact string stable — changing it can alter generated `srcSet` and cause hydration mismatches.
 */
export const MOBILE_PORTFOLIO_CARD_IMAGE_SIZES =
  "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 0vw" as const;
