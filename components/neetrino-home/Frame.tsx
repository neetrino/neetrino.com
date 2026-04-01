"use client";

import Image from "next/image";
import { MacBookPro } from "./MacBookPro";
import { imgAppleIMac27201911, imgIPhone14Pro1, imgSafearea, imgSpaceGray1 } from "./figma-assets";

type FrameProps = {
  className?: string;
  property1?: "Default" | "Variant2" | "Variant3" | "Variant4";
};

export function Frame({ className, property1 = "Default" }: FrameProps) {
  return (
    <div className={className || "h-[905px] relative w-[1609px]"} data-node-id="90:380">
      <div className="-translate-x-1/2 absolute flex h-[239px] items-center justify-center left-[calc(50%+2.5px)] top-[64px] w-[332px]">
        <div className="flex-none rotate-90">
          <div
            className="h-[332px] relative w-[239px]"
            data-name="Space Gray 1"
            data-node-id="83:184"
          >
            <Image
              alt=""
              width={2400}
              height={2400}
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={imgSpaceGray1}
            />
          </div>
        </div>
      </div>
      <div
        className="absolute h-[270px] left-[1098px] top-[269px] w-[326px]"
        data-name="Apple iMac 27_ (2019) (1) 1"
        data-node-id="83:181"
      >
        <Image
          alt=""
          width={2400}
          height={2400}
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={imgAppleIMac27201911}
        />
      </div>
      <div
        className="absolute h-[252px] left-[279px] top-[285px] w-[124px]"
        data-name="iPhone 14 Pro 1"
        data-node-id="83:182"
      >
        <Image
          alt=""
          width={2400}
          height={2400}
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={imgIPhone14Pro1}
        />
      </div>
      <MacBookPro className="-translate-x-1/2 absolute h-[330px] left-[calc(50%+0.5px)] top-[392px] w-[546px]" />
      <button
        className="absolute bg-white content-stretch cursor-pointer flex gap-[4px] items-center left-[821px] overflow-clip px-[24px] py-[16px] rounded-[40px] top-[811px]"
        data-name="Button 14"
        data-node-id="90:366"
      >
        <div
          className="absolute bg-[#46fff4] blur-[7.5px] inset-[69px_0_-103px_0] opacity-0 rounded-tl-[60px] rounded-tr-[60px]"
          data-name="glow"
          data-node-id="I90:366;13:52"
        />
        <div
          className="absolute bg-[#46fff4] blur-[7.5px] inset-[64px_0_-98px_0] opacity-0 rounded-tl-[60px] rounded-tr-[60px]"
          data-name="glow"
          data-node-id="I90:366;13:44"
        />
        <div
          className="overflow-clip relative shrink-0 size-[20px]"
          data-name="Right"
          data-node-id="I90:366;13:34"
        >
          <div
            className="absolute inset-[8.33%]"
            data-name="safearea"
            data-node-id="I90:366;13:34;21:1594"
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
      </button>
      <div className="absolute flex items-center justify-center left-[725px] top-[811px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <button
            className="bg-white content-stretch cursor-pointer flex gap-[4px] items-center overflow-clip px-[24px] py-[16px] relative rounded-[40px]"
            data-name="Button 15"
            data-node-id="90:373"
          >
            <div
              className="absolute bg-[#46fff4] blur-[7.5px] inset-[69px_0_-103px_0] opacity-0 rounded-tl-[60px] rounded-tr-[60px]"
              data-name="glow"
              data-node-id="I90:373;13:52"
            />
            <div
              className="absolute bg-[#46fff4] blur-[7.5px] inset-[64px_0_-98px_0] opacity-0 rounded-tl-[60px] rounded-tr-[60px]"
              data-name="glow"
              data-node-id="I90:373;13:44"
            />
            <div
              className="overflow-clip relative shrink-0 size-[20px]"
              data-name="Right"
              data-node-id="I90:373;13:34"
            >
              <div
                className="absolute inset-[8.33%]"
                data-name="safearea"
                data-node-id="I90:373;13:34;21:1594"
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
          </button>
        </div>
      </div>
    </div>
  );
}
