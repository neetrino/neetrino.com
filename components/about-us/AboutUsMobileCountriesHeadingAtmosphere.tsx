"use client";

import Image from "next/image";
import { ABOUT_US_MOBILE_HERO_ATMOSPHERE_UPPER_INSET_WRAPPER_CLASS } from "@/lib/about-us-mobile-hero-atmosphere.constants";
import {
  ABOUT_MOBILE_COUNTRIES_ATMOSPHERE_ELLIPSE_SLOT_CLASS,
  ABOUT_MOBILE_COUNTRIES_ATMOSPHERE_ELLIPSE_SVG_SRC,
} from "@/lib/about-us-mobile-countries-map.constants";
import { DEFAULT_IMAGE_QUALITY } from "@/lib/image-defaults";
import { cn } from "@/lib/utils";

/**
 * Figma `479:1235` Ellipse 29 — blue atmosphere behind the mobile countries heading (start / LTR: left).
 */
export function AboutUsMobileCountriesHeadingAtmosphere() {
  return (
    <div
      className={ABOUT_MOBILE_COUNTRIES_ATMOSPHERE_ELLIPSE_SLOT_CLASS}
      aria-hidden
      data-name="Ellipse 29"
      data-node-id="479:1235"
    >
      <div className="relative size-full overflow-visible">
        <div className={cn(ABOUT_US_MOBILE_HERO_ATMOSPHERE_UPPER_INSET_WRAPPER_CLASS)}>
          <div className="relative size-full min-h-px min-w-px">
            <Image
              src={ABOUT_MOBILE_COUNTRIES_ATMOSPHERE_ELLIPSE_SVG_SRC}
              alt=""
              fill
              unoptimized
              quality={DEFAULT_IMAGE_QUALITY}
              className="pointer-events-none block max-w-none object-fill select-none"
              sizes="100vw"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
