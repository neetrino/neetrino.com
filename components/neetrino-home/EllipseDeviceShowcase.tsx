"use client";

import Image from "next/image";
import { useCallback, useState } from "react";
import { DEVICE_SHOWCASE_FRAMES } from "@/lib/device-showcase-assets";
import { FIGMA_ASSETS } from "@/lib/figma-assets";
import { DEFAULT_IMAGE_QUALITY } from "@/lib/image-defaults";
import { cn } from "@/lib/utils";

/** Arrow from `safearea.svg` (right); prev uses horizontal flip. Served from `public/icons/safearea-arrow.svg`. */
function DeviceFrameNavArrow({ direction }: { direction: "prev" | "next" }) {
  return (
    <span
      className={`inline-flex shrink-0 ${direction === "prev" ? "scale-x-[-1]" : ""}`}
      aria-hidden
    >
      <Image
        src="/icons/safearea-arrow.svg"
        width={15}
        height={15}
        alt=""
        className="block h-[15px] w-[15px]"
      />
    </span>
  );
}

/** 0 = iPhone, 1 = iPad, 2 = MacBook, 3 = iMac */
type DeviceId = 0 | 1 | 2 | 3;

/** [left, top, center, right] — which device id occupies each fixed slot. */
type DeviceSlotOrder = readonly [DeviceId, DeviceId, DeviceId, DeviceId];

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
 * Slot anchors: 0 left, 1 top, 2 center, 3 right (no width — width is per device so size stays correct in every slot).
 */
const SLOT_POSITION = [
  "left-[16.5%] top-[20%] z-[3] translate-x-[8px] max-md:left-[12%] max-md:top-[19%]",
  "left-1/2 top-[0.5%] z-[3] min-w-0 -translate-x-1/2 -translate-y-[42px] max-md:top-[0.5%]",
  "left-1/2 top-[38%] z-[3] -translate-x-1/2 -translate-y-[42px] max-md:top-[40%]",
  "right-[9%] top-[21%] z-[2] -translate-x-[65px] max-md:right-[5%] max-md:top-[20%]",
] as const;

/**
 * Tailwind size / nudge for each device (columns) when a given device is in the front / center slot (rows).
 * Strings can include `w-*`, `max-md:w-*`, `translate-*`, etc.
 */
const DEVICE_WIDTH_WHEN_FRONT: Record<DeviceId, Record<DeviceId, string>> = {
  // iPhone in front: larger iPhone + inner nudge up; larger iPad / iMac; smaller MacBook.
  0: {
    0: "w-[12%] max-md:w-[13%]",
    1: "w-[15%] max-md:w-[15%]",
    2: "w-[26%] max-md:w-[30%]",
    3: "w-[20%] max-md:w-[24%]",
  },
  // iPad in front: larger iPad + lower; larger iMac + left; smaller MacBook + higher (inner transforms below).
  1: {
    0: "w-[7%]",
    1: "w-[18%] max-md:w-[22%]",
    2: "w-[26%] max-md:w-[30%]",
    3: "w-[21%] max-md:w-[24%]",
  },
  2: {
    0: "w-[7%]",
    1: "w-[12%] max-md:w-[12%]",
    2: "w-[32%] max-md:w-[36%]",
    3: "w-[16.6%] max-md:w-[19.7%]",
  },
  // iMac in front: larger iMac + slight lower (inner translate); smaller MacBook + nudge left (inner translate).
  3: {
    0: "w-[7%]",
    1: "w-[14%] max-md:w-[14%]",
    2: "w-[24%] max-md:w-[28%]",
    3: "w-[26%] max-md:w-[30%]",
  },
};

function deviceWidthClass(frontDeviceId: DeviceId, deviceId: DeviceId): string {
  return DEVICE_WIDTH_WHEN_FRONT[frontDeviceId][deviceId];
}

/**
 * Motion tuned for spatial UI: short enough to feel responsive, ease-out-heavy so motion
 * reads natural (strong deceleration into rest — not linear, not symmetric slow-in-out).
 */
const ORBIT_MS = "duration-[720ms]";
const ORBIT_EASE = "ease-[cubic-bezier(0.22,1,0.36,1)]";
const SLOT_TRANSITION = cn(
  "transition-[left,top,right,width,max-width,min-width,transform]",
  ORBIT_MS,
  ORBIT_EASE,
);
const DEVICE_INNER_TRANSITION = cn("transition-transform", ORBIT_MS, ORBIT_EASE);

/**
 * Figma 546:3027 — ellipse glow centered with phone, tablet, laptop, desktop frames around it.
 * Right button brings the device from the right slot to the center; left button brings the device from the left slot to the center.
 * Device widths can depend on `frontDeviceId` (`deviceAtSlot[2]`) — see `DEVICE_WIDTH_WHEN_FRONT`.
 */
export function EllipseDeviceShowcase() {
  const [deviceAtSlot, setDeviceAtSlot] = useState<DeviceSlotOrder>(INITIAL_ORDER);

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
      className="relative mx-auto aspect-[1609/905] w-full max-w-[1609px]"
      data-node-id="546:3027"
    >
      <div className="absolute left-1/2 top-[44%] z-[1] w-[min(54%,872px)] -translate-x-1/2 -translate-y-1/2 mix-blend-screen">
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
          SLOT_TRANSITION,
          SLOT_POSITION[slotForDevice(0)],
          deviceWidthClass(frontDeviceId, 0),
        )}
      >
        <div
          className={cn(
            "relative aspect-[124/252] w-full",
            DEVICE_INNER_TRANSITION,
            frontDeviceId === 1 && "-translate-x-[70px] -translate-y-[10px]",
            frontDeviceId === 0 && "-translate-y-[40px]",
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
          SLOT_TRANSITION,
          SLOT_POSITION[slotForDevice(1)],
          deviceWidthClass(frontDeviceId, 1),
        )}
      >
        <div
          className={cn(
            "flex min-w-0 aspect-[305/213] w-full max-w-full items-center justify-center",
            DEVICE_INNER_TRANSITION,
            frontDeviceId === 3 && "-translate-y-[109px] -translate-x-[20px]",
            frontDeviceId === 1 && "-translate-y-[18px] translate-x-[2px]",
            frontDeviceId === 0 && "-translate-y-[66px] -translate-x-[58px]",
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
          SLOT_TRANSITION,
          SLOT_POSITION[slotForDevice(2)],
          deviceWidthClass(frontDeviceId, 2),
        )}
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
              frontDeviceId === 3 && "-translate-x-[128px] -translate-y-[62px]",
              frontDeviceId === 2 && "-translate-x-[1px]",
              frontDeviceId === 1 && "-translate-y-[16px] translate-x-[-2px]",
              frontDeviceId === 0 && "-translate-y-[30px] translate-x-[90px]",
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
          SLOT_TRANSITION,
          SLOT_POSITION[slotForDevice(3)],
          deviceWidthClass(frontDeviceId, 3),
        )}
      >
        <div
          className={cn(
            "relative aspect-[326/270] w-full",
            DEVICE_INNER_TRANSITION,
            frontDeviceId === 3 && "-translate-y-[12px]",
            frontDeviceId === 0 && "-translate-y-[28px]",
            frontDeviceId === 1 && "-translate-x-[110px] -translate-y-[25px]",
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
          className="flex h-8 min-w-[2.625rem] items-center justify-center rounded-full bg-white px-2.5 text-black shadow-sm transition hover:bg-white/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black/30"
          aria-label="Bring front device from the left"
          onClick={goLeft}
        >
          <DeviceFrameNavArrow direction="prev" />
        </button>
        <button
          type="button"
          className="flex h-8 min-w-[2.625rem] items-center justify-center rounded-full bg-white px-2.5 text-black shadow-sm transition hover:bg-white/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black/30"
          aria-label="Bring front device from the right"
          onClick={goRight}
        >
          <DeviceFrameNavArrow direction="next" />
        </button>
      </div>
    </div>
  );
}
