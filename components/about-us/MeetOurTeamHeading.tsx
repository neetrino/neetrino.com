"use client";

import { useTranslations } from "next-intl";
import { MeetOurTeamCollaborationImage } from "@/components/about-us/MeetOurTeamCollaborationImage";
import { MeetOurTeamCollaborationImageMobile } from "@/components/about-us/MeetOurTeamCollaborationImageMobile";
import { MeetOurTeamExplorePill } from "@/components/about-us/MeetOurTeamExplorePill";
import { interSans } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import {
  ABOUT_MEET_OUR_TEAM_EXPLORE_PILL_MARGIN_TOP_PX,
  ABOUT_MEET_OUR_TEAM_HEADING_INSET_FROM_CANVAS_LEFT_PX,
  ABOUT_MEET_OUR_TEAM_MOBILE_EXPLORE_PILL_MARGIN_TOP_PX,
  ABOUT_MEET_OUR_TEAM_MOBILE_GAP_ABOVE_FOOTER_PX,
  ABOUT_MEET_OUR_TEAM_HEADING_TOP_PX,
  ABOUT_MEET_OUR_TEAM_ILLUSTRATION_INSET_RIGHT_PX,
  ABOUT_MEET_OUR_TEAM_MOBILE_TEXT_COLUMN_MAX_WIDTH_PX,
  ABOUT_MEET_OUR_TEAM_TEXT_COLUMN_MAX_WIDTH_PX,
} from "@/lib/about-us-meet-our-team.constants";

/** Same stack as `AboutUsFigmaBlock2` mission/vision titles (335:1168 / 335:1169). */
const MEET_OUR_TEAM_SHARP_TITLE_BASE_CLASS = cn(
  interSans.className,
  "relative z-[1] m-0 flex w-full flex-col justify-center leading-[0] text-[35px] font-black italic text-white",
);

/** Blur row inner — matches Block2 `blur-[8px] … opacity-50 … leading-[0]`. */
const MEET_OUR_TEAM_BLUR_TITLE_BASE_CLASS = cn(
  interSans.className,
  "relative flex w-full flex-col justify-center leading-[0] text-[35px] font-black italic text-white blur-[8px] opacity-50",
);

/** Gap between sharp line and blur row (tuned below default Block2 ~30px). */
const MEET_OUR_TEAM_BLUR_ROW_OFFSET_CLASS = "pt-[5px]";

/** Figma 453:2103 — same tone as Block2 story copy (`Inter` extralight 16 / 24). */
const MEET_OUR_TEAM_INTRO_CLASS = cn(
  interSans.className,
  "m-0 max-w-[min(100%,39rem)] whitespace-pre-line text-[16px] font-extralight leading-[24px] text-white not-italic",
);

function MeetOurTeamTitleLineParts() {
  const t = useTranslations("aboutPage");
  return (
    <>
      <span className="leading-[35px] text-[#fff]">{t("meetOurTeamPrefix")}</span>
      <span className="leading-[35px] text-[#ff7500]">{t("meetOurTeamAccent")}</span>
    </>
  );
}

type MeetOurTeamIntroTranslationKey = "meetOurTeamIntro" | "meetOurTeamIntroMobile";

function MeetOurTeamHeadingStack({
  align,
  explorePillMarginTopPx = ABOUT_MEET_OUR_TEAM_EXPLORE_PILL_MARGIN_TOP_PX,
  meetOurTeamIntroTranslationKey = "meetOurTeamIntro",
  textColumnMaxWidthPx,
}: {
  align: "left" | "center";
  /** Gap intro → Explore pill (desktop default from constants). */
  explorePillMarginTopPx?: number;
  /** `meetOurTeamIntro` = desktop flow copy; `meetOurTeamIntroMobile` = manual line breaks. */
  meetOurTeamIntroTranslationKey?: MeetOurTeamIntroTranslationKey;
  /** Desktop row with illustration — cap copy width so it does not overlap art. */
  textColumnMaxWidthPx?: number;
}) {
  const t = useTranslations("aboutPage");
  const isLeft = align === "left";
  const widthClass = isLeft
    ? textColumnMaxWidthPx !== undefined
      ? "whitespace-normal"
      : "max-w-[min(100%,52rem)] whitespace-normal"
    : "w-full px-1";

  const textColumnStyle =
    isLeft && textColumnMaxWidthPx !== undefined
      ? ({ maxWidth: `min(100%, ${textColumnMaxWidthPx}px)` } as const)
      : undefined;

  return (
    <div
      className={cn(
        "relative flex w-full min-w-0 flex-col",
        isLeft ? "items-start" : "items-center",
        widthClass,
      )}
      style={textColumnStyle}
    >
      <h2
        className={cn(
          MEET_OUR_TEAM_SHARP_TITLE_BASE_CLASS,
          isLeft ? "text-left" : "text-center",
          widthClass,
        )}
        data-node-id="453:2101"
      >
        <p className="m-0 leading-[0]">
          <MeetOurTeamTitleLineParts />
        </p>
      </h2>
      <div
        className={cn(
          "pointer-events-none flex w-full shrink-0",
          isLeft ? "items-start justify-start" : "items-center justify-center",
          MEET_OUR_TEAM_BLUR_ROW_OFFSET_CLASS,
        )}
        aria-hidden
        data-node-id="453:2102"
      >
        <div className="-scale-y-100 flex-none">
          <div
            className={cn(
              MEET_OUR_TEAM_BLUR_TITLE_BASE_CLASS,
              isLeft ? "text-left" : "text-center",
              widthClass,
            )}
          >
            <p className="m-0 leading-[0]">
              <MeetOurTeamTitleLineParts />
            </p>
          </div>
        </div>
      </div>
      <div
        className={cn(
          "mt-6 w-full shrink-0",
          isLeft ? "text-left" : "mx-auto max-w-[min(100%,36rem)] text-left",
        )}
        data-node-id="453:2103"
      >
        <p className={MEET_OUR_TEAM_INTRO_CLASS}>{t(meetOurTeamIntroTranslationKey)}</p>
      </div>
      <div
        className={cn(
          "relative z-10 flex w-full shrink-0",
          isLeft ? "justify-start" : "justify-center",
        )}
        style={{ marginTop: explorePillMarginTopPx }}
      >
        <MeetOurTeamExplorePill align={isLeft ? "start" : "center"} />
      </div>
    </div>
  );
}

type MeetOurTeamHeadingProps = {
  /** Desktop: absolute layer in Figma canvas + art. Mobile: stack + `public/` hero art overlay. */
  variant: "desktop-figma" | "mobile";
};

/**
 * “Meet our team” section title (Figma NEETRINO-WEB node 453:2101).
 */
export function MeetOurTeamHeading({ variant }: MeetOurTeamHeadingProps) {
  if (variant === "mobile") {
    return (
      <section
        className="meet-our-team-mobile-section relative isolate overflow-visible pt-0"
        style={{ marginBottom: ABOUT_MEET_OUR_TEAM_MOBILE_GAP_ABOVE_FOOTER_PX }}
      >
        <div className="relative z-10">
          <MeetOurTeamHeadingStack
            align="left"
            explorePillMarginTopPx={ABOUT_MEET_OUR_TEAM_MOBILE_EXPLORE_PILL_MARGIN_TOP_PX}
            meetOurTeamIntroTranslationKey="meetOurTeamIntroMobile"
            textColumnMaxWidthPx={ABOUT_MEET_OUR_TEAM_MOBILE_TEXT_COLUMN_MAX_WIDTH_PX}
          />
        </div>
        <div className="pointer-events-none absolute bottom-0 left-1/2 z-[80] w-screen min-w-0 max-w-[100vw] -translate-x-1/2 overflow-x-hidden leading-none">
          <div className="about-meet-our-team-mobile-illustration-row min-w-0 max-w-none leading-none">
            <MeetOurTeamCollaborationImageMobile />
          </div>
        </div>
      </section>
    );
  }

  return (
    <div
      className="absolute right-0 left-0 z-10 overflow-visible"
      style={{
        top: ABOUT_MEET_OUR_TEAM_HEADING_TOP_PX,
        paddingRight: ABOUT_MEET_OUR_TEAM_ILLUSTRATION_INSET_RIGHT_PX,
      }}
      data-name="Meet Our Team"
    >
      <div
        className="mx-auto flex w-full max-w-[1440px] flex-row items-start justify-between gap-0"
        style={{ paddingLeft: ABOUT_MEET_OUR_TEAM_HEADING_INSET_FROM_CANVAS_LEFT_PX }}
      >
        <MeetOurTeamHeadingStack
          align="left"
          textColumnMaxWidthPx={ABOUT_MEET_OUR_TEAM_TEXT_COLUMN_MAX_WIDTH_PX}
        />
        <MeetOurTeamCollaborationImage />
      </div>
    </div>
  );
}
