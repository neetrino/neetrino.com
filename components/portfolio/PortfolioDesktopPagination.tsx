"use client";

import Image from "next/image";
import { useMemo } from "react";
import { PORTFOLIO_DESKTOP_PAGINATION_GAP_CLASS } from "@/lib/portfolio-desktop-pagination.constants";
import { assetUrl } from "@/lib/assets";
import { cn } from "@/lib/utils";

const PAGINATION_ARROW_LEFT_SRC = assetUrl("figma-assets/36291cec-d698-4638-8a70-b34393be43d0.svg");
const PAGINATION_ARROW_RIGHT_SRC = assetUrl(
  "figma-assets/7f403ffa-0378-4452-a23b-9854a6968aa2.svg",
);

const PAGINATION_ARROW_PX = 18;

export type PortfolioPublicPaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
};

/**
 * Figma-styled portfolio pagination — fully controlled (no internal page state).
 */
export function PortfolioDesktopPagination({
  currentPage,
  totalPages,
  onPageChange,
  className,
}: PortfolioPublicPaginationProps) {
  const pages = useMemo(
    () => Array.from({ length: totalPages }, (_, index) => index + 1),
    [totalPages],
  );

  if (totalPages <= 1) {
    return null;
  }

  const canPrev = currentPage > 1;
  const canNext = currentPage < totalPages;

  return (
    <nav
      aria-label="Portfolio projects pagination"
      className={cn(
        "flex items-start justify-center rounded-[8px]",
        PORTFOLIO_DESKTOP_PAGINATION_GAP_CLASS,
        className,
      )}
      data-name="Pagination Small/Default"
      data-node-id="541:2334"
    >
      <button
        type="button"
        disabled={!canPrev}
        onClick={() => {
          onPageChange(currentPage - 1);
        }}
        aria-label="Previous page"
        className={cn(
          "flex h-[32px] min-w-[32px] shrink-0 items-center justify-center rounded-[6px] border-0 bg-white px-[11px] disabled:cursor-default",
          canPrev ? "cursor-pointer" : "opacity-50",
        )}
        data-node-id="541:2335"
      >
        <Image
          src={PAGINATION_ARROW_LEFT_SRC}
          alt=""
          width={PAGINATION_ARROW_PX}
          height={PAGINATION_ARROW_PX}
          className="block size-[18px] max-w-none"
        />
      </button>
      {pages.map((pageNumber) => {
        const isActive = pageNumber === currentPage;
        return (
          <button
            key={pageNumber}
            type="button"
            onClick={() => {
              onPageChange(pageNumber);
            }}
            aria-current={isActive ? "page" : undefined}
            aria-label={`Page ${pageNumber}`}
            className={cn(
              "relative flex h-[32px] min-w-[32px] shrink-0 cursor-pointer flex-col items-center justify-center rounded-[6px] border-0 px-[11px] text-[14px] not-italic leading-[normal]",
              isActive ? "text-white" : "bg-white text-[#4e5d78]",
            )}
            data-node-id={isActive ? "541:2338" : "541:2336"}
          >
            {isActive ? (
              <>
                <span
                  className="absolute left-1/2 top-1/2 size-[40px] -translate-x-1/2 -translate-y-1/2 rounded-[20px] bg-[#473dff] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
                  aria-hidden
                />
                <span className="relative z-10 font-sans">{pageNumber}</span>
              </>
            ) : (
              <span className="font-sans">{pageNumber}</span>
            )}
          </button>
        );
      })}
      <button
        type="button"
        disabled={!canNext}
        onClick={() => {
          onPageChange(currentPage + 1);
        }}
        aria-label="Next page"
        className={cn(
          "flex h-[32px] min-w-[32px] shrink-0 items-center justify-center overflow-clip rounded-[6px] border-0 bg-white px-[11px] disabled:cursor-default",
          canNext ? "cursor-pointer" : "opacity-50",
        )}
        data-node-id="541:2341"
      >
        <Image
          src={PAGINATION_ARROW_RIGHT_SRC}
          alt=""
          width={PAGINATION_ARROW_PX}
          height={PAGINATION_ARROW_PX}
          className="block size-[18px] max-w-none"
        />
      </button>
    </nav>
  );
}
