import type { PortfolioCardMediaType } from "@/lib/portfolio/portfolio-media-type";

/** Serializable card for public portfolio (DB or static fallback). */
export type PublicPortfolioCard = {
  readonly id: string;
  readonly key: string;
  readonly url: string;
  readonly fileName: string;
  readonly mediaType: PortfolioCardMediaType;
  readonly slot: string;
};
