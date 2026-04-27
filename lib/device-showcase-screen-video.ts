/**
 * URL used **on the iPhone mockup** (slot 0) — must be the **portrait** capture.
 * On disk this is `other-devices.mp4` (592×1280); `iphone-screen.mov` is landscape despite its name.
 */
export const DEVICE_SHOWCASE_IPHONE_VIDEO_SRC = "/device-showcase/other-devices.mp4" as const;

/**
 * URL for iPad / MacBook / iMac (ids 1–3) — **landscape** capture.
 * On disk: `iphone-screen.mov` (2940×1912).
 */
export const DEVICE_SHOWCASE_OTHER_DEVICES_VIDEO_SRC =
  "/device-showcase/iphone-screen.mov" as const;

/**
 * Bias `object-cover` so a thin baked-in letterbox at the **top** of `iphone-screen.mov` is cropped
 * (iPad / MacBook / iMac). Tune the second value if the strip reappears on different exports.
 */
export const DEVICE_SHOWCASE_LANDSCAPE_VIDEO_OBJECT_POSITION_CLASS = "object-[50%_38%]" as const;

export function deviceShowcaseScreenVideoSrc(deviceId: 0 | 1 | 2 | 3): string {
  return deviceId === 0
    ? DEVICE_SHOWCASE_IPHONE_VIDEO_SRC
    : DEVICE_SHOWCASE_OTHER_DEVICES_VIDEO_SRC;
}

/** Percent insets of the visible “screen” area inside each frame asset (tune per export). */
export type FrameScreenInsetPct = Readonly<{
  top: number;
  right: number;
  bottom: number;
  left: number;
}>;

/** Figma `imgIPhone14Pro1` outer box (same as `Frame` / orbit layout). */
export const DEVICE_IPHONE_FRAME_BOX_WIDTH = 124 as const;
export const DEVICE_IPHONE_FRAME_BOX_HEIGHT = 252 as const;

/**
 * Figma LCD for slot-0 video (px @1×): `width: 112px; height: 243px; aspect-ratio: 53/115`.
 * Insets below center this rect inside the 124×252 frame.
 */
export const DEVICE_IPHONE_VIDEO_SURFACE_WIDTH_PX = 112 as const;
export const DEVICE_IPHONE_VIDEO_SURFACE_HEIGHT_PX = 243 as const;
export const DEVICE_IPHONE_VIDEO_SURFACE_ASPECT_W = 53 as const;
export const DEVICE_IPHONE_VIDEO_SURFACE_ASPECT_H = 115 as const;

/**
 * `% of width` for `padding-bottom` on the orbit shell: only `absolute` children do not establish
 * height under flex; this keeps the mockup + screen rect sized like the real aspect ratio.
 */
export const DEVICE_IPHONE_FRAME_ASPECT_PADDING_BOTTOM_PERCENT =
  (DEVICE_IPHONE_FRAME_BOX_HEIGHT / DEVICE_IPHONE_FRAME_BOX_WIDTH) * 100;

/**
 * Layout reference for other devices. Slot `0` is the **Figma** iPhone (`imgIPhone14Pro1`, box 124×252).
 * Older `bottom: 52` matched a different raster and shrank the video to ~40% phone height (“half” screen).
 */
export const DEVICE_FRAME_SCREEN_INSET_PCT: Record<0 | 1 | 2 | 3, FrameScreenInsetPct> = {
  0: { top: 3.25, right: 6.75, bottom: 9.5, left: 6.75 },
  1: { top: 8, right: 8, bottom: 45, left: 8 },
  2: { top: 6, right: 11, bottom: 40, left: 11 },
  3: { top: 9, right: 8, bottom: 38, left: 8 },
};

function iphoneVerticalVideoInsetPct(): FrameScreenInsetPct {
  const fw = DEVICE_IPHONE_FRAME_BOX_WIDTH;
  const fh = DEVICE_IPHONE_FRAME_BOX_HEIGHT;
  const vw = DEVICE_IPHONE_VIDEO_SURFACE_WIDTH_PX;
  const vh = DEVICE_IPHONE_VIDEO_SURFACE_HEIGHT_PX;
  const top = ((fh - vh) / 2 / fh) * 100;
  const side = ((fw - vw) / 2 / fw) * 100;
  return { top, right: side, bottom: top, left: side };
}

/** Centers the 112×243 video rect inside the 124×252 frame (responsive via %). */
export const DEVICE_IPHONE_VERTICAL_VIDEO_INSET_PCT: FrameScreenInsetPct =
  iphoneVerticalVideoInsetPct();

/** Border radius of the iPhone showcase video clip (px). */
export const DEVICE_IPHONE_VIDEO_SURFACE_BORDER_RADIUS_PX = 15 as const;

/** Clip shell: fixed-radius corners on the video surface. */
export const DEVICE_IPHONE_VERTICAL_VIDEO_SURFACE_ROUNDED =
  `aspect-[53/115] rounded-[${DEVICE_IPHONE_VIDEO_SURFACE_BORDER_RADIUS_PX}px]` as const;

/** iPad mockup — video layer only (not MacBook). Symmetric horizontal inset. */
export const DEVICE_IPAD_SCREEN_VIDEO_INSET_PCT: FrameScreenInsetPct = {
  top: 11,
  right: 12,
  bottom: 48,
  left: 12,
};

/**
 * iPad in the **front** orbit slot — LCD almost matches the glass, slightly inset (`chut menshe`);
 * clip uses `DEVICE_IPAD_SCREEN_VIDEO_SURFACE_CLASS`.
 */
export const DEVICE_IPAD_SCREEN_VIDEO_INSET_PCT_WHEN_FRONT: FrameScreenInsetPct = {
  top: 5,
  right: 6,
  bottom: 43.5,
  left: 6,
};

/** `%` corner radius on the iPad screen clip (same shell for orbit + front). */
export const DEVICE_IPAD_SCREEN_VIDEO_BORDER_RADIUS_PCT = 5 as const;

/** Clips iPad video to the glass with rounded corners (`rounded-[5%]`). */
export const DEVICE_IPAD_SCREEN_VIDEO_SURFACE_CLASS = "overflow-hidden rounded-[5%]" as const;

/** iMac mockup — video layer only (not MacBook). Symmetric horizontal inset. */
export const DEVICE_IMAC_SCREEN_VIDEO_INSET_PCT: FrameScreenInsetPct = {
  top: 12,
  right: 11,
  bottom: 41,
  left: 11,
};

/**
 * iMac in front (center): a bit **smaller** than full bleed, slightly **wider** horizontally
 * (`scale-x` > `scale-y`), plus nudge **left** and **up** (`px` — tuned look when iMac is centered).
 */
export const DEVICE_IMAC_VIDEO_WHEN_FRONT_MOVE_CLASS =
  "origin-center scale-x-[0.93] scale-y-[0.82] -translate-x-[43px] -translate-y-[49px]" as const;

/**
 * Orbit iMac (not front): **%-translate** on `<video>`; slightly **larger** than before with a bit
 * more **horizontal** scale (`scale-x` > `scale-y`) so the frame reads wider on the glass.
 */
export const DEVICE_IMAC_ORBIT_VIDEO_TRANSFORM_CLASS =
  "origin-center scale-x-[0.95] scale-y-[0.82] -translate-x-[11%] -translate-y-[20%]" as const;

/**
 * MacBook on the **orbit** — `%` inset box aligned to the LCD in the frame asset (same model as
 * before “shrink” tweaks); keeps the video **filling the glass** when the laptop is not in front.
 */
export const DEVICE_MACBOOK_SCREEN_VIDEO_INSET_PCT: FrameScreenInsetPct = {
  top: 16,
  right: 22,
  bottom: 50,
  left: 22,
};

/** Natural width (px @1×) of the MacBook frame asset — LCD width scales as a fraction of this. */
export const DEVICE_MACBOOK_FRAME_ASSET_WIDTH_PX = 621 as const;

/**
 * MacBook **front** LCD width in the **same coordinate system** as the frame export (Figma ~433).
 * Rendered width scales with the frame (`calc`) and is capped by `DEVICE_MACBOOK_VIDEO_WHEN_FRONT_WIDTH_MAX_PX`.
 */
export const DEVICE_MACBOOK_VIDEO_WHEN_FRONT_LCD_WIDTH_PX = 486 as const;

/** Hard max (px) for front LCD width — keeps huge viewports from oversizing vs the bezel. */
export const DEVICE_MACBOOK_VIDEO_WHEN_FRONT_WIDTH_MAX_PX = 502 as const;

/**
 * Tailwind width for the front MacBook video shell — **literal** for JIT (keep `486`, `621`, `502`
 * in sync with `DEVICE_MACBOOK_*_PX` above).
 */
export const DEVICE_MACBOOK_VIDEO_WHEN_FRONT_WIDTH_CLASS =
  "w-[min(calc(100%*486/621),502px)]" as const;

/**
 * Front MacBook LCD clip `aspect-ratio` (`W/H`). Design ~`194/125` (433×279); a slightly larger
 * **height index** (`128`) makes the clip a bit taller vertically (literal for JIT).
 */
export const DEVICE_MACBOOK_VIDEO_WHEN_FRONT_ASPECT_CLASS = "aspect-[194/128]" as const;

/**
 * Front MacBook LCD shell vertical bias (px): `top: calc(50% + bias)` — positive **down**,
 * negative **up** (literal must match `…_SHELL_TOP_CLASS`).
 */
export const DEVICE_MACBOOK_VIDEO_WHEN_FRONT_SHELL_TOP_BIAS_PX = -10 as const;

export const DEVICE_MACBOOK_VIDEO_WHEN_FRONT_SHELL_TOP_CLASS = "top-[calc(50%-10px)]" as const;

/**
 * Front MacBook LCD shell horizontal bias (px): added in `left: calc(50% + …)`.
 * Positive moves the overlay **right** (literal must match `…_SHELL_LEFT_CLASS`).
 */
export const DEVICE_MACBOOK_VIDEO_WHEN_FRONT_SHELL_LEFT_BIAS_PX = 1 as const;

export const DEVICE_MACBOOK_VIDEO_WHEN_FRONT_SHELL_LEFT_CLASS = "left-[calc(50%+1px)]" as const;

/** Front MacBook LCD clip: radius on the **top-right** corner only (px). */
export const DEVICE_MACBOOK_VIDEO_WHEN_FRONT_BORDER_RADIUS_PX = 5 as const;

/** `overflow-hidden` shell — only top-right corner rounded (matches bezel). */
export const DEVICE_MACBOOK_VIDEO_WHEN_FRONT_ROUNDED_CLASS =
  "rounded-none rounded-tr-[5px]" as const;

/**
 * MacBook in front: nudge video inside the LCD clip. **%-translate** tracks responsive LCD size
 * (`w-[min(calc(100%*486/621),502px)]` shell).
 */
export const DEVICE_MACBOOK_VIDEO_FRONT_MOVE_CLASS =
  "-translate-x-[1%] -translate-y-[2.5%]" as const;

/**
 * Orbit MacBook inner wrapper when **iPhone** is center — nudge mockup on the ellipse.
 * **`%` of the wrapper width** so it scales with `w-[…%]` orbit shells across breakpoints.
 */
export const DEVICE_MACBOOK_ORBIT_WRAPPER_TRANSLATE_WHEN_IPHONE_FRONT_CLASS =
  "translate-x-[8%]" as const;

/**
 * Orbit MacBook (not front): scale + nudge on the `<video>`.
 * **Translate uses % of the video element’s own width/height** (CSS transform %), not `px`, so when
 * the orbit shell animates `width`, the nudge stays aligned and the picture grows/shrinks with the LCD.
 */
export const DEVICE_MACBOOK_ORBIT_VIDEO_TRANSFORM_CLASS =
  "origin-center scale-[0.78] -translate-x-[22%] -translate-y-[24%]" as const;
