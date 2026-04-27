"use client";

import type { FrameScreenInsetPct } from "@/lib/device-showcase-screen-video";
import { cn } from "@/lib/utils";

/** How the raster maps into the mockup “glass” rectangle. */
export type DeviceScreenVideoObjectFit = "cover" | "contain";

type EllipseDeviceScreenVideoProps = {
  src: string;
  inset: FrameScreenInsetPct;
  setVideoRef: (element: HTMLVideoElement | null) => void;
  /** Shell (inset box) when `screenSurfaceClassName` is set; otherwise merged onto `<video>`. */
  className?: string;
  /** `contain` = full frame visible, scaled down inside insets (for vertical phone capture). */
  objectFit?: DeviceScreenVideoObjectFit;
  /**
   * Rounded clip on the screen surface. With `objectFit="contain"`, wraps the video; with `cover`,
   * enables a clipped `cover` fill (e.g. iPhone glass).
   */
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

const VIDEO_OBJECT_LAYER_CLASS = "bg-transparent" as const;

export function EllipseDeviceScreenVideo({
  src,
  inset,
  setVideoRef,
  className,
  objectFit = "cover",
  screenSurfaceClassName,
  videoClassName,
}: EllipseDeviceScreenVideoProps) {
  if (objectFit === "contain") {
    return (
      <div
        className={cn(
          "pointer-events-none absolute z-[1]",
          SCREEN_CLIP_SHELL_CLASS,
          screenSurfaceClassName,
          className,
        )}
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
    return (
      <div
        className={cn(
          "pointer-events-none absolute z-[1]",
          SCREEN_CLIP_SHELL_CLASS,
          screenSurfaceClassName,
          className,
        )}
        style={insetStyle(inset)}
      >
        <video
          ref={setVideoRef}
          className={cn(
            "pointer-events-none absolute inset-0 size-full object-cover object-center",
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
