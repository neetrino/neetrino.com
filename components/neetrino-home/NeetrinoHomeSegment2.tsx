"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { Group2 } from "./Group2";

const LiquidEther = dynamic(() => import("@/components/liquid-ether/LiquidEther"), {
  ssr: false,
  loading: () => (
    <div
      className="absolute inset-0 rounded-[32px] bg-[radial-gradient(circle_at_50%_35%,#232445_0%,#111216_66%)]"
      aria-hidden
    />
  ),
});
import { imgRectangle17417 } from "./figma-assets";

export function NeetrinoHomeSegment2() {
  return (
    <>
      <div className="-translate-x-1/2 absolute flex h-[1306px] items-center justify-center left-[calc(50%+11px)] mix-blend-screen top-[3245px] w-[664px]">
        <div className="flex-none rotate-90">
          <div className="h-[664px] relative w-[1306px]" data-node-id="10:220">
            <div className="absolute inset-[-28.36%_-17.23%_-28.95%_-17.23%]">
              <Image
                alt=""
                width={2400}
                height={2400}
                className="block max-w-none size-full"
                src={imgRectangle17417}
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className="-translate-x-1/2 absolute h-[571px] left-[calc(50%-0.5px)] top-[3379px] w-[1439px]"
        data-name="WHO WE ARE"
        data-node-id="10:510"
        id="story"
      >
        <div
          className="absolute content-stretch flex flex-col gap-[27px] items-start leading-[0] left-[64px] text-white top-[147px] w-[563px]"
          data-node-id="10:511"
        >
          <div
            className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0 whitespace-nowrap"
            data-node-id="10:512"
          >
            <div
              className="col-1 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center ml-[3px] mt-0 not-italic relative row-1 text-[16px]"
              data-node-id="10:513"
            >
              <p className="leading-[35px]">BUILD WITH PURPOSE</p>
            </div>
            <div
              className="col-1 flex flex-col font-['Inter:Black_Italic',sans-serif] font-black italic justify-center ml-0 mt-[35px] relative row-1 text-[35px]"
              data-node-id="10:514"
            >
              <p>
                <span className="leading-[35px]">{`WHO `}</span>
                <span className="leading-[35px] text-[#ff7500]">WE</span>
                <span className="leading-[35px]">{` ARE`}</span>
              </p>
            </div>
          </div>
          <div
            className="flex flex-col font-['Inter:Light',sans-serif] font-light justify-center min-w-full not-italic relative shrink-0 text-[16px] w-[min-content]"
            data-node-id="10:515"
          >
            <p className="mb-0">
              <span className="leading-[24px]">{`Over the past 8 years, `}</span>
              <span className="font-['Inter:Bold',sans-serif] font-bold leading-[24px] not-italic">
                Neetrino IT
              </span>
              <span className="leading-[24px]">{` has developed more than `}</span>
              <span className="font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[24px] not-italic">
                400 online resources
              </span>
              <span className="leading-[24px]">
                , ranging from simple websites to large-scale internet portals and e-commerce
                platforms
              </span>
            </p>
            <p>
              <span className="leading-[24px]">
                We specialize in website development, AI and bot solutions, CRM system integration,
                mobile app development, as well as SEO and SMM optimization—
              </span>
              <span className="font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[24px] not-italic">
                delivering a comprehensive digital presence for your business.
              </span>
            </p>
          </div>
        </div>
        <Group2 className="absolute h-[276px] left-[-179px] top-[358px] w-[642px]" />
        <div
          className="absolute h-[641px] left-[721px] mix-blend-exclusion top-[-34px] w-[685px]"
          data-name="* 1"
          data-node-id="10:516"
        >
          <div className="absolute inset-0 rounded-[32px] bg-[radial-gradient(circle_at_50%_35%,#232445_0%,#111216_66%)] opacity-90" />
          <div className="absolute inset-0 pointer-events-none">
            <LiquidEther
              colors={["#473dff", "#ff7500", "#cfd7ff"]}
              mouseForce={18}
              cursorSize={92}
              resolution={0.65}
              autoDemo
              autoSpeed={0.42}
              autoIntensity={1.9}
              className="rounded-[32px]"
            />
          </div>
        </div>
      </div>
    </>
  );
}
