/**
 * Mobile Who we are — `EllipseDeviceShowcase` uses `transform: scale()` so it fits visually, but
 * layout still reserves the unscaled box height (aspect 1609/905). Negative `margin-bottom` as **% of
 * containing block width** matches `-(905/1609)×(1−scale)×width` so the section does not leave a huge
 * empty scroll band below the orbit.
 *
 * **Tailwind literals only** — JIT must see full class names.
 */
export const WHO_WE_ARE_ELLIPSE_SHOWCASE_SCALE_CLASSNAME =
  "origin-top scale-[0.34] -mb-[37.11%] min-[400px]:scale-[0.40] min-[400px]:-mb-[33.74%] min-[480px]:scale-[0.48] min-[480px]:-mb-[29.24%] sm:scale-[0.58] sm:-mb-[23.62%] md:scale-[0.70] md:-mb-[16.87%]" as const;
