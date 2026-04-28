/**
 * Design height of the desktop home canvas (px). Must stay **in step** with `HOME_DESKTOP_DEVICE_SHOWCASE_CANVAS_TOP_PX`:
 * when the orbit block moves up by Δpx, lower this by **the same Δ** so the band under the orbit does not
 * grow (avoids “fixed gap here, bigger gap there”). Sync `app/globals.css` + home `page.tsx` literal.
 */
export const HOME_DESKTOP_CANVAS_DESIGN_HEIGHT_PX = 5006;

/**
 * Desktop home (scaled Figma canvas): vertical rhythm for the device orbit block.
 *
 * - `HOME_DESKTOP_DEVICE_SHOWCASE_CANVAS_TOP_PX` — Y of the orbit top in design px (`NeetrinoHomeBelowFold`).
 *   **Decrease** = less gap **above** the carousel; **increase** = carousel lower. After changing TOP, adjust
 *   `HOME_DESKTOP_CANVAS_DESIGN_HEIGHT_PX` by the **same** delta so the strip under the orbit + Partners + footer
 *   stays visually balanced (see constant JSDoc above).
 *
 * Desktop Partners marquee: in document flow on the home page (`page.tsx`) directly above `<Footer>` in
 * `layout.tsx`, not absolutely positioned on the canvas.
 */
export const HOME_DESKTOP_DEVICE_SHOWCASE_CANVAS_TOP_PX = 4196;

/**
 * Desktop home (`page.tsx`): leave empty when orbit `TOP` + canvas height are stepped together — avoids an
 * extra pull on Partners that would skew gaps vs. the paired layout.
 * **Literal** for Tailwind JIT.
 */
export const HOME_DESKTOP_CANVAS_FOOTER_PULL_UP_CLASSNAME = "lg:-mb-20" as const;

/**
 * Desktop home vector grid: matches About `top-[-40px]` tail padding so the layer reaches the canvas bottom.
 */
export const HOME_DESKTOP_VECTOR_GRID_TOP_TAIL_PX = 40;

export const HOME_DESKTOP_VECTOR_GRID_WRAP_HEIGHT_PX =
  HOME_DESKTOP_CANVAS_DESIGN_HEIGHT_PX + HOME_DESKTOP_VECTOR_GRID_TOP_TAIL_PX;
