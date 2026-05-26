"use client";

import Image from "next/image";
import type { CSSProperties } from "react";

import {
  HOME_450_HAND_ARC_MID_X_PX,
  HOME_450_HAND_ARC_MID_Y_PX,
  HOME_450_HAND_STRAIGHT_PRESS_X_PX,
  HOME_450_HAND_STRAIGHT_PRESS_Y_PX,
  HOME_450_HAND_POINT_CYCLE_MS,
  HOME_450_HAND_POINT_EASE,
  HOME_450_HAND_ROTATE_MID_DEG,
  HOME_450_HAND_ROTATE_PRESS_DEG,
  HOME_450_HAND_ROTATE_REST_DEG,
  HOME_450_HAND_TRANSFORM_ORIGIN,
} from "@/lib/home-450-hand-point-motion.constants";
import { HOME_DESKTOP_HERO_450_HAND_OBJECT_POSITION_CLASS } from "@/lib/home-desktop-hero-450-hand.constants";
import { img28A } from "@/lib/figma-assets";
import { DEFAULT_IMAGE_QUALITY } from "@/lib/image-defaults";
import { cn } from "@/lib/utils";

type Hero450PointingHandProps = {
  readonly slotClassName: string;
  readonly clipClassName?: string;
  readonly imageSizes: string;
};

/**
 * Robot hand over the purple “450+” tile — fingertip at tile center, half visible from the right.
 */
export function Hero450PointingHand({
  slotClassName,
  clipClassName,
  imageSizes,
}: Hero450PointingHandProps) {
  const pointMotionStyle = {
    ["--home-450-hand-angle-rest" as string]: `${HOME_450_HAND_ROTATE_REST_DEG}deg`,
    ["--home-450-hand-angle-mid" as string]: `${HOME_450_HAND_ROTATE_MID_DEG}deg`,
    ["--home-450-hand-angle-press" as string]: `${HOME_450_HAND_ROTATE_PRESS_DEG}deg`,
    ["--home-450-hand-straight-x-press" as string]: `${HOME_450_HAND_STRAIGHT_PRESS_X_PX}px`,
    ["--home-450-hand-straight-y-press" as string]: `${HOME_450_HAND_STRAIGHT_PRESS_Y_PX}px`,
    ["--home-450-hand-arc-x-mid" as string]: `${HOME_450_HAND_ARC_MID_X_PX}px`,
    ["--home-450-hand-arc-y-mid" as string]: `${HOME_450_HAND_ARC_MID_Y_PX}px`,
    ["--home-450-hand-point-cycle-ms" as string]: `${HOME_450_HAND_POINT_CYCLE_MS}ms`,
    ["--home-450-hand-point-ease" as string]: HOME_450_HAND_POINT_EASE,
    ["--home-450-hand-transform-origin" as string]: HOME_450_HAND_TRANSFORM_ORIGIN,
  } satisfies CSSProperties;

  const hand = (
    <div className={cn(slotClassName)} style={pointMotionStyle} aria-hidden data-name="450-hand">
      <div className="relative size-full overflow-visible">
        <div className="home-450-hand-point-inner absolute inset-0 -scale-y-100 rotate-180">
          <Image
            alt=""
            src={img28A}
            fill
            className={cn("object-contain", HOME_DESKTOP_HERO_450_HAND_OBJECT_POSITION_CLASS)}
            sizes={imageSizes}
            quality={DEFAULT_IMAGE_QUALITY}
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );

  if (clipClassName) {
    return <div className={clipClassName}>{hand}</div>;
  }

  return hand;
}
