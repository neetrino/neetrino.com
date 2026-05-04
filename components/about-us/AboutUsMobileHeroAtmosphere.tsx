"use client";

import Image from "next/image";
import {
  ABOUT_US_MOBILE_HERO_ATMOSPHERE_BASE_RECT_INSET_WRAPPER_CLASS,
  ABOUT_US_MOBILE_HERO_ATMOSPHERE_BASE_RECT_SLOT_CLASS,
  ABOUT_US_MOBILE_HERO_ATMOSPHERE_BASE_RECT_SVG_SRC,
  ABOUT_US_MOBILE_HERO_ATMOSPHERE_ELLIPSE_SVG_SRC,
  ABOUT_US_MOBILE_HERO_ATMOSPHERE_LOWER_INSET_WRAPPER_CLASS,
  ABOUT_US_MOBILE_HERO_ATMOSPHERE_LOWER_SLOT_CLASS,
  ABOUT_US_MOBILE_HERO_ATMOSPHERE_LOWER_VECTOR_SVG_SRC,
  ABOUT_US_MOBILE_HERO_ATMOSPHERE_UPPER_INSET_WRAPPER_CLASS,
  ABOUT_US_MOBILE_HERO_ATMOSPHERE_UPPER_SLOT_CLASS,
} from "@/lib/about-us-mobile-hero-atmosphere.constants";
import { DEFAULT_IMAGE_QUALITY } from "@/lib/image-defaults";
import { cn } from "@/lib/utils";

type HeroAtmosphereSvgLayerProps = {
  insetWrapperClass: string;
  src: string;
};

function HeroAtmosphereSvgLayer({ insetWrapperClass, src }: HeroAtmosphereSvgLayerProps) {
  return (
    <div className="relative size-full overflow-visible">
      <div className={cn(insetWrapperClass)}>
        <div className="relative size-full min-h-px min-w-px">
          <Image
            src={src}
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
  );
}

/**
 * Figma mobile About hero washes: `479:1172` → `479:1169` → `479:1234` (back to front).
 */
export function AboutUsMobileHeroAtmosphere() {
  return (
    <>
      <div
        className={ABOUT_US_MOBILE_HERO_ATMOSPHERE_BASE_RECT_SLOT_CLASS}
        aria-hidden
        data-name="Rectangle 17417"
        data-node-id="479:1172"
      >
        <HeroAtmosphereSvgLayer
          insetWrapperClass={ABOUT_US_MOBILE_HERO_ATMOSPHERE_BASE_RECT_INSET_WRAPPER_CLASS}
          src={ABOUT_US_MOBILE_HERO_ATMOSPHERE_BASE_RECT_SVG_SRC}
        />
      </div>
      <div
        className={ABOUT_US_MOBILE_HERO_ATMOSPHERE_LOWER_SLOT_CLASS}
        aria-hidden
        data-name="Vector 27398"
        data-node-id="479:1169"
      >
        <HeroAtmosphereSvgLayer
          insetWrapperClass={ABOUT_US_MOBILE_HERO_ATMOSPHERE_LOWER_INSET_WRAPPER_CLASS}
          src={ABOUT_US_MOBILE_HERO_ATMOSPHERE_LOWER_VECTOR_SVG_SRC}
        />
      </div>
      <div
        className={ABOUT_US_MOBILE_HERO_ATMOSPHERE_UPPER_SLOT_CLASS}
        aria-hidden
        data-name="Ellipse 27"
        data-node-id="479:1234"
      >
        <HeroAtmosphereSvgLayer
          insetWrapperClass={ABOUT_US_MOBILE_HERO_ATMOSPHERE_UPPER_INSET_WRAPPER_CLASS}
          src={ABOUT_US_MOBILE_HERO_ATMOSPHERE_ELLIPSE_SVG_SRC}
        />
      </div>
    </>
  );
}
