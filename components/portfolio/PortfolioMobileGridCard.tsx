"use client";

import { PortfolioCardMedia } from "@/components/portfolio/PortfolioCardMedia";
import { generateAltFromFileName } from "@/lib/portfolio/portfolio-alt";
import {
  PORTFOLIO_MOBILE_CARD_ARTICLE_CLASS,
  PORTFOLIO_MOBILE_CARD_MEDIA_FRAME_CLASS,
} from "@/lib/portfolio-mobile-card.constants";
import type { PublicPortfolioCard } from "@/lib/portfolio/public-portfolio.dto";

type PortfolioMobileGridCardProps = {
  item: PublicPortfolioCard;
  imageSizes: string;
  priority?: boolean;
  loading?: "eager" | "lazy";
};

export function PortfolioMobileGridCard({
  item,
  imageSizes,
  priority,
  loading,
}: PortfolioMobileGridCardProps) {
  return (
    <article className={PORTFOLIO_MOBILE_CARD_ARTICLE_CLASS}>
      <div className={PORTFOLIO_MOBILE_CARD_MEDIA_FRAME_CLASS}>
        <PortfolioCardMedia
          url={item.url}
          alt={generateAltFromFileName(item.fileName)}
          mediaType={item.mediaType}
          imageSizes={imageSizes}
          priority={priority}
          loading={loading}
        />
      </div>
    </article>
  );
}
