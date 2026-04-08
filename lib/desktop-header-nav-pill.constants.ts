import { NEETRINO_DESKTOP_HEADER_BAR_WIDTH_PX } from "@/lib/desktop-header-layout.constants";

/**
 * Desktop `Awwwards` bar — logo + nav pill geometry.
 * The dark nav pill must start *after* the logo so the logo never sits on two backgrounds.
 */

/** Logo inset from bar left — Figma 335:1435: `left-[20px]`. */
export const DESKTOP_HEADER_LOGO_LEFT_PX = 20;

/** Logo image width in the header (matches `w-[130px]`). */
export const DESKTOP_HEADER_LOGO_WIDTH_PX = 130;

/** Gap between logo and nav pill — Figma: pill starts at 164px, logo ends at 150px → 14px. */
export const DESKTOP_HEADER_LOGO_TO_NAV_GAP_PX = 14;

/** First pixel where the nav pill may begin (left edge). */
export const DESKTOP_HEADER_NAV_PILL_LEFT_EDGE_PX =
  DESKTOP_HEADER_LOGO_LEFT_PX + DESKTOP_HEADER_LOGO_WIDTH_PX + DESKTOP_HEADER_LOGO_TO_NAV_GAP_PX;

/** Nav pill — Figma 335:1425: `w-[854px]`, center offset `79px` (`left-[calc(50%-79px)]`). */
export const DESKTOP_HEADER_NAV_PILL_WIDTH_PX = 854;

const barCenterX = NEETRINO_DESKTOP_HEADER_BAR_WIDTH_PX / 2;

/**
 * Horizontal center of the nav pill: `left: calc(50% - offset)` with `-translate-x-1/2`.
 * Derived so the pill’s left edge clears the logo.
 */
export const DESKTOP_HEADER_NAV_PILL_CENTER_OFFSET_PX =
  barCenterX - (DESKTOP_HEADER_NAV_PILL_LEFT_EDGE_PX + DESKTOP_HEADER_NAV_PILL_WIDTH_PX / 2);

/** Gap between primary nav links — Figma 335:1426: `gap-[41px]`. */
export const DESKTOP_HEADER_NAV_LINK_GAP_PX = 41;

/** Right edge of the nav pill (design px). */
export const DESKTOP_HEADER_NAV_PILL_RIGHT_EDGE_PX =
  DESKTOP_HEADER_NAV_PILL_LEFT_EDGE_PX + DESKTOP_HEADER_NAV_PILL_WIDTH_PX;

/** Horizontal gap from nav pill to “Get a Quote” — Figma: quote `left-[1038px]`, pill right `1018px` → 20px. */
export const DESKTOP_HEADER_CTA_AFTER_NAV_GAP_PX = 20;

/** “Get a Quote” pill width (matches `DesktopHeaderQuoteLink`). */
export const DESKTOP_HEADER_QUOTE_PILL_WIDTH_PX = 144;

/** Gap between quote pill and language pill — Figma: lang `left-[1193px]`, quote ends `1182px` → 11px. */
export const DESKTOP_HEADER_QUOTE_TO_LANGUAGE_GAP_PX = 11;

/** Figma desktop header bar — “Get a Quote” (nodes 10:451–10:452), X position. */
export const DESKTOP_HEADER_QUOTE_LEFT_PX =
  DESKTOP_HEADER_NAV_PILL_RIGHT_EDGE_PX + DESKTOP_HEADER_CTA_AFTER_NAV_GAP_PX;

/** Distance from the bar’s right edge to the language pill’s right edge — Figma `1340 − 1193 − 115`. */
export const DESKTOP_HEADER_LANGUAGE_RIGHT_INSET_PX = 32;
