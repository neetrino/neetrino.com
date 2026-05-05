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
 *   **Decrease** = less gap **above** the carousel; **increase** = carousel lower. `NeetrinoHomeVerticalPipe` height
 *   is derived (`…_PIPE_HEIGHT_PX` = orbit top + optional `…_EXTEND_BELOW_ORBIT_PX` − pipe top). Tune extension
 *   for how far the rail continues under the orbit block. Keep pipe top (`…_PIPE_TOP_PX`) in sync if the spine start moves.
 *   After changing TOP, adjust `HOME_DESKTOP_CANVAS_DESIGN_HEIGHT_PX` by the **same** delta so the strip under the
 *   orbit + Partners + footer stays visually balanced (see constant JSDoc above).
 *
 * Desktop Partners marquee: in document flow on the home page (`page.tsx`) directly above `<Footer>` in
 * `layout.tsx`, not absolutely positioned on the canvas.
 */
export const HOME_DESKTOP_DEVICE_SHOWCASE_CANVAS_TOP_PX = 4196;

/** Vertical spine top (design px); lowered vs original Figma `55:391` start. */
export const HOME_DESKTOP_VERTICAL_PIPE_TOP_PX = 1783;

/** How far the rail continues **below** the device orbit top (design px). */
export const HOME_DESKTOP_VERTICAL_PIPE_EXTEND_BELOW_ORBIT_PX = 380;

export const HOME_DESKTOP_VERTICAL_PIPE_WIDTH_PX = 88;

export const HOME_DESKTOP_VERTICAL_PIPE_HEIGHT_PX =
  HOME_DESKTOP_DEVICE_SHOWCASE_CANVAS_TOP_PX +
  HOME_DESKTOP_VERTICAL_PIPE_EXTEND_BELOW_ORBIT_PX -
  HOME_DESKTOP_VERTICAL_PIPE_TOP_PX;

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

/**
 * Desktop home hero only — Figma `10:421` outer frame height. Tablet hybrid home (≈744px–1023px, Tailwind
 * `neetrino-layout-desktop` / `app/globals.css` 46.5rem): scaled desktop hero, then mobile sections.
 */
export const HOME_DESKTOP_HERO_CANVAS_DESIGN_HEIGHT_PX = 1149;

export const HOME_DESKTOP_HERO_VECTOR_GRID_WRAP_HEIGHT_PX =
  HOME_DESKTOP_HERO_CANVAS_DESIGN_HEIGHT_PX + HOME_DESKTOP_VECTOR_GRID_TOP_TAIL_PX;

/**
 * Tablet hybrid hero on `/` (`neetrino-layout-desktop`, below `lg`): 30px clearance under fixed `MobileHeader`.
 * Outer `pt-[30px]` reserves flow space; inner `-mt-[30px]` (pair with outer) pulls the canvas up so hero
 * backgrounds fill the band — avoids a solid strip under the navbar.
 * **Literals** for Tailwind JIT.
 */
export const HOME_TABLET_HYBRID_HERO_NAV_GAP_OUTER_CLASS =
  "relative overflow-x-clip overflow-y-visible pt-[30px]" as const;

export const HOME_TABLET_HYBRID_HERO_NAV_GAP_PULL_UP_CLASS = "-mt-[30px]" as const;
