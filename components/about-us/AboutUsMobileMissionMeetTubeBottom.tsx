"use client";

import { FigmaFillImage } from "@/components/shared/FigmaFillImage";
import { imgBottomA, imgBottomB, imgBottomC } from "@/lib/about-us-figma-asset-urls";
import {
  ABOUT_US_MOBILE_MISSION_MEET_TUBE_BOTTOM_A_FRAME_HEIGHT_PX,
  ABOUT_US_MOBILE_MISSION_MEET_TUBE_BOTTOM_A_FRAME_WIDTH_PX,
  ABOUT_US_MOBILE_MISSION_MEET_TUBE_BOTTOM_A_OUTSET_X_PCT,
  ABOUT_US_MOBILE_MISSION_MEET_TUBE_BOTTOM_A_OUTSET_Y_PCT,
  ABOUT_US_MOBILE_MISSION_MEET_TUBE_BOTTOM_B_OUTSET_X_PCT,
  ABOUT_US_MOBILE_MISSION_MEET_TUBE_BOTTOM_B_OUTSET_Y_PCT,
  ABOUT_US_MOBILE_MISSION_MEET_TUBE_BOTTOM_C_OUTSET_X_PCT,
  ABOUT_US_MOBILE_MISSION_MEET_TUBE_BOTTOM_C_OUTSET_Y_PCT,
  ABOUT_US_MOBILE_MISSION_MEET_TUBE_BOTTOM_CB_FRAME_HEIGHT_PX,
  ABOUT_US_MOBILE_MISSION_MEET_TUBE_BOTTOM_CB_FRAME_WIDTH_PX,
  ABOUT_US_MOBILE_MISSION_MEET_TUBE_BOTTOM_Z_INDEX,
  ABOUT_US_MOBILE_MISSION_MEET_TUBE_EXTEND_BELOW_PX,
} from "@/lib/about-us-mobile-mission-meet-tube.constants";
import { DEFAULT_IMAGE_QUALITY } from "@/lib/image-defaults";
import { cn } from "@/lib/utils";

const TUBE_END_IMAGE_SIZES = "(max-width: 720px) 260px, 260px" as const;

type MeetTubeEndRasterProps = {
  src: string;
  frameW: number;
  frameH: number;
  outY: number;
  outX: number;
  overlay?: boolean;
  className?: string;
};

function MeetTubeEndRaster({
  src,
  frameW,
  frameH,
  outY,
  outX,
  overlay,
  className,
}: MeetTubeEndRasterProps) {
  return (
    <div
      className={cn(
        "absolute left-1/2 max-w-none -translate-x-1/2",
        overlay && "mix-blend-overlay",
        className,
      )}
      style={{
        width: `min(${frameW}px, 28vw)`,
        height: `min(${frameH}px, 42vw)`,
      }}
    >
      <div
        className="absolute"
        style={{
          inset: `-${outY}% -${outX}%`,
        }}
      >
        <FigmaFillImage
          src={src}
          sizes={TUBE_END_IMAGE_SIZES}
          quality={DEFAULT_IMAGE_QUALITY}
          loading="lazy"
        />
      </div>
    </div>
  );
}

/**
 * Desktop `AboutUsFigmaBlock1a` tube end — Bottom C → B → A (`335:908`–`335:913`), scaled for mobile.
 */
export function AboutUsMobileMissionMeetTubeBottom() {
  const cbW = ABOUT_US_MOBILE_MISSION_MEET_TUBE_BOTTOM_CB_FRAME_WIDTH_PX;
  const cbH = ABOUT_US_MOBILE_MISSION_MEET_TUBE_BOTTOM_CB_FRAME_HEIGHT_PX;
  const aW = ABOUT_US_MOBILE_MISSION_MEET_TUBE_BOTTOM_A_FRAME_WIDTH_PX;
  const aH = ABOUT_US_MOBILE_MISSION_MEET_TUBE_BOTTOM_A_FRAME_HEIGHT_PX;

  return (
    <div
      className="pointer-events-none absolute left-1/2 w-[min(220px,58vw)] max-w-none -translate-x-1/2 overflow-visible select-none"
      style={{
        zIndex: ABOUT_US_MOBILE_MISSION_MEET_TUBE_BOTTOM_Z_INDEX,
        bottom: -ABOUT_US_MOBILE_MISSION_MEET_TUBE_EXTEND_BELOW_PX,
      }}
      data-name="Background Lights — tube end (mobile)"
      aria-hidden
    >
      <MeetTubeEndRaster
        src={imgBottomC}
        frameW={cbW}
        frameH={cbH}
        outY={ABOUT_US_MOBILE_MISSION_MEET_TUBE_BOTTOM_C_OUTSET_Y_PCT}
        outX={ABOUT_US_MOBILE_MISSION_MEET_TUBE_BOTTOM_C_OUTSET_X_PCT}
        className="bottom-2 z-0"
      />
      <MeetTubeEndRaster
        src={imgBottomB}
        frameW={cbW}
        frameH={cbH}
        outY={ABOUT_US_MOBILE_MISSION_MEET_TUBE_BOTTOM_B_OUTSET_Y_PCT}
        outX={ABOUT_US_MOBILE_MISSION_MEET_TUBE_BOTTOM_B_OUTSET_X_PCT}
        overlay
        className="bottom-1 z-[1]"
      />
      <MeetTubeEndRaster
        src={imgBottomA}
        frameW={aW}
        frameH={aH}
        outY={ABOUT_US_MOBILE_MISSION_MEET_TUBE_BOTTOM_A_OUTSET_Y_PCT}
        outX={ABOUT_US_MOBILE_MISSION_MEET_TUBE_BOTTOM_A_OUTSET_X_PCT}
        overlay
        className="bottom-0 z-[2]"
      />
    </div>
  );
}
