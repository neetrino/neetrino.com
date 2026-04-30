"use client";

import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { DeferredMount } from "@/components/layout/DeferredMount";
import { FigmaFillImage } from "@/components/shared/FigmaFillImage";
import { PortfolioDesktopPagination } from "@/components/portfolio/PortfolioDesktopPagination";
import { PortfolioDesktopStarRayDeferred } from "@/components/portfolio/PortfolioDesktopStarRayDeferred";
import { PortfolioDesktopVectorDecorDeferred } from "@/components/portfolio/PortfolioDesktopVectorDecorDeferred";
import * as figma from "@/components/portfolio/portfolio-figma-assets";
import { orbitronBlack } from "@/lib/fonts";
import { DEFAULT_IMAGE_QUALITY } from "@/lib/image-defaults";
import {
  PORTFOLIO_DESKTOP_HERO_BANNER_RADIUS_CLASS,
  PORTFOLIO_DESKTOP_HERO_CARD_DECOR_BUTTON_ABSOLUTE_WRAPPER_CLASS,
  PORTFOLIO_DESKTOP_HERO_CARD_DECOR_BUTTON_GRID_WRAPPER_CLASS,
  PORTFOLIO_DESKTOP_HERO_CARD_DECOR_BUTTON_INNER_CLASS,
  PORTFOLIO_DESKTOP_HERO_CARD_DECOR_BUTTON_ROTATE_CLASS,
  PORTFOLIO_FIRST_BANNER_FRAME_CLASS,
  PORTFOLIO_FIRST_BANNER_WIDTH_PX,
} from "@/lib/portfolio-desktop-first-banner.constants";
import {
  PORTFOLIO_SECOND_BANNER_FRAME_CLASS,
  PORTFOLIO_SECOND_BANNER_WIDTH_PX,
} from "@/lib/portfolio-desktop-second-banner.constants";
import {
  PORTFOLIO_SECOND_BANNER_CAT_LOGO_BOX_CLASS,
  PORTFOLIO_SECOND_BANNER_CAT_LOGO_BOX_WIDTH_PX,
  PORTFOLIO_SECOND_BANNER_CAT_LOGO_CORNER_WRAPPER_CLASS,
} from "@/lib/portfolio-second-banner-cat-logo.constants";
import {
  PORTFOLIO_SECOND_BANNER_ZEPPELIN_COPY,
  PORTFOLIO_SECOND_BANNER_ZEPPELIN_CORNER_WRAPPER_CLASS,
  PORTFOLIO_SECOND_BANNER_ZEPPELIN_TEXT_SIZE_CLASS,
} from "@/lib/portfolio-second-banner-zeppelin.constants";
import {
  PORTFOLIO_SECOND_BANNER_MACBOOK_VIDEO_ARIA_LABEL,
  PORTFOLIO_SECOND_BANNER_MACBOOK_VIDEO_ASPECT_RATIO,
  PORTFOLIO_SECOND_BANNER_MACBOOK_VIDEO_HEIGHT_PX,
  PORTFOLIO_SECOND_BANNER_MACBOOK_VIDEO_LEFT_BASE_PX,
  PORTFOLIO_SECOND_BANNER_MACBOOK_VIDEO_NUDGE_RIGHT_PX,
  PORTFOLIO_SECOND_BANNER_MACBOOK_VIDEO_SRC,
  PORTFOLIO_SECOND_BANNER_MACBOOK_VIDEO_TOP_PX,
  PORTFOLIO_SECOND_BANNER_MACBOOK_VIDEO_WIDTH_PX,
  PORTFOLIO_SECOND_BANNER_MACBOOK_VIDEO_WRAPPER_BASE_CLASS,
} from "@/lib/portfolio-second-banner-macbook-video.constants";
import {
  PORTFOLIO_THIRD_BANNER_LEFT_COPY_LINES,
  PORTFOLIO_THIRD_BANNER_LEFT_OVERLAY_CLASS,
  PORTFOLIO_THIRD_BANNER_LEFT_TEXT_CLASS,
} from "@/lib/portfolio-third-banner-left-copy.constants";
import {
  PORTFOLIO_DESKTOP_PAGINATION_BOTTOM_PADDING_CLASS,
  PORTFOLIO_DESKTOP_PAGINATION_TOP_MARGIN_CLASS,
  PORTFOLIO_DESKTOP_SCENE_HEIGHT_PX,
} from "@/lib/portfolio-desktop-scene-dimensions.constants";
import type { AppLocale } from "@/lib/i18n/locales";
import { pageTitleMegatroxFontClass } from "@/lib/page-title-megatrox-font.constants";
import { cn } from "@/lib/utils";

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

/** Figma `525:1728` — top-left CAT logo on the second hero card. */
function PortfolioSecondBannerCatLogoCorner() {
  return (
    <div
      className={PORTFOLIO_SECOND_BANNER_CAT_LOGO_CORNER_WRAPPER_CLASS}
      data-name="cat-logo-png-transparent 1"
      data-node-id="525:1728"
    >
      <div className={PORTFOLIO_SECOND_BANNER_CAT_LOGO_BOX_CLASS}>
        <Image
          alt="CAT logo"
          src={figma.imgCatLogoPngTransparent1}
          fill
          className="object-contain object-left-top"
          sizes={`${PORTFOLIO_SECOND_BANNER_CAT_LOGO_BOX_WIDTH_PX}px`}
          quality={DEFAULT_IMAGE_QUALITY}
        />
      </div>
    </div>
  );
}

/** Figma `496:1546` — third portfolio row: smartphone mockup below the two hero cards. */
function PortfolioFirstBannerSmartphoneMock() {
  return (
    <div
      className={cn(
        "relative shrink-0",
        PORTFOLIO_DESKTOP_HERO_BANNER_RADIUS_CLASS,
        PORTFOLIO_FIRST_BANNER_FRAME_CLASS,
      )}
      data-name="Smartphone-Presentation-Mockup 1"
      data-node-id="496:1546"
    >
      <div
        className={cn(
          "absolute inset-0 overflow-hidden pointer-events-none",
          PORTFOLIO_DESKTOP_HERO_BANNER_RADIUS_CLASS,
        )}
      >
        <Image
          alt="Smartphone presentation mockup"
          src={figma.imgSmartphonePresentationMockup1}
          fill
          className="object-cover"
          quality={DEFAULT_IMAGE_QUALITY}
          sizes={`${PORTFOLIO_FIRST_BANNER_WIDTH_PX}px`}
          loading="lazy"
        />
      </div>
      <div className={PORTFOLIO_THIRD_BANNER_LEFT_OVERLAY_CLASS}>
        <p className={PORTFOLIO_THIRD_BANNER_LEFT_TEXT_CLASS}>
          {PORTFOLIO_THIRD_BANNER_LEFT_COPY_LINES.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </p>
      </div>
      <div className={PORTFOLIO_DESKTOP_HERO_CARD_DECOR_BUTTON_ABSOLUTE_WRAPPER_CLASS}>
        <div className={PORTFOLIO_DESKTOP_HERO_CARD_DECOR_BUTTON_ROTATE_CLASS}>
          <Button className={PORTFOLIO_DESKTOP_HERO_CARD_DECOR_BUTTON_INNER_CLASS} />
        </div>
      </div>
    </div>
  );
}

/** Figma `543:2376` — Digital Implant Clinic showcase; same 631×364 frame. */
function PortfolioDigitalImplantClinicCard() {
  return (
    <div
      className={cn(
        "relative shrink-0",
        PORTFOLIO_DESKTOP_HERO_BANNER_RADIUS_CLASS,
        PORTFOLIO_FIRST_BANNER_FRAME_CLASS,
      )}
      data-name="Frame 14987 1"
      data-node-id="543:2376"
    >
      <div
        className={cn(
          "absolute inset-0 overflow-hidden pointer-events-none",
          PORTFOLIO_DESKTOP_HERO_BANNER_RADIUS_CLASS,
        )}
      >
        <Image
          alt="Digital Implant Clinic — website mockup on laptop"
          src={figma.imgDigitalImplantClinicBanner1}
          fill
          className="object-cover"
          quality={DEFAULT_IMAGE_QUALITY}
          sizes={`${PORTFOLIO_FIRST_BANNER_WIDTH_PX}px`}
          loading="lazy"
        />
      </div>
      <div className={PORTFOLIO_DESKTOP_HERO_CARD_DECOR_BUTTON_ABSOLUTE_WRAPPER_CLASS}>
        <div className={PORTFOLIO_DESKTOP_HERO_CARD_DECOR_BUTTON_ROTATE_CLASS}>
          <Button className={PORTFOLIO_DESKTOP_HERO_CARD_DECOR_BUTTON_INNER_CLASS} />
        </div>
      </div>
    </div>
  );
}

/** Figma `543:2473` — National Center for Innovation and Entrepreneurship (NCIE). */
function PortfolioNcieNationalCenterCard() {
  return (
    <div
      className={cn(
        "relative shrink-0",
        PORTFOLIO_DESKTOP_HERO_BANNER_RADIUS_CLASS,
        PORTFOLIO_FIRST_BANNER_FRAME_CLASS,
      )}
      data-name="Frame 14986 1"
      data-node-id="543:2473"
    >
      <div
        className={cn(
          "absolute inset-0 overflow-hidden pointer-events-none",
          PORTFOLIO_DESKTOP_HERO_BANNER_RADIUS_CLASS,
        )}
      >
        <Image
          alt="National Center for Innovation and Entrepreneurship — mobile mockup"
          src={figma.imgNcieNationalCenterBanner1}
          fill
          className="object-cover"
          quality={DEFAULT_IMAGE_QUALITY}
          sizes={`${PORTFOLIO_FIRST_BANNER_WIDTH_PX}px`}
          loading="lazy"
        />
      </div>
      <div className={PORTFOLIO_DESKTOP_HERO_CARD_DECOR_BUTTON_ABSOLUTE_WRAPPER_CLASS}>
        <div className={PORTFOLIO_DESKTOP_HERO_CARD_DECOR_BUTTON_ROTATE_CLASS}>
          <Button className={PORTFOLIO_DESKTOP_HERO_CARD_DECOR_BUTTON_INNER_CLASS} />
        </div>
      </div>
    </div>
  );
}

/** Figma `541:2171` — MAPCO card; same 631×364 frame (row with Borbo). */
function PortfolioMapcoGroupBannerCard() {
  return (
    <div
      className={cn(
        "relative shrink-0",
        PORTFOLIO_DESKTOP_HERO_BANNER_RADIUS_CLASS,
        PORTFOLIO_FIRST_BANNER_FRAME_CLASS,
      )}
      data-name="Frame 14988 1"
      data-node-id="541:2171"
    >
      <div
        className={cn(
          "absolute inset-0 overflow-hidden pointer-events-none",
          PORTFOLIO_DESKTOP_HERO_BANNER_RADIUS_CLASS,
        )}
      >
        <Image
          alt="MAPCO GROUP presentation"
          src={figma.imgMapcoGroupBanner1}
          fill
          className="object-cover"
          quality={DEFAULT_IMAGE_QUALITY}
          sizes={`${PORTFOLIO_FIRST_BANNER_WIDTH_PX}px`}
          loading="lazy"
        />
      </div>
      <div className={PORTFOLIO_DESKTOP_HERO_CARD_DECOR_BUTTON_ABSOLUTE_WRAPPER_CLASS}>
        <div className={PORTFOLIO_DESKTOP_HERO_CARD_DECOR_BUTTON_ROTATE_CLASS}>
          <Button className={PORTFOLIO_DESKTOP_HERO_CARD_DECOR_BUTTON_INNER_CLASS} />
        </div>
      </div>
    </div>
  );
}

/** Figma `546:2515` — Borbo / Daily Dose Aqua; same 631×364 frame (row with MAPCO). */
function PortfolioBorboDailyDoseAquaCard() {
  return (
    <div
      className={cn(
        "relative shrink-0",
        PORTFOLIO_DESKTOP_HERO_BANNER_RADIUS_CLASS,
        PORTFOLIO_FIRST_BANNER_FRAME_CLASS,
      )}
      data-name="borbo1r 1"
      data-node-id="546:2515"
    >
      <div
        className={cn(
          "absolute inset-0 overflow-hidden pointer-events-none",
          PORTFOLIO_DESKTOP_HERO_BANNER_RADIUS_CLASS,
        )}
      >
        <Image
          alt="Daily Dose Aqua — laptop and glass sphere mockup"
          src={figma.imgBorbo1R1}
          fill
          className="object-cover"
          quality={DEFAULT_IMAGE_QUALITY}
          sizes={`${PORTFOLIO_FIRST_BANNER_WIDTH_PX}px`}
          loading="lazy"
        />
      </div>
      <div className={PORTFOLIO_DESKTOP_HERO_CARD_DECOR_BUTTON_ABSOLUTE_WRAPPER_CLASS}>
        <div className={PORTFOLIO_DESKTOP_HERO_CARD_DECOR_BUTTON_ROTATE_CLASS}>
          <Button className={PORTFOLIO_DESKTOP_HERO_CARD_DECOR_BUTTON_INNER_CLASS} />
        </div>
      </div>
    </div>
  );
}

/** Figma `543:2375` — fourth card in row with smartphone mock; same 631×364 frame. */
function PortfolioDegustoStudioBannerCard() {
  return (
    <div
      className={cn(
        "relative shrink-0",
        PORTFOLIO_DESKTOP_HERO_BANNER_RADIUS_CLASS,
        PORTFOLIO_FIRST_BANNER_FRAME_CLASS,
      )}
      data-name="Frame 14985 1"
      data-node-id="543:2375"
    >
      <div
        className={cn(
          "absolute inset-0 overflow-hidden pointer-events-none",
          PORTFOLIO_DESKTOP_HERO_BANNER_RADIUS_CLASS,
        )}
      >
        <Image
          alt="DEGUSTO STUDIO food presentation"
          src={figma.imgDegustoStudioBanner1}
          fill
          className="object-cover"
          quality={DEFAULT_IMAGE_QUALITY}
          sizes={`${PORTFOLIO_FIRST_BANNER_WIDTH_PX}px`}
          loading="lazy"
        />
      </div>
      <div className={PORTFOLIO_DESKTOP_HERO_CARD_DECOR_BUTTON_ABSOLUTE_WRAPPER_CLASS}>
        <div className={PORTFOLIO_DESKTOP_HERO_CARD_DECOR_BUTTON_ROTATE_CLASS}>
          <Button className={PORTFOLIO_DESKTOP_HERO_CARD_DECOR_BUTTON_INNER_CLASS} />
        </div>
      </div>
    </div>
  );
}

/** Screen recording over the MacBook display in the second hero card (`166:1236`). */
function PortfolioSecondBannerMacbookScreenVideo() {
  return (
    <div
      className={PORTFOLIO_SECOND_BANNER_MACBOOK_VIDEO_WRAPPER_BASE_CLASS}
      style={{
        width: PORTFOLIO_SECOND_BANNER_MACBOOK_VIDEO_WIDTH_PX,
        height: PORTFOLIO_SECOND_BANNER_MACBOOK_VIDEO_HEIGHT_PX,
        aspectRatio: PORTFOLIO_SECOND_BANNER_MACBOOK_VIDEO_ASPECT_RATIO,
        left: PORTFOLIO_SECOND_BANNER_MACBOOK_VIDEO_LEFT_BASE_PX,
        top: PORTFOLIO_SECOND_BANNER_MACBOOK_VIDEO_TOP_PX,
        transform: `translateX(${PORTFOLIO_SECOND_BANNER_MACBOOK_VIDEO_NUDGE_RIGHT_PX}px)`,
      }}
      data-name="macbook-screen-video"
    >
      <video
        aria-label={PORTFOLIO_SECOND_BANNER_MACBOOK_VIDEO_ARIA_LABEL}
        className="h-full w-full object-cover"
        src={PORTFOLIO_SECOND_BANNER_MACBOOK_VIDEO_SRC}
        autoPlay
        muted
        playsInline
        loop
        preload="metadata"
      />
    </div>
  );
}

/** Figma `525:1727` — bottom-right lockup on the second hero card. */
function PortfolioSecondBannerZeppelinCorner() {
  return (
    <div
      className={PORTFOLIO_SECOND_BANNER_ZEPPELIN_CORNER_WRAPPER_CLASS}
      data-name="ZEPPELIN"
      data-node-id="525:1727"
    >
      <p
        className={cn(
          orbitronBlack.className,
          PORTFOLIO_SECOND_BANNER_ZEPPELIN_TEXT_SIZE_CLASS,
          "leading-none tracking-[-0.02em] text-[#f6ff00]",
        )}
      >
        {PORTFOLIO_SECOND_BANNER_ZEPPELIN_COPY}
      </p>
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

export function PortfolioDesktopScene() {
  const t = useTranslations();
  const locale = useLocale() as AppLocale;

  return (
    <div
      className="bg-[#151515] relative w-[1440px]"
      style={{ height: PORTFOLIO_DESKTOP_SCENE_HEIGHT_PX }}
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
          className={cn(
            "absolute left-[calc(50%-646px)] top-[152px] whitespace-nowrap text-[90px] font-normal leading-[normal] not-italic text-[#fffcfc]",
            pageTitleMegatroxFontClass(locale),
          )}
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
        className={cn(
          "absolute content-stretch flex flex-col gap-[53px] items-start leading-[0] left-[73px] top-[374px] w-[1295px]",
          PORTFOLIO_DESKTOP_PAGINATION_BOTTOM_PADDING_CLASS,
        )}
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
              className={cn(
                "col-1 ml-0 mt-0 relative row-1",
                PORTFOLIO_DESKTOP_HERO_BANNER_RADIUS_CLASS,
                PORTFOLIO_FIRST_BANNER_FRAME_CLASS,
              )}
              data-name="-266 1"
              data-node-id="166:1232"
            >
              <div
                className={cn(
                  "absolute inset-0 overflow-hidden pointer-events-none",
                  PORTFOLIO_DESKTOP_HERO_BANNER_RADIUS_CLASS,
                )}
              >
                <Image
                  alt=""
                  src={figma.img2661}
                  fill
                  className="object-cover"
                  quality={DEFAULT_IMAGE_QUALITY}
                  sizes={`${PORTFOLIO_FIRST_BANNER_WIDTH_PX}px`}
                  loading="lazy"
                />
              </div>
            </div>
            <div className={PORTFOLIO_DESKTOP_HERO_CARD_DECOR_BUTTON_GRID_WRAPPER_CLASS}>
              <div className={PORTFOLIO_DESKTOP_HERO_CARD_DECOR_BUTTON_ROTATE_CLASS}>
                <Button className={PORTFOLIO_DESKTOP_HERO_CARD_DECOR_BUTTON_INNER_CLASS} />
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
                className={cn(
                  "col-1 ml-0 mt-0 relative row-1",
                  PORTFOLIO_DESKTOP_HERO_BANNER_RADIUS_CLASS,
                  PORTFOLIO_SECOND_BANNER_FRAME_CLASS,
                )}
                data-name="biotech _ logo 1"
                data-node-id="166:1236"
              >
                <div
                  className={cn(
                    "absolute inset-0 overflow-hidden pointer-events-none",
                    PORTFOLIO_DESKTOP_HERO_BANNER_RADIUS_CLASS,
                  )}
                >
                  <Image
                    alt=""
                    src={figma.imgBiotechLogo1}
                    fill
                    className="object-cover"
                    quality={DEFAULT_IMAGE_QUALITY}
                    sizes={`${PORTFOLIO_SECOND_BANNER_WIDTH_PX}px`}
                    loading="lazy"
                  />
                </div>
                <PortfolioSecondBannerMacbookScreenVideo />
                <PortfolioSecondBannerCatLogoCorner />
                <PortfolioSecondBannerZeppelinCorner />
              </div>
            </div>
            <div className={PORTFOLIO_DESKTOP_HERO_CARD_DECOR_BUTTON_GRID_WRAPPER_CLASS}>
              <div className={PORTFOLIO_DESKTOP_HERO_CARD_DECOR_BUTTON_ROTATE_CLASS}>
                <Button className={PORTFOLIO_DESKTOP_HERO_CARD_DECOR_BUTTON_INNER_CLASS} />
              </div>
            </div>
          </div>
        </div>
        <div
          className="content-stretch flex w-full shrink-0 flex-col gap-[53px]"
          data-name="banners2"
          data-node-id="166:1390"
        >
          <div className="flex w-full shrink-0 items-start gap-[26px]">
            <PortfolioFirstBannerSmartphoneMock />
            <PortfolioDegustoStudioBannerCard />
          </div>
          <div className="flex w-full shrink-0 items-start gap-[26px]">
            <PortfolioMapcoGroupBannerCard />
            <PortfolioBorboDailyDoseAquaCard />
          </div>
          <div className="flex w-full shrink-0 items-start gap-[26px]">
            <PortfolioNcieNationalCenterCard />
            <PortfolioDigitalImplantClinicCard />
          </div>
        </div>
        <PortfolioDesktopPagination
          className={cn("w-full shrink-0", PORTFOLIO_DESKTOP_PAGINATION_TOP_MARGIN_CLASS)}
        />
      </div>
    </div>
  );
}
