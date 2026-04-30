"use client";

import type { CSSProperties } from "react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { FigmaFillImage } from "@/components/shared/FigmaFillImage";
import { DEFAULT_IMAGE_QUALITY } from "@/lib/image-defaults";
import {
  img13B,
  imgEllipse27,
  imgEllipse28,
  imgGroup2087329588,
  imgRectangle17414,
  imgRectangle17415,
  imgRectangle17417,
  imgRectangle17418,
  imgStar22,
  imgVector1,
} from "@/lib/about-us-figma-asset-urls";
import {
  ABOUT_DESKTOP_HERO_EVERY_IDEA_LEFT_CLASS_DEFAULT,
  ABOUT_DESKTOP_HERO_EVERY_IDEA_LEFT_CLASS_HY,
  ABOUT_DESKTOP_HERO_HEADLINE_LEADING_DEFAULT_CLASS,
  ABOUT_DESKTOP_HERO_HEADLINE_LEADING_HY_CLASS,
  ABOUT_DESKTOP_HERO_HEADLINE_TEXT_DEFAULT_CLASS,
  ABOUT_DESKTOP_HERO_HEADLINE_TEXT_HY_CLASS,
  ABOUT_VECTOR_GRID_OUTER_HEIGHT_PX,
  ABOUT_VECTOR_GRID_UNIFORM_SCALE,
} from "@/lib/about-us-figma-layout.constants";
import { cn } from "@/lib/utils";

const transformStyle = {
  "--transform-inner-width": "0",
  "--transform-inner-height": "0",
} as CSSProperties;

/** Figma ABOUT fragment — nodes 335:931–335:954 (split for 300-line limit). */
export function AboutUsFigmaBlock1b() {
  const t = useTranslations();
  const locale = useLocale();
  const isHy = locale === "hy";
  const everyIdeaLeftClass = isHy
    ? ABOUT_DESKTOP_HERO_EVERY_IDEA_LEFT_CLASS_HY
    : ABOUT_DESKTOP_HERO_EVERY_IDEA_LEFT_CLASS_DEFAULT;
  const heroHeadlineTextClass = isHy
    ? ABOUT_DESKTOP_HERO_HEADLINE_TEXT_HY_CLASS
    : ABOUT_DESKTOP_HERO_HEADLINE_TEXT_DEFAULT_CLASS;
  const heroHeadlineLeadingClass = isHy
    ? ABOUT_DESKTOP_HERO_HEADLINE_LEADING_HY_CLASS
    : ABOUT_DESKTOP_HERO_HEADLINE_LEADING_DEFAULT_CLASS;

  return (
    <>
      <div
        className="-translate-x-1/2 absolute flex items-center justify-center overflow-hidden left-[calc(50%-38px)] mix-blend-overlay top-[-40px] w-[1722px]"
        style={{ ...transformStyle, height: ABOUT_VECTOR_GRID_OUTER_HEIGHT_PX }}
      >
        <div
          className="flex-none"
          style={{
            transform: `rotate(90deg) scale(${ABOUT_VECTOR_GRID_UNIFORM_SCALE})`,
            transformOrigin: "center center",
          }}
        >
          <div className="h-[1722px] relative w-[3723px]" data-name="Vector" data-node-id="335:931">
            <FigmaFillImage src={imgVector1} />
          </div>
        </div>
      </div>
      <div
        className="-translate-x-1/2 absolute h-[405px] left-[calc(50%+0.5px)] top-[405px] w-[1437px]"
        data-node-id="335:936"
      >
        <div className="absolute inset-[-50.95%_-15.66%_-51.42%_-15.66%]">
          <FigmaFillImage src={imgRectangle17417} />
        </div>
      </div>
      <div
        className="-translate-x-1/2 absolute h-[1240px] left-[calc(50%+1px)] top-0 w-[1438px]"
        data-name="Light Rays Effect"
        data-node-id="335:937"
      >
        <div
          className="-translate-x-1/2 absolute h-[490px] left-[calc(50%+0.5px)] top-[2368px] w-[1437px]"
          data-node-id="335:938"
        >
          <div className="absolute inset-[-41.2%_-15.66%_-41.69%_-15.66%]">
            <FigmaFillImage src={imgRectangle17418} />
          </div>
        </div>
        <div
          className="absolute h-[22.837px] left-[87px] top-[410px] w-[1352px]"
          data-node-id="335:939"
        >
          <FigmaFillImage src={imgGroup2087329588} />
        </div>
        <div
          className="-translate-x-1/2 absolute h-[405px] left-[calc(50%-0.5px)] top-[985px] w-[1437px]"
          data-node-id="335:942"
        >
          <div className="absolute inset-[-50.95%_-15.66%_-51.42%_-15.66%]">
            <FigmaFillImage src={imgRectangle17414} />
          </div>
        </div>
        <div
          className="-translate-x-1/2 absolute bottom-[56.03%] left-[calc(50%+62.8px)] top-[-32.11%] w-[1047.338px]"
          data-node-id="335:943"
        >
          <div className="absolute inset-[-54.35%_-48.95%]">
            <FigmaFillImage src={imgEllipse27} />
          </div>
        </div>
        <div
          className="-translate-x-1/2 absolute bottom-[43.25%] left-[calc(50%+793.12px)] top-[-19.33%] w-[1047.338px]"
          data-node-id="335:944"
        >
          <div className="absolute inset-[-54.35%_-48.95%]">
            <FigmaFillImage src={imgEllipse28} />
          </div>
        </div>
        <div
          className="absolute flex h-[5878.103px] items-center justify-center left-[-797.93px] mix-blend-plus-lighter top-[-3956.96px] w-[5638.546px]"
          style={transformStyle}
        >
          <div className="flex-none rotate-[24.39deg]">
            <div className="h-[4590.797px] relative w-[4109.595px]" data-node-id="335:945">
              <div className="absolute inset-[-2.59%_-2.9%]">
                <Image
                  alt=""
                  className="block max-w-none size-full"
                  height={4829}
                  src={imgStar22}
                  width={4348}
                  quality={DEFAULT_IMAGE_QUALITY}
                  sizes="120vw"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className={cn(
            "-translate-y-1/2 absolute flex flex-col font-['Inter:Light',sans-serif] font-light justify-center leading-[0] left-[87px] not-italic text-white top-[326.5px] whitespace-nowrap",
            heroHeadlineTextClass,
          )}
          data-node-id="335:946"
        >
          <p>
            <span
              className={cn(
                "font-['Inter:Regular',sans-serif] font-normal not-italic text-white",
                heroHeadlineLeadingClass,
              )}
            >
              {t("aboutPage.hero.with")}
            </span>
            <span className={heroHeadlineLeadingClass}>{` `}</span>
            <span
              className={cn(
                "font-['Inter:Black_Italic',sans-serif] font-black italic",
                heroHeadlineLeadingClass,
              )}
            >
              {t("aboutPage.hero.us")}
            </span>
          </p>
        </div>
        <div
          className={cn(
            "-translate-y-1/2 absolute flex flex-col font-['Inter:Black_Italic',sans-serif] font-black italic justify-center leading-[0] left-[87px] text-white top-[621.5px] whitespace-nowrap",
            heroHeadlineTextClass,
          )}
          data-node-id="335:947"
        >
          <p className={heroHeadlineLeadingClass}>{t("aboutPage.hero.possible")}</p>
        </div>
        <div
          className={cn(
            "-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[87px] not-italic text-white top-[521.5px] whitespace-nowrap",
            heroHeadlineTextClass,
          )}
          data-node-id="335:948"
        >
          <p className={heroHeadlineLeadingClass}>{t("aboutPage.hero.becomes")}</p>
        </div>
        <div
          className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-['Inter:Extra_Light',sans-serif] font-extralight justify-center leading-[0] left-[594px] not-italic text-[16px] text-right text-white top-[742px] w-[367px]"
          data-node-id="335:949"
        >
          <p className="leading-[24px]">{t("aboutPage.storyShort")}</p>
        </div>
        <div
          className="-translate-y-1/2 absolute flex flex-col font-['Inter:Extra_Light',sans-serif] font-extralight justify-center leading-[0] left-[621px] not-italic text-[16px] text-white top-[790px] w-[246px]"
          data-node-id="335:950"
        >
          <p className="leading-[24px]">{t("aboutPage.storySpecialization")}</p>
        </div>
        <div
          className="-translate-y-1/2 absolute flex flex-col font-['Inter:Extra_Light',sans-serif] font-extralight justify-center leading-[0] left-[49px] not-italic text-[20px] text-white top-[1089px] w-[653px]"
          data-node-id="335:951"
        >
          <p>
            <span className="leading-[28px]">{t("aboutPage.platformParagraph")}</span>
          </p>
        </div>
        <div className="absolute z-0 flex h-[1000px] items-center justify-center left-[744px] top-[138px] w-[749px]">
          <div className="-scale-y-100 flex-none rotate-180">
            <div className="h-[1000px] relative w-[749px]" data-name="13 B" data-node-id="335:952">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <Image
                  alt=""
                  className="absolute h-[133.2%] left-[-0.02%] max-w-none top-[-33.2%] w-[100.03%]"
                  src={img13B}
                  width={2400}
                  height={2400}
                  quality={DEFAULT_IMAGE_QUALITY}
                  sizes="749px"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="-translate-x-1/2 absolute h-[490px] left-[calc(50%+0.5px)] top-[1585px] w-[1437px]"
          data-node-id="335:953"
        >
          <div className="absolute inset-[-41.2%_-15.66%_-41.69%_-15.66%]">
            <FigmaFillImage src={imgRectangle17415} />
          </div>
        </div>
        <div
          className={cn(
            "-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic text-white top-[421.5px] whitespace-nowrap",
            everyIdeaLeftClass,
            heroHeadlineTextClass,
          )}
          data-node-id="335:954"
        >
          <p className={heroHeadlineLeadingClass}>{t("aboutPage.hero.everyIdea")}</p>
        </div>
      </div>
    </>
  );
}
