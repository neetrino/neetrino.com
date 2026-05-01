"use client";

import {
  ABOUT_MOBILE_WHY_CHOOSE_REFLECTION_BLUR_OFFSET_CLASS,
  ABOUT_MOBILE_WHY_CHOOSE_REFLECTION_FIGMA_BLUR_OPACITY_CLASS,
} from "@/lib/about-us-mobile-why-choose.constants";
import { cn } from "@/lib/utils";

const ABOUT_MOBILE_COUNTRIES_TITLE_SIZE_CLASS =
  "font-['Inter:Black_Italic',sans-serif] text-[clamp(1.25rem,5.5vw,1.875rem)] font-black italic uppercase leading-tight";

/** Title + reflection together; `translate-y` only so the mission tube layout height stays unchanged. */
const ABOUT_MOBILE_COUNTRIES_HEADING_STACK_NUDGE_DOWN_CLASS = "translate-y-16";

/**
 * Mobile countries title + blurred mirror line — same pattern as `WhyChooseUsReflectedHeading`
 * (`479:1289`: `pt-[5px]`, `-scale-y-100`, `blur-[8px] opacity-50`).
 */
export function AboutUsMobileCountriesHeading({
  countriesPrefix,
  countriesAccent,
}: {
  countriesPrefix: string;
  countriesAccent: string;
}) {
  const sharpTitle = cn(
    "relative z-[1] m-0 flex w-full min-w-0 max-w-full flex-col items-center gap-0 text-center text-white",
    ABOUT_MOBILE_COUNTRIES_TITLE_SIZE_CLASS,
  );
  const blurTitle = cn(
    "relative m-0 flex w-full min-w-0 max-w-full flex-col items-center gap-0 text-center text-white",
    ABOUT_MOBILE_COUNTRIES_TITLE_SIZE_CLASS,
    ABOUT_MOBILE_WHY_CHOOSE_REFLECTION_FIGMA_BLUR_OPACITY_CLASS,
  );

  return (
    <div
      className={cn(
        "flex w-full min-w-0 flex-col items-center",
        ABOUT_MOBILE_COUNTRIES_HEADING_STACK_NUDGE_DOWN_CLASS,
      )}
    >
      <h2 id="about-mobile-countries-heading" className={sharpTitle}>
        <span className="block max-w-full">{countriesPrefix}</span>
        <span className="block max-w-full text-[#ff7500]">{countriesAccent}</span>
      </h2>
      <div
        className={cn(
          "pointer-events-none inline-flex max-w-full shrink-0 flex-col items-center justify-start",
          ABOUT_MOBILE_WHY_CHOOSE_REFLECTION_BLUR_OFFSET_CLASS,
        )}
        aria-hidden
      >
        <div className="-scale-y-100 flex-none">
          <div className={blurTitle}>
            <span className="block max-w-full">{countriesPrefix}</span>
            <span className="block max-w-full text-[#ff7500]">{countriesAccent}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
