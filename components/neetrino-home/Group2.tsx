"use client";

import Image from "next/image";
import Link from "next/link";
import { ExploreHoverFlare } from "@/components/neetrino-home/ExploreHoverFlare";
import { imgEllipse3463, imgSafearea1 } from "./figma-assets";

type Group2Props = {
  className?: string;
  property1?: "Default" | "Variant2";
  exploreHref: string;
};

export function Group2({ className, exploreHref }: Group2Props) {
  return (
    <div
      className={className ? `z-20 ${className}` : "relative z-20 h-[276px] w-[642px]"}
      data-node-id="19:364"
    >
      <Link
        href={exploreHref}
        className="peer pointer-events-auto absolute z-10 border border-[#6a92ff] border-solid inset-[39.86%_39.72%_39.86%_39.41%] overflow-clip rounded-[40px] no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6a92ff]"
        data-name="Button 2"
        data-node-id="19:370"
      >
        <div
          className="absolute bg-black inset-[-1px] opacity-0 rounded-[40px]"
          data-name="shadow"
          data-node-id="19:371"
        />
        <div
          className="-translate-x-1/2 -translate-y-1/2 absolute bg-black h-[56px] left-1/2 rounded-[40px] top-1/2 w-[134px]"
          data-name="background"
          data-node-id="19:372"
        />
        <p
          className="absolute font-[family-name:var(--font-dm-sans)] font-medium leading-[24px] left-[23px] text-[18px] text-white top-[15px] whitespace-nowrap"
          data-node-id="19:373"
          style={{ fontVariationSettings: "'opsz' 14" }}
        >
          Explore
        </p>
        <div
          className="absolute left-[89px] overflow-clip size-[20px] top-[17px]"
          data-name="Right"
          data-node-id="19:374"
        >
          <div
            className="absolute inset-[8.33%]"
            data-name="safearea"
            data-node-id="I19:374;21:1594"
          >
            <Image
              alt=""
              width={2400}
              height={2400}
              className="absolute block max-w-none size-full"
              src={imgSafearea1}
            />
          </div>
        </div>
        <div className="absolute h-[31px] left-[22px] top-[39px] w-[88px]" data-node-id="19:375">
          <div className="absolute inset-[-45.16%_-15.91%]">
            <Image
              alt=""
              width={2400}
              height={2400}
              className="block max-w-none size-full"
              src={imgEllipse3463}
            />
          </div>
        </div>
      </Link>
      <ExploreHoverFlare positionClassName="inset-[-105.8%_-69%]" />
    </div>
  );
}
