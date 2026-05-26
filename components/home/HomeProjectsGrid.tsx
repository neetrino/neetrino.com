"use client";

import { Reveal } from "@/components/motion/Reveal";
import { PortfolioMobileGridCard } from "@/components/portfolio/PortfolioMobileGridCard";
import { SCROLL_REVEAL_SLOW_STAGGER_MS } from "@/lib/motion/scroll-reveal.constants";
import { MOBILE_PORTFOLIO_CARD_IMAGE_SIZES } from "@/lib/portfolio/portfolio-image-sizes";
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
        <Reveal key={item.id} profile="slow" delayMs={index * SCROLL_REVEAL_SLOW_STAGGER_MS}>
          <PortfolioMobileGridCard
            item={item}
            imageSizes={MOBILE_PORTFOLIO_CARD_IMAGE_SIZES}
            loading="lazy"
          />
        </Reveal>
      ))}
    </div>
  );
}
