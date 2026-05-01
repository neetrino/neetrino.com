"use client";

import Image from "next/image";
import { img13B } from "@/lib/about-us-figma-asset-urls";
import {
  ABOUT_US_MOBILE_HERO_ROBOT_DESIGN_HEIGHT_PX,
  ABOUT_US_MOBILE_HERO_ROBOT_DESIGN_WIDTH_PX,
  ABOUT_US_MOBILE_HERO_ROBOT_FRAME_WIDTH_CLASS,
  ABOUT_US_MOBILE_HERO_ROBOT_FRAME_WIDTH_SM_CLASS,
  ABOUT_US_MOBILE_HERO_ROBOT_IMAGE_HEIGHT_PCT,
  ABOUT_US_MOBILE_HERO_ROBOT_IMAGE_LEFT_PCT,
  ABOUT_US_MOBILE_HERO_ROBOT_IMAGE_SIZES,
  ABOUT_US_MOBILE_HERO_ROBOT_IMAGE_TOP_PCT,
  ABOUT_US_MOBILE_HERO_ROBOT_IMAGE_WIDTH_PCT,
  ABOUT_US_MOBILE_HERO_ROBOT_ROOT_CLASS,
  ABOUT_US_MOBILE_HERO_ROBOT_TRANSLATE_X_PX,
  ABOUT_US_MOBILE_HERO_ROBOT_TRANSLATE_Y_PX,
  ABOUT_US_MOBILE_HERO_ROBOT_VISUAL_SCALE,
} from "@/lib/about-us-mobile-hero-robot.constants";
import { DEFAULT_IMAGE_QUALITY } from "@/lib/image-defaults";
import { cn } from "@/lib/utils";

/**
 * Figma `479:1236` — hero `13 B` robot (mobile About only). Layout numbers live in
 * `lib/about-us-mobile-hero-robot.constants.ts`.
 */
export function AboutUsMobileHeroRobot() {
  return (
    <div
      className={cn(
        ABOUT_US_MOBILE_HERO_ROBOT_ROOT_CLASS,
        ABOUT_US_MOBILE_HERO_ROBOT_FRAME_WIDTH_CLASS,
        ABOUT_US_MOBILE_HERO_ROBOT_FRAME_WIDTH_SM_CLASS,
      )}
      style={{
        aspectRatio: `${ABOUT_US_MOBILE_HERO_ROBOT_DESIGN_WIDTH_PX} / ${ABOUT_US_MOBILE_HERO_ROBOT_DESIGN_HEIGHT_PX}`,
        transform: `translate(${ABOUT_US_MOBILE_HERO_ROBOT_TRANSLATE_X_PX}px, ${ABOUT_US_MOBILE_HERO_ROBOT_TRANSLATE_Y_PX}px)`,
      }}
      aria-hidden
      data-name="13 B"
      data-node-id="479:1236"
    >
      <div
        className="size-full origin-top-right"
        style={{
          transform: `scale(${ABOUT_US_MOBILE_HERO_ROBOT_VISUAL_SCALE})`,
        }}
      >
        <div className="size-full scale-x-[-1]">
          <div className="relative size-full overflow-hidden">
            <Image
              alt=""
              src={img13B}
              width={ABOUT_US_MOBILE_HERO_ROBOT_DESIGN_WIDTH_PX}
              height={ABOUT_US_MOBILE_HERO_ROBOT_DESIGN_HEIGHT_PX}
              sizes={ABOUT_US_MOBILE_HERO_ROBOT_IMAGE_SIZES}
              className="pointer-events-none absolute max-w-none"
              style={{
                width: `${ABOUT_US_MOBILE_HERO_ROBOT_IMAGE_WIDTH_PCT}%`,
                height: `${ABOUT_US_MOBILE_HERO_ROBOT_IMAGE_HEIGHT_PCT}%`,
                left: `${ABOUT_US_MOBILE_HERO_ROBOT_IMAGE_LEFT_PCT}%`,
                top: `${ABOUT_US_MOBILE_HERO_ROBOT_IMAGE_TOP_PCT}%`,
              }}
              quality={DEFAULT_IMAGE_QUALITY}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
