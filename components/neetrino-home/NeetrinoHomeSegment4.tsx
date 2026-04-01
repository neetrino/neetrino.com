"use client";

import Image from "next/image";
import { CanvasFooter } from "@/components/sections/Footer";
import { Group } from "./Group";
import {
  img2661,
  imgBiotechLogo1,
  imgKleverKleverIoInstagramPhotosAndVideos3,
  imgStanislavHristov3,
  imgUiDesign21,
} from "./figma-assets";

export function NeetrinoHomeSegment4() {
  return (
    <>
      <CanvasFooter className="left-0 top-[4162px]" />
      <div
        className="absolute h-[1173px] left-px top-[2106px] w-[1440px]"
        data-name="PROJECTS"
        data-node-id="10:489"
        id="blog"
      >
        <div
          className="absolute contents leading-[0] left-[51px] text-white top-[51px] whitespace-nowrap"
          data-node-id="10:506"
        >
          <div
            className="-translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center left-[57px] not-italic text-[16px] top-[68.5px]"
            data-node-id="10:507"
          >
            <p className="leading-[35px]">PORTFOLIO</p>
          </div>
          <div
            className="-translate-y-1/2 absolute flex flex-col font-['Inter:Black_Italic',sans-serif] font-black italic justify-center left-[51px] text-[35px] top-[103.5px]"
            data-node-id="10:508"
          >
            <p>
              <span className="leading-[35px]">OUR</span>
              <span className="leading-[35px] text-[#ff7500]">{` PROJECTS`}</span>
            </p>
          </div>
        </div>
        <Group className="-translate-x-1/2 absolute h-[276px] left-1/2 top-[987px] w-[642px]" />
      </div>
      <div
        className="absolute h-[378px] left-[1540px] rounded-[31px] top-[2334px] w-[587px]"
        data-name="biotech _ logo 1"
        data-node-id="55:381"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[31px]">
          <Image
            alt=""
            width={2400}
            height={2400}
            className="absolute h-[120.37%] left-[-1.69%] max-w-none top-[-13.55%] w-[103.37%]"
            src={imgBiotechLogo1}
          />
        </div>
      </div>
      <div
        className="absolute h-[378px] left-[1978px] rounded-[31px] top-[2763px] w-[587px]"
        data-name="biotech _ logo 2"
        data-node-id="55:395"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[31px]">
          <Image
            alt=""
            width={2400}
            height={2400}
            className="absolute h-[120.37%] left-[-1.69%] max-w-none top-[-13.55%] w-[103.37%]"
            src={imgBiotechLogo1}
          />
        </div>
      </div>
      <div
        className="absolute h-[378px] left-[-490px] rounded-[32px] top-[2334px] w-[379px]"
        data-name="Klever (@klever_io) • Instagram photos and videos 3"
        data-node-id="55:383"
      >
        <Image
          alt=""
          width={2400}
          height={2400}
          className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[32px] size-full"
          src={imgKleverKleverIoInstagramPhotosAndVideos3}
        />
      </div>
      <div
        className="absolute content-stretch flex gap-[11px] items-end left-[-52px] top-[2757px]"
        data-node-id="55:398"
      >
        <div
          className="h-[378px] relative rounded-[32px] shrink-0 w-[379px]"
          data-name="Klever (@klever_io) • Instagram photos and videos 4"
          data-node-id="55:397"
        >
          <Image
            alt=""
            width={2400}
            height={2400}
            className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[32px] size-full"
            src={imgKleverKleverIoInstagramPhotosAndVideos3}
          />
        </div>
        <div
          className="h-[378px] relative rounded-[43px] shrink-0 w-[505px]"
          data-name="Stanislav Hristov 4"
          data-node-id="55:393"
        >
          <Image
            alt=""
            width={2400}
            height={2400}
            className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[43px] size-full"
            src={imgStanislavHristov3}
          />
        </div>
        <div
          className="h-[378px] relative rounded-[45px] shrink-0 w-[505px]"
          data-name="UI Design-2 2"
          data-node-id="55:394"
        >
          <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[45px]">
            <Image
              alt=""
              width={2400}
              height={2400}
              className="absolute h-[104.76%] left-[-4.55%] max-w-none top-[-4.76%] w-[104.55%]"
              src={imgUiDesign21}
            />
          </div>
        </div>
        <div
          className="h-[383px] relative rounded-[35px] shrink-0 w-[592px]"
          data-name="-266 2"
          data-node-id="55:396"
        >
          <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[35px]">
            <Image
              alt=""
              width={2400}
              height={2400}
              className="absolute h-[154.19%] left-0 max-w-none top-[-40.85%] w-full"
              src={img2661}
            />
          </div>
        </div>
      </div>
    </>
  );
}
