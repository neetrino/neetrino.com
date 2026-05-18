import type { PublicPortfolioCard } from "@/lib/portfolio/public-portfolio.dto";

/** How many times the base sequence is chained in one half of the track (then duplicated for -50% loop). */
export const NEETRINO_HOME_PROJECTS_MARQUEE_HALF_SEGMENT_REPEAT = 4;

/**
 * Builds a seamless strip: `[half][half]` where each half is the base row repeated
 * `NEETRINO_HOME_PROJECTS_MARQUEE_HALF_SEGMENT_REPEAT` times (pairs with CSS `translateX(±50%)`).
 */
export function neetrinoHomeProjectsMarqueeDoubledStrip(
  base: readonly PublicPortfolioCard[],
): PublicPortfolioCard[] {
  const half: PublicPortfolioCard[] = [];
  for (let i = 0; i < NEETRINO_HOME_PROJECTS_MARQUEE_HALF_SEGMENT_REPEAT; i += 1) {
    half.push(...base);
  }
  return [...half, ...half];
}
