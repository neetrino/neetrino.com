import "server-only";
import { getFallbackPublicPortfolioCards } from "@/lib/portfolio/fallback-public-portfolio-items";
import type { PublicPortfolioCard } from "@/lib/portfolio/public-portfolio.dto";
import { getActivePortfolioItemsSorted } from "@/lib/server/portfolio/queries";

/**
 * Active portfolio cards for `/portfolio`, or static fallback when DB is empty or unreachable.
 */
export async function loadPublicPortfolioCards(): Promise<PublicPortfolioCard[]> {
  try {
    const active = await getActivePortfolioItemsSorted();
    if (active.length === 0) {
      return getFallbackPublicPortfolioCards();
    }
    return active;
  } catch {
    return getFallbackPublicPortfolioCards();
  }
}
