"use client";

import Image from "next/image";
import { Frame } from "./Frame";
import { NeetrinoHomeWhatWeDoBottom } from "./NeetrinoHomeWhatWeDoBottom";
import { NeetrinoHomeWhatWeDoTop } from "./NeetrinoHomeWhatWeDoTop";
import { imgEllipse3459 } from "./figma-assets";

export function NeetrinoHomeBelowFold() {
  return (
    <>
      <div
        className="-translate-x-1/2 absolute h-[409px] left-[calc(50%+11px)] top-[4153px] w-[872px]"
        data-node-id="48:505"
      >
        <div className="absolute inset-[-5.13%_-2.41%]">
          <Image
            alt=""
            unoptimized
            width={2400}
            height={2400}
            className="block max-w-none size-full"
            src={imgEllipse3459}
          />
        </div>
      </div>
      <Frame className="hidden -translate-x-1/2 absolute h-[905px] left-[calc(50%-0.5px)] top-[3879px] w-[1609px]" />
      <div
        className="-translate-x-1/2 absolute h-[829px] left-[calc(50%+0.5px)] top-[1277px] w-[1431px]"
        data-name="WHAT WE DO"
        data-node-id="90:525"
      >
        <NeetrinoHomeWhatWeDoTop />
        <NeetrinoHomeWhatWeDoBottom />
      </div>
    </>
  );
}
