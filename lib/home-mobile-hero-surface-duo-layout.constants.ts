/**
 * Hero title + body on Surface Duo portrait (~540×720) — `surface-duo-portrait` in `app/globals.css`.
 * Column stays centered (`mx-auto`); copy uses viewport `1rem` gutter like mobile footer.
 * `393px` must match hero `max-w-[393px]` in `HeroSection`.
 */
const HOME_MOBILE_HERO_SURFACE_DUO_VIEWPORT_START_CLASS =
  "surface-duo-portrait:left-[calc(1rem-(100vw-393px)/2)]" as const;

export const HOME_MOBILE_HERO_SURFACE_DUO_TITLE_CLASS =
  HOME_MOBILE_HERO_SURFACE_DUO_VIEWPORT_START_CLASS;

export const HOME_MOBILE_HERO_SURFACE_DUO_BODY_CLASS =
  HOME_MOBILE_HERO_SURFACE_DUO_VIEWPORT_START_CLASS;
