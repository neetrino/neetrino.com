"use client";

import type { ReactNode } from "react";
import {
  ABOUT_MOBILE_MISSION_ARTICLE_STACK_CLASS,
  ABOUT_MOBILE_MISSION_BODY_PLACEMENT_CLASS,
  ABOUT_MOBILE_MISSION_BODY_TEXT_ALIGN_CLASS,
  ABOUT_MOBILE_MISSION_HEADING_NUDGE_CLASS,
  ABOUT_MOBILE_MISSION_STACK_OFFSET_DOWN_CLASS,
  ABOUT_MOBILE_MISSION_VISION_BODY_MARGIN_TOP_CLASS,
  ABOUT_MOBILE_MISSION_VISION_BODY_COPY_TEXT_CLASS,
  ABOUT_MOBILE_VISION_ARTICLE_STACK_CLASS,
  ABOUT_MOBILE_VISION_BODY_NUDGE_CLASS,
  ABOUT_MOBILE_VISION_BODY_PLACEMENT_CLASS,
  ABOUT_MOBILE_VISION_BODY_TEXT_ALIGN_CLASS,
  ABOUT_MOBILE_VISION_COLUMN_CONTENT_ABOVE_ATMOSPHERE_CLASS,
  ABOUT_MOBILE_MISSION_VISION_TITLE_TEXT_CLASS,
  ABOUT_MOBILE_VISION_HEADING_NUDGE_CLASS,
  ABOUT_MOBILE_VISION_STACK_OFFSET_UP_CLASS,
} from "@/lib/about-us-mobile-mission-vision.constants";
import {
  ABOUT_MOBILE_WHY_CHOOSE_REFLECTION_BLUR_OFFSET_CLASS,
  ABOUT_MOBILE_WHY_CHOOSE_REFLECTION_FIGMA_BLUR_OPACITY_CLASS,
} from "@/lib/about-us-mobile-why-choose.constants";
import { AboutUsMobileMissionVisionAtmosphere } from "@/components/about-us/AboutUsMobileMissionVisionAtmosphere";
import { cn } from "@/lib/utils";

const MISSION_VISION_TITLE_SHARP_CLASS = cn(ABOUT_MOBILE_MISSION_VISION_TITLE_TEXT_CLASS);

const MISSION_VISION_TITLE_BLUR_CLASS = cn(
  MISSION_VISION_TITLE_SHARP_CLASS,
  ABOUT_MOBILE_WHY_CHOOSE_REFLECTION_FIGMA_BLUR_OPACITY_CLASS,
);

type MissionVisionHeadingAlign = "left" | "right";

function MissionVisionReflectedHeading({
  align,
  children,
}: {
  align: MissionVisionHeadingAlign;
  children: ReactNode;
}) {
  const alignClass = align === "left" ? "items-start text-left" : "items-end text-right";

  return (
    <div className={cn("flex w-full min-w-0 flex-col", alignClass)}>
      <h2 className={cn("relative z-[1] m-0 max-w-full", alignClass)}>
        <p className={cn("m-0 leading-[0]", MISSION_VISION_TITLE_SHARP_CLASS)}>{children}</p>
      </h2>
      <div
        className={cn(
          "pointer-events-none flex w-full max-w-full shrink-0",
          ABOUT_MOBILE_WHY_CHOOSE_REFLECTION_BLUR_OFFSET_CLASS,
          align === "left" ? "justify-start" : "justify-end",
        )}
        aria-hidden
      >
        <div className="-scale-y-100 flex-none">
          <div className={cn(MISSION_VISION_TITLE_BLUR_CLASS, alignClass)}>
            <p className="m-0 leading-[0]">{children}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Mobile Mission + Vision — Figma-style split alignment (mission left, vision right), reflected titles.
 */
export function AboutUsMobileMissionVisionSection({
  missionHeading,
  missionBody,
  visionHeading,
  visionBody,
}: {
  missionHeading: ReactNode;
  missionBody: string;
  visionHeading: ReactNode;
  visionBody: string;
}) {
  return (
    <section className="grid grid-cols-1 gap-10 py-10 sm:grid-cols-2 sm:gap-6">
      <article className={cn("min-w-0 text-left", ABOUT_MOBILE_MISSION_ARTICLE_STACK_CLASS)}>
        <div className={ABOUT_MOBILE_MISSION_STACK_OFFSET_DOWN_CLASS}>
          <div className={ABOUT_MOBILE_MISSION_HEADING_NUDGE_CLASS}>
            <MissionVisionReflectedHeading align="left">
              {missionHeading}
            </MissionVisionReflectedHeading>
          </div>
          <p
            className={cn(
              ABOUT_MOBILE_MISSION_VISION_BODY_MARGIN_TOP_CLASS,
              ABOUT_MOBILE_MISSION_VISION_BODY_COPY_TEXT_CLASS,
              "whitespace-pre-line",
              ABOUT_MOBILE_MISSION_BODY_PLACEMENT_CLASS,
              ABOUT_MOBILE_MISSION_BODY_TEXT_ALIGN_CLASS,
            )}
          >
            {missionBody}
          </p>
        </div>
      </article>
      <article
        className={cn(
          "min-w-0 overflow-visible text-right",
          ABOUT_MOBILE_VISION_ARTICLE_STACK_CLASS,
        )}
      >
        <AboutUsMobileMissionVisionAtmosphere />
        <div
          className={cn(
            ABOUT_MOBILE_VISION_COLUMN_CONTENT_ABOVE_ATMOSPHERE_CLASS,
            ABOUT_MOBILE_VISION_STACK_OFFSET_UP_CLASS,
          )}
        >
          <div className={ABOUT_MOBILE_VISION_HEADING_NUDGE_CLASS}>
            <MissionVisionReflectedHeading align="right">
              {visionHeading}
            </MissionVisionReflectedHeading>
          </div>
          <p
            className={cn(
              ABOUT_MOBILE_MISSION_VISION_BODY_MARGIN_TOP_CLASS,
              ABOUT_MOBILE_MISSION_VISION_BODY_COPY_TEXT_CLASS,
              "whitespace-pre-line",
              ABOUT_MOBILE_VISION_BODY_PLACEMENT_CLASS,
              ABOUT_MOBILE_VISION_BODY_TEXT_ALIGN_CLASS,
              ABOUT_MOBILE_VISION_BODY_NUDGE_CLASS,
            )}
          >
            {visionBody}
          </p>
        </div>
      </article>
    </section>
  );
}
