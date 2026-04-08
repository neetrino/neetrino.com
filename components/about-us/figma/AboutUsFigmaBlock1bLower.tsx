"use client";

import {
  ABOUT_STATS_STRIP_GLASS_SCALE_X,
  ABOUT_STATS_STRIP_GLASS_SCALE_Y,
} from "@/lib/about-us-stats-strip.constants";

/**
 * Hero stat strip (335:956). Layers: text (z-10) → glass blur panel → robot (z-0 in Block1b).
 * Layout numbers: `lib/about-us-stats-strip.constants.ts`.
 */
export function AboutUsFigmaBlock1bLower() {
  return (
    <div
      className="absolute left-[811px] top-[985px] z-10 overflow-visible"
      data-name="Container"
      data-node-id="335:956"
    >
      <div
        className="pointer-events-none absolute inset-0 z-0 origin-center rounded-[24px] bg-[rgba(40,43,103,0.38)] backdrop-blur-[16px]"
        style={{
          transform: `scale(${ABOUT_STATS_STRIP_GLASS_SCALE_X}, ${ABOUT_STATS_STRIP_GLASS_SCALE_Y})`,
        }}
        aria-hidden
      />
      <div className="relative z-10 flex h-[92px] items-center justify-center gap-[64px] px-[48px]">
        <div
          className="h-[92px] relative shrink-0 w-[141.914px]"
          data-name="Container"
          data-node-id="335:957"
        >
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start relative size-full">
            <div
              className="h-[56px] relative shrink-0 w-full"
              data-name="Container"
              data-node-id="335:958"
            >
              <div
                className="absolute h-[56px] left-0 top-0 w-[141.914px]"
                data-name="Paragraph"
                data-node-id="335:959"
              >
                <p
                  className="-translate-x-1/2 absolute bg-clip-text font-['Inter:Black',sans-serif] font-black leading-[56px] left-[71.5px] not-italic text-[56px] text-[transparent] text-center top-0 whitespace-nowrap"
                  data-node-id="335:960"
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(90deg, rgb(71, 61, 255) 0%, rgb(74, 65, 255) 9.0909%, rgb(77, 68, 255) 18.182%, rgb(80, 72, 255) 27.273%, rgb(84, 75, 255) 36.364%, rgb(87, 78, 255) 45.455%, rgb(90, 81, 255) 54.545%, rgb(93, 84, 255) 63.636%, rgb(97, 87, 255) 72.727%, rgb(100, 90, 255) 81.818%, rgb(104, 92, 255) 90.909%, rgb(107, 95, 255) 100%)",
                  }}
                >
                  450+
                </p>
              </div>
            </div>
            <div
              className="h-[24px] relative shrink-0 w-full"
              data-name="Paragraph"
              data-node-id="335:962"
            >
              <p
                className="-translate-x-1/2 absolute font-['Inter:Light',sans-serif] font-light leading-[24px] left-[71.35px] not-italic text-[#99a1af] text-[16px] text-center top-[-1px] whitespace-nowrap"
                data-node-id="335:963"
              >
                Projects Delivered
              </p>
            </div>
          </div>
        </div>
        <div
          className="h-[92px] relative shrink-0 w-[105.75px]"
          data-name="Container"
          data-node-id="335:964"
        >
          <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
            <div
              className="absolute h-[24px] left-0 top-[68px] w-[105.75px]"
              data-name="Paragraph"
              data-node-id="335:965"
            >
              <p
                className="-translate-x-1/2 absolute font-['Inter:Light',sans-serif] font-light leading-[24px] left-[53.5px] not-italic text-[#99a1af] text-[16px] text-center top-[-1px] whitespace-nowrap"
                data-node-id="335:966"
              >
                Core Services
              </p>
            </div>
            <div
              className="absolute h-[56px] left-[16.95px] top-0 w-[71.836px]"
              data-name="Container"
              data-node-id="335:967"
            >
              <div
                className="absolute h-[56px] left-0 top-0 w-[71.836px]"
                data-name="Paragraph"
                data-node-id="335:968"
              >
                <p
                  className="-translate-x-1/2 absolute bg-clip-text font-['Inter:Black',sans-serif] font-black leading-[56px] left-[36px] not-italic text-[56px] text-[transparent] text-center top-0 whitespace-nowrap"
                  data-node-id="335:969"
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(90deg, rgb(255, 117, 0) 0%, rgb(255, 120, 0) 8.3333%, rgb(255, 123, 0) 16.667%, rgb(255, 125, 0) 25%, rgb(255, 128, 0) 33.333%, rgb(255, 131, 0) 41.667%, rgb(255, 133, 0) 50%, rgb(255, 136, 0) 58.333%, rgb(255, 139, 0) 66.667%, rgb(255, 141, 0) 75%, rgb(255, 144, 0) 83.333%, rgb(255, 146, 0) 91.667%, rgb(255, 149, 0) 100%)",
                  }}
                >
                  6+
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="h-[92px] relative shrink-0 w-[132.414px]"
          data-name="Container"
          data-node-id="335:971"
        >
          <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
            <div
              className="absolute h-[24px] left-0 top-[68px] w-[132.414px]"
              data-name="Paragraph"
              data-node-id="335:972"
            >
              <p
                className="-translate-x-1/2 absolute font-['Inter:Light',sans-serif] font-light leading-[24px] left-[66.5px] not-italic text-[#99a1af] text-[16px] text-center top-[-1px] whitespace-nowrap"
                data-node-id="335:973"
              >
                Support Available
              </p>
            </div>
            <div
              className="absolute h-[56px] left-[5.75px] top-0 w-[120.914px]"
              data-name="Container"
              data-node-id="335:974"
            >
              <div
                className="absolute h-[56px] left-0 top-0 w-[120.914px]"
                data-name="Paragraph"
                data-node-id="335:975"
              >
                <p
                  className="-translate-x-1/2 absolute bg-clip-text font-['Inter:Black',sans-serif] font-black leading-[56px] left-[60px] not-italic text-[56px] text-[transparent] text-center top-0 whitespace-nowrap"
                  data-node-id="335:976"
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(90deg, rgb(115, 255, 0) 0%, rgb(112, 255, 59) 7.1429%, rgb(108, 255, 85) 14.286%, rgb(105, 255, 105) 21.429%, rgb(102, 255, 122) 28.571%, rgb(99, 255, 137) 35.714%, rgb(95, 255, 151) 42.857%, rgb(92, 255, 164) 50%, rgb(89, 255, 176) 57.143%, rgb(86, 255, 188) 64.286%, rgb(82, 255, 200) 71.429%, rgb(79, 255, 211) 78.571%, rgb(76, 255, 222) 85.714%, rgb(73, 255, 233) 92.857%, rgb(70, 255, 244) 100%)",
                  }}
                >
                  24/7
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
