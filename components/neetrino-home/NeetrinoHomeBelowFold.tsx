"use client";

import { EllipseDeviceShowcase } from "@/components/neetrino-home/EllipseDeviceShowcase";
import { HOME_DESKTOP_DEVICE_SHOWCASE_CANVAS_TOP_PX } from "@/lib/home-desktop-layout";
import { NeetrinoHomeWhatWeDoBottom } from "./NeetrinoHomeWhatWeDoBottom";
import { NeetrinoHomeWhatWeDoTop } from "./NeetrinoHomeWhatWeDoTop";

export function NeetrinoHomeBelowFold() {
  return (
    <>
      <div
        className="-translate-x-1/2 pointer-events-none absolute left-[calc(50%+11px)] z-[13] w-[min(100%,1609px)]"
        style={{ top: HOME_DESKTOP_DEVICE_SHOWCASE_CANVAS_TOP_PX }}
        data-name="Ellipse + device frames"
        data-node-id="546:3027"
      >
        <EllipseDeviceShowcase />
      </div>
      <div
        className="isolate absolute z-[12] h-[829px] w-[1431px] -translate-x-1/2 left-[calc(50%+0.5px)] top-[1277px]"
        data-name="WHAT WE DO"
        data-node-id="90:525"
      >
        <NeetrinoHomeWhatWeDoTop />
        <NeetrinoHomeWhatWeDoBottom />
      </div>
    </>
  );
}
