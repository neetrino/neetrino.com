"use client";

import {
  HOME_DESKTOP_VERTICAL_PIPE_HEIGHT_PX,
  HOME_DESKTOP_VERTICAL_PIPE_TOP_PX,
  HOME_DESKTOP_VERTICAL_PIPE_WIDTH_PX,
} from "@/lib/home-desktop-layout";

/** Slight dark veil so `backdrop-filter` reads as frosted / “mutno” over the canvas. */
const PIPE_INTERIOR_TINT_ALPHA = 0.45;

/** Left: thin bright rim, then ease into interior (px stops along width). */
const PIPE_LEFT_RIM_PEAK_ALPHA = 0.72;
const PIPE_LEFT_RIM_STOP_1_PX = 1;
const PIPE_LEFT_RIM_STOP_2_PX = 4;
const PIPE_LEFT_RIM_STOP_3_PX = 9;
const PIPE_LEFT_RIM_FADE_END_PX = 18;

/** Right: soft shadow ramp into interior. */
const PIPE_RIGHT_RIM_PEAK_ALPHA = 0.5;
const PIPE_RIGHT_RIM_STOP_1_PX = 5;
const PIPE_RIGHT_RIM_STOP_2_PX = 11;
const PIPE_RIGHT_RIM_FADE_END_PX = 20;

const pipeRimBackgroundImage = [
  `linear-gradient(to right,
    rgba(255,255,255,${PIPE_LEFT_RIM_PEAK_ALPHA}) 0px,
    rgba(255,255,255,0.14) ${PIPE_LEFT_RIM_STOP_1_PX}px,
    rgba(255,255,255,0.04) ${PIPE_LEFT_RIM_STOP_2_PX}px,
    rgba(255,255,255,0.01) ${PIPE_LEFT_RIM_STOP_3_PX}px,
    transparent ${PIPE_LEFT_RIM_FADE_END_PX}px)`,
  `linear-gradient(to left,
    rgba(0,0,0,${PIPE_RIGHT_RIM_PEAK_ALPHA}) 0px,
    rgba(0,0,0,0.12) ${PIPE_RIGHT_RIM_STOP_1_PX}px,
    rgba(0,0,0,0.03) ${PIPE_RIGHT_RIM_STOP_2_PX}px,
    transparent ${PIPE_RIGHT_RIM_FADE_END_PX}px)`,
].join(", ");

const pipeInteriorBackground = `rgba(160,160,180,0.25)`;

/**
 * Figma node `55:391` — centered vertical rail: frosted interior, soft white left rim + dark right ramp; stack order.
 */
export function NeetrinoHomeVerticalPipe() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute -translate-x-1/2 left-1/2 z-[11]"
      data-name="Rectangle 17418"
      data-node-id="55:391"
      style={{
        top: HOME_DESKTOP_VERTICAL_PIPE_TOP_PX,
        width: HOME_DESKTOP_VERTICAL_PIPE_WIDTH_PX,
        height: HOME_DESKTOP_VERTICAL_PIPE_HEIGHT_PX,
        backgroundColor: pipeInteriorBackground,
        backgroundImage: pipeRimBackgroundImage,
      }}
    />
  );
}
