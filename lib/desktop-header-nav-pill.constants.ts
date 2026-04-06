import { NEETRINO_DESKTOP_HEADER_BAR_WIDTH_PX } from "@/lib/desktop-header-layout.constants";

/**
 * Desktop `Awwwards` bar — logo + nav pill geometry.
 * The dark nav pill must start *after* the logo so the logo never sits on two backgrounds.
 */

/** Logo inset from bar left. */
export const DESKTOP_HEADER_LOGO_LEFT_PX = 12;

/** Logo image width in the header (matches `w-[130px]`). */
export const DESKTOP_HEADER_LOGO_WIDTH_PX = 130;

/** Gap between logo and nav pill — keeps the pill fully to the right of the wordmark. */
export const DESKTOP_HEADER_LOGO_TO_NAV_GAP_PX = 12;

/** First pixel where the nav pill may begin (left edge). */
export const DESKTOP_HEADER_NAV_PILL_LEFT_EDGE_PX =
  DESKTOP_HEADER_LOGO_LEFT_PX + DESKTOP_HEADER_LOGO_WIDTH_PX + DESKTOP_HEADER_LOGO_TO_NAV_GAP_PX;

/**
 * Nav pill width — chosen so logo + pill + CTAs fit in `NEETRINO_DESKTOP_HEADER_BAR_WIDTH_PX`
 * with modest gaps (tighter link spacing inside the pill).
 */
export const DESKTOP_HEADER_NAV_PILL_WIDTH_PX = 794;

const barCenterX = NEETRINO_DESKTOP_HEADER_BAR_WIDTH_PX / 2;

/**
 * Horizontal center of the nav pill: `left: calc(50% - offset)` with `-translate-x-1/2`.
 * Derived so the pill’s left edge clears the logo.
 */
export const DESKTOP_HEADER_NAV_PILL_CENTER_OFFSET_PX =
  barCenterX - (DESKTOP_HEADER_NAV_PILL_LEFT_EDGE_PX + DESKTOP_HEADER_NAV_PILL_WIDTH_PX / 2);

/** Gap between primary nav links inside the pill. */
export const DESKTOP_HEADER_NAV_LINK_GAP_PX = 30;

/** Right edge of the nav pill (design px). */
export const DESKTOP_HEADER_NAV_PILL_RIGHT_EDGE_PX =
  DESKTOP_HEADER_NAV_PILL_LEFT_EDGE_PX + DESKTOP_HEADER_NAV_PILL_WIDTH_PX;

/** Horizontal gap from nav pill to “Get a Quote”. */
export const DESKTOP_HEADER_CTA_AFTER_NAV_GAP_PX = 12;

/** “Get a Quote” pill width (matches `DesktopHeaderQuoteLink`). */
export const DESKTOP_HEADER_QUOTE_PILL_WIDTH_PX = 144;

/** Gap between quote pill and language pill. */
export const DESKTOP_HEADER_QUOTE_TO_LANGUAGE_GAP_PX = 8;

/** Figma desktop header bar — “Get a Quote” (nodes 10:451–10:452), X position. */
export const DESKTOP_HEADER_QUOTE_LEFT_PX =
  DESKTOP_HEADER_NAV_PILL_RIGHT_EDGE_PX + DESKTOP_HEADER_CTA_AFTER_NAV_GAP_PX;

/** Language pill X — after quote (Figma 10:457). */
export const DESKTOP_HEADER_LANGUAGE_LEFT_PX =
  DESKTOP_HEADER_QUOTE_LEFT_PX +
  DESKTOP_HEADER_QUOTE_PILL_WIDTH_PX +
  DESKTOP_HEADER_QUOTE_TO_LANGUAGE_GAP_PX;
