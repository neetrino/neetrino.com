"use client";

import { HomeProjectCard } from "@/components/home/HomeProjectCard";
import { HOME_PROJECTS_GRID_IMAGE_SIZES } from "@/lib/home-projects.constants";
import type { PublicPortfolioCard } from "@/lib/portfolio/public-portfolio.dto";

type HomeProjectsGridProps = {
  items: readonly PublicPortfolioCard[];
};

export function HomeProjectsGrid({ items }: HomeProjectsGridProps) {
  if (items.length === 0) {
    return null;
  }

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
      {items.map((item, index) => (
        <article key={item.id}>
          <HomeProjectCard
            item={item}
            imageSizes={HOME_PROJECTS_GRID_IMAGE_SIZES}
            frameClassName="aspect-[4/3] rounded-2xl md:rounded-3xl"
            priority={index === 0}
            loading={index === 0 ? "eager" : "lazy"}
          />
        </article>
      ))}
    </div>
  );
}
