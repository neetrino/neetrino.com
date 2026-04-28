import Image from "next/image";
import { imgMeetOurTeamCollaboration4532099 } from "@/lib/about-us-figma-asset-urls";
import { DEFAULT_IMAGE_QUALITY } from "@/lib/image-defaults";
import {
  ABOUT_MEET_OUR_TEAM_ILLUSTRATION_FRAME_HEIGHT_PX,
  ABOUT_MEET_OUR_TEAM_ILLUSTRATION_FRAME_WIDTH_PX,
} from "@/lib/about-us-meet-our-team.constants";

/** Raster intrinsic size from exported PNG (Figma asset). */
const MEET_OUR_TEAM_ILLUSTRATION_SOURCE_WIDTH_PX = 848;
const MEET_OUR_TEAM_ILLUSTRATION_SOURCE_HEIGHT_PX = 1264;

/**
 * Figma 453:2099 — team at desk, cropped inside 620×402 like dev mode.
 */
export function MeetOurTeamCollaborationImage() {
  return (
    <div
      className="pointer-events-none relative shrink-0 overflow-hidden"
      style={{
        width: ABOUT_MEET_OUR_TEAM_ILLUSTRATION_FRAME_WIDTH_PX,
        height: ABOUT_MEET_OUR_TEAM_ILLUSTRATION_FRAME_HEIGHT_PX,
      }}
      aria-hidden
      data-name="UX Checklist for a Landing Page_ 10 Points Before Release 1"
      data-node-id="453:2099"
    >
      <Image
        alt=""
        className="absolute h-[230.72%] left-[-0.16%] max-w-none top-[-70.15%] w-[100.32%]"
        height={MEET_OUR_TEAM_ILLUSTRATION_SOURCE_HEIGHT_PX}
        src={imgMeetOurTeamCollaboration4532099}
        width={MEET_OUR_TEAM_ILLUSTRATION_SOURCE_WIDTH_PX}
        quality={DEFAULT_IMAGE_QUALITY}
        sizes={`${ABOUT_MEET_OUR_TEAM_ILLUSTRATION_FRAME_WIDTH_PX}px`}
        loading="lazy"
      />
    </div>
  );
}
