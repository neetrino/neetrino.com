"use client";

import type { CSSProperties, RefObject } from "react";
import { AboutUsLiquidCapsule } from "@/components/about-us/figma/AboutUsLiquidCapsule";

const transformStyle = {
  "--transform-inner-width": "0",
  "--transform-inner-height": "0",
} as CSSProperties;

type AboutUsFigmaBlock1cProps = {
  containerRef: RefObject<HTMLDivElement | null>;
};

/** Figma ABOUT fragment — nodes 335:978–335:982 (split from block1b for 300-line limit). */
export function AboutUsFigmaBlock1c({ containerRef }: AboutUsFigmaBlock1cProps) {
  return (
    <>
      <div
        className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-['Inter:Extra_Light',sans-serif] font-extralight justify-center leading-[0] left-[552px] not-italic text-[16px] text-right text-white top-[1464px] w-[371px]"
        data-node-id="335:978"
      >
        <p className="leading-[24px]">{`Our goal is to deliver fast, affordable, and high-quality digital solutions, empowering businesses to effortlessly build and expand their online presence, no matter how complex the project. `}</p>
      </div>
      <div
        className="-translate-y-1/2 absolute flex flex-col font-['Inter:Extra_Light',sans-serif] font-extralight justify-center leading-[0] left-[869px] not-italic text-[16px] text-white top-[1596px] w-[371px]"
        data-node-id="335:979"
      >
        <p className="leading-[24px]">{`We envision a world where businesses of all sizes can effortlessly establish a strong digital presence using our fast, cutting-edge technological solutions. Our aim is to lead the transformation of website and app development, making these tools accessible to everyone, everywhere. `}</p>
      </div>
      <AboutUsLiquidCapsule mouseContainerRef={containerRef} />
      <div
        className="-translate-x-1/2 absolute flex h-[252px] items-center justify-center left-[calc(50%+0.5px)] top-[2325px] w-[1343px]"
        style={transformStyle}
      >
        <div className="flex-none rotate-90">
          <div
            className="bg-[rgba(0,0,0,0)] h-[1343px] rounded-[151px] w-[252px]"
            data-node-id="335:982"
          />
        </div>
      </div>
    </>
  );
}
