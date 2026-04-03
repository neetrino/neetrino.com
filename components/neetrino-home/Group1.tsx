"use client";

import Image from "next/image";
import Link from "next/link";
import { serviceDetailHref } from "@/components/services/service-pages-data";
import { imgPc, imgSafearea } from "./figma-assets";

type Group1Props = {
  className?: string;
  property1?: "Default" | "Variant2";
};

export function Group1({ className, property1 = "Default" }: Group1Props) {
  return (
    <div
      className={`pointer-events-none ${className || "h-[553px] relative w-[258px]"}`}
      data-node-id="1:707"
    >
      <div className="absolute contents inset-0" data-node-id="1:708">
        <div className="absolute bg-[#e8e8f4] inset-0 rounded-[19px]" data-node-id="1:709" />
        <div
          className="absolute inset-[31.1%_4.65%_30.92%_4.65%]"
          data-name="PC"
          data-node-id="1:710"
        >
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <Image
              alt=""
              width={2400}
              height={2400}
              className="absolute h-[177.11%] left-[-29%] max-w-none top-[-38.55%] w-[158%]"
              src={imgPc}
            />
          </div>
        </div>
        <div
          className="absolute flex flex-col font-['Inter:Extra_Light',sans-serif] font-extralight inset-[78.84%_11.24%_16.64%_11.24%] justify-center leading-[0] not-italic text-[#1f2123] text-[20px] text-right whitespace-nowrap"
          data-node-id="1:711"
        >
          <p className="leading-[25px]">Custom Development</p>
        </div>
        <div
          className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold inset-[9.58%_30.62%_84.09%_30.62%] justify-center leading-[0] not-italic text-[22px] text-black whitespace-nowrap"
          data-node-id="1:712"
        >
          <p className="leading-[35px]">WEBSITE</p>
        </div>
      </div>
      <Link
        href={serviceDetailHref("website-development")}
        className="pointer-events-auto absolute z-30 bg-white content-stretch flex gap-[4px] inset-[86.62%_20.54%_3.25%_20.93%] items-center overflow-clip px-[24px] py-[16px] rounded-[40px] no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60"
        data-name="Button 12"
        data-node-id="1:713"
      >
        <div
          className="absolute bg-[#46fff4] blur-[7.5px] inset-[69px_0_-103px_0] opacity-0 rounded-tl-[60px] rounded-tr-[60px]"
          data-name="glow"
          data-node-id="I1:713;13:52"
        />
        <p
          className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#252525] text-[18px] whitespace-nowrap"
          data-node-id="I1:713;13:33"
        >
          Continue
        </p>
        <div
          className="absolute bg-[#46fff4] blur-[7.5px] inset-[64px_0_-98px_0] opacity-0 rounded-tl-[60px] rounded-tr-[60px]"
          data-name="glow"
          data-node-id="I1:713;13:44"
        />
        <div
          className="overflow-clip relative shrink-0 size-[20px]"
          data-name="Right"
          data-node-id="I1:713;13:34"
        >
          <div
            className="absolute inset-[8.33%]"
            data-name="safearea"
            data-node-id="I1:713;13:34;21:1594"
          >
            <Image
              alt=""
              width={2400}
              height={2400}
              className="absolute block max-w-none size-full"
              src={imgSafearea}
            />
          </div>
        </div>
      </Link>
    </div>
  );
}
