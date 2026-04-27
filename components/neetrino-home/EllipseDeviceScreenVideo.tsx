"use client";

import type { CSSProperties } from "react";
import type { FrameScreenInsetPct } from "@/lib/device-showcase-screen-video";
import { cn } from "@/lib/utils";

/** How the raster maps into the mockup “glass” rectangle. */
export type DeviceScreenVideoObjectFit = "cover" | "contain";

type EllipseDeviceScreenVideoProps = {
  src: string;
  inset: FrameScreenInsetPct;
  setVideoRef: (element: HTMLVideoElement | null) => void;
  /**
   * With `screenSurfaceClassName`, optional Tailwind for clip shell (e.g. fixed `w-[…]`). Ignored when
   * `clipShellPositionStyle` is set (use that for reliable px layout — Tailwind JIT skips many `${}` classes).
   */
  clipShellLayoutClassName?: string;
  /**
   * With `screenSurfaceClassName`, absolute **px** layout for the clip shell (iPad showcase). Overrides
   * `inset` / `clipShellLayoutClassName` positioning.
   */
  clipShellPositionStyle?: CSSProperties;
  /** Shell (inset box) when `screenSurfaceClassName` is set; otherwise merged onto `<video>`. */
  className?: string;
  /**
   * `cover` fills the clip (may crop). `contain` shows the entire frame inside the clip (letterboxing).
   * With `screenSurfaceClassName`, both modes use the same rounded shell.
   */
  objectFit?: DeviceScreenVideoObjectFit;
  /** Rounded clip on the screen surface (e.g. iPhone / iPad glass). */
  screenSurfaceClassName?: string;
  /** Classes on `<video>` only (e.g. `rotate-*`, `scale-*`, `object-*`). */
  videoClassName?: string;
};

const insetStyle = (inset: FrameScreenInsetPct) => ({
  top: `${inset.top}%`,
  right: `${inset.right}%`,
  bottom: `${inset.bottom}%`,
  left: `${inset.left}%`,
});

/**
 * Masked screen: no bleed past rounded rect, sharper compositing.
 * `bg-transparent` avoids UA default black behind letterboxing / pre-first-frame gaps.
 */
const SCREEN_CLIP_SHELL_CLASS = "isolate transform-gpu overflow-hidden bg-transparent" as const;

/** Same shell compositing without `transform` utility — avoids fighting `clipShellPositionStyle.transform`. */
const SCREEN_CLIP_SHELL_CLASS_POSITIONED = "isolate overflow-hidden bg-transparent" as const;

const VIDEO_OBJECT_LAYER_CLASS = "bg-transparent" as const;

export function EllipseDeviceScreenVideo({
  src,
  inset,
  clipShellLayoutClassName,
  clipShellPositionStyle,
  setVideoRef,
  className,
  objectFit = "cover",
  screenSurfaceClassName,
  videoClassName,
}: EllipseDeviceScreenVideoProps) {
  if (objectFit === "contain" && screenSurfaceClassName == null) {
    return (
      <div
        className={cn("pointer-events-none absolute z-[1]", SCREEN_CLIP_SHELL_CLASS, className)}
        style={insetStyle(inset)}
      >
        <video
          ref={setVideoRef}
          className={cn(
            "pointer-events-none absolute inset-0 size-full object-contain object-center",
            VIDEO_OBJECT_LAYER_CLASS,
            videoClassName,
          )}
          src={src}
          muted
          playsInline
          loop
          preload="metadata"
          aria-hidden
        />
      </div>
    );
  }

  if (screenSurfaceClassName) {
    const videoObjectClass =
      objectFit === "contain" ? "object-contain object-center" : "object-cover object-center";
    const shellClipClass =
      clipShellPositionStyle != null ? SCREEN_CLIP_SHELL_CLASS_POSITIONED : SCREEN_CLIP_SHELL_CLASS;
    return (
      <div
        className={cn(
          "pointer-events-none absolute z-[1]",
          shellClipClass,
          screenSurfaceClassName,
          clipShellPositionStyle == null ? clipShellLayoutClassName : undefined,
          className,
        )}
        style={clipShellPositionStyle ?? (clipShellLayoutClassName ? undefined : insetStyle(inset))}
      >
        <video
          ref={setVideoRef}
          className={cn(
            "pointer-events-none absolute inset-0 size-full",
            videoObjectClass,
            VIDEO_OBJECT_LAYER_CLASS,
            videoClassName,
          )}
          src={src}
          muted
          playsInline
          loop
          preload="metadata"
          aria-hidden
        />
      </div>
    );
  }

  return (
    <video
      ref={setVideoRef}
      className={cn(
        "pointer-events-none absolute z-[1] object-cover",
        VIDEO_OBJECT_LAYER_CLASS,
        className,
        videoClassName,
      )}
      style={insetStyle(inset)}
      src={src}
      muted
      playsInline
      loop
      preload="metadata"
      aria-hidden
    />
  );
}
