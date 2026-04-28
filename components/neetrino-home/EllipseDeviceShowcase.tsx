"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  EllipseDeviceShowcaseDevices,
  INITIAL_ORDER,
  rotateLeftOrder,
  rotateRightOrder,
} from "@/components/neetrino-home/EllipseDeviceShowcaseDevices";
import { useIsNearViewportCenter } from "@/components/neetrino-home/use-is-near-viewport-center";
import { FIGMA_ASSETS } from "@/lib/figma-assets";
import { DEFAULT_IMAGE_QUALITY } from "@/lib/image-defaults";
import {
  syncShowcaseVideosToViewportCenter,
  type ShowcaseFrontDeviceId,
} from "@/lib/sync-showcase-videos-to-viewport-center";
import { ELLIPSE_DEVICE_SHOWCASE_ORBIT_NAV_POSITION_CLASS } from "@/lib/ellipse-device-showcase-layout";
import { cn } from "@/lib/utils";
import {
  useDeviceOrbitAngles,
  type OrbitDeviceId,
  type OrbitSlotOrder,
} from "./use-device-orbit-angles";

/** Right arrow; prev uses horizontal flip. `currentColor` so hover / focus can tint the stroke. */
function DeviceFrameNavArrow({ direction }: { direction: "prev" | "next" }) {
  return (
    <svg
      width={17}
      height={17}
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("block shrink-0", direction === "prev" && "scale-x-[-1]")}
      aria-hidden
    >
      <path
        d="M10.8333 14.1665L15.8333 8.33317M15.8333 8.33317L10.8333 2.49984M15.8333 8.33317L0.833315 8.33317"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const DEVICE_ORBIT_NAV_BUTTON = cn(
  "group relative flex h-10 min-w-[3rem] cursor-pointer items-center justify-center rounded-full border border-transparent bg-white px-3 pb-0 text-[#252525] shadow-sm transition-[background-color,border-color,box-shadow,color] duration-[380ms] ease-[cubic-bezier(0.4,0,0.2,1)]",
  "hover:border-[#a0c4ff] hover:bg-[#111116] hover:text-[#b8d4ff]",
  "hover:shadow-[0_0_0_1px_rgba(160,196,255,0.35),0_4px_18px_rgba(120,170,255,0.42),0_0_28px_rgba(100,150,255,0.22),inset_0_-10px_18px_-10px_rgba(160,196,255,0.14)]",
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black/30",
  "focus-visible:border-[#a0c4ff] focus-visible:bg-[#111116] focus-visible:text-[#b8d4ff]",
  "focus-visible:shadow-[0_0_0_1px_rgba(160,196,255,0.35),0_4px_18px_rgba(120,170,255,0.42),0_0_28px_rgba(100,150,255,0.22),inset_0_-10px_18px_-10px_rgba(160,196,255,0.14)]",
);

/**
 * Figma 546:3027 — ellipse glow centered with phone, tablet, laptop, desktop frames around it.
 * Screen videos play only when this block is near the viewport center; each time they restart from 0.
 */
export function EllipseDeviceShowcase() {
  const rootRef = useRef<HTMLDivElement>(null);
  const wasCenteredRef = useRef(false);
  const previousFrontWhileCenteredRef = useRef<ShowcaseFrontDeviceId | null>(null);
  const videoSlotRefs = useRef<(HTMLVideoElement | null)[]>([null, null, null, null]);

  const [deviceAtSlot, setDeviceAtSlot] = useState<OrbitSlotOrder>(INITIAL_ORDER);
  const orbitAngles = useDeviceOrbitAngles(deviceAtSlot);
  const isNearViewportCenter = useIsNearViewportCenter(rootRef);

  const frontDeviceId = deviceAtSlot[2];

  useEffect(() => {
    syncShowcaseVideosToViewportCenter(
      videoSlotRefs.current,
      isNearViewportCenter,
      wasCenteredRef,
      frontDeviceId,
      previousFrontWhileCenteredRef,
    );
  }, [isNearViewportCenter, frontDeviceId]);

  const fillVideoSlot = useCallback(
    (id: OrbitDeviceId) => (el: HTMLVideoElement | null) => {
      videoSlotRefs.current[id] = el;
    },
    [],
  );

  const goLeft = useCallback(() => {
    setDeviceAtSlot((prev) => rotateLeftOrder(prev));
  }, []);

  const goRight = useCallback(() => {
    setDeviceAtSlot((prev) => rotateRightOrder(prev));
  }, []);

  return (
    <div
      ref={rootRef}
      className="relative isolate mx-auto aspect-[1609/905] w-full max-w-[1609px]"
      data-node-id="546:3027"
    >
      <div className="absolute left-1/2 top-[44%] z-[2] w-[min(54%,872px)] -translate-x-1/2 -translate-y-1/2 mix-blend-screen">
        <div className="relative aspect-[872/409] w-full">
          <div className="absolute inset-[-5.13%_-2.41%]">
            <Image
              alt=""
              src={FIGMA_ASSETS.imgEllipse3459}
              width={872}
              height={409}
              className="h-auto w-full object-contain"
              quality={DEFAULT_IMAGE_QUALITY}
            />
          </div>
        </div>
      </div>

      <EllipseDeviceShowcaseDevices
        deviceAtSlot={deviceAtSlot}
        orbitAngles={orbitAngles}
        fillVideoSlot={fillVideoSlot}
      />

      <div
        className={cn(
          "pointer-events-auto absolute left-1/2 z-20 flex -translate-x-1/2 gap-4",
          ELLIPSE_DEVICE_SHOWCASE_ORBIT_NAV_POSITION_CLASS,
        )}
        role="group"
        aria-label="Device orbit controls"
      >
        <button
          type="button"
          className={DEVICE_ORBIT_NAV_BUTTON}
          aria-label="Bring front device from the left"
          onClick={goLeft}
        >
          <DeviceFrameNavArrow direction="prev" />
        </button>
        <button
          type="button"
          className={DEVICE_ORBIT_NAV_BUTTON}
          aria-label="Bring front device from the right"
          onClick={goRight}
        >
          <DeviceFrameNavArrow direction="next" />
        </button>
      </div>
    </div>
  );
}
