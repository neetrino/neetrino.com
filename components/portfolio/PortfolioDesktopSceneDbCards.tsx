"use client";

import { PortfolioCardMedia } from "@/components/portfolio/PortfolioCardMedia";
import { PortfolioDesktopPagination } from "@/components/portfolio/PortfolioDesktopPagination";
import { generateAltFromFileName } from "@/lib/portfolio/portfolio-alt";
import type { PublicPortfolioCard } from "@/lib/portfolio/public-portfolio.dto";
import { PUBLIC_PORTFOLIO_DESKTOP_IMAGE_SIZES } from "@/lib/constants/public-portfolio-pagination.constants";
import {
  PORTFOLIO_DESKTOP_HERO_BANNER_RADIUS_CLASS,
  PORTFOLIO_FIRST_BANNER_FRAME_CLASS,
} from "@/lib/portfolio-desktop-first-banner.constants";
import { PORTFOLIO_DESKTOP_PAGINATION_TOP_MARGIN_CLASS } from "@/lib/portfolio-desktop-scene-dimensions.constants";
import { cn } from "@/lib/utils";

export type PortfolioDesktopScenePaginationProps = {
  readonly currentPage: number;
  readonly totalPages: number;
  readonly onPageChange: (page: number) => void;
};

type PortfolioDesktopSceneDbCardsProps = {
  readonly pageCards: readonly PublicPortfolioCard[];
  readonly pagination: PortfolioDesktopScenePaginationProps;
};

/**
 * DB-driven portfolio cards inside the desktop canvas: two columns, same frame styling as legacy banners.
 */
export function PortfolioDesktopSceneDbCards({
  pageCards,
  pagination,
}: PortfolioDesktopSceneDbCardsProps) {
  return (
    <div className="flex w-full shrink-0 flex-col gap-[53px]">
      <div className="grid w-full grid-cols-2 gap-x-[26px] gap-y-[53px]">
        {pageCards.map((item, index) => (
          <div
            key={item.id}
            className={cn(
              "relative shrink-0",
              PORTFOLIO_DESKTOP_HERO_BANNER_RADIUS_CLASS,
              PORTFOLIO_FIRST_BANNER_FRAME_CLASS,
            )}
          >
            <div
              className={cn(
                "pointer-events-none absolute inset-0 overflow-hidden",
                PORTFOLIO_DESKTOP_HERO_BANNER_RADIUS_CLASS,
              )}
            >
              <PortfolioCardMedia
                url={item.url}
                alt={generateAltFromFileName(item.fileName)}
                mediaType={item.mediaType}
                imageSizes={PUBLIC_PORTFOLIO_DESKTOP_IMAGE_SIZES}
                priority={pagination.currentPage === 1 && index === 0}
                loading={pagination.currentPage === 1 && index === 0 ? "eager" : "lazy"}
              />
            </div>
          </div>
        ))}
      </div>
      <PortfolioDesktopPagination
        className={cn("w-full shrink-0", PORTFOLIO_DESKTOP_PAGINATION_TOP_MARGIN_CLASS)}
        currentPage={pagination.currentPage}
        totalPages={pagination.totalPages}
        onPageChange={pagination.onPageChange}
      />
    </div>
  );
}
