import { buildPortfolioPublicUrl } from "@/lib/portfolio/build-portfolio-public-url";
import { getMediaTypeFromFileName } from "@/lib/portfolio/portfolio-media-type";
import { slotFromIndex } from "@/lib/portfolio/portfolio-slot";
import type { PublicPortfolioCard } from "@/lib/portfolio/public-portfolio.dto";

/**
 * CDN keys for legacy portfolio cards (same visual order as the former static mobile portfolio set).
 * Used only when DB has zero active portfolio items.
 */
const FALLBACK_PORTFOLIO_KEYS = [
  "figma-assets/0632ce01-e795-45ce-b8bb-6befc6530c3b.png",
  "figma-assets/f2b8d5db-8f8f-489a-9e7c-726a3a9afce4.png",
  "figma-assets/ab7b4f77-c1f2-4e0f-9858-8b69c15d849c.png",
  "figma-assets/b745fca3-a0b3-4ca9-84c4-3f2da77cb612.png",
  "figma-assets/064159a1-11b1-472b-b9c0-11e7485d1047.png",
  "figma-assets/3f6c5478-5abe-4ddf-ab42-958c6f1db66b.png",
  "figma-assets/fb7f778c-41d6-41cf-bdf0-4b505bc40da3.png",
  "figma-assets/ff1c5500-8264-4136-9fa0-5bf3c7bfc3ce.png",
] as const;

export function getFallbackPublicPortfolioCards(): PublicPortfolioCard[] {
  return FALLBACK_PORTFOLIO_KEYS.map((key, index) => {
    const fileName = key.split("/").pop() ?? key;
    return {
      id: `fallback-static-${index}`,
      key,
      url: buildPortfolioPublicUrl(key),
      fileName,
      mediaType: getMediaTypeFromFileName(fileName),
      slot: slotFromIndex(index),
    };
  });
}
