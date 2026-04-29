"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import {
  EXPLORE_PILL_HOVER_FLARE_EXTRA_CLASS,
  EXPLORE_PILL_HOVER_FLARE_POSITION_CLASS,
} from "@/components/neetrino-home/explore-hover-flare.constants";
import { ExploreHoverFlare } from "@/components/neetrino-home/ExploreHoverFlare";
import {
  homeExplorePillEllipseUnderlayFromStartClassName,
  homeExplorePillLinkCenterInGroupClassName,
  homeExplorePillLinkStartVerticallyInGroupClassName,
  homeExplorePillWidthDefaultClassName,
  homeExplorePillWidthHyClassName,
  homeExplorePillWidthRuClassName,
} from "@/lib/home-explore-pill-layout";
import { cn } from "@/lib/utils";
import { imgEllipse3463, imgSafearea1 } from "./figma-assets";

type Group2Props = {
  className?: string;
  property1?: "Default" | "Variant2";
  exploreHref: string;
  /** `start`: pill’s left edge matches wrapper left (use with column `left-*`). */
  exploreLinkAlign?: "center" | "start";
};

export function Group2({ className, exploreHref, exploreLinkAlign = "center" }: Group2Props) {
  const t = useTranslations();
  const locale = useLocale();
  const explorePillWidthClassName =
    locale === "hy"
      ? homeExplorePillWidthHyClassName
      : locale === "ru"
        ? homeExplorePillWidthRuClassName
        : homeExplorePillWidthDefaultClassName;

  return (
    <div
      className={className ? `group z-20 ${className}` : "group relative z-20 h-[276px] w-[642px]"}
      data-node-id="19:364"
    >
      <Link
        href={exploreHref}
        className={cn(
          "pointer-events-auto absolute z-10 flex h-[56px] items-center justify-between gap-2 overflow-hidden rounded-[40px] border border-solid border-[#6a92ff] bg-black pl-[23px] pr-[17px] no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6a92ff]",
          exploreLinkAlign === "start"
            ? homeExplorePillLinkStartVerticallyInGroupClassName
            : homeExplorePillLinkCenterInGroupClassName,
          explorePillWidthClassName,
        )}
        data-name="Button 2"
        data-node-id="19:370"
      >
        <span
          className="shrink-0 font-[family-name:var(--font-dm-sans)] text-[18px] font-medium leading-[24px] text-white whitespace-nowrap"
          data-node-id="19:373"
          style={{ fontVariationSettings: "'opsz' 14" }}
        >
          {t("cta.explore")}
        </span>
        <div
          className="relative z-10 size-[20px] shrink-0 overflow-clip"
          data-name="Right"
          data-node-id="19:374"
        >
          <div
            className="absolute inset-[8.33%]"
            data-name="safearea"
            data-node-id="I19:374;21:1594"
          >
            <Image
              alt=""
              width={2400}
              height={2400}
              className="absolute block max-w-none size-full"
              src={imgSafearea1}
            />
          </div>
        </div>
        <div
          className={cn(
            "pointer-events-none absolute top-[39px] h-[31px] w-[88px]",
            homeExplorePillEllipseUnderlayFromStartClassName,
          )}
          data-node-id="19:375"
        >
          <div className="absolute inset-[-45.16%_-15.91%]">
            <Image
              alt=""
              width={2400}
              height={2400}
              className="block max-w-none size-full"
              src={imgEllipse3463}
            />
          </div>
        </div>
      </Link>
      <ExploreHoverFlare
        positionClassName={EXPLORE_PILL_HOVER_FLARE_POSITION_CLASS}
        className={EXPLORE_PILL_HOVER_FLARE_EXTRA_CLASS}
      />
    </div>
  );
}
