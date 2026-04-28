"use client";

import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { DeferredMount } from "@/components/layout/DeferredMount";
import { ExploreHoverFlare } from "@/components/neetrino-home/ExploreHoverFlare";
import { FigmaFillImage } from "@/components/shared/FigmaFillImage";
import { Link } from "@/i18n/navigation";
import { desktopPortfolioRows } from "@/components/portfolio/portfolio-data";
import { PortfolioDesktopStarRayDeferred } from "@/components/portfolio/PortfolioDesktopStarRayDeferred";
import { PortfolioDesktopVectorDecorDeferred } from "@/components/portfolio/PortfolioDesktopVectorDecorDeferred";
import * as figma from "@/components/portfolio/portfolio-figma-assets";
import { DEFAULT_IMAGE_QUALITY } from "@/lib/image-defaults";
import {
  homeExplorePillEllipseUnderlayFromEndClassName,
  homeExplorePillEllipseUnderlayFromStartClassName,
  homeExplorePillLinkCenterInGroupClassName,
  homeExplorePillWidthDefaultClassName,
  homeExplorePillWidthHyClassName,
  homeExplorePillWidthRuClassName,
} from "@/lib/home-explore-pill-layout";
import { cn } from "@/lib/utils";

type GroupProps = {
  className?: string;
  exploreLabel: string;
};

function Group({ className, exploreLabel }: GroupProps) {
  const { imgSafearea, imgEllipse3463 } = figma;
  const locale = useLocale();
  const explorePillWidthClassName =
    locale === "hy"
      ? homeExplorePillWidthHyClassName
      : locale === "ru"
        ? homeExplorePillWidthRuClassName
        : homeExplorePillWidthDefaultClassName;
  const ellipseUnderlayFromEnd = locale === "hy" || locale === "ru";

  return (
    <div
      className={`pointer-events-none ${className || "relative h-[276px] w-[642px]"}`}
      data-node-id="1:140"
    >
      <Link
        href="/portfolio"
        className={cn(
          "peer pointer-events-auto absolute z-10 flex h-[56px] items-center justify-between gap-2 overflow-hidden rounded-[40px] border border-solid border-[#6a92ff] bg-black pl-[23px] pr-[17px] no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6a92ff]",
          homeExplorePillLinkCenterInGroupClassName,
          explorePillWidthClassName,
        )}
        data-name="Button 2"
        data-node-id="1:146"
      >
        <span
          className="shrink-0 font-[family-name:var(--font-dm-sans)] text-[18px] font-medium leading-[24px] text-white whitespace-nowrap"
          data-node-id="1:149"
          style={{ fontVariationSettings: "'opsz' 14" }}
        >
          {exploreLabel}
        </span>
        <div
          className="relative z-10 size-[20px] shrink-0 overflow-clip"
          data-name="Right"
          data-node-id="1:150"
        >
          <div
            className="absolute inset-[8.33%]"
            data-name="safearea"
            data-node-id="I1:150;21:1594"
          >
            <FigmaFillImage src={imgSafearea} sizes="20px" />
          </div>
        </div>
        <div
          className={cn(
            "pointer-events-none absolute top-[39px] h-[31px] w-[88px]",
            ellipseUnderlayFromEnd
              ? homeExplorePillEllipseUnderlayFromEndClassName
              : homeExplorePillEllipseUnderlayFromStartClassName,
          )}
          data-node-id="1:151"
        >
          <div className="absolute inset-[-45.16%_-15.91%]">
            <FigmaFillImage src={imgEllipse3463} sizes="88px" />
          </div>
        </div>
      </Link>
      <ExploreHoverFlare positionClassName="inset-[-105.8%_-69%]" />
    </div>
  );
}

function Button({ className }: { className?: string }) {
  const { imgSafearea1 } = figma;
  return (
    <div
      className={
        className ||
        "bg-white content-stretch flex gap-[4px] items-center justify-center overflow-clip px-[24px] py-[16px] relative rounded-[40px] size-[56px]"
      }
      data-node-id="166:1041"
    >
      <div
        className="absolute bg-[#46fff4] blur-[7.5px] inset-[69px_0_-103px_0] opacity-0 rounded-tl-[60px] rounded-tr-[60px]"
        data-name="glow"
        data-node-id="166:1042"
      />
      <div
        className="absolute bg-[#46fff4] blur-[7.5px] inset-[64px_0_-98px_0] opacity-0 rounded-tl-[60px] rounded-tr-[60px]"
        data-name="glow"
        data-node-id="166:1043"
      />
      <div
        className="overflow-clip relative shrink-0 size-[20px]"
        data-name="Right"
        data-node-id="166:1044"
      >
        <div
          className="absolute inset-[8.33%]"
          data-name="safearea"
          data-node-id="I166:1044;21:1594"
        >
          <FigmaFillImage src={imgSafearea1} sizes="20px" />
        </div>
      </div>
    </div>
  );
}

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

function PortfolioMoreCases({ title }: { title: string }) {
  return (
    <div
      className="absolute h-[1098px] left-0 overflow-clip top-[974px] w-[1440px]"
      data-name="more cases"
      data-node-id="166:1394"
    >
      {desktopPortfolioRows.map((row, rowIndex) => (
        <div
          key={`portfolio-row-${rowIndex}`}
          className="-translate-x-1/2 absolute content-stretch flex gap-[33px] items-center justify-center left-[calc(50%+0.5px)]"
          data-node-id={rowIndex === 0 ? "166:1395" : "166:1399"}
          style={{ top: rowIndex === 0 ? 254 : 605 }}
        >
          {row.map((image, imageIndex) => (
            <div
              key={`${rowIndex}-${imageIndex}-${image}`}
              className="relative h-[262px] shrink-0 w-[423px]"
              data-name={`Portfolio ${rowIndex + 1}-${imageIndex + 1}`}
            >
              <Image
                alt=""
                src={image}
                fill
                sizes="423px"
                quality={DEFAULT_IMAGE_QUALITY}
                className="object-cover pointer-events-none"
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>
      ))}
      <p
        className="absolute font-['Megatrox',sans-serif] leading-[normal] left-[calc(50%-635px)] not-italic text-[#fffcfc] text-[90px] top-[82px] whitespace-nowrap"
        data-node-id="166:1403"
      >
        {title}
      </p>
    </div>
  );
}

export function PortfolioDesktopScene() {
  const t = useTranslations();

  return (
    <div
      className="bg-[#151515] relative h-[2072px] w-[1440px]"
      data-name="PORTFOLIO"
      data-node-id="166:1203"
    >
      <DeferredMount topClassName="top-[2400px]" rootMargin="400px 0px 400px 0px">
        <PortfolioPlanet />
      </DeferredMount>
      <div
        className="-translate-x-1/2 absolute h-[1898px] left-[calc(50%+1px)] overflow-clip top-0 w-[1438px]"
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
          className="absolute h-[1137px] left-0 mix-blend-soft-light opacity-58 top-0 w-[1758px]"
          data-name="Noise"
          data-node-id="166:1212"
        >
          <div
            aria-hidden="true"
            className="absolute bg-size-[1253.707855939865px_417.9026186466217px] bg-top-left inset-0 opacity-74 pointer-events-none"
            style={{ backgroundImage: `url('${figma.imgNoise}')` }}
          />
        </div>
        <p
          className="absolute font-['Megatrox',sans-serif] leading-[normal] left-[calc(50%-646px)] not-italic text-[#fffcfc] text-[90px] top-[152px] whitespace-nowrap"
          data-node-id="166:1213"
        >
          {t("portfolioPage.metaTitle")}
        </p>
      </div>
      <PortfolioDesktopVectorDecorDeferred />
      <div
        className="-translate-x-1/2 absolute h-[405px] left-[calc(50%+0.5px)] top-[1013px] w-[1437px]"
        data-node-id="166:1226"
      >
        <div className="absolute inset-[-50.95%_-15.66%_-51.42%_-15.66%]">
          <FigmaFillImage src={figma.imgRectangle17414} />
        </div>
      </div>
      <div
        className="-translate-x-1/2 absolute h-[405px] left-[calc(50%+0.5px)] top-[783px] w-[1437px]"
        data-node-id="166:1227"
      >
        <div className="absolute inset-[-50.95%_-15.66%_-51.42%_-15.66%]">
          <FigmaFillImage src={figma.imgRectangle17414} />
        </div>
      </div>
      <div
        className="-translate-x-1/2 absolute h-[405px] left-[calc(50%+10.5px)] top-[1436px] w-[1437px]"
        data-node-id="166:1228"
      >
        <div className="absolute inset-[-50.95%_-15.66%_-51.42%_-15.66%]">
          <FigmaFillImage src={figma.imgRectangle17414} />
        </div>
      </div>
      <div
        className="absolute content-stretch flex flex-col gap-[53px] items-start leading-[0] left-[73px] top-[374px] w-[1295px]"
        data-name="portfolio"
        data-node-id="166:1229"
      >
        <div
          className="content-stretch flex gap-[26px] items-center relative shrink-0 w-full"
          data-name="banners1"
          data-node-id="166:1230"
        >
          <div
            className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0"
            data-node-id="166:1231"
          >
            <div
              className="col-1 h-[409.177px] ml-0 mt-0 relative rounded-[35px] row-1 w-[631.601px]"
              data-name="-266 1"
              data-node-id="166:1232"
            >
              <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[35px]">
                <Image
                  alt=""
                  className="absolute h-[154.19%] left-0 max-w-none top-[-40.85%] w-full"
                  src={figma.img2661}
                  width={2400}
                  height={2400}
                  quality={DEFAULT_IMAGE_QUALITY}
                  sizes="632px"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="col-1 flex items-center justify-center ml-[535.86px] mt-[15.86px] relative row-1 size-[78.276px]">
              <div className="flex-none rotate-[-36.26deg]">
                <Button className="bg-white content-stretch flex gap-[4px] items-center justify-center overflow-clip px-[24px] py-[16px] relative rounded-[40px] size-[56px]" />
              </div>
            </div>
          </div>
          <div
            className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0"
            data-node-id="166:1234"
          >
            <div
              className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1"
              data-node-id="166:1235"
            >
              <div
                className="col-1 h-[409.177px] ml-0 mt-0 relative rounded-[31px] row-1 w-[636.026px]"
                data-name="biotech _ logo 1"
                data-node-id="166:1236"
              >
                <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[31px]">
                  <Image
                    alt=""
                    className="absolute h-[120.37%] left-[-1.69%] max-w-none top-[-13.55%] w-[103.37%]"
                    src={figma.imgBiotechLogo1}
                    width={2400}
                    height={2400}
                    quality={DEFAULT_IMAGE_QUALITY}
                    sizes="636px"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
            <div className="col-1 flex items-center justify-center ml-[543.03px] mt-[16px] relative row-1 size-[78.276px]">
              <div className="flex-none rotate-[-36.26deg]">
                <Button className="bg-white content-stretch flex gap-[4px] items-center justify-center overflow-clip px-[24px] py-[16px] relative rounded-[40px] size-[56px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Group
        className="-translate-x-1/2 absolute h-[276px] left-1/2 top-[759px] w-[642px]"
        exploreLabel={t("cta.explore")}
      />
      <div
        className="-translate-x-1/2 absolute h-[664px] left-[calc(50%-7.5px)] top-[2017px] w-[1437px]"
        data-node-id="166:1259"
      >
        <div className="absolute inset-[-28.94%_-15.66%_-29.47%_-15.66%]">
          <FigmaFillImage src={figma.imgRectangle17417} />
        </div>
      </div>
      <DeferredMount topClassName="top-[1980px]" rootMargin="280px 0px 280px 0px">
        <div className="absolute contents left-[597px] top-[2099px]" data-node-id="166:1260">
          <div
            className="absolute h-[563px] left-[597px] mix-blend-lighten opacity-70 top-[2102px] w-[633px]"
            data-name="10"
            data-node-id="166:1261"
          >
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <Image
                alt=""
                className="absolute h-[200.1%] left-0 max-w-none top-[-68.6%] w-full"
                src={figma.img10}
                width={2400}
                height={2400}
                quality={DEFAULT_IMAGE_QUALITY}
                sizes="633px"
                loading="lazy"
              />
            </div>
          </div>
          <div
            className="absolute h-[563px] left-[597px] opacity-70 top-[2099px] w-[633px]"
            data-name="101"
            data-node-id="166:1262"
          >
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <Image
                alt=""
                className="absolute h-[200.1%] left-0 max-w-none top-[-68.6%] w-full"
                src={figma.img10}
                width={2400}
                height={2400}
                quality={DEFAULT_IMAGE_QUALITY}
                sizes="633px"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </DeferredMount>
      <DeferredMount topClassName="top-[700px]" rootMargin="320px 0px 320px 0px">
        <PortfolioMoreCases title={t("portfolioPage.moreCases")} />
      </DeferredMount>
    </div>
  );
}
