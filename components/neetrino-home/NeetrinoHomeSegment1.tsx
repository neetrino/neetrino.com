"use client";

import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { assetUrl } from "@/lib/assets";
import { cn } from "@/lib/utils";
import { DEFAULT_IMAGE_QUALITY, HERO_IMAGE_QUALITY } from "@/lib/image-defaults";
import {
  HOME_DESKTOP_HERO_450_HAND_IMAGE_SIZES,
  HOME_DESKTOP_HERO_450_HAND_SLOT_CLASS,
  HOME_DESKTOP_HERO_TABLET_BAN2_WRAP_STACK_CLASS,
  HOME_DESKTOP_HERO_TABLET_STATS_ROW_STACK_CLASS,
} from "@/lib/home-desktop-hero-450-hand.constants";
import {
  HOME_DESKTOP_HERO_TABLET_SKY_FRAME_INNER_CLASS,
  HOME_DESKTOP_HERO_TABLET_SKY_FRAME_OUTER_CLASS,
} from "@/lib/home-desktop-hero-tablet-sky.constants";
import { HOME_DESKTOP_HERO_TABLET_ROBOT_WRAPPER_TOP_CLASS } from "@/lib/home-desktop-hero-tablet-robot.constants";
import {
  img28A,
  img30,
  imgEricaAnderson1,
  imgPhilippHubertDVVjhUcdb30Unsplash1,
  imgRectangle17399,
} from "./figma-assets";

export type NeetrinoHomeSegment1Props = {
  /** Tablet hybrid `/` hero: sky bleed, robot offset, 450+ hand (`img28A`) on scaled canvas. */
  readonly showTabletHero450Hand?: boolean;
};

export function NeetrinoHomeSegment1({ showTabletHero450Hand = false }: NeetrinoHomeSegment1Props) {
  const t = useTranslations();
  const locale = useLocale();
  const isRuHeroSatisfiedClientsStacked = locale === "ru";

  return (
    <>
      <div className="absolute h-[1149px] left-0 top-0 w-[1440px]" data-node-id="10:421">
        <div
          className={cn(
            "absolute flex items-center justify-center left-0 w-[1440px]",
            showTabletHero450Hand
              ? HOME_DESKTOP_HERO_TABLET_SKY_FRAME_OUTER_CLASS
              : "top-0 h-[844px]",
          )}
        >
          <div className="-scale-y-100 flex-none">
            <div
              className={cn(
                "relative w-[1440px]",
                showTabletHero450Hand
                  ? HOME_DESKTOP_HERO_TABLET_SKY_FRAME_INNER_CLASS
                  : "h-[844px]",
              )}
              data-name="philipp-hubert-dVVjhUcdb30-unsplash 1"
              data-node-id="10:422"
            >
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <Image
                  alt=""
                  width={2400}
                  height={2400}
                  className="absolute h-[130.92%] left-[-15.08%] max-w-none top-0 w-[115.09%]"
                  src={imgPhilippHubertDVVjhUcdb30Unsplash1}
                  sizes="1440px"
                  quality={HERO_IMAGE_QUALITY}
                  loading="eager"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
        <div className="-translate-x-1/2 absolute flex items-center justify-center left-[calc(50%-256px)] mix-blend-lighten size-[824px] top-[83px]">
          <div className="flex-none rotate-90">
            <div
              className="relative size-[824px]"
              data-name="Erica Anderson 1"
              data-node-id="10:232"
            >
              <Image
                alt=""
                unoptimized
                width={2400}
                height={2400}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 max-w-none object-cover opacity-60 pointer-events-none size-full"
                src={imgEricaAnderson1}
              />
            </div>
          </div>
        </div>
        <div
          className="absolute left-0 right-0 top-[18.9%] flex justify-center px-4"
          data-node-id="10:424"
        >
          <Image
            src={assetUrl("NEETRINO.svg")}
            alt="NEETRINO"
            width={1186}
            height={128}
            className="neetrino-hero-neetrino-svg block"
            priority
            unoptimized
          />
        </div>
        <div
          className={cn(
            "-translate-x-1/2 absolute h-[975px] left-[calc(50%+0.5px)] w-[629px]",
            showTabletHero450Hand ? HOME_DESKTOP_HERO_TABLET_ROBOT_WRAPPER_TOP_CLASS : "top-[45px]",
          )}
          data-name="30"
          data-node-id="10:425"
        >
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <Image
              alt=""
              width={2400}
              height={2400}
              className="absolute h-[166.65%] left-[-22.58%] max-w-none top-[-44.39%] w-[145.15%]"
              src={img30}
              sizes="629px"
              quality={HERO_IMAGE_QUALITY}
              loading="eager"
              priority
            />
          </div>
        </div>
        <div
          className="absolute left-0 top-[692px] w-[1440px] h-[457px] backdrop-blur-[14px] pointer-events-none"
          style={{
            maskImage: "linear-gradient(to bottom, transparent 0%, black 50%)",
            WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 50%)",
          }}
        />
        <div className="-translate-x-1/2 absolute flex h-[457px] items-center justify-center left-1/2 top-[692px] w-[1440px]">
          <div className="-scale-y-100 flex-none rotate-180">
            <div className="h-[457px] relative w-[1440px]" data-node-id="10:426">
              <Image
                alt=""
                width={2400}
                height={2400}
                className="absolute block max-w-none size-full"
                src={imgRectangle17399}
                sizes="1440px"
                quality={DEFAULT_IMAGE_QUALITY}
                loading="lazy"
              />
            </div>
          </div>
        </div>
        <div
          className="-translate-y-1/2 absolute flex flex-col font-extralight justify-center leading-[0] left-[3.5%] not-italic text-[24px] text-white top-[68%] w-[35.8%]"
          data-node-id="10:427"
        >
          <p>
            <span className="leading-[35px]">{`${t("home.hero.body.line1")} `}</span>
            <span className="font-black leading-[35px] not-italic">
              {`${t("home.hero.body.line2")} ${t("home.hero.body.line3Strong")}`}
            </span>
            <span className="leading-[35px]">{` ${t("home.hero.body.line4")} ${t("home.hero.body.line5")} ${t("home.hero.body.line6")} ${t("home.hero.body.line7")} ${t("home.hero.body.line8")}`}</span>
          </p>
        </div>
        <div
          className={cn(
            "absolute content-stretch flex gap-[17.2%] items-center overflow-visible leading-[0] left-[3.5%] top-[76.3%]",
            showTabletHero450Hand && HOME_DESKTOP_HERO_TABLET_STATS_ROW_STACK_CLASS,
          )}
          data-node-id="10:428"
        >
          <div
            className="content-stretch flex gap-[18px] items-center relative shrink-0"
            data-node-id="10:429"
          >
            <div
              className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0"
              data-name="BAN"
              data-node-id="10:430"
            >
              <div
                className="bg-[#ff7500] col-1 h-[167px] ml-0 mt-0 rounded-[39px] row-1 w-[216px]"
                data-node-id="10:431"
              />
              <div
                className="col-1 flex flex-col font-black h-[41px] justify-center ml-[18px] mt-[36px] not-italic relative row-1 text-[56px] text-white w-[78px]"
                data-node-id="10:432"
              >
                <p className="leading-[36px]">8+</p>
              </div>
              <div
                className="col-1 flex flex-col font-extralight justify-center leading-[25px] ml-[18px] mt-[86px] not-italic relative row-1 text-[#fffcfc] text-[20px] whitespace-nowrap"
                data-node-id="10:433"
              >
                <p className="mb-0">{t("home.hero.stats.years")}</p>
                <p>{t("home.hero.stats.experience")}</p>
              </div>
            </div>
            <div
              className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0"
              data-name="BAN1"
              data-node-id="10:434"
            >
              <div
                className="bg-white col-1 h-[167px] ml-0 mt-0 rounded-[39px] row-1 w-[216px]"
                data-node-id="10:435"
              />
              <div
                className="col-1 flex flex-col font-black h-[43px] justify-center ml-[26px] mt-[36px] not-italic relative row-1 text-[#0d266c] text-[56px] w-[122px]"
                data-node-id="10:436"
              >
                <p className="leading-[36px]">97%</p>
              </div>
              <div
                className={cn(
                  "col-1 flex flex-col font-extralight justify-center ml-[26px] not-italic relative row-1 text-[20px] text-[#0d266c]",
                  isRuHeroSatisfiedClientsStacked
                    ? "mt-[86px] items-start text-left"
                    : "mt-[99px] text-right whitespace-nowrap",
                )}
                data-node-id="10:437"
              >
                {isRuHeroSatisfiedClientsStacked ? (
                  <>
                    <p className="mb-0 leading-[25px]">
                      {t("home.hero.stats.satisfiedClientsLine1")}
                    </p>
                    <p className="leading-[25px]">{t("home.hero.stats.satisfiedClientsLine2")}</p>
                  </>
                ) : (
                  <p className="leading-[25px]">{t("home.hero.stats.satisfiedClients")}</p>
                )}
              </div>
            </div>
          </div>
          <div
            className={cn(
              "relative shrink-0",
              showTabletHero450Hand && "overflow-visible",
              showTabletHero450Hand && HOME_DESKTOP_HERO_TABLET_BAN2_WRAP_STACK_CLASS,
            )}
            data-name={showTabletHero450Hand ? "BAN2-wrap" : undefined}
          >
            <div className={cn("relative shrink-0", showTabletHero450Hand && "z-0")}>
              <div
                className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0"
                data-name="BAN2"
                data-node-id="10:438"
              >
                <div
                  className="bg-[#473dff] col-1 h-[167px] ml-0 mt-0 rounded-[39px] row-1 w-[517px]"
                  data-node-id="10:439"
                />
                <div
                  className="col-1 flex flex-col font-black justify-center ml-[44px] mt-[33px] not-italic relative row-1 text-[#fffcfc] text-[56px] whitespace-nowrap"
                  data-node-id="10:440"
                >
                  <p className="leading-[36px]">450+</p>
                </div>
                <div
                  className="col-1 flex flex-col font-extralight justify-center ml-[44px] mt-[87px] not-italic relative row-1 text-[#fffcfc] text-[20px] text-right whitespace-nowrap"
                  data-node-id="10:441"
                >
                  <p className="leading-[25px]">{t("home.hero.stats.creations")}</p>
                </div>
              </div>
            </div>
            {showTabletHero450Hand ? (
              <div
                className={HOME_DESKTOP_HERO_450_HAND_SLOT_CLASS}
                aria-hidden
                data-name="450-hand"
              >
                <div className="relative size-full overflow-visible">
                  <div className="absolute inset-0 -scale-y-100 rotate-180">
                    <Image
                      alt=""
                      src={img28A}
                      fill
                      className="object-contain object-[right_bottom]"
                      sizes={HOME_DESKTOP_HERO_450_HAND_IMAGE_SIZES}
                      quality={DEFAULT_IMAGE_QUALITY}
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}
