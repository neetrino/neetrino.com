"use client";

import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { PageBlockReveal } from "@/components/motion/PageBlockReveal";
import { DeferredMount } from "@/components/layout/DeferredMount";
import { FigmaFillImage } from "@/components/shared/FigmaFillImage";
import { PortfolioDesktopSceneDbCards } from "@/components/portfolio/PortfolioDesktopSceneDbCards";
import type { PortfolioDesktopScenePaginationProps } from "@/components/portfolio/PortfolioDesktopSceneDbCards";
import { PortfolioDesktopStarRayDeferred } from "@/components/portfolio/PortfolioDesktopStarRayDeferred";
import { PortfolioDesktopVectorDecorDeferred } from "@/components/portfolio/PortfolioDesktopVectorDecorDeferred";
import * as figma from "@/components/portfolio/portfolio-figma-assets";
import { DEFAULT_IMAGE_QUALITY } from "@/lib/image-defaults";
import { PORTFOLIO_DESKTOP_PAGINATION_BOTTOM_PADDING_CLASS } from "@/lib/portfolio-desktop-scene-dimensions.constants";
import type { PublicPortfolioCard } from "@/lib/portfolio/public-portfolio.dto";
import type { AppLocale } from "@/lib/i18n/locales";
import { pageTitleMegatroxFontClass } from "@/lib/page-title-megatrox-font.constants";
import { cn } from "@/lib/utils";

export type { PortfolioDesktopScenePaginationProps };

export type PortfolioDesktopSceneProps = {
  readonly sceneHeightPx: number;
  readonly pageCards: readonly PublicPortfolioCard[];
  readonly pagination: PortfolioDesktopScenePaginationProps;
};

function PortfolioPlanet() {
  const { imgEllipse1, imgPngwing6 } = figma;
  return (
    <div
      className="-translate-x-1/2 absolute contents h-[2233.132px] left-[calc(50%+3586.51px)] mix-blend-hard-light top-[2816px] w-[2229.008px]"
      data-name="Planet"
      data-node-id="166:1204"
    >
      <div className="absolute flex h-[1513.932px] items-center justify-center left-[3526.05px] mix-blend-hard-light top-[3123.23px] w-[1554.175px]">
        <div className="flex-none rotate-[-8.02deg]">
          <div
            className="h-[1334.261px] opacity-40 relative w-[1381.565px]"
            data-node-id="166:1205"
          >
            <div className="absolute inset-[-1.5%_-1.45%]">
              <FigmaFillImage src={imgEllipse1} sizes="(max-width: 1536px) 90vw, 1382px" />
            </div>
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute flex h-[1885.436px] items-center justify-center left-[calc(50%+3586.51px)] mix-blend-hard-light top-[2989.85px] w-[1878.113px]">
        <div className="flex-none rotate-[-68.02deg]">
          <div
            className="h-[1439.104px] opacity-40 relative w-[1452.347px]"
            data-name="pngwing 6"
            data-node-id="166:1206"
          >
            <Image
              alt=""
              className="absolute block max-w-none size-full"
              height={1439}
              src={imgPngwing6}
              width={1452}
              quality={DEFAULT_IMAGE_QUALITY}
              sizes="(max-width: 1536px) 90vw, 1452px"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export function PortfolioDesktopScene({
  sceneHeightPx,
  pageCards,
  pagination,
}: PortfolioDesktopSceneProps) {
  const t = useTranslations();
  const locale = useLocale() as AppLocale;

  return (
    <div
      className="relative w-[1440px] bg-[#151515]"
      style={{ height: sceneHeightPx }}
      data-name="PORTFOLIO"
      data-node-id="166:1203"
    >
      <DeferredMount topClassName="top-[2400px]" rootMargin="400px 0px 400px 0px">
        <PortfolioPlanet />
      </DeferredMount>
      <div
        className="-translate-x-1/2 absolute left-[calc(50%+1px)] top-0 h-[1898px] w-[1438px] overflow-clip"
        data-name="Light Rays Effect"
        data-node-id="166:1208"
      >
        <div
          className="-translate-x-1/2 absolute bottom-[70.05%] left-[calc(50%+62.8px)] top-[-21.87%] w-[1047.338px]"
          data-node-id="166:1209"
        >
          <div className="absolute inset-[-52.12%_-48.95%]">
            <FigmaFillImage src={figma.imgEllipse27} />
          </div>
        </div>
        <div
          className="-translate-x-1/2 absolute bottom-[61.34%] left-[calc(50%+793.12px)] top-[-13.17%] w-[1047.338px]"
          data-node-id="166:1210"
        >
          <div className="absolute inset-[-52.12%_-48.95%]">
            <FigmaFillImage src={figma.imgEllipse28} />
          </div>
        </div>
        <PortfolioDesktopStarRayDeferred />
        <div
          className="absolute left-0 top-0 h-[1137px] w-[1758px] mix-blend-soft-light opacity-58"
          data-name="Noise"
          data-node-id="166:1212"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-top-left opacity-74"
            style={{
              backgroundImage: `url('${figma.imgNoise}')`,
              backgroundSize: "1253.707855939865px 417.9026186466217px",
            }}
          />
        </div>
        <PageBlockReveal index={0}>
          <p
            className={cn(
              "absolute left-[calc(50%-646px)] top-[152px] whitespace-nowrap text-[90px] font-normal leading-[normal] not-italic text-[#fffcfc]",
              pageTitleMegatroxFontClass(locale),
            )}
            data-node-id="166:1213"
          >
            {t("portfolioPage.metaTitle")}
          </p>
        </PageBlockReveal>
      </div>
      <PortfolioDesktopVectorDecorDeferred />
      <div
        className="-translate-x-1/2 absolute left-[calc(50%+0.5px)] top-[1013px] h-[405px] w-[1437px]"
        data-node-id="166:1226"
      >
        <div className="absolute inset-[-50.95%_-15.66%_-51.42%_-15.66%]">
          <FigmaFillImage src={figma.imgRectangle17414} />
        </div>
      </div>
      <div
        className="-translate-x-1/2 absolute left-[calc(50%+0.5px)] top-[783px] h-[405px] w-[1437px]"
        data-node-id="166:1227"
      >
        <div className="absolute inset-[-50.95%_-15.66%_-51.42%_-15.66%]">
          <FigmaFillImage src={figma.imgRectangle17414} />
        </div>
      </div>
      <div
        className="-translate-x-1/2 absolute left-[calc(50%+10.5px)] top-[1436px] h-[405px] w-[1437px]"
        data-node-id="166:1228"
      >
        <div className="absolute inset-[-50.95%_-15.66%_-51.42%_-15.66%]">
          <FigmaFillImage src={figma.imgRectangle17414} />
        </div>
      </div>
      <PageBlockReveal
        index={1}
        className={cn(
          "absolute left-[73px] top-[374px] flex w-[1295px] flex-col items-start gap-[53px] leading-[0]",
          PORTFOLIO_DESKTOP_PAGINATION_BOTTOM_PADDING_CLASS,
        )}
        data-node-id="166:1229"
      >
        <PortfolioDesktopSceneDbCards pageCards={pageCards} pagination={pagination} />
      </PageBlockReveal>
    </div>
  );
}
