"use client";

import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { Reveal } from "@/components/motion/Reveal";
import { serviceDetailHref } from "@/components/services/service-pages-data";
import { WhatWeDoContinueLink } from "@/components/sections/WhatWeDoContinueLink";
import {
  HOME_DESKTOP_WHAT_WE_DO_REVEAL_ORDER,
  homeDesktopWhatWeDoRevealDelayMs,
} from "@/lib/motion/home-desktop-what-we-do-reveal.constants";
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
import { imgSports00065 } from "@/lib/figma-assets";

const O = HOME_DESKTOP_WHAT_WE_DO_REVEAL_ORDER;

export function NeetrinoHomeWhatWeDoTop() {
  const t = useTranslations();
  const locale = useLocale();
  const isCenteredTileCopy = isWhatWeDoCardCopyCenteredLocale(locale);
  const aiDelay = homeDesktopWhatWeDoRevealDelayMs(O.ai);
  const mobileDelay = homeDesktopWhatWeDoRevealDelayMs(O.mobile);
  const crmDelay = homeDesktopWhatWeDoRevealDelayMs(O.crm);

  return (
    <>
      <Reveal
        profile="slow"
        delayMs={aiDelay}
        className="pointer-events-none absolute bg-[#a2b8ee] h-[553px] left-[1130px] rounded-[19px] top-[128px] w-[258px]"
        data-node-id="90:527"
      />
      <Reveal
        profile="slow"
        delayMs={aiDelay}
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
      </Reveal>
      <Reveal
        profile="slow"
        delayMs={aiDelay}
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
      </Reveal>
      <Reveal
        profile="slow"
        delayMs={mobileDelay}
        className="pointer-events-none absolute bg-[#ff7500] h-[553px] left-[320px] rounded-[19px] top-[128px] w-[258px]"
        data-node-id="90:530"
      />
      <Reveal
        profile="slow"
        delayMs={mobileDelay}
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
      </Reveal>
      <Reveal
        profile="slow"
        delayMs={mobileDelay}
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
      </Reveal>
      <Reveal
        profile="slow"
        delayMs={crmDelay}
        className="pointer-events-none absolute bg-[#473dff] h-[553px] left-[860px] rounded-[19px] top-[129px] w-[258px]"
        data-node-id="90:536"
      />
      {!isCenteredTileCopy ? (
        <Reveal
          profile="slow"
          delayMs={crmDelay}
          className="pointer-events-none absolute left-[1081px] top-[578.5px] flex -translate-x-full -translate-y-1/2 flex-col justify-center font-extralight not-italic leading-[0] text-[20px] text-white text-right whitespace-nowrap"
          data-node-id="90:537"
        >
          <p className="leading-[25px]">
            {t("home.whatWeDo.cards.crm.subtitle1")} {t("home.whatWeDo.cards.crm.subtitle2")}
          </p>
        </Reveal>
      ) : null}
      <Reveal
        profile="slow"
        delayMs={crmDelay}
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
      </Reveal>
      <Reveal
        profile="slow"
        delayMs={crmDelay}
        className="pointer-events-none absolute h-[209px] left-[885px] top-[292px] w-[211px]"
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
      </Reveal>
      <Reveal
        profile="slow"
        delayMs={mobileDelay}
        className={cn(
          "pointer-events-auto absolute z-30 -translate-x-1/2 top-[607px]",
          whatWeDoDesktopContinueCenterLeftClassName.mobile,
        )}
      >
        <WhatWeDoContinueLink
          slug="mobile-app-development"
          href={serviceDetailHref("mobile-app-development")}
          label={t("cta.continue")}
          className="relative z-30"
        />
      </Reveal>
      {isCenteredTileCopy ? (
        <Reveal
          profile="slow"
          delayMs={crmDelay}
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
          <WhatWeDoContinueLink
            slug="crm-systems"
            href={serviceDetailHref("crm-systems")}
            label={t("cta.continue")}
            className="pointer-events-auto relative z-30"
          />
        </Reveal>
      ) : (
        <Reveal
          profile="slow"
          delayMs={crmDelay}
          className={cn(
            "pointer-events-auto absolute z-30 -translate-x-1/2 top-[609px]",
            whatWeDoDesktopContinueCenterLeftClassName.crm,
          )}
        >
          <WhatWeDoContinueLink
            slug="crm-systems"
            href={serviceDetailHref("crm-systems")}
            label={t("cta.continue")}
            className="relative z-30"
          />
        </Reveal>
      )}
    </>
  );
}
