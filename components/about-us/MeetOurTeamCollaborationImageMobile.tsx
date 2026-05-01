import Image from "next/image";
import { DEFAULT_IMAGE_QUALITY } from "@/lib/image-defaults";
import {
  ABOUT_MEET_OUR_TEAM_MOBILE_ILLUSTRATION_DECODE_TARGET_PX,
  ABOUT_MEET_OUR_TEAM_MOBILE_ILLUSTRATION_PUBLIC_PATH,
  ABOUT_MEET_OUR_TEAM_MOBILE_ILLUSTRATION_ROW_WIDTH_PERCENT,
} from "@/lib/about-us-meet-our-team.constants";

/**
 * Mobile Meet our team — author art from `public/images/about-us/`; overlay in `MeetOurTeamHeading`.
 * Layout: `globals.css` `.about-meet-our-team-mobile-illustration-*`.
 */
export function MeetOurTeamCollaborationImageMobile() {
  const rowPct = ABOUT_MEET_OUR_TEAM_MOBILE_ILLUSTRATION_ROW_WIDTH_PERCENT;
  const sizesHint = Math.round(
    ABOUT_MEET_OUR_TEAM_MOBILE_ILLUSTRATION_DECODE_TARGET_PX * (rowPct / 100),
  );
  return (
    <div
      className="about-meet-our-team-mobile-illustration-frame pointer-events-none"
      aria-hidden
      data-name="Meet our team collaboration (mobile)"
    >
      <Image
        fill
        alt=""
        className="about-meet-our-team-mobile-illustration-img"
        sizes={`(max-width: 1023px) ${rowPct}vw, ${sizesHint}px`}
        src={ABOUT_MEET_OUR_TEAM_MOBILE_ILLUSTRATION_PUBLIC_PATH}
        quality={DEFAULT_IMAGE_QUALITY}
        loading="eager"
      />
    </div>
  );
}
