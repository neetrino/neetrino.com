"use client";

import Image from "next/image";
import { useCallback } from "react";
import { EllipseDeviceScreenVideo } from "@/components/neetrino-home/EllipseDeviceScreenVideo";
import { DEVICE_SHOWCASE_FRAMES } from "@/lib/device-showcase-assets";
import {
  DEVICE_IMAC_ORBIT_VIDEO_TRANSFORM_CLASS,
  DEVICE_IMAC_SCREEN_VIDEO_INSET_PCT,
  DEVICE_IMAC_VIDEO_WHEN_FRONT_MOVE_CLASS,
  DEVICE_IPAD_ORBIT_FRAME_WRAPPER_WHEN_FRONT_CLASS,
  DEVICE_IPAD_ORBIT_SHELL_WIDTH_WHEN_IPAD_FRONT_CLASS,
  DEVICE_IPAD_SCREEN_VIDEO_ELEMENT_ROUNDED_CLASS,
  DEVICE_IPAD_SCREEN_VIDEO_SURFACE_CLASS,
  deviceIpadScreenVideoClipShellPositionStyle,
  DEVICE_IPHONE_FRAME_ASPECT_PADDING_BOTTOM_PERCENT,
  DEVICE_IPHONE_SCREEN_VIDEO_ELEMENT_ROUNDED_CLASS,
  DEVICE_IPHONE_VERTICAL_VIDEO_INSET_PCT,
  DEVICE_IPHONE_VERTICAL_VIDEO_SURFACE_ROUNDED,
  DEVICE_MACBOOK_FRAME_ASSET_WIDTH_PX,
  DEVICE_MACBOOK_SCREEN_VIDEO_INSET_PCT,
  DEVICE_MACBOOK_VIDEO_WHEN_FRONT_ASPECT_CLASS,
  DEVICE_MACBOOK_VIDEO_WHEN_FRONT_ROUNDED_CLASS,
  DEVICE_MACBOOK_VIDEO_WHEN_FRONT_SHELL_LEFT_CLASS,
  DEVICE_MACBOOK_VIDEO_WHEN_FRONT_SHELL_TOP_CLASS,
  DEVICE_MACBOOK_VIDEO_WHEN_FRONT_WIDTH_CLASS,
  DEVICE_MACBOOK_VIDEO_FRONT_MOVE_CLASS,
  DEVICE_MACBOOK_ORBIT_VIDEO_TRANSFORM_CLASS,
  DEVICE_MACBOOK_ORBIT_WRAPPER_TRANSLATE_WHEN_IPHONE_FRONT_CLASS,
  DEVICE_SHOWCASE_LANDSCAPE_VIDEO_OBJECT_POSITION_CLASS,
  deviceShowcaseScreenVideoSrc,
} from "@/lib/device-showcase-screen-video";
import { FIGMA_ASSETS } from "@/lib/figma-assets";
import { DEFAULT_IMAGE_QUALITY } from "@/lib/image-defaults";
import { cn } from "@/lib/utils";
import {
  ORBIT_DURATION_MS,
  orbitPercentPosition,
  type OrbitDeviceId,
  type OrbitSlotOrder,
} from "./use-device-orbit-angles";

/** Slot 2 = front/center: iPhone (0). Slot 0–1–3 = iPad left, MacBook top, iMac right. */
const INITIAL_ORDER: OrbitSlotOrder = [1, 2, 0, 3];

/** Right control: device that was on the right (slot 3) moves to center (slot 2); others shift. */
export function rotateRightOrder(prev: OrbitSlotOrder): OrbitSlotOrder {
  return [prev[2], prev[0], prev[3], prev[1]];
}

/** Left control: device that was on the left (slot 0) moves to center (slot 2); others shift. */
export function rotateLeftOrder(prev: OrbitSlotOrder): OrbitSlotOrder {
  return [prev[1], prev[3], prev[0], prev[2]];
}

export { INITIAL_ORDER };

/**
 * Tailwind size / nudge for each device (columns) when a given device is in the front / center slot (rows).
 */
const DEVICE_WIDTH_WHEN_FRONT: Record<OrbitDeviceId, Record<OrbitDeviceId, string>> = {
  0: {
    0: "w-[11%] max-md:w-[12%]",
    1: "w-[15%] max-md:w-[15%]",
    2: "w-[26%] max-md:w-[30%]",
    3: "w-[21%] max-md:w-[25%]",
  },
  1: {
    0: "w-[7%]",
    1: DEVICE_IPAD_ORBIT_SHELL_WIDTH_WHEN_IPAD_FRONT_CLASS,
    2: "w-[26%] max-md:w-[30%]",
    3: "w-[22%] max-md:w-[25%]",
  },
  2: {
    0: "w-[7%]",
    1: "w-[15.5%] max-md:w-[16%]",
    2: "w-[34%] max-md:w-[38%]",
    3: "w-[18%] max-md:w-[21%]",
  },
  3: {
    0: "w-[8%] max-md:w-[8.5%]",
    1: "w-[14%] max-md:w-[14%]",
    2: "w-[24%] max-md:w-[28%]",
    3: "w-[27%] max-md:w-[31%]",
  },
};

function deviceWidthClass(frontDeviceId: OrbitDeviceId, deviceId: OrbitDeviceId): string {
  return DEVICE_WIDTH_WHEN_FRONT[frontDeviceId][deviceId];
}

const ORBIT_MS = `duration-[${ORBIT_DURATION_MS}ms]`;
const ORBIT_EASE = "ease-[cubic-bezier(0.22,1,0.36,1)]";
const ORBIT_SHELL_TRANSITION = cn("transition-[width,max-width,min-width]", ORBIT_MS, ORBIT_EASE);

/** Orbit slot 1 = top; nudges the iPhone shell left vs ellipse anchor (more negative = further left). */
const DEVICE_IPHONE_SHELL_NUDGE_X_PX_WHEN_TOP_SLOT = -10 as const;
/** Orbit slot 2 = front/center; nudges the iPhone shell left when it is the hero device. */
const DEVICE_IPHONE_SHELL_NUDGE_X_PX_WHEN_CENTER_SLOT = -11 as const;
/** Orbit slot 1 = top; nudges the iMac shell on X vs ellipse anchor (positive = right; lower = more left). */
const DEVICE_IMAC_SHELL_NUDGE_X_PX_WHEN_TOP_SLOT = 7 as const;
const DEVICE_IMAC_SHELL_NUDGE_Y_PX_WHEN_TOP_SLOT = 15 as const;
/** Orbit slot 3 = right; nudges the iMac shell slightly down vs ellipse anchor. */
const DEVICE_IMAC_SHELL_NUDGE_Y_PX_WHEN_RIGHT_SLOT = 20 as const;
/** Orbit slot 2 = front/center; nudges iMac shell left when it is the hero device (more negative = further left). */
const DEVICE_IMAC_SHELL_NUDGE_X_PX_WHEN_CENTER_SLOT = -12 as const;
/** Orbit slot 1 = top; nudges the MacBook shell on X vs ellipse anchor (positive = right; lowered for a touch left). */
const DEVICE_MACBOOK_SHELL_NUDGE_X_PX_WHEN_TOP_SLOT = 1 as const;
/** Orbit slot 2 = front/center; nudges MacBook shell slightly left when hero (more negative = further left). */
const DEVICE_MACBOOK_SHELL_NUDGE_X_PX_WHEN_CENTER_SLOT = -7 as const;
/** Orbit slot 3 = right; nudges the iPad shell slightly down vs ellipse anchor. */
const DEVICE_IPAD_SHELL_NUDGE_Y_PX_WHEN_RIGHT_SLOT = 25 as const;
/** Orbit slot 1 = top; nudges the iPad shell on X vs ellipse anchor (positive = right; lower = more left). */
const DEVICE_IPAD_SHELL_NUDGE_X_PX_WHEN_TOP_SLOT = -3 as const;
const DEVICE_IPAD_SHELL_NUDGE_Y_PX_WHEN_TOP_SLOT = 12 as const;
const DEVICE_INNER_TRANSITION = cn("transition-transform", ORBIT_MS, ORBIT_EASE);

export type EllipseDeviceShowcaseDevicesProps = Readonly<{
  deviceAtSlot: OrbitSlotOrder;
  orbitAngles: Record<OrbitDeviceId, number>;
  fillVideoSlot: (id: OrbitDeviceId) => (el: HTMLVideoElement | null) => void;
}>;

export function EllipseDeviceShowcaseDevices({
  deviceAtSlot,
  orbitAngles,
  fillVideoSlot,
}: EllipseDeviceShowcaseDevicesProps) {
  const frontDeviceId = deviceAtSlot[2];

  const slotForDevice = useCallback(
    (deviceId: OrbitDeviceId) => deviceAtSlot.indexOf(deviceId) as 0 | 1 | 2 | 3,
    [deviceAtSlot],
  );

  return (
    <>
      <div
        className={cn(
          "absolute flex justify-center",
          ORBIT_SHELL_TRANSITION,
          slotForDevice(0) === 2 ? "z-[6]" : "z-[5]",
          deviceWidthClass(frontDeviceId, 0),
        )}
        style={{
          ...orbitPercentPosition(orbitAngles[0], frontDeviceId),
          transform:
            slotForDevice(0) === 1
              ? `translate(calc(-50% + ${DEVICE_IPHONE_SHELL_NUDGE_X_PX_WHEN_TOP_SLOT}px), -50%)`
              : slotForDevice(0) === 2
                ? `translate(calc(-50% + ${DEVICE_IPHONE_SHELL_NUDGE_X_PX_WHEN_CENTER_SLOT}px), -50%)`
                : "translate(-50%, -50%)",
        }}
      >
        <div
          className={cn(
            "relative w-full overflow-hidden",
            DEVICE_INNER_TRANSITION,
            frontDeviceId === 3 && "-translate-y-[9%]",
            frontDeviceId === 1 && "-translate-x-[3%] -translate-y-[4%]",
            frontDeviceId === 0 && "-translate-y-[6%]",
          )}
          style={{
            paddingBottom: `${DEVICE_IPHONE_FRAME_ASPECT_PADDING_BOTTOM_PERCENT}%`,
          }}
        >
          <div className="absolute inset-0">
            {/* Frame under video: WebP screen is opaque — video must paint above the bitmap in the glass rect. */}
            <Image
              alt=""
              src={FIGMA_ASSETS.imgIPhone14Pro1}
              fill
              className="z-[1] object-cover object-center shadow-lg"
              sizes="(max-width: 768px) 100px, 140px"
              quality={DEFAULT_IMAGE_QUALITY}
            />
            <EllipseDeviceScreenVideo
              src={deviceShowcaseScreenVideoSrc(0)}
              inset={DEVICE_IPHONE_VERTICAL_VIDEO_INSET_PCT}
              objectFit="cover"
              screenSurfaceClassName={DEVICE_IPHONE_VERTICAL_VIDEO_SURFACE_ROUNDED}
              videoClassName={DEVICE_IPHONE_SCREEN_VIDEO_ELEMENT_ROUNDED_CLASS}
              className="z-[3]"
              setVideoRef={fillVideoSlot(0)}
            />
          </div>
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
          transform:
            slotForDevice(1) === 1
              ? `translate(calc(-50% + ${DEVICE_IPAD_SHELL_NUDGE_X_PX_WHEN_TOP_SLOT}px), calc(-50% + ${DEVICE_IPAD_SHELL_NUDGE_Y_PX_WHEN_TOP_SLOT}px))`
              : slotForDevice(1) === 3
                ? `translate(-50%, calc(-50% + ${DEVICE_IPAD_SHELL_NUDGE_Y_PX_WHEN_RIGHT_SLOT}px))`
                : "translate(-50%, -50%)",
        }}
      >
        <div
          className={cn(
            "flex min-w-0 aspect-[305/213] w-full max-w-full items-center justify-center",
            DEVICE_INNER_TRANSITION,
            frontDeviceId === 3 && "-translate-y-[15%] -translate-x-[3.5%]",
            frontDeviceId === 1 && DEVICE_IPAD_ORBIT_FRAME_WRAPPER_WHEN_FRONT_CLASS,
            frontDeviceId === 2 && "-translate-y-[10%]",
            frontDeviceId === 0 && "translate-y-[1.5%] -translate-x-[11%]",
          )}
        >
          <div
            className={cn(
              "relative min-w-0 max-w-full rotate-90",
              frontDeviceId === 1 || frontDeviceId === 0 ? "w-full" : "flex-none w-full",
            )}
          >
            <Image
              alt=""
              src={FIGMA_ASSETS.imgSpaceGray1}
              width={305}
              height={213}
              className="relative z-[1] h-auto w-full max-w-full object-cover shadow-lg"
              sizes="(max-width: 768px) 160px, 240px"
              quality={DEFAULT_IMAGE_QUALITY}
            />
            <EllipseDeviceScreenVideo
              src={deviceShowcaseScreenVideoSrc(2)}
              inset={DEVICE_MACBOOK_SCREEN_VIDEO_INSET_PCT}
              objectFit="contain"
              clipShellPositionStyle={deviceIpadScreenVideoClipShellPositionStyle({
                ipadIsFrontDevice: frontDeviceId === 1,
                ipadOrbitSlot: slotForDevice(1),
              })}
              className="z-[3]"
              screenSurfaceClassName={DEVICE_IPAD_SCREEN_VIDEO_SURFACE_CLASS}
              videoClassName={cn(
                DEVICE_INNER_TRANSITION,
                "origin-center rotate-[270deg]",
                DEVICE_IPAD_SCREEN_VIDEO_ELEMENT_ROUNDED_CLASS,
              )}
              setVideoRef={fillVideoSlot(1)}
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
          transform:
            slotForDevice(2) === 1
              ? `translate(calc(-50% + ${DEVICE_MACBOOK_SHELL_NUDGE_X_PX_WHEN_TOP_SLOT}px), -50%)`
              : slotForDevice(2) === 2
                ? `translate(calc(-50% + ${DEVICE_MACBOOK_SHELL_NUDGE_X_PX_WHEN_CENTER_SLOT}px), -50%)`
                : "translate(-50%, -50%)",
        }}
      >
        <div
          className={cn(
            "w-full min-w-0",
            DEVICE_INNER_TRANSITION,
            slotForDevice(1) === 0 && "-translate-x-[11%]",
          )}
        >
          <div
            className={cn(
              "relative w-full",
              DEVICE_INNER_TRANSITION,
              frontDeviceId === 3 && "-translate-x-[5%] -translate-y-[13%]",
              frontDeviceId === 2 && "-translate-x-[0.5%] -translate-y-[1%]",
              frontDeviceId === 1 && "-translate-y-[9%] -translate-x-[0.5%]",
              frontDeviceId === 0 &&
                cn(
                  "-translate-y-[5%]",
                  DEVICE_MACBOOK_ORBIT_WRAPPER_TRANSLATE_WHEN_IPHONE_FRONT_CLASS,
                ),
            )}
          >
            <Image
              alt=""
              src={DEVICE_SHOWCASE_FRAMES.macbook}
              width={DEVICE_MACBOOK_FRAME_ASSET_WIDTH_PX}
              height={360}
              className="relative z-[1] h-auto w-full object-contain shadow-xl"
              quality={DEFAULT_IMAGE_QUALITY}
            />
            {frontDeviceId === 2 ? (
              <div
                className={cn(
                  "pointer-events-none absolute z-[3] max-w-full -translate-x-1/2 -translate-y-1/2 overflow-hidden",
                  DEVICE_MACBOOK_VIDEO_WHEN_FRONT_ASPECT_CLASS,
                  DEVICE_MACBOOK_VIDEO_WHEN_FRONT_SHELL_LEFT_CLASS,
                  DEVICE_MACBOOK_VIDEO_WHEN_FRONT_SHELL_TOP_CLASS,
                  DEVICE_MACBOOK_VIDEO_WHEN_FRONT_ROUNDED_CLASS,
                  DEVICE_MACBOOK_VIDEO_WHEN_FRONT_WIDTH_CLASS,
                )}
              >
                <div className={cn("size-full", DEVICE_MACBOOK_VIDEO_FRONT_MOVE_CLASS)}>
                  <video
                    ref={fillVideoSlot(2)}
                    className={cn(
                      "pointer-events-none size-full bg-transparent object-cover",
                      DEVICE_SHOWCASE_LANDSCAPE_VIDEO_OBJECT_POSITION_CLASS,
                    )}
                    src={deviceShowcaseScreenVideoSrc(2)}
                    muted
                    playsInline
                    loop
                    preload="metadata"
                    aria-hidden
                  />
                </div>
              </div>
            ) : (
              <EllipseDeviceScreenVideo
                src={deviceShowcaseScreenVideoSrc(2)}
                inset={DEVICE_MACBOOK_SCREEN_VIDEO_INSET_PCT}
                className={cn("z-[3]", DEVICE_SHOWCASE_LANDSCAPE_VIDEO_OBJECT_POSITION_CLASS)}
                videoClassName={cn(
                  DEVICE_INNER_TRANSITION,
                  DEVICE_MACBOOK_ORBIT_VIDEO_TRANSFORM_CLASS,
                )}
                setVideoRef={fillVideoSlot(2)}
              />
            )}
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
          transform:
            slotForDevice(3) === 1
              ? `translate(calc(-50% + 1px + ${DEVICE_IMAC_SHELL_NUDGE_X_PX_WHEN_TOP_SLOT}px), calc(-50% - ${DEVICE_IMAC_SHELL_NUDGE_Y_PX_WHEN_TOP_SLOT}px))`
              : slotForDevice(3) === 3
                ? `translate(calc(-50% + 1px), calc(-50% + ${DEVICE_IMAC_SHELL_NUDGE_Y_PX_WHEN_RIGHT_SLOT}px))`
                : slotForDevice(3) === 2
                  ? `translate(calc(-50% + 1px + ${DEVICE_IMAC_SHELL_NUDGE_X_PX_WHEN_CENTER_SLOT}px), -50%)`
                  : "translate(calc(-50% + 1px), -50%)",
        }}
      >
        <div
          className={cn(
            "relative aspect-[326/270] w-full",
            DEVICE_INNER_TRANSITION,
            frontDeviceId === 3 && "translate-y-[5px]",
            frontDeviceId === 0 && "-translate-y-[13%]",
            frontDeviceId === 1 && "-translate-x-[6%] -translate-y-[7%]",
          )}
        >
          <Image
            alt=""
            src={FIGMA_ASSETS.imgAppleIMac27201911}
            fill
            className="z-[1] object-cover object-center shadow-lg"
            sizes="(max-width: 768px) 200px, 320px"
            quality={DEFAULT_IMAGE_QUALITY}
          />
          <EllipseDeviceScreenVideo
            src={deviceShowcaseScreenVideoSrc(3)}
            inset={DEVICE_IMAC_SCREEN_VIDEO_INSET_PCT}
            className={cn("z-[3]", DEVICE_SHOWCASE_LANDSCAPE_VIDEO_OBJECT_POSITION_CLASS)}
            videoClassName={cn(
              DEVICE_INNER_TRANSITION,
              frontDeviceId === 3
                ? DEVICE_IMAC_VIDEO_WHEN_FRONT_MOVE_CLASS
                : DEVICE_IMAC_ORBIT_VIDEO_TRANSFORM_CLASS,
            )}
            setVideoRef={fillVideoSlot(3)}
          />
        </div>
      </div>
    </>
  );
}
