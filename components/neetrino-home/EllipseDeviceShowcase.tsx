"use client";

import Image from "next/image";
import { useCallback, useState } from "react";
import { DEVICE_SHOWCASE_FRAMES } from "@/lib/device-showcase-assets";
import { FIGMA_ASSETS } from "@/lib/figma-assets";
import { DEFAULT_IMAGE_QUALITY } from "@/lib/image-defaults";
import { cn } from "@/lib/utils";
import {
  ORBIT_DURATION_MS,
  orbitPercentPosition,
  useDeviceOrbitAngles,
  type OrbitDeviceId as DeviceId,
  type OrbitSlotOrder as DeviceSlotOrder,
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
  "group relative flex h-10 min-w-[3rem] cursor-pointer items-center justify-center rounded-full border border-transparent bg-white px-3 text-[#252525] shadow-sm transition-[background-color,border-color,box-shadow,color] duration-[380ms] ease-[cubic-bezier(0.4,0,0.2,1)]",
  "hover:border-[#a0c4ff] hover:bg-[#111116] hover:text-[#b8d4ff]",
  "hover:shadow-[0_0_0_1px_rgba(160,196,255,0.35),0_4px_18px_rgba(120,170,255,0.42),0_0_28px_rgba(100,150,255,0.22),inset_0_-10px_18px_-10px_rgba(160,196,255,0.14)]",
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black/30",
  "focus-visible:border-[#a0c4ff] focus-visible:bg-[#111116] focus-visible:text-[#b8d4ff]",
  "focus-visible:shadow-[0_0_0_1px_rgba(160,196,255,0.35),0_4px_18px_rgba(120,170,255,0.42),0_0_28px_rgba(100,150,255,0.22),inset_0_-10px_18px_-10px_rgba(160,196,255,0.14)]",
);

const INITIAL_ORDER: DeviceSlotOrder = [0, 1, 2, 3];

/** Right control: device that was on the right (slot 3) moves to center (slot 2); others shift. */
function rotateRightOrder(prev: DeviceSlotOrder): DeviceSlotOrder {
  return [prev[2], prev[0], prev[3], prev[1]];
}

/** Left control: device that was on the left (slot 0) moves to center (slot 2); others shift. */
function rotateLeftOrder(prev: DeviceSlotOrder): DeviceSlotOrder {
  return [prev[1], prev[3], prev[0], prev[2]];
}

/**
 * Tailwind size / nudge for each device (columns) when a given device is in the front / center slot (rows).
 * Strings can include `w-*`, `max-md:w-*`, `translate-*`, etc.
 */
const DEVICE_WIDTH_WHEN_FRONT: Record<DeviceId, Record<DeviceId, string>> = {
  // iPhone in front: larger iPhone + inner nudge up; larger iPad / iMac; smaller MacBook.
  0: {
    0: "w-[11%] max-md:w-[12%]",
    1: "w-[15%] max-md:w-[15%]",
    2: "w-[26%] max-md:w-[30%]",
    3: "w-[21%] max-md:w-[25%]",
  },
  // iPad in front: larger iPad + lower; larger iMac + left; smaller MacBook + higher (inner transforms below).
  1: {
    0: "w-[7%]",
    1: "w-[18%] max-md:w-[22%]",
    2: "w-[26%] max-md:w-[30%]",
    3: "w-[22%] max-md:w-[25%]",
  },
  2: {
    0: "w-[7%]",
    1: "w-[15.5%] max-md:w-[16%]",
    2: "w-[34%] max-md:w-[38%]",
    3: "w-[18%] max-md:w-[21%]",
  },
  // iMac in front: larger iMac + slight lower (inner translate); smaller MacBook + nudge left (inner translate).
  3: {
    0: "w-[8%] max-md:w-[8.5%]",
    1: "w-[14%] max-md:w-[14%]",
    2: "w-[24%] max-md:w-[28%]",
    3: "w-[27%] max-md:w-[31%]",
  },
};

function deviceWidthClass(frontDeviceId: DeviceId, deviceId: DeviceId): string {
  return DEVICE_WIDTH_WHEN_FRONT[frontDeviceId][deviceId];
}

/**
 * Motion tuned for spatial UI: short enough to feel responsive, ease-out-heavy so motion
 * reads natural (strong deceleration into rest — not linear, not symmetric slow-in-out).
 */
const ORBIT_MS = `duration-[${ORBIT_DURATION_MS}ms]`;
const ORBIT_EASE = "ease-[cubic-bezier(0.22,1,0.36,1)]";
/** Position is driven by rAF + angles; only size / inner transforms use CSS transitions. */
const ORBIT_SHELL_TRANSITION = cn("transition-[width,max-width,min-width]", ORBIT_MS, ORBIT_EASE);
const DEVICE_INNER_TRANSITION = cn("transition-transform", ORBIT_MS, ORBIT_EASE);

/**
 * Figma 546:3027 — ellipse glow centered with phone, tablet, laptop, desktop frames around it.
 * Devices follow a shared ellipse in percent space (see `useDeviceOrbitAngles`); slot order still
 * drives z-index and widths via `frontDeviceId` / `DEVICE_WIDTH_WHEN_FRONT`.
 */
export function EllipseDeviceShowcase() {
  const [deviceAtSlot, setDeviceAtSlot] = useState<DeviceSlotOrder>(INITIAL_ORDER);
  const orbitAngles = useDeviceOrbitAngles(deviceAtSlot);

  /** Who is in the front (center) slot — drives per-device widths via `DEVICE_WIDTH_WHEN_FRONT`. */
  const frontDeviceId = deviceAtSlot[2];

  const slotForDevice = useCallback(
    (deviceId: DeviceId) => deviceAtSlot.indexOf(deviceId) as 0 | 1 | 2 | 3,
    [deviceAtSlot],
  );

  const goLeft = useCallback(() => {
    setDeviceAtSlot((prev) => rotateLeftOrder(prev));
  }, []);

  const goRight = useCallback(() => {
    setDeviceAtSlot((prev) => rotateRightOrder(prev));
  }, []);

  return (
    <div
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

      <div
        className={cn(
          "absolute flex justify-center",
          ORBIT_SHELL_TRANSITION,
          slotForDevice(0) === 2 ? "z-[6]" : "z-[5]",
          deviceWidthClass(frontDeviceId, 0),
        )}
        style={{
          ...orbitPercentPosition(orbitAngles[0], frontDeviceId),
          transform: "translate(-50%, -50%)",
        }}
      >
        <div
          className={cn(
            "relative aspect-[124/252] w-full",
            DEVICE_INNER_TRANSITION,
            frontDeviceId === 3 && "-translate-y-[22px]",
            frontDeviceId === 1 && "-translate-x-[9px] -translate-y-[10px]",
            frontDeviceId === 0 && "-translate-y-[15px]",
          )}
        >
          <Image
            alt=""
            src={FIGMA_ASSETS.imgIPhone14Pro1}
            fill
            className="object-cover object-center drop-shadow-lg"
            sizes="(max-width: 768px) 100px, 140px"
            quality={DEFAULT_IMAGE_QUALITY}
          />
        </div>
      </div>

      <div
        className={cn(
          "absolute flex min-w-0 justify-center",
          ORBIT_SHELL_TRANSITION,
          slotForDevice(1) === 2 ? "z-[6]" : "z-[5]",
          deviceWidthClass(frontDeviceId, 1),
        )}
        style={{
          ...orbitPercentPosition(orbitAngles[1], frontDeviceId),
          transform: "translate(-50%, -50%)",
        }}
      >
        <div
          className={cn(
            "flex min-w-0 aspect-[305/213] w-full max-w-full items-center justify-center",
            DEVICE_INNER_TRANSITION,
            frontDeviceId === 3 && "-translate-y-[51px] -translate-x-[12px]",
            frontDeviceId === 1 && "-translate-y-[-30px] translate-x-[2px]",
            frontDeviceId === 2 && "-translate-y-[32px]",
            frontDeviceId === 0 && "-translate-y-[-5px] -translate-x-[38px]",
          )}
        >
          <div
            className={cn(
              "min-w-0 max-w-full rotate-90",
              frontDeviceId === 1 || frontDeviceId === 0 ? "w-full" : "flex-none w-full",
            )}
          >
            <Image
              alt=""
              src={FIGMA_ASSETS.imgSpaceGray1}
              width={305}
              height={213}
              className="h-auto w-full max-w-full object-cover drop-shadow-lg"
              sizes="(max-width: 768px) 160px, 240px"
              quality={DEFAULT_IMAGE_QUALITY}
            />
          </div>
        </div>
      </div>

      <div
        className={cn(
          "absolute flex flex-col items-center",
          ORBIT_SHELL_TRANSITION,
          slotForDevice(2) === 2 ? "z-[6]" : "z-[5]",
          deviceWidthClass(frontDeviceId, 2),
        )}
        style={{
          ...orbitPercentPosition(orbitAngles[2], frontDeviceId),
          transform: "translate(-50%, -50%)",
        }}
      >
        <div
          className={cn(
            "w-full min-w-0",
            DEVICE_INNER_TRANSITION,
            slotForDevice(1) === 0 && "-translate-x-[40px]",
          )}
        >
          <div
            className={cn(
              "w-full",
              DEVICE_INNER_TRANSITION,
              frontDeviceId === 3 && "-translate-x-[18px] -translate-y-[48px]",
              frontDeviceId === 2 && "-translate-x-[1px] -translate-y-[4px]",
              frontDeviceId === 1 && "-translate-y-[32px] -translate-x-[2px]",
              frontDeviceId === 0 && "-translate-y-[18px] translate-x-[90px]",
            )}
          >
            <Image
              alt=""
              src={DEVICE_SHOWCASE_FRAMES.macbook}
              width={621}
              height={360}
              className="h-auto w-full object-contain drop-shadow-xl"
              quality={DEFAULT_IMAGE_QUALITY}
            />
          </div>
        </div>
      </div>

      <div
        className={cn(
          "absolute flex justify-center",
          ORBIT_SHELL_TRANSITION,
          slotForDevice(3) === 2 ? "z-[6]" : "z-[5]",
          deviceWidthClass(frontDeviceId, 3),
        )}
        style={{
          ...orbitPercentPosition(orbitAngles[3], frontDeviceId),
          transform: "translate(calc(-50% + 1px), -50%)",
        }}
      >
        <div
          className={cn(
            "relative aspect-[326/270] w-full",
            DEVICE_INNER_TRANSITION,
            frontDeviceId === 3 && "translate-y-[5px]",
            frontDeviceId === 0 && "-translate-y-[46px]",
            frontDeviceId === 1 && "-translate-x-[21px] -translate-y-[25px]",
          )}
        >
          <Image
            alt=""
            src={FIGMA_ASSETS.imgAppleIMac27201911}
            fill
            className="object-cover object-center drop-shadow-lg"
            sizes="(max-width: 768px) 200px, 320px"
            quality={DEFAULT_IMAGE_QUALITY}
          />
        </div>
      </div>

      <div
        className="pointer-events-auto absolute bottom-[22%] left-1/2 z-20 flex -translate-x-1/2 gap-4 max-md:bottom-[15%]"
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
