"use client";

import Image from "next/image";
import { imgRectangle17411, imgRectangle17414, imgRectangle17415 } from "./figma-assets";

export function NeetrinoHomeSegment3() {
  return (
    <>
      <div className="pointer-events-none absolute z-0 flex h-[536px] items-center justify-center left-[-1150px] mix-blend-color top-[4832px] w-[604px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div
            className="bg-[#473dff] h-[536px] w-[604px]"
            data-name="color"
            data-node-id="43:448"
          />
        </div>
      </div>
      <div
        className="pointer-events-none -translate-x-1/2 absolute h-[236px] left-[calc(50%+1.5px)] top-[1277px] w-[1437px]"
        data-node-id="10:229"
      >
        <div className="absolute inset-[-90.97%_-15.66%_-91.4%_-15.66%]">
          <Image
            alt=""
            width={2400}
            height={2400}
            className="block max-w-none size-full"
            src={imgRectangle17411}
          />
        </div>
      </div>
      <div
        className="pointer-events-none -translate-x-1/2 absolute h-[405px] left-[calc(50%+0.5px)] top-[2098px] w-[1437px]"
        data-node-id="10:230"
      >
        <div className="absolute inset-[-50.95%_-15.66%_-51.42%_-15.66%]">
          <Image
            alt=""
            width={2400}
            height={2400}
            className="block max-w-none size-full"
            src={imgRectangle17414}
          />
        </div>
      </div>
      <div
        className="pointer-events-none -translate-x-1/2 absolute h-[664px] left-[calc(50%+0.5px)] top-[2712px] w-[1437px]"
        data-node-id="10:231"
      >
        <div className="absolute inset-[-28.94%_-15.66%_-29.47%_-15.66%]">
          <Image
            alt=""
            width={2400}
            height={2400}
            className="block max-w-none size-full"
            src={imgRectangle17415}
          />
        </div>
      </div>
    </>
  );
}
