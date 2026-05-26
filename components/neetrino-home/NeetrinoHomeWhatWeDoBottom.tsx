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
} from "@/lib/what-we-do-desktop-continue-cta-layout";
import { cn } from "@/lib/utils";
import { Group } from "./Group";
import { Group1 } from "./Group1";
import { img2761, imgCloudInfrastructure, imgPc1 } from "@/lib/figma-assets";

const O = HOME_DESKTOP_WHAT_WE_DO_REVEAL_ORDER;

export function NeetrinoHomeWhatWeDoBottom() {
  const t = useTranslations();
  const locale = useLocale();
  const isCenteredTileCopy = isWhatWeDoCardCopyCenteredLocale(locale);
  const headerDelay = homeDesktopWhatWeDoRevealDelayMs(O.header);
  const websiteDelay = homeDesktopWhatWeDoRevealDelayMs(O.website);
  const mobileDelay = homeDesktopWhatWeDoRevealDelayMs(O.mobile);
  const saasDelay = homeDesktopWhatWeDoRevealDelayMs(O.saas);
  const aiDelay = homeDesktopWhatWeDoRevealDelayMs(O.ai);
  const exploreDelay = homeDesktopWhatWeDoRevealDelayMs(O.exploreCta);

  return (
    <>
      <Reveal
        profile="slow"
        delayMs={saasDelay}
        className="pointer-events-none absolute bg-[#292929] h-[553px] left-[590px] rounded-[19px] top-[129px] w-[258px]"
        data-node-id="90:544"
      />
      <Reveal
        profile="slow"
        delayMs={saasDelay}
        className={cn(
          "pointer-events-none absolute flex flex-col justify-center font-extralight not-italic leading-[0] text-[20px] text-white top-[577.5px] -translate-y-1/2",
          isCenteredTileCopy
            ? cn(
                whatWeDoDesktopContinueCenterLeftClassName.saas,
                "-translate-x-1/2 max-w-[220px] text-center",
              )
            : "left-[792px] -translate-x-full text-right whitespace-nowrap",
        )}
        data-node-id="90:545"
      >
        <p className="leading-[25px]">{t("home.whatWeDo.cards.saas.subtitle1")}</p>
      </Reveal>
      <Reveal
        profile="slow"
        delayMs={saasDelay}
        className={cn(
          "pointer-events-none absolute flex flex-col justify-center font-bold not-italic leading-[0] text-[22px] text-white top-[199.5px] -translate-y-1/2",
          isCenteredTileCopy
            ? cn(
                whatWeDoDesktopContinueCenterLeftClassName.saas,
                "-translate-x-1/2 max-w-[220px] text-center",
              )
            : "left-[619px] whitespace-nowrap",
        )}
        data-node-id="90:546"
      >
        <p className="leading-[35px]">
          {t("home.whatWeDo.cards.saas.title1")} {t("home.whatWeDo.cards.saas.title2")}
        </p>
      </Reveal>
      <Reveal
        profile="slow"
        delayMs={saasDelay}
        className="pointer-events-none absolute h-[190px] left-[622px] top-[310px] w-[195px]"
        data-node-id="90:548"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <Image
            alt=""
            width={2400}
            height={2400}
            className="absolute h-[140.91%] left-[-17.24%] max-w-none top-[-16.67%] w-[137.44%]"
            src={imgCloudInfrastructure}
          />
        </div>
      </Reveal>
      <Reveal
        profile="slow"
        delayMs={mobileDelay}
        className="pointer-events-none absolute h-[183px] left-[392px] top-[308px] w-[114px]"
        data-node-id="90:549"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <Image
            alt=""
            width={2400}
            height={2400}
            className="absolute h-[155.42%] left-[-74.48%] max-w-none top-[-27.71%] w-[248.96%]"
            src={imgPc1}
          />
        </div>
      </Reveal>
      <Reveal
        profile="slow"
        delayMs={exploreDelay}
        className="-translate-x-1/2 absolute h-[276px] left-[calc(50%+0.5px)] top-[655px] w-[642px]"
      >
        <Group
          className="relative h-full w-full"
          exploreHref="/services"
          ellipseUnderlayFromEnd={isCenteredTileCopy}
        />
      </Reveal>
      <Reveal
        profile="slow"
        delayMs={aiDelay}
        className="pointer-events-none absolute h-[231px] left-[1148px] top-[289px] w-[221px]"
        data-node-id="90:552"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <Image
            alt=""
            width={2400}
            height={2400}
            className="absolute inset-0 h-full w-full max-w-none object-contain p-[16px]"
            src={img2761}
          />
        </div>
      </Reveal>
      <Reveal
        profile="slow"
        delayMs={headerDelay}
        className="pointer-events-none absolute left-[50px] top-[6px] h-[72px] w-[min(420px,40vw)]"
        data-node-id="90:553"
      >
        <div
          className="-translate-y-1/2 absolute flex flex-col font-medium justify-center left-[6px] not-italic text-[16px] text-white top-[17.5px] whitespace-nowrap"
          data-node-id="90:554"
        >
          <p className="leading-[35px]">{t("nav.services")}</p>
        </div>
        <div
          className="-translate-y-1/2 absolute flex flex-col font-black italic justify-center left-0 text-[35px] text-white top-[52.5px] whitespace-nowrap"
          data-node-id="90:555"
        >
          <p>
            <span className="leading-[35px]">{`${t("home.whatWeDo.titleBefore")} `}</span>
            <span className="leading-[35px] text-[#ff7500]">{t("home.whatWeDo.titleAccent")}</span>
          </p>
        </div>
      </Reveal>
      <Reveal
        profile="slow"
        delayMs={websiteDelay}
        className="absolute h-[553px] left-[50px] top-[129px] w-[258px]"
      >
        <Group1 className="relative h-full w-full" />
      </Reveal>
      <Reveal
        profile="slow"
        delayMs={saasDelay}
        className={cn(
          "pointer-events-auto absolute z-30 -translate-x-1/2 top-[608px]",
          whatWeDoDesktopContinueCenterLeftClassName.saas,
        )}
      >
        <WhatWeDoContinueLink
          slug="saas-development"
          href={serviceDetailHref("saas-development")}
          label={t("cta.continue")}
          className="relative z-30"
        />
      </Reveal>
      <Reveal
        profile="slow"
        delayMs={aiDelay}
        className={cn(
          "pointer-events-auto absolute z-30 -translate-x-1/2 top-[607px]",
          whatWeDoDesktopContinueCenterLeftClassName.ai,
        )}
      >
        <WhatWeDoContinueLink
          slug="ai-product-development"
          href={serviceDetailHref("ai-product-development")}
          label={t("cta.continue")}
          className="relative z-30"
        />
      </Reveal>
    </>
  );
}
