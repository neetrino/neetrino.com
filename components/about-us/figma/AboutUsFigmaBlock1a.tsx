"use client";

import type { CSSProperties, RefObject } from "react";
import { AboutUsStickyCone } from "@/components/about-us/figma/AboutUsStickyCone";
import { FigmaFillImage } from "@/components/shared/FigmaFillImage";
import {
  imgBottomA,
  imgBottomB,
  imgBottomC,
  imgBottomD,
  imgCenterA,
  imgCenterB,
  imgCenterC,
  imgLine734,
  imgRectangle240649642,
  imgRectangle240650146,
  imgVector27397,
  imgVector27398,
} from "@/lib/about-us-figma-asset-urls";

const transformStyle = {
  "--transform-inner-width": "0",
  "--transform-inner-height": "0",
} as CSSProperties;

/** Figma ABOUT fragment — nodes 335:906–335:930 (split for 300-line limit). */
export function AboutUsFigmaBlock1a({
  containerRef,
}: {
  containerRef: RefObject<HTMLDivElement | null>;
}) {
  return (
    <>
      <div
        className="-translate-x-1/2 absolute contents left-[calc(50%-21.5px)] top-[2507px]"
        data-name="Background Lights"
        data-node-id="335:906"
      >
        <div
          className="absolute flex h-[769px] items-center justify-center left-[510px] opacity-70 top-[2967px] w-[377px]"
          style={transformStyle}
        >
          <div className="flex-none rotate-[116.12deg] scale-y-79 skew-x-[-37.77deg]">
            <div
              className="h-[390.354px] relative w-[466.086px]"
              data-name="Bottom D"
              data-node-id="335:907"
            >
              <div className="absolute inset-[-25.62%_-21.46%]">
                <FigmaFillImage src={imgBottomD} />
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute h-[386px] left-[596.04px] top-[3011.5px] w-[209.581px]"
          data-name="Bottom C"
          data-node-id="335:908"
        >
          <div className="absolute inset-[-23.32%_-42.94%]">
            <FigmaFillImage src={imgBottomC} />
          </div>
        </div>
        <div
          className="absolute h-[386px] left-[596.04px] opacity-75 top-[3051px] w-[209.581px]"
          data-name="Bottom B"
          data-node-id="335:909"
        >
          <div className="absolute inset-[-15.54%_-28.63%]">
            <FigmaFillImage src={imgBottomB} />
          </div>
        </div>
        <div
          className="-translate-x-1/2 absolute h-[500px] left-[calc(50%+0.07px)] opacity-70 top-[2884px] w-[63.732px]"
          data-name="Center C"
          data-node-id="335:910"
        >
          <div className="absolute inset-[-6%_-47.07%]">
            <FigmaFillImage src={imgCenterC} />
          </div>
        </div>
        <div
          className="-translate-x-1/2 absolute h-[500px] left-[calc(50%-46.01px)] opacity-70 top-[2884px] w-[86.283px]"
          data-name="Center B"
          data-node-id="335:911"
        >
          <div className="absolute inset-[-6%_-34.77%]">
            <FigmaFillImage src={imgCenterB} />
          </div>
        </div>
        <div
          className="-translate-x-1/2 absolute h-[500px] left-[calc(50%+9.63px)] opacity-70 top-[2914px] w-[83.832px]"
          data-name="Center A"
          data-node-id="335:912"
        >
          <div className="absolute inset-[-6%_-35.79%]">
            <FigmaFillImage src={imgCenterA} />
          </div>
        </div>
        <div
          className="absolute h-[180px] left-[613.2px] opacity-80 top-[3285px] w-[192.667px]"
          data-name="Bottom A"
          data-node-id="335:913"
        >
          <div className="absolute inset-[-27.78%_-25.95%]">
            <FigmaFillImage src={imgBottomA} />
          </div>
        </div>
      </div>
      <AboutUsStickyCone containerRef={containerRef} />
      <div className="absolute contents left-[70px] top-[-471px]" data-node-id="335:920">
        <div className="absolute contents left-[1042.53px] top-[-471px]" data-node-id="335:921">
          <div
            className="absolute flex h-[759.42px] items-center justify-center left-[1063.17px] top-[-471px] w-0"
            style={transformStyle}
          >
            <div className="flex-none rotate-90">
              <div className="h-0 relative w-[759.42px]" data-node-id="335:922">
                <div className="absolute inset-[-14.04px_-1.23%]">
                  <FigmaFillImage src={imgLine734} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute h-[440.557px] left-[366.52px] opacity-90 top-[153.27px] w-[1119.172px]"
          data-node-id="335:927"
        >
          <div className="absolute inset-[-20.19%_-7.95%]">
            <FigmaFillImage src={imgVector27397} />
          </div>
        </div>
        <div
          className="absolute h-[435.5px] left-[168px] opacity-90 top-[120px] w-[1317.521px]"
          data-node-id="335:928"
        >
          <div className="absolute inset-[-20.42%_-6.75%]">
            <FigmaFillImage src={imgVector27398} />
          </div>
        </div>
        <div
          className="absolute h-[645.917px] left-[1174.1px] opacity-85 top-[283.74px] w-[341.879px]"
          data-node-id="335:929"
        >
          <div className="absolute inset-[-21.01%_-39.7%]">
            <FigmaFillImage src={imgRectangle240649642} />
          </div>
        </div>
        <div className="absolute flex h-[645.917px] items-center justify-center left-[70px] opacity-85 top-[232px] w-[341.879px]">
          <div className="-scale-y-100 flex-none rotate-180">
            <div className="h-[645.917px] relative w-[341.879px]" data-node-id="335:930">
              <div className="absolute inset-[-21.01%_-39.7%]">
                <FigmaFillImage src={imgRectangle240650146} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
