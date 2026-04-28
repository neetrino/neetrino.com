/** Stats strip `AboutUsFigmaBlock3` — `top-[3527px]`, height 92px (Figma 335:1441). */
export const ABOUT_STATS_BOTTOM_ROW_TOP_PX = 3527;
export const ABOUT_STATS_BOTTOM_ROW_HEIGHT_PX = 92;

export const ABOUT_STATS_BOTTOM_ROW_BOTTOM_PX =
  ABOUT_STATS_BOTTOM_ROW_TOP_PX + ABOUT_STATS_BOTTOM_ROW_HEIGHT_PX;

/** Vertical gap between stats row and Meet Our Team heading (desktop). */
export const ABOUT_MEET_OUR_TEAM_GAP_BELOW_STATS_PX = 104;

/** Extra nudge: lower the whole Meet Our Team block (desktop). */
export const ABOUT_MEET_OUR_TEAM_BLOCK_OFFSET_DOWN_PX = 30;

/** Absolute `top` for `MeetOurTeamHeading` desktop (node 453:2101). */
export const ABOUT_MEET_OUR_TEAM_HEADING_TOP_PX =
  ABOUT_STATS_BOTTOM_ROW_BOTTOM_PX +
  ABOUT_MEET_OUR_TEAM_GAP_BELOW_STATS_PX +
  ABOUT_MEET_OUR_TEAM_BLOCK_OFFSET_DOWN_PX;

/** Figma 453:2101 — distance from left edge of the 1440px ABOUT canvas to the title. */
export const ABOUT_MEET_OUR_TEAM_HEADING_INSET_FROM_CANVAS_LEFT_PX = 132;

/** Figma 453:2099 — illustration frame (`MeetOurTeamCollaborationImage`). */
export const ABOUT_MEET_OUR_TEAM_ILLUSTRATION_FRAME_WIDTH_PX = 620;
export const ABOUT_MEET_OUR_TEAM_ILLUSTRATION_FRAME_HEIGHT_PX = 402;
/** Figma ABOUT canvas: `1440 − (x + w)` for node 453:2099. */
export const ABOUT_MEET_OUR_TEAM_ILLUSTRATION_INSET_RIGHT_PX = 52;

const ABOUT_FIGMA_CANVAS_WIDTH_PX = 1440;

/** Room for title + intro + pill left of the illustration on desktop. */
export const ABOUT_MEET_OUR_TEAM_TEXT_COLUMN_MAX_WIDTH_PX =
  ABOUT_FIGMA_CANVAS_WIDTH_PX -
  ABOUT_MEET_OUR_TEAM_HEADING_INSET_FROM_CANVAS_LEFT_PX -
  ABOUT_MEET_OUR_TEAM_ILLUSTRATION_INSET_RIGHT_PX -
  ABOUT_MEET_OUR_TEAM_ILLUSTRATION_FRAME_WIDTH_PX;

/** Gap intro → Explore pill: ~`mt-12` (48px) + 25px lower placement. */
export const ABOUT_MEET_OUR_TEAM_EXPLORE_PILL_MARGIN_TOP_PX = 48 + 25;

/** Title + blur + intro + Explore pill (`MeetOurTeamHeading`). */
export const ABOUT_MEET_OUR_TEAM_SECTION_HEIGHT_PX = 384 + 25;

/** Space below the Meet Our Team block so root min-height clears scroll. */
export const ABOUT_MEET_OUR_TEAM_TAIL_PADDING_PX = 50;

export const ABOUT_FIGMA_ROOT_MIN_HEIGHT_WITH_MEET_TEAM_PX =
  ABOUT_MEET_OUR_TEAM_HEADING_TOP_PX +
  ABOUT_MEET_OUR_TEAM_SECTION_HEIGHT_PX +
  ABOUT_MEET_OUR_TEAM_TAIL_PADDING_PX;
