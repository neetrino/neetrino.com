import { assetUrl } from "@/lib/assets";
import {
  PORTFOLIO_FIRST_BANNER_HEIGHT_PX,
  PORTFOLIO_FIRST_BANNER_WIDTH_PX,
} from "@/lib/portfolio-desktop-first-banner.constants";

/**
 * Second desktop portfolio hero card (`166:1236`) — video on the MacBook in `imgBiotechLogo1`.
 * Size matches design spec; position = card center + `SHIFT_*` + `NUDGE_RIGHT_PX`.
 */
export const PORTFOLIO_SECOND_BANNER_MACBOOK_VIDEO_SRC = assetUrl(
  "portfolio/cat-card-macbook-screen-recording.mp4",
);

export const PORTFOLIO_SECOND_BANNER_MACBOOK_VIDEO_ARIA_LABEL =
  "Screen recording on the MacBook mockup" as const;

export const PORTFOLIO_SECOND_BANNER_MACBOOK_VIDEO_WIDTH_PX = 283 as const;
export const PORTFOLIO_SECOND_BANNER_MACBOOK_VIDEO_HEIGHT_PX = 185 as const;

/** CSS `aspect-ratio` (width / height). */
export const PORTFOLIO_SECOND_BANNER_MACBOOK_VIDEO_ASPECT_RATIO = "284 / 183" as const;

/** Shift left from horizontal center (px). Larger = further left. */
export const PORTFOLIO_SECOND_BANNER_MACBOOK_VIDEO_SHIFT_LEFT_PX = 38.5 as const;

/** Shift up from vertical center (px). Larger = further up. */
export const PORTFOLIO_SECOND_BANNER_MACBOOK_VIDEO_SHIFT_UP_PX = 17 as const;

/** Extra `translateX` after `left` (positive = right). */
export const PORTFOLIO_SECOND_BANNER_MACBOOK_VIDEO_NUDGE_RIGHT_PX = 38 as const;

/** `left` before `translateX(nudge)`. */
export const PORTFOLIO_SECOND_BANNER_MACBOOK_VIDEO_LEFT_BASE_PX =
  Math.round(
    (PORTFOLIO_FIRST_BANNER_WIDTH_PX - PORTFOLIO_SECOND_BANNER_MACBOOK_VIDEO_WIDTH_PX) / 2,
  ) - PORTFOLIO_SECOND_BANNER_MACBOOK_VIDEO_SHIFT_LEFT_PX;

/** `top` in the card. */
export const PORTFOLIO_SECOND_BANNER_MACBOOK_VIDEO_TOP_PX =
  Math.round(
    (PORTFOLIO_FIRST_BANNER_HEIGHT_PX - PORTFOLIO_SECOND_BANNER_MACBOOK_VIDEO_HEIGHT_PX) / 2,
  ) - PORTFOLIO_SECOND_BANNER_MACBOOK_VIDEO_SHIFT_UP_PX;

export const PORTFOLIO_SECOND_BANNER_MACBOOK_VIDEO_WRAPPER_BASE_CLASS =
  "pointer-events-auto absolute z-[5] overflow-hidden bg-black" as const;
