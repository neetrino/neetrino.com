"use client";

import { useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import { PortfolioDesktopPagination } from "@/components/portfolio/PortfolioDesktopPagination";
import { PortfolioMobileGridCard } from "@/components/portfolio/PortfolioMobileGridCard";
import { MOBILE_PORTFOLIO_CARD_IMAGE_SIZES } from "@/lib/portfolio/portfolio-image-sizes";
import { clampPage, paginateItems, totalPagesForCount } from "@/lib/portfolio/paginate-portfolio";
import type { PublicPortfolioCard } from "@/lib/portfolio/public-portfolio.dto";
import { PUBLIC_PORTFOLIO_MOBILE_PAGE_SIZE } from "@/lib/constants/public-portfolio-pagination.constants";
import { pageTitleMegatroxFontClass } from "@/lib/page-title-megatrox-font.constants";
import { PORTFOLIO_DESKTOP_PAGINATION_TOP_MARGIN_CLASS } from "@/lib/portfolio-desktop-scene-dimensions.constants";
import { cn } from "@/lib/utils";
import type { AppLocale } from "@/lib/i18n/locales";
import { useLocale } from "next-intl";

type PortfolioMobileProps = {
  items: readonly PublicPortfolioCard[];
};

export function PortfolioMobile({ items }: PortfolioMobileProps) {
  const t = useTranslations();
  const locale = useLocale() as AppLocale;
  const pageSize = PUBLIC_PORTFOLIO_MOBILE_PAGE_SIZE;
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

  return (
    <div className="relative isolate w-full min-w-0 overflow-x-hidden bg-transparent lg:hidden">
      <main className="section-container pt-24 pb-14">
        <section className="py-10">
          <h1
            className={cn(
              "text-4xl font-normal leading-tight text-white",
              pageTitleMegatroxFontClass(locale),
            )}
          >
            {t("portfolioPage.metaTitle")}
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/75">
            {t("portfolioPage.description")}
          </p>
        </section>

        <section className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2">
          {pageItems.map((item, index) => (
            <PortfolioMobileGridCard
              key={item.id}
              item={item}
              imageSizes={MOBILE_PORTFOLIO_CARD_IMAGE_SIZES}
              priority={effectivePage === 1 && index === 0}
              loading={effectivePage === 1 && index === 0 ? "eager" : "lazy"}
            />
          ))}
          <PortfolioDesktopPagination
            className={cn(
              "col-span-full w-full shrink-0",
              PORTFOLIO_DESKTOP_PAGINATION_TOP_MARGIN_CLASS,
            )}
            currentPage={effectivePage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </section>
      </main>
    </div>
  );
}
