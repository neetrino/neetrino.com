"use client";

import { cn } from "@/lib/utils";
import {
  ABOUT_US_MOBILE_MISSION_MEET_TUBE_BORDER_RADIUS_PX,
  ABOUT_US_MOBILE_MISSION_MEET_TUBE_EXTEND_BELOW_PX,
  ABOUT_US_MOBILE_MISSION_MEET_TUBE_WIDTH_FLUID_MIN_REM,
  ABOUT_US_MOBILE_MISSION_MEET_TUBE_WIDTH_FLUID_VW,
  ABOUT_US_MOBILE_MISSION_MEET_TUBE_WIDTH_PX,
  ABOUT_US_MOBILE_MISSION_MEET_TUBE_Z_INDEX,
} from "@/lib/about-us-mobile-mission-meet-tube.constants";

/**
 * Vertical capsule behind Mission → bottom stats on mobile only; ends **before** Meet our team
 * (parent wrapper in `AboutUsMobile`). Figma ref `479:1275`.
 */
export function AboutUsMobileMissionMeetTube() {
  return (
    <div
      className={cn(
        "pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 select-none",
        "overflow-hidden",
        "bg-gradient-to-r from-[#161618] via-[#2a2a2f] to-[#121214]",
        "shadow-[inset_2px_0_14px_rgba(255,255,255,0.09),inset_-4px_0_18px_rgba(0,0,0,0.58),inset_0_1px_0_rgba(255,255,255,0.05),inset_0_-1px_0_rgba(0,0,0,0.25)]",
        "ring-1 ring-white/[0.06]",
      )}
      style={{
        zIndex: ABOUT_US_MOBILE_MISSION_MEET_TUBE_Z_INDEX,
        width: `min(${ABOUT_US_MOBILE_MISSION_MEET_TUBE_WIDTH_PX}px, max(${ABOUT_US_MOBILE_MISSION_MEET_TUBE_WIDTH_FLUID_MIN_REM}rem, ${ABOUT_US_MOBILE_MISSION_MEET_TUBE_WIDTH_FLUID_VW}vw))`,
        bottom: -ABOUT_US_MOBILE_MISSION_MEET_TUBE_EXTEND_BELOW_PX,
        borderRadius: `${ABOUT_US_MOBILE_MISSION_MEET_TUBE_BORDER_RADIUS_PX}px`,
      }}
      aria-hidden
      data-node-id="479:1275"
    />
  );
}
