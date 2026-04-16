"use client";

import LiquidGlass from "liquid-glass-react";

const CAPSULE_WIDTH_PX = 236;
const CAPSULE_HEIGHT_PX = 2156;
const CAPSULE_CORNER_RADIUS_PX = 151;
const CAPSULE_TOP_PX = 1333;
const CAPSULE_LEFT_OFFSET_PX = -11;

const CAPSULE_DISPLACEMENT_SCALE = 45;
const CAPSULE_BLUR_AMOUNT = 0.05;
const CAPSULE_SATURATION = 140;
const CAPSULE_ABERRATION = 1.8;
/** 0 + fixed mouse props = no cursor stretch and no document mousemove listener. */
const CAPSULE_ELASTICITY = 0;

const FROZEN_MOUSE_POS = { x: 0, y: 0 } as const;

/**
 * Liquid-glass vertical capsule (Figma node 335:981).
 * Uses `liquid-glass-react` for real SVG displacement refraction,
 * not just CSS backdrop-blur.
 */
export function AboutUsLiquidCapsule() {
  return (
    <div className="[&>span:last-of-type]:hidden">
      <LiquidGlass
        globalMousePos={FROZEN_MOUSE_POS}
        mouseOffset={FROZEN_MOUSE_POS}
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
    </div>
  );
}
