"use client";

import type { RefObject } from "react";
import LiquidGlass from "liquid-glass-react";

const CAPSULE_WIDTH_PX = 236;
const CAPSULE_HEIGHT_PX = 2156;
const CAPSULE_CORNER_RADIUS_PX = 151;
const CAPSULE_TOP_PX = 1285;
const CAPSULE_LEFT_OFFSET_PX = -11;

const CAPSULE_DISPLACEMENT_SCALE = 45;
const CAPSULE_BLUR_AMOUNT = 0.05;
const CAPSULE_SATURATION = 140;
const CAPSULE_ABERRATION = 1.8;
const CAPSULE_ELASTICITY = 0.18;

type AboutUsLiquidCapsuleProps = {
  mouseContainerRef: RefObject<HTMLDivElement | null>;
};

/**
 * Liquid-glass vertical capsule (Figma node 335:981).
 * Uses `liquid-glass-react` for real SVG displacement refraction,
 * not just CSS backdrop-blur.
 */
export function AboutUsLiquidCapsule({ mouseContainerRef }: AboutUsLiquidCapsuleProps) {
  return (
    <LiquidGlass
      mouseContainer={mouseContainerRef}
      cornerRadius={CAPSULE_CORNER_RADIUS_PX}
      displacementScale={CAPSULE_DISPLACEMENT_SCALE}
      blurAmount={CAPSULE_BLUR_AMOUNT}
      saturation={CAPSULE_SATURATION}
      aberrationIntensity={CAPSULE_ABERRATION}
      elasticity={CAPSULE_ELASTICITY}
      mode="standard"
      padding="0px"
      style={{
        position: "absolute",
        top: CAPSULE_TOP_PX,
        left: `calc(50% + ${CAPSULE_LEFT_OFFSET_PX}px)`,
        transform: "translateX(-50%)",
        zIndex: 1,
      }}
    >
      <div style={{ width: CAPSULE_WIDTH_PX, height: CAPSULE_HEIGHT_PX }} />
    </LiquidGlass>
  );
}
