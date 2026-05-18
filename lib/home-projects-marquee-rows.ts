import type { PublicPortfolioCard } from "@/lib/portfolio/public-portfolio.dto";

export type HomeProjectsMarqueeRows = {
  readonly rowA: readonly PublicPortfolioCard[];
  readonly rowB: readonly PublicPortfolioCard[];
};

/**
 * Splits active portfolio cards into two marquee rows (first half / second half).
 * A single card is duplicated on row B so both strips can animate.
 */
export function splitPortfolioItemsForHomeMarquee(
  items: readonly PublicPortfolioCard[],
): HomeProjectsMarqueeRows {
  if (items.length === 0) {
    return { rowA: [], rowB: [] };
  }
  if (items.length === 1) {
    return { rowA: items, rowB: items };
  }
  const splitAt = Math.ceil(items.length / 2);
  return {
    rowA: items.slice(0, splitAt),
    rowB: items.slice(splitAt),
  };
}
