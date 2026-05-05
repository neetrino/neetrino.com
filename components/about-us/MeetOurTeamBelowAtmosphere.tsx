"use client";

import Image from "next/image";
import {
  ABOUT_MEET_OUR_TEAM_BELOW_ATMOSPHERE_ELLIPSE_SVG_SRC,
  ABOUT_MEET_OUR_TEAM_BELOW_ATMOSPHERE_INSET_WRAPPER_CLASS,
  ABOUT_MEET_OUR_TEAM_BELOW_ATMOSPHERE_SLOT_CLASS,
} from "@/lib/about-us-meet-our-team.constants";
import { DEFAULT_IMAGE_QUALITY } from "@/lib/image-defaults";
import { cn } from "@/lib/utils";

/**
 * Figma `479:1151` Ellipse 30 — horizontal blue wash under mobile Meet our team copy (`top-full` slot).
 */
export function MeetOurTeamBelowAtmosphere() {
  return (
    <div
      className={ABOUT_MEET_OUR_TEAM_BELOW_ATMOSPHERE_SLOT_CLASS}
      aria-hidden
      data-name="Ellipse 30"
      data-node-id="479:1151"
    >
      <div className="relative size-full overflow-visible">
        <div className={cn(ABOUT_MEET_OUR_TEAM_BELOW_ATMOSPHERE_INSET_WRAPPER_CLASS)}>
          <div className="relative size-full min-h-px min-w-px">
            <Image
              src={ABOUT_MEET_OUR_TEAM_BELOW_ATMOSPHERE_ELLIPSE_SVG_SRC}
              alt=""
              fill
              unoptimized
              quality={DEFAULT_IMAGE_QUALITY}
              className="pointer-events-none block max-w-none object-fill select-none"
              sizes="100vw"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
