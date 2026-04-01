"use client";

import Image from "next/image";
import { Group } from "./Group";
import { Group1 } from "./Group1";
import { img2761, imgCloudInfrastructure, imgPc1, imgSafearea } from "./figma-assets";

export function NeetrinoHomeWhatWeDoBottom() {
  return (
    <>
      <div
        className="absolute bg-white content-stretch flex gap-[4px] items-center left-[1189px] overflow-clip px-[24px] py-[16px] rounded-[40px] top-[607px]"
        data-name="Button 16"
        data-node-id="90:541"
      >
        <div
          className="absolute bg-[#46fff4] blur-[7.5px] inset-[69px_0_-103px_0] opacity-0 rounded-tl-[60px] rounded-tr-[60px]"
          data-name="glow"
          data-node-id="I90:541;13:52"
        />
        <p
          className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#252525] text-[18px] whitespace-nowrap"
          data-node-id="I90:541;13:33"
        >
          Continue
        </p>
        <div
          className="absolute bg-[#46fff4] blur-[7.5px] inset-[64px_0_-98px_0] opacity-0 rounded-tl-[60px] rounded-tr-[60px]"
          data-name="glow"
          data-node-id="I90:541;13:44"
        />
        <div
          className="overflow-clip relative shrink-0 size-[20px]"
          data-name="Right"
          data-node-id="I90:541;13:34"
        >
          <div
            className="absolute inset-[8.33%]"
            data-name="safearea"
            data-node-id="I90:541;13:34;21:1594"
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
      </div>
      <div className="absolute contents left-[590px] top-[129px]" data-node-id="90:542">
        <div className="absolute contents left-[590px] top-[129px]" data-node-id="90:543">
          <div
            className="absolute bg-[#292929] h-[553px] left-[590px] rounded-[19px] top-[129px] w-[258px]"
            data-node-id="90:544"
          />
          <div
            className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-['Inter:Extra_Light',sans-serif] font-extralight justify-center leading-[0] left-[792px] not-italic text-[20px] text-right text-white top-[577.5px] whitespace-nowrap"
            data-node-id="90:545"
          >
            <p className="leading-[25px]">Cloud Solutions</p>
          </div>
          <div
            className="-translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] left-[619px] not-italic text-[22px] text-white top-[199.5px] whitespace-nowrap"
            data-node-id="90:546"
          >
            <p className="leading-[35px]">SAAS PLATFORMS</p>
          </div>
        </div>
        <div
          className="absolute bg-white content-stretch flex gap-[4px] items-center left-[644px] overflow-clip px-[24px] py-[16px] rounded-[40px] top-[608px]"
          data-name="Button 15"
          data-node-id="90:547"
        >
          <div
            className="absolute bg-[#46fff4] blur-[7.5px] inset-[69px_0_-103px_0] opacity-0 rounded-tl-[60px] rounded-tr-[60px]"
            data-name="glow"
            data-node-id="I90:547;13:52"
          />
          <p
            className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#252525] text-[18px] whitespace-nowrap"
            data-node-id="I90:547;13:33"
          >
            Continue
          </p>
          <div
            className="absolute bg-[#46fff4] blur-[7.5px] inset-[64px_0_-98px_0] opacity-0 rounded-tl-[60px] rounded-tr-[60px]"
            data-name="glow"
            data-node-id="I90:547;13:44"
          />
          <div
            className="overflow-clip relative shrink-0 size-[20px]"
            data-name="Right"
            data-node-id="I90:547;13:34"
          >
            <div
              className="absolute inset-[8.33%]"
              data-name="safearea"
              data-node-id="I90:547;13:34;21:1594"
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
        </div>
        <div
          className="absolute h-[190px] left-[622px] top-[310px] w-[195px]"
          data-name="Cloud Infrastructure"
          data-node-id="90:548"
        >
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <Image
              alt=""
              width={2400}
              height={2400}
              className="absolute h-[140.91%] left-[-17.24%] max-w-none top-[-16.67%] w-[137.44%]"
              src={imgCloudInfrastructure}
            />
          </div>
        </div>
      </div>
      <div
        className="absolute h-[183px] left-[392px] top-[308px] w-[114px]"
        data-name="PC"
        data-node-id="90:549"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <Image
            alt=""
            width={2400}
            height={2400}
            className="absolute h-[155.42%] left-[-74.48%] max-w-none top-[-27.71%] w-[248.96%]"
            src={imgPc1}
          />
        </div>
      </div>
      <Group className="-translate-x-1/2 absolute h-[276px] left-[calc(50%+0.5px)] top-[655px] w-[642px]" />
      <div
        className="absolute h-[231px] left-[1148px] top-[289px] w-[221px]"
        data-name="-276 1"
        data-node-id="90:552"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <Image
            alt=""
            width={2400}
            height={2400}
            className="absolute inset-0 h-full w-full max-w-none object-contain p-[16px]"
            src={img2761}
          />
        </div>
      </div>
      <div
        className="absolute contents leading-[0] left-[50px] text-white top-[6px] whitespace-nowrap"
        data-node-id="90:553"
      >
        <div
          className="-translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center left-[56px] not-italic text-[16px] top-[23.5px]"
          data-node-id="90:554"
        >
          <p className="leading-[35px]">SERVICES</p>
        </div>
        <div
          className="-translate-y-1/2 absolute flex flex-col font-['Inter:Black_Italic',sans-serif] font-black italic justify-center left-[50px] text-[35px] top-[58.5px]"
          data-node-id="90:555"
        >
          <p>
            <span className="leading-[35px]">{`WHAT WE `}</span>
            <span className="leading-[35px] text-[#ff7500]">DO</span>
          </p>
        </div>
      </div>
      <Group1 className="absolute h-[553px] left-[50px] top-[129px] w-[258px]" />
    </>
  );
}
