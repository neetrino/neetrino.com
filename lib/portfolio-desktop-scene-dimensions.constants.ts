import { PORTFOLIO_FIRST_BANNER_HEIGHT_PX } from "@/lib/portfolio-desktop-first-banner.constants";

/**
 * Desktop portfolio scene (`PortfolioDesktopScene`) — height is **dynamic** per page:
 * `getPortfolioDesktopSceneHeightPx(pageCardCount, totalPages)`.
 *
 * Keep `PORTFOLIO_DESKTOP_SCENE_MAX_HEIGHT_PX` in sync with
 * `lib/canvas-route-placeholders.ts` (`PORTFOLIO_DESKTOP_CANVAS_MIN_H_CLASS`).
 */

/** Y offset of the portfolio column (`top-[374px]`). */
export const PORTFOLIO_DESKTOP_CONTENT_STACK_TOP_PX = 374 as const;

export const PORTFOLIO_DESKTOP_GRID_COLUMNS = 2 as const;

/** Vertical gap between grid rows (`gap-y-[53px]`). */
export const PORTFOLIO_DESKTOP_ROW_GAP_PX = 53 as const;

/** Flex gap between grid block and pagination (`gap-[53px]` in `PortfolioDesktopSceneDbCards`). */
export const PORTFOLIO_DESKTOP_GRID_TO_PAGINATION_GAP_PX = 53 as const;

/** Pagination nav `mt-[17px]` (`PORTFOLIO_DESKTOP_PAGINATION_TOP_MARGIN_CLASS`). */
export const PORTFOLIO_DESKTOP_PAGINATION_TOP_MARGIN_PX = 17 as const;

/** Pagination control row height (`h-[32px]` buttons). */
export const PORTFOLIO_DESKTOP_PAGINATION_ROW_PX = 32 as const;

/** Scene column `pb-[24px]` (`PORTFOLIO_DESKTOP_PAGINATION_BOTTOM_PADDING_CLASS`). */
export const PORTFOLIO_DESKTOP_BOTTOM_PADDING_PX = 24 as const;

/** Extra space above pagination (below last banner row). */
export const PORTFOLIO_DESKTOP_PAGINATION_TOP_MARGIN_CLASS = "mt-[17px]" as const;

/** Space below pagination before canvas bottom (tighter to site footer). */
export const PORTFOLIO_DESKTOP_PAGINATION_BOTTOM_PADDING_CLASS = "pb-[24px]" as const;

/**
 * Design-space scene height for the current desktop portfolio page.
 *
 * @param cardCount — number of cards on the **current** page (1–12 with default page size).
 * @param totalPages — when `> 1`, reserves space for pagination below the grid.
 */
export function getPortfolioDesktopSceneHeightPx(cardCount: number, totalPages: number): number {
  const safeCount = Math.max(0, cardCount);
  const rowCount = Math.ceil(safeCount / PORTFOLIO_DESKTOP_GRID_COLUMNS);
  const gridHeightPx =
    rowCount * PORTFOLIO_FIRST_BANNER_HEIGHT_PX +
    Math.max(0, rowCount - 1) * PORTFOLIO_DESKTOP_ROW_GAP_PX;

  const showPagination = totalPages > 1;
  const paginationBlockPx = showPagination
    ? PORTFOLIO_DESKTOP_GRID_TO_PAGINATION_GAP_PX +
      PORTFOLIO_DESKTOP_PAGINATION_TOP_MARGIN_PX +
      PORTFOLIO_DESKTOP_PAGINATION_ROW_PX
    : 0;

  return (
    PORTFOLIO_DESKTOP_CONTENT_STACK_TOP_PX +
    gridHeightPx +
    paginationBlockPx +
    PORTFOLIO_DESKTOP_BOTTOM_PADDING_PX
  );
}

/** Worst-case design height: 12 cards, 6 rows, pagination visible (e.g. 13+ items). */
export const PORTFOLIO_DESKTOP_SCENE_MAX_HEIGHT_PX = getPortfolioDesktopSceneHeightPx(12, 2);
