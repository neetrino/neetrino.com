/**
 * Design height of the desktop home canvas (px). Must stay **in step** with `HOME_DESKTOP_DEVICE_SHOWCASE_CANVAS_TOP_PX`:
 * when the orbit block moves up by Δpx, lower this by **the same Δ** so the band under the orbit does not
 * grow (avoids “fixed gap here, bigger gap there”). Sync `app/globals.css` + home `page.tsx` literal.
 */
export const HOME_DESKTOP_CANVAS_DESIGN_HEIGHT_PX = 5022;

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
export const HOME_DESKTOP_DEVICE_SHOWCASE_CANVAS_TOP_PX = 4212;

/**
 * Desktop home (`page.tsx`): light negative margin on the canvas wrapper — pulls Partners (and the footer
 * after it) up toward the canvas without changing orbit `TOP` / canvas height pair.
 * **Literal** for Tailwind JIT.
 */
export const HOME_DESKTOP_CANVAS_FOOTER_PULL_UP_CLASSNAME = "lg:-mb-8" as const;
