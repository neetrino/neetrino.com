"use client";

import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { serviceDetailHref } from "@/components/services/service-pages-data";
import { WhatWeDoContinueLink } from "@/components/sections/WhatWeDoContinueLink";
import {
  isWhatWeDoCardCopyCenteredLocale,
  whatWeDoRuWebsiteSubtitleNudgeUpClassName,
} from "@/lib/what-we-do-desktop-continue-cta-layout";
import { cn } from "@/lib/utils";
import { imgPc } from "@/lib/figma-assets";

type Group1Props = {
  className?: string;
  property1?: "Default" | "Variant2";
};

export function Group1({ className }: Group1Props) {
  const t = useTranslations();
  const locale = useLocale();
  const isCenteredTileCopy = isWhatWeDoCardCopyCenteredLocale(locale);

  return (
    <div
      className={`pointer-events-none ${className || "h-[553px] relative w-[258px]"}`}
      data-node-id="1:707"
    >
      <div className="absolute contents inset-0" data-node-id="1:708">
        <div className="absolute bg-[#e8e8f4] inset-0 rounded-[19px]" data-node-id="1:709" />
        <div
          className="absolute inset-[31.1%_4.65%_30.92%_4.65%]"
          data-name="PC"
          data-node-id="1:710"
        >
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <Image
              alt=""
              width={2400}
              height={2400}
              className="absolute h-[177.11%] left-[-29%] max-w-none top-[-38.55%] w-[158%]"
              src={imgPc}
            />
          </div>
        </div>
        <div
          className={cn(
            "absolute inset-[78.84%_11.24%_16.64%_11.24%] flex flex-col justify-center font-extralight not-italic leading-[0] text-[20px] text-[#1f2123]",
            isCenteredTileCopy ? "text-center" : "text-right whitespace-nowrap",
            locale === "ru" && whatWeDoRuWebsiteSubtitleNudgeUpClassName,
          )}
          data-node-id="1:711"
        >
          {isCenteredTileCopy ? (
            <>
              <p className="mb-0 leading-[25px]">{t("home.whatWeDo.cards.website.subtitle1")}</p>
              <p className="leading-[25px]">{t("home.whatWeDo.cards.website.subtitle2")}</p>
            </>
          ) : (
            <p className="leading-[25px]">
              {t("home.whatWeDo.cards.website.subtitle1")}{" "}
              {t("home.whatWeDo.cards.website.subtitle2")}
            </p>
          )}
        </div>
        <div
          className={cn(
            "absolute inset-[9.58%_30.62%_84.09%_30.62%] flex flex-col justify-center font-bold not-italic leading-[0] text-[22px] text-black whitespace-nowrap",
            isCenteredTileCopy && "text-center",
          )}
          data-node-id="1:712"
        >
          <p className="leading-[35px]">{t("home.whatWeDo.cards.website.title1")}</p>
        </div>
      </div>
      <WhatWeDoContinueLink
        slug="website-development"
        href={serviceDetailHref("website-development")}
        label={t("cta.continue")}
        className="pointer-events-auto absolute bottom-[3.25%] left-1/2 z-30 -translate-x-1/2"
      />
    </div>
  );
}
