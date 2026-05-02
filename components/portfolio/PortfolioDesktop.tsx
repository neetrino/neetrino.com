"use client";

import { useMemo, useState } from "react";
import { CanvasScaler } from "@/components/layout/CanvasScaler";
import { DesktopSceneMountGate } from "@/components/layout/DesktopSceneMountGate";
import { PortfolioDesktopScene } from "@/components/portfolio/PortfolioDesktopScene";
import { getPortfolioDesktopSceneHeightPx } from "@/lib/portfolio-desktop-scene-dimensions.constants";
import { clampPage, paginateItems, totalPagesForCount } from "@/lib/portfolio/paginate-portfolio";
import type { PublicPortfolioCard } from "@/lib/portfolio/public-portfolio.dto";
import { PUBLIC_PORTFOLIO_DESKTOP_PAGE_SIZE } from "@/lib/constants/public-portfolio-pagination.constants";

type PortfolioDesktopProps = {
  items: readonly PublicPortfolioCard[];
};

export function PortfolioDesktop({ items }: PortfolioDesktopProps) {
  const pageSize = PUBLIC_PORTFOLIO_DESKTOP_PAGE_SIZE;
  const total = items.length;
  const totalPages = totalPagesForCount(total, pageSize);
  const [currentPage, setCurrentPage] = useState(1);
  const effectivePage = useMemo(
    () => clampPage(currentPage, total, pageSize),
    [currentPage, total, pageSize],
  );
  const pageItems = useMemo(
    () => paginateItems(items, effectivePage, pageSize),
    [items, effectivePage, pageSize],
  );

  const sceneHeightPx = useMemo(
    () => getPortfolioDesktopSceneHeightPx(pageItems.length, totalPages),
    [pageItems.length, totalPages],
  );

  return (
    <div className="hidden lg:block">
      <CanvasScaler canvasWidth={1440} canvasHeight={sceneHeightPx}>
        <DesktopSceneMountGate canvasWidth={1440} canvasHeight={sceneHeightPx}>
          <PortfolioDesktopScene
            sceneHeightPx={sceneHeightPx}
            pageCards={pageItems}
            pagination={{
              currentPage: effectivePage,
              totalPages,
              onPageChange: setCurrentPage,
            }}
          />
        </DesktopSceneMountGate>
      </CanvasScaler>
    </div>
  );
}
