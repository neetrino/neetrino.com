"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { serviceDetailHref } from "@/components/services/service-pages-data";
import {
  isWhatWeDoCardCopyCenteredLocale,
  whatWeDoDesktopContinueCenterLeftClassName,
  whatWeDoDesktopHyCrmSubtitleButtonStackTopClassName,
  whatWeDoDesktopOrangeTileHorizontalCenterClassName,
  whatWeDoHyCrmSubtitleLiftOnlyClassName,
  whatWeDoHyCrmSubtitleToContinueGapClassName,
  whatWeDoRuOrangeMobileSubtitleTopClassName,
} from "@/lib/what-we-do-desktop-continue-cta-layout";
import { cn } from "@/lib/utils";
import { imgSafearea, imgSports00065 } from "./figma-assets";

export function NeetrinoHomeWhatWeDoTop() {
  const t = useTranslations();
  const locale = useLocale();
  const isCenteredTileCopy = isWhatWeDoCardCopyCenteredLocale(locale);

  return (
    <>
      <div className="absolute contents left-[1130px] top-[128px]" data-node-id="90:526">
        <div
          className="pointer-events-none absolute bg-[#a2b8ee] h-[553px] left-[1130px] rounded-[19px] top-[128px] w-[258px]"
          data-node-id="90:527"
        />
        <div
          className={cn(
            "pointer-events-none absolute flex flex-col justify-center font-extralight not-italic leading-[0] text-[20px] text-[#0f0f0f] top-[576.5px] -translate-y-1/2",
            isCenteredTileCopy
              ? cn(
                  whatWeDoDesktopContinueCenterLeftClassName.ai,
                  "-translate-x-1/2 max-w-[220px] text-center whitespace-nowrap",
                )
              : "left-[1329px] -translate-x-full text-right whitespace-nowrap",
          )}
          data-node-id="90:528"
        >
          <p className="leading-[25px]">{t("home.whatWeDo.cards.ai.subtitle1")}</p>
        </div>
        <div
          className={cn(
            "pointer-events-none absolute flex flex-col justify-center font-bold not-italic leading-[0] text-[#0f0f0f] text-[22px] top-[198.5px] -translate-y-1/2",
            isCenteredTileCopy
              ? cn(
                  whatWeDoDesktopContinueCenterLeftClassName.ai,
                  "-translate-x-1/2 max-w-[220px] text-center whitespace-nowrap",
                )
              : "left-[1162px] whitespace-nowrap",
          )}
          data-node-id="90:529"
        >
          <p className="leading-[35px]">
            {t("home.whatWeDo.cards.ai.title1")} {t("home.whatWeDo.cards.ai.title2")}
          </p>
        </div>
      </div>
      <div
        className="pointer-events-none absolute bg-[#ff7500] h-[553px] left-[320px] rounded-[19px] top-[128px] w-[258px]"
        data-node-id="90:530"
      />
      <div
        className={cn(
          "pointer-events-none absolute flex flex-col justify-center font-extralight not-italic leading-[0] text-[20px] text-white -translate-y-1/2",
          locale === "ru" && isCenteredTileCopy
            ? whatWeDoRuOrangeMobileSubtitleTopClassName
            : "top-[576.5px]",
          isCenteredTileCopy
            ? cn(
                whatWeDoDesktopOrangeTileHorizontalCenterClassName,
                "-translate-x-1/2 max-w-[220px] text-center",
              )
            : "left-[524px] -translate-x-full text-right whitespace-nowrap",
        )}
        data-node-id="90:531"
      >
        <p className="leading-[25px]">
          {t("home.whatWeDo.cards.mobile.subtitle1")} {t("home.whatWeDo.cards.mobile.subtitle2")}
        </p>
      </div>
      <div
        className={cn(
          "pointer-events-none absolute flex flex-col justify-center font-bold not-italic leading-[0] text-[22px] text-white top-[198.5px] -translate-y-1/2",
          isCenteredTileCopy
            ? cn(
                whatWeDoDesktopOrangeTileHorizontalCenterClassName,
                "-translate-x-1/2 max-w-[220px] text-center",
              )
            : "left-[382px] whitespace-nowrap",
        )}
        data-node-id="90:532"
      >
        <p className="leading-[35px]">{t("home.whatWeDo.cards.mobile.title1")}</p>
      </div>
      <div className="absolute contents left-[860px] top-[129px]" data-node-id="90:534">
        <div className="absolute contents left-[860px] top-[129px]" data-node-id="90:535">
          <div
            className="pointer-events-none absolute bg-[#473dff] h-[553px] left-[860px] rounded-[19px] top-[129px] w-[258px]"
            data-node-id="90:536"
          />
          {!isCenteredTileCopy ? (
            <div
              className="pointer-events-none absolute left-[1081px] top-[578.5px] flex -translate-x-full -translate-y-1/2 flex-col justify-center font-extralight not-italic leading-[0] text-[20px] text-white text-right whitespace-nowrap"
              data-node-id="90:537"
            >
              <p className="leading-[25px]">
                {t("home.whatWeDo.cards.crm.subtitle1")} {t("home.whatWeDo.cards.crm.subtitle2")}
              </p>
            </div>
          ) : null}
          <div
            className={cn(
              "pointer-events-none absolute top-[200.5px] flex -translate-y-1/2 flex-col justify-center font-bold not-italic leading-[0] text-[22px] text-white",
              isCenteredTileCopy
                ? cn(
                    whatWeDoDesktopContinueCenterLeftClassName.crm,
                    "-translate-x-1/2 max-w-[220px] text-center whitespace-nowrap",
                  )
                : "left-[909px] whitespace-nowrap",
            )}
            data-node-id="90:538"
          >
            <p className="leading-[35px]">{t("home.whatWeDo.cards.crm.title1")}</p>
          </div>
          <div
            className="pointer-events-none absolute h-[209px] left-[885px] top-[292px] w-[211px]"
            data-name="Sports_00065_"
            data-node-id="90:539"
          >
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <Image
                alt=""
                width={2400}
                height={2400}
                className="absolute inset-0 h-full w-full max-w-none object-contain p-[14px]"
                src={imgSports00065}
              />
            </div>
          </div>
        </div>
      </div>
      <Link
        href={serviceDetailHref("mobile-app-development")}
        className={cn(
          "pointer-events-auto absolute z-30 flex gap-[4px] content-stretch items-center overflow-clip rounded-[40px] bg-white px-[24px] py-[16px] no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60",
          whatWeDoDesktopContinueCenterLeftClassName.mobile,
          "-translate-x-1/2 top-[607px]",
        )}
        data-name="Button 13"
        data-node-id="90:533"
      >
        <div
          className="absolute bg-[#46fff4] blur-[7.5px] inset-[69px_0_-103px_0] opacity-0 rounded-tl-[60px] rounded-tr-[60px]"
          data-name="glow"
          data-node-id="I90:533;13:52"
        />
        <p
          className="font-medium leading-[24px] not-italic relative shrink-0 text-[#252525] text-[18px] whitespace-nowrap"
          data-node-id="I90:533;13:33"
        >
          {t("cta.continue")}
        </p>
        <div
          className="absolute bg-[#46fff4] blur-[7.5px] inset-[64px_0_-98px_0] opacity-0 rounded-tl-[60px] rounded-tr-[60px]"
          data-name="glow"
          data-node-id="I90:533;13:44"
        />
        <div
          className="overflow-clip relative shrink-0 size-[20px]"
          data-name="Right"
          data-node-id="I90:533;13:34"
        >
          <div
            className="absolute inset-[8.33%]"
            data-name="safearea"
            data-node-id="I90:533;13:34;21:1594"
          >
            <Image
              alt=""
              width={2400}
              height={2400}
              className="absolute block max-w-none size-full"
              src={imgSafearea}
            />
          </div>
        </div>
      </Link>
      {isCenteredTileCopy ? (
        <div
          className={cn(
            "absolute z-30 flex -translate-x-1/2 flex-col items-center",
            whatWeDoHyCrmSubtitleToContinueGapClassName,
            whatWeDoDesktopContinueCenterLeftClassName.crm,
            whatWeDoDesktopHyCrmSubtitleButtonStackTopClassName,
          )}
          data-node-id="90:537-stack"
        >
          <div
            className={cn(
              "pointer-events-none flex max-w-[220px] flex-col items-center text-center font-extralight not-italic leading-[0] text-[20px] text-white",
              whatWeDoHyCrmSubtitleLiftOnlyClassName,
            )}
          >
            <p className="leading-[25px]">{t("home.whatWeDo.cards.crm.subtitle1")}</p>
            <p className="leading-[25px]">{t("home.whatWeDo.cards.crm.subtitle2")}</p>
          </div>
          <Link
            href={serviceDetailHref("crm-systems")}
            className="pointer-events-auto relative z-30 flex gap-[4px] content-stretch items-center overflow-clip rounded-[40px] bg-white px-[24px] py-[16px] no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60"
            data-name="Button 14"
            data-node-id="90:540"
          >
            <div
              className="absolute bg-[#46fff4] blur-[7.5px] inset-[69px_0_-103px_0] opacity-0 rounded-tl-[60px] rounded-tr-[60px]"
              data-name="glow"
              data-node-id="I90:540;13:52"
            />
            <p
              className="relative shrink-0 text-[18px] font-medium leading-[24px] not-italic text-[#252525] whitespace-nowrap"
              data-node-id="I90:540;13:33"
            >
              {t("cta.continue")}
            </p>
            <div
              className="absolute bg-[#46fff4] blur-[7.5px] inset-[64px_0_-98px_0] opacity-0 rounded-tl-[60px] rounded-tr-[60px]"
              data-name="glow"
              data-node-id="I90:540;13:44"
            />
            <div
              className="relative size-[20px] shrink-0 overflow-clip"
              data-name="Right"
              data-node-id="I90:540;13:34"
            >
              <div
                className="absolute inset-[8.33%]"
                data-name="safearea"
                data-node-id="I90:540;13:34;21:1594"
              >
                <Image
                  alt=""
                  width={2400}
                  height={2400}
                  className="absolute block max-w-none size-full"
                  src={imgSafearea}
                />
              </div>
            </div>
          </Link>
        </div>
      ) : (
        <Link
          href={serviceDetailHref("crm-systems")}
          className={cn(
            "pointer-events-auto absolute z-30 flex gap-[4px] content-stretch items-center overflow-clip rounded-[40px] bg-white px-[24px] py-[16px] no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60",
            whatWeDoDesktopContinueCenterLeftClassName.crm,
            "-translate-x-1/2 top-[609px]",
          )}
          data-name="Button 14"
          data-node-id="90:540"
        >
          <div
            className="absolute bg-[#46fff4] blur-[7.5px] inset-[69px_0_-103px_0] opacity-0 rounded-tl-[60px] rounded-tr-[60px]"
            data-name="glow"
            data-node-id="I90:540;13:52"
          />
          <p
            className="font-medium leading-[24px] not-italic relative shrink-0 text-[#252525] text-[18px] whitespace-nowrap"
            data-node-id="I90:540;13:33"
          >
            {t("cta.continue")}
          </p>
          <div
            className="absolute bg-[#46fff4] blur-[7.5px] inset-[64px_0_-98px_0] opacity-0 rounded-tl-[60px] rounded-tr-[60px]"
            data-name="glow"
            data-node-id="I90:540;13:44"
          />
          <div
            className="overflow-clip relative shrink-0 size-[20px]"
            data-name="Right"
            data-node-id="I90:540;13:34"
          >
            <div
              className="absolute inset-[8.33%]"
              data-name="safearea"
              data-node-id="I90:540;13:34;21:1594"
            >
              <Image
                alt=""
                width={2400}
                height={2400}
                className="absolute block max-w-none size-full"
                src={imgSafearea}
              />
            </div>
          </div>
        </Link>
      )}
    </>
  );
}
