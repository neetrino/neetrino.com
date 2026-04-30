"use client";

import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import {
  EXPLORE_PILL_HOVER_FLARE_EXTRA_CLASS,
  EXPLORE_PILL_HOVER_FLARE_POSITION_CLASS,
} from "@/components/neetrino-home/explore-hover-flare.constants";
import { ExploreHoverFlare } from "@/components/neetrino-home/ExploreHoverFlare";
import { imgEllipse3463, imgSafearea1 } from "@/components/neetrino-home/figma-assets";
import { Link } from "@/i18n/navigation";
import {
  homeExplorePillEllipseUnderlayFromStartClassName,
  homeExplorePillLinkCenterInGroupClassName,
  homeExplorePillLinkStartVerticallyInGroupClassName,
  homeExplorePillWidthDefaultClassName,
  homeExplorePillWidthHyClassName,
  homeExplorePillWidthRuClassName,
} from "@/lib/home-explore-pill-layout";
import { cn } from "@/lib/utils";

type MeetOurTeamExplorePillProps = {
  /** `start`: left column (desktop); `center`: mobile stack. */
  align: "start" | "center";
  /** Defaults to `/team` (Meet our team). */
  href?: string;
};

/**
 * Same Explore pill as home `Group2` (arrow asset + ellipse + flare), with locale-aware `Link`.
 */
export function MeetOurTeamExplorePill({ align, href = "/team" }: MeetOurTeamExplorePillProps) {
  const t = useTranslations();
  const locale = useLocale();
  const explorePillWidthClassName =
    locale === "hy"
      ? homeExplorePillWidthHyClassName
      : locale === "ru"
        ? homeExplorePillWidthRuClassName
        : homeExplorePillWidthDefaultClassName;

  return (
    <div className="group relative z-10 h-[56px] w-[206px] shrink-0 overflow-visible">
      <Link
        href={href}
        className={cn(
          "pointer-events-auto absolute z-10 flex h-[56px] cursor-pointer items-center justify-between gap-2 overflow-hidden rounded-[40px] border border-solid border-[#6a92ff] bg-black pl-[23px] pr-[17px] no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6a92ff]",
          align === "start"
            ? homeExplorePillLinkStartVerticallyInGroupClassName
            : homeExplorePillLinkCenterInGroupClassName,
          explorePillWidthClassName,
        )}
      >
        <span
          className="shrink-0 font-[family-name:var(--font-dm-sans)] text-[18px] font-medium leading-[24px] text-white whitespace-nowrap"
          style={{ fontVariationSettings: "'opsz' 14" }}
        >
          {t("cta.explore")}
        </span>
        <div className="relative z-10 size-[20px] shrink-0 overflow-clip">
          <div className="absolute inset-[8.33%]">
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
