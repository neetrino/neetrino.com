"use client";

import { useIdleMount } from "@/lib/hooks/useIdleMount";
import {
  imgEllipse27,
  imgEllipse28,
  imgLine734,
  imgLine735,
  imgRectangle240649642,
  imgRectangle240650146,
  imgStar22,
  imgVector27397,
  imgVector27398,
} from "./services-assets";

/** Optimized star raster intrinsic size (matches `25e37262-…webp` after sharp resize). */
const STAR22_WIDTH = 1844;
const STAR22_HEIGHT = 2048;

/** Hero rays + title + line art inside the Light Rays layer (above the card row). */
export function ServicesDesktopLightRaysDecor() {
  const showStarRay = useIdleMount();

  return (
    <>
      <div
        className="-translate-x-1/2 absolute bottom-[64.13%] left-[calc(50%+62.8px)] top-[-26.19%] w-[1047.338px]"
        data-node-id="165:674"
      >
        <div className="absolute inset-[-52.12%_-48.95%]">
          <img
            alt=""
            className="block max-w-none size-full"
            decoding="async"
            loading="lazy"
            src={imgEllipse27}
          />
        </div>
      </div>
      <div
        className="-translate-x-1/2 absolute bottom-[53.71%] left-[calc(50%+793.12px)] top-[-15.77%] w-[1047.338px]"
        data-node-id="165:675"
      >
        <div className="absolute inset-[-52.12%_-48.95%]">
          <img
            alt=""
            className="block max-w-none size-full"
            decoding="async"
            loading="lazy"
            src={imgEllipse28}
          />
        </div>
      </div>
      {showStarRay ? (
        <div className="absolute flex h-[5878.103px] items-center justify-center left-[-797.93px] mix-blend-plus-lighter top-[-3956.96px] w-[5638.546px]">
          <div className="flex-none rotate-[24.39deg]">
            <div className="h-[4590.797px] relative w-[4109.595px]" data-node-id="165:676">
              <div className="absolute inset-[-2.59%_-2.9%]">
                <img
                  alt=""
                  className="block max-w-none size-full"
                  decoding="async"
                  height={STAR22_HEIGHT}
                  loading="lazy"
                  src={imgStar22}
                  width={STAR22_WIDTH}
                />
              </div>
            </div>
          </div>
        </div>
      ) : null}
      <p
        className="absolute font-['Megatrox',sans-serif] leading-[normal] left-[calc(50%-646px)] not-italic text-[#fffcfc] text-[90px] top-[152px] whitespace-nowrap"
        data-node-id="165:677"
      >
        SERVICES
      </p>
      <div className="absolute contents left-[-29px] top-[-415px]" data-node-id="165:678">
        <div className="absolute contents left-[927.52px] top-[-415px]" data-node-id="165:679">
          <div className="absolute flex h-[759.42px] items-center justify-center left-[947.82px] mix-blend-plus-lighter top-[-415px] w-0">
            <div className="flex-none rotate-90">
              <div className="h-0 relative w-[759.42px]" data-node-id="165:680">
                <div className="absolute inset-[-14.04px_-1.23%]">
                  <img
                    alt=""
                    className="block max-w-none size-full"
                    decoding="async"
                    loading="lazy"
                    src={imgLine734}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute flex h-[759.42px] items-center justify-center left-[947.82px] mix-blend-plus-lighter top-[-415px] w-0">
            <div className="flex-none rotate-90">
              <div className="h-0 relative w-[759.42px]" data-node-id="165:681">
                <div className="absolute inset-[-23.4px_-2.47%]">
                  <img
                    alt=""
                    className="block max-w-none size-full"
                    decoding="async"
                    loading="lazy"
                    src={imgLine735}
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            className="absolute bg-gradient-to-b blur-[35.104px] from-[rgba(255,255,255,0)] h-[759.42px] left-[927.52px] mix-blend-plus-lighter opacity-50 to-[#1797ff] top-[-415px] via-[#ff6613] via-[80%] w-[45.68px]"
            data-node-id="165:682"
          />
          <div
            className="absolute bg-gradient-to-b blur-[15.212px] from-[rgba(255,255,255,0)] h-[759.42px] left-[927.52px] mix-blend-plus-lighter opacity-20 to-[#1797ff] top-[-415px] via-[#ff6613] via-[80%] w-[45.68px]"
            data-node-id="165:683"
          />
          <div
            className="absolute bg-gradient-to-b blur-[24.573px] from-[rgba(255,255,255,0)] h-[759.42px] left-[927.52px] mix-blend-plus-lighter opacity-10 to-[#1797ff] top-[-415px] via-[#ff6613] via-[80%] w-[45.68px]"
            data-node-id="165:684"
          />
        </div>
        <div
          className="absolute h-[440.557px] left-[262.63px] mix-blend-plus-lighter top-[209.27px] w-[1100.749px]"
          data-node-id="165:685"
        >
          <div className="absolute inset-[-20.19%_-8.08%]">
            <img
              alt=""
              className="block max-w-none size-full"
              decoding="async"
              loading="lazy"
              src={imgVector27397}
            />
          </div>
        </div>
        <div
          className="absolute h-[435.5px] left-[67.39px] mix-blend-plus-lighter top-[176px] w-[1295.834px]"
          data-node-id="165:686"
        >
          <div className="absolute inset-[-20.42%_-6.86%]">
            <img
              alt=""
              className="block max-w-none size-full"
              decoding="async"
              loading="lazy"
              src={imgVector27398}
            />
          </div>
        </div>
        <div
          className="absolute h-[645.917px] left-[1056.94px] mix-blend-plus-lighter top-[339.74px] w-[336.252px]"
          data-node-id="165:687"
        >
          <div className="absolute inset-[-21.01%_-40.37%]">
            <img
              alt=""
              className="block max-w-none size-full"
              decoding="async"
              loading="lazy"
              src={imgRectangle240649642}
            />
          </div>
        </div>
        <div className="absolute flex h-[645.917px] items-center justify-center left-[-29px] mix-blend-plus-lighter top-[288px] w-[336.252px]">
          <div className="-scale-y-100 flex-none rotate-180">
            <div className="h-[645.917px] relative w-[336.252px]" data-node-id="165:688">
              <div className="absolute inset-[-21.01%_-40.37%]">
                <img
                  alt=""
                  className="block max-w-none size-full"
                  decoding="async"
                  loading="lazy"
                  src={imgRectangle240650146}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
