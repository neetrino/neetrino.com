"use client";

import { DeferAfterPaint } from "@/components/layout/DeferAfterPaint";
import * as figma from "@/components/portfolio/portfolio-figma-assets";

/**
 * Large mix-blend vector / line stack above the fold — deferred after first scene commit.
 */
export function PortfolioDesktopVectorDecorDeferred() {
  return (
    <DeferAfterPaint>
      <>
        <div className="-translate-x-1/2 absolute flex h-[3723px] items-center justify-center left-[calc(50%-38px)] mix-blend-overlay top-[-40px] w-[1722px]">
          <div className="flex-none rotate-90">
            <div
              className="h-[1722px] relative w-[3723px]"
              data-name="Vector"
              data-node-id="166:1214"
            >
              <img
                alt=""
                className="absolute block max-w-none size-full"
                src={figma.imgVector2}
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
        <div className="absolute contents left-[-20px] top-[-415px]" data-node-id="166:1215">
          <div className="absolute contents left-[952.53px] top-[-415px]" data-node-id="166:1216">
            <div className="absolute flex h-[759.42px] items-center justify-center left-[973.17px] mix-blend-plus-lighter top-[-415px] w-0">
              <div className="flex-none rotate-90">
                <div className="h-0 relative w-[759.42px]" data-node-id="166:1217">
                  <div className="absolute inset-[-14.04px_-1.23%]">
                    <img
                      alt=""
                      className="block max-w-none size-full"
                      src={figma.imgLine734}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute flex h-[759.42px] items-center justify-center left-[973.17px] mix-blend-plus-lighter top-[-415px] w-0">
              <div className="flex-none rotate-90">
                <div className="h-0 relative w-[759.42px]" data-node-id="166:1218">
                  <div className="absolute inset-[-23.4px_-2.47%]">
                    <img
                      alt=""
                      className="block max-w-none size-full"
                      src={figma.imgLine735}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="absolute bg-gradient-to-b blur-[35.104px] from-[rgba(255,255,255,0)] h-[759.42px] left-[952.53px] mix-blend-plus-lighter opacity-50 to-[#1797ff] top-[-415px] via-[#ff6613] via-[80%] w-[46.444px]"
              data-node-id="166:1219"
            />
            <div
              className="absolute bg-gradient-to-b blur-[15.212px] from-[rgba(255,255,255,0)] h-[759.42px] left-[952.53px] mix-blend-plus-lighter opacity-20 to-[#1797ff] top-[-415px] via-[#ff6613] via-[80%] w-[46.444px]"
              data-node-id="166:1220"
            />
            <div
              className="absolute bg-gradient-to-b blur-[24.573px] from-[rgba(255,255,255,0)] h-[759.42px] left-[952.53px] mix-blend-plus-lighter opacity-10 to-[#1797ff] top-[-415px] via-[#ff6613] via-[80%] w-[46.444px]"
              data-node-id="166:1221"
            />
          </div>
          <div
            className="absolute h-[440.557px] left-[276.52px] mix-blend-plus-lighter top-[209.27px] w-[1119.172px]"
            data-node-id="166:1222"
          >
            <div className="absolute inset-[-20.19%_-7.95%]">
              <img
                alt=""
                className="block max-w-none size-full"
                src={figma.imgVector27397}
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
          <div
            className="absolute h-[435.5px] left-[78px] mix-blend-plus-lighter top-[176px] w-[1317.521px]"
            data-node-id="166:1223"
          >
            <div className="absolute inset-[-20.42%_-6.75%]">
              <img
                alt=""
                className="block max-w-none size-full"
                src={figma.imgVector27398}
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
          <div
            className="absolute h-[645.917px] left-[1084.12px] mix-blend-plus-lighter top-[339.74px] w-[341.879px]"
            data-node-id="166:1224"
          >
            <div className="absolute inset-[-21.01%_-39.7%]">
              <img
                alt=""
                className="block max-w-none size-full"
                src={figma.imgRectangle240649642}
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
          <div className="absolute flex h-[645.917px] items-center justify-center left-[-20px] mix-blend-plus-lighter top-[288px] w-[341.879px]">
            <div className="-scale-y-100 flex-none rotate-180">
              <div className="h-[645.917px] relative w-[341.879px]" data-node-id="166:1225">
                <div className="absolute inset-[-21.01%_-39.7%]">
                  <img
                    alt=""
                    className="block max-w-none size-full"
                    src={figma.imgRectangle240650146}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </DeferAfterPaint>
  );
}
