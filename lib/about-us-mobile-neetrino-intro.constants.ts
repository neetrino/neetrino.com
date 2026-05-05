/**
 * `aboutPage.mobileNeetrinoIntro` paragraph on `/about-us` mobile stack.
 *
 * Width split — `about-us-mobile-compact-breakpoint.constants.ts`:
 * - **≤740px**: 14px / 22px below `sm` (compact long copy on ~360px phones).
 * - **≥741px**: 15px / `leading-7` below `sm` (legacy `HEAD`).
 */
export const ABOUT_MOBILE_NEETRINO_INTRO_PARAGRAPH_CLASS =
  "m-0 w-max max-w-full whitespace-pre-line text-left font-normal text-white sm:text-base sm:leading-8 max-[740px]:max-sm:text-[14px] max-[740px]:max-sm:leading-[22px] min-[741px]:max-sm:text-[15px] min-[741px]:max-sm:leading-7" as const;
