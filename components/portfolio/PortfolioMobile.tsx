"use client";

import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { PortfolioDesktopPagination } from "@/components/portfolio/PortfolioDesktopPagination";
import { PortfolioMobileBiotechCard } from "@/components/portfolio/PortfolioMobileBiotechCard";
import {
  MOBILE_PORTFOLIO_CARD_IMAGE_SIZES,
  getMobilePortfolioItems,
} from "@/components/portfolio/portfolio-data";
import { imgBiotechLogo1 } from "@/components/portfolio/portfolio-figma-assets";
import type { AppLocale } from "@/lib/i18n/locales";
import { pageTitleMegatroxFontClass } from "@/lib/page-title-megatrox-font.constants";
import { PORTFOLIO_DESKTOP_PAGINATION_TOP_MARGIN_CLASS } from "@/lib/portfolio-desktop-scene-dimensions.constants";
import { cn } from "@/lib/utils";

export function PortfolioMobile() {
  const t = useTranslations();
  const locale = useLocale() as AppLocale;
  const portfolioItems = getMobilePortfolioItems(locale);

  return (
    <div className="w-full min-w-0 overflow-x-hidden bg-[#151515] lg:hidden">
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
          {portfolioItems.map((item, index) =>
            item.image === imgBiotechLogo1 ? (
              <PortfolioMobileBiotechCard
                key={item.image}
                alt={item.title}
                src={item.image}
                loading={index === 0 ? "eager" : "lazy"}
                priority={index === 0}
                decoding="async"
              />
            ) : (
              <div key={item.image} className="min-w-0">
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[24px]">
                  <Image
                    alt={item.title}
                    src={item.image}
                    fill
                    sizes={MOBILE_PORTFOLIO_CARD_IMAGE_SIZES}
                    className="object-cover"
                    loading={index === 0 ? "eager" : "lazy"}
                    priority={index === 0}
                    decoding="async"
                  />
                </div>
              </div>
            ),
          )}
          <PortfolioDesktopPagination
            className={cn(
              "col-span-full w-full shrink-0",
              PORTFOLIO_DESKTOP_PAGINATION_TOP_MARGIN_CLASS,
            )}
          />
        </section>
      </main>
    </div>
  );
}
