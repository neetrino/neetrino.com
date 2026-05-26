"use client";

import { useRef } from "react";
import { HomeProjectCard } from "@/components/home/HomeProjectCard";
import { usePauseAnimationWhenOffScreen } from "@/lib/hooks/use-pause-animation-when-off-screen";
import { HOME_PROJECTS_MARQUEE_IMAGE_SIZES } from "@/lib/home-projects.constants";
import {
  HOME_PROJECTS_MARQUEE_CLIP_HEIGHT_CLASS,
  HOME_PROJECTS_MARQUEE_FIRST_ROW_TOP_CLASS,
  HOME_PROJECTS_MARQUEE_SECOND_ROW_TOP_CLASS,
} from "@/lib/home-projects-marquee-layout.constants";
import { splitPortfolioItemsForHomeMarquee } from "@/lib/home-projects-marquee-rows";
import { neetrinoHomeProjectsMarqueeDoubledStrip } from "@/lib/neetrino-home-projects-marquee.constants";
import {
  PORTFOLIO_DESKTOP_HERO_BANNER_RADIUS_CLASS,
  PORTFOLIO_FIRST_BANNER_FRAME_CLASS,
} from "@/lib/portfolio-desktop-first-banner.constants";
import type { PublicPortfolioCard } from "@/lib/portfolio/public-portfolio.dto";
import { cn } from "@/lib/utils";

type MarqueeRowProps = {
  direction: "left" | "right";
  items: readonly PublicPortfolioCard[];
};

function MarqueeRow({ direction, items }: MarqueeRowProps) {
  if (items.length === 0) {
    return null;
  }

  const looped = neetrinoHomeProjectsMarqueeDoubledStrip(items);

  return (
    <div className={cn("home-projects-marquee-clip", HOME_PROJECTS_MARQUEE_CLIP_HEIGHT_CLASS)}>
      <div
        className={
          direction === "right"
            ? "home-projects-marquee-row-inner home-projects-marquee-row-inner--to-right will-change-transform"
            : "home-projects-marquee-row-inner home-projects-marquee-row-inner--to-left will-change-transform"
        }
      >
        {looped.map((item, index) => (
          <article
            key={`${item.id}-${String(index)}`}
            className={cn(
              "relative shrink-0 overflow-hidden",
              PORTFOLIO_FIRST_BANNER_FRAME_CLASS,
              PORTFOLIO_DESKTOP_HERO_BANNER_RADIUS_CLASS,
            )}
          >
            <HomeProjectCard
              item={item}
              imageSizes={HOME_PROJECTS_MARQUEE_IMAGE_SIZES}
              frameClassName="size-full"
              loading="lazy"
            />
          </article>
        ))}
      </div>
    </div>
  );
}

type NeetrinoHomeProjectsMarqueeProps = {
  items: readonly PublicPortfolioCard[];
};

function MarqueeRowContainer({
  className,
  direction,
  items,
}: MarqueeRowProps & { className: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  usePauseAnimationWhenOffScreen(containerRef, ".home-projects-marquee-row-inner");

  return (
    <div ref={containerRef} className={className}>
      <MarqueeRow direction={direction} items={items} />
    </div>
  );
}

export function NeetrinoHomeProjectsMarquee({ items }: NeetrinoHomeProjectsMarqueeProps) {
  const { rowA, rowB } = splitPortfolioItemsForHomeMarquee(items);

  return (
    <>
      <MarqueeRowContainer
        className={cn(
          "absolute left-0 z-[11] w-[1440px]",
          HOME_PROJECTS_MARQUEE_FIRST_ROW_TOP_CLASS,
        )}
        direction="right"
        items={rowA}
      />
      <MarqueeRowContainer
        className={cn(
          "absolute left-0 z-[12] w-[1440px]",
          HOME_PROJECTS_MARQUEE_SECOND_ROW_TOP_CLASS,
        )}
        direction="left"
        items={rowB}
      />
    </>
  );
}
