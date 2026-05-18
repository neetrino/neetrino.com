"use client";

import { PortfolioMobileGridCard } from "@/components/portfolio/PortfolioMobileGridCard";
import { MOBILE_PORTFOLIO_CARD_IMAGE_SIZES } from "@/components/portfolio/portfolio-data";
import type { PublicPortfolioCard } from "@/lib/portfolio/public-portfolio.dto";

type HomeProjectsGridProps = {
  items: readonly PublicPortfolioCard[];
};

export function HomeProjectsGrid({ items }: HomeProjectsGridProps) {
  if (items.length === 0) {
    return null;
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2">
      {items.map((item, index) => (
        <PortfolioMobileGridCard
          key={item.id}
          item={item}
          imageSizes={MOBILE_PORTFOLIO_CARD_IMAGE_SIZES}
          priority={index === 0}
          loading={index === 0 ? "eager" : "lazy"}
        />
      ))}
    </div>
  );
}
