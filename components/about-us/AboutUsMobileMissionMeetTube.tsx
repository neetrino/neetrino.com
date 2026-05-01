"use client";

import { cn } from "@/lib/utils";
import {
  ABOUT_US_MOBILE_MISSION_MEET_TUBE_EXTEND_BELOW_PX,
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
        "pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 rounded-full select-none",
        "bg-gradient-to-r from-[#161618] via-[#2b2b30] to-[#141416]",
        "shadow-[inset_1px_0_10px_rgba(255,255,255,0.07),inset_-3px_0_16px_rgba(0,0,0,0.55)]",
        "ring-1 ring-white/[0.05]",
      )}
      style={{
        zIndex: ABOUT_US_MOBILE_MISSION_MEET_TUBE_Z_INDEX,
        width: `min(${ABOUT_US_MOBILE_MISSION_MEET_TUBE_WIDTH_PX}px, max(3rem, 18vw))`,
        bottom: -ABOUT_US_MOBILE_MISSION_MEET_TUBE_EXTEND_BELOW_PX,
      }}
      aria-hidden
      data-node-id="479:1275"
    />
  );
}
