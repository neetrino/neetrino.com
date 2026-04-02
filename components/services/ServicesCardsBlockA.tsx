import { Brain } from "lucide-react";
import { imgEllipse2, imgEllipse3, imgLayers, imgSafearea } from "./services-assets";

type Card3Props = {
  className?: string;
  property1?: "Secure Transactions default" | "Secure Transactions hover";
};

export function ServicesCard3({
  className,
  property1 = "Secure Transactions default",
}: Card3Props) {
  return (
    <div
      className={
        className ||
        "content-stretch flex flex-col gap-[30px] h-[463px] items-start overflow-clip px-[40px] py-[60px] relative rounded-[38px] w-[369px]"
      }
      data-node-id="165:628"
    >
      <div
        aria-hidden="true"
        className="absolute bg-gradient-to-b from-[#100b16] inset-0 pointer-events-none rounded-[38px] to-[#0f0220]"
      />
      <div className="relative shrink-0 size-[40px]" data-name="Layers" data-node-id="165:629">
        <img alt="" className="absolute block max-w-none size-full" src={imgLayers} />
      </div>
      <div
        className="content-stretch flex flex-col gap-[16px] items-start not-italic relative shrink-0 w-full"
        data-node-id="165:632"
      >
        <p
          className="font-['Inter:Black',sans-serif] font-black leading-[40px] relative shrink-0 text-[32px] text-white w-[282px]"
          data-node-id="165:633"
        >
          ERP System
        </p>
        <p
          className="font-['Inter:Light',sans-serif] font-light leading-[26px] relative shrink-0 text-[#d1d5dc] text-[16px] w-[273px]"
          data-node-id="165:634"
        >
          All-in-one systems for managing business operations. Control data, processes, and
          resources in one place.
        </p>
      </div>
      <div className="absolute flex h-[98.623px] items-center justify-center left-[-42px] top-[-59px] w-[95.759px]">
        <div className="flex-none rotate-[57.05deg]">
          <div className="h-[65.42px] relative w-[75.124px]" data-node-id="165:635">
            <div className="absolute inset-[-82.24%_-71.61%]">
              <img alt="" className="block max-w-none size-full" src={imgEllipse2} />
            </div>
          </div>
        </div>
      </div>
      <div
        className="bg-white content-stretch flex gap-[4px] items-center overflow-clip px-[24px] py-[16px] relative rounded-[40px] shrink-0"
        data-name="Button 13"
        data-node-id="165:636"
      >
        <div
          className="absolute bg-[#ff28d0] blur-[7.5px] inset-[69px_0_-103px_0] opacity-0 rounded-tl-[60px] rounded-tr-[60px]"
          data-name="glow"
          data-node-id="I165:636;13:52"
        />
        <p
          className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#252525] text-[18px] whitespace-nowrap"
          data-node-id="I165:636;13:33"
        >
          Continue
        </p>
        <div
          className="absolute bg-[#ff28d0] blur-[7.5px] inset-[64px_0_-98px_0] opacity-0 rounded-tl-[60px] rounded-tr-[60px]"
          data-name="glow"
          data-node-id="I165:636;13:44"
        />
        <div
          className="overflow-clip relative shrink-0 size-[20px]"
          data-name="Right"
          data-node-id="I165:636;13:34"
        >
          <div
            className="absolute inset-[8.33%]"
            data-name="safearea"
            data-node-id="I165:636;13:34;21:1594"
          >
            <img alt="" className="absolute block max-w-none size-full" src={imgSafearea} />
          </div>
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_10.8px_0px_rgba(255,54,242,0.2),inset_0px_-23px_12px_-1px_rgba(255,27,244,0.17),inset_0px_-47px_16px_-33px_rgba(255,255,255,0.7),inset_0px_-30px_26.7px_-27px_rgba(46,9,43,0.5),inset_0px_-40px_46.3px_-30px_#ff0890]" />
    </div>
  );
}

type Card2Props = {
  className?: string;
  property1?: "Secure Transactions default" | "Secure Transactions hover";
};

export function ServicesCard2({
  className,
  property1 = "Secure Transactions default",
}: Card2Props) {
  return (
    <div
      className={
        className ||
        "content-stretch flex flex-col gap-[30px] h-[463px] items-start overflow-clip px-[40px] py-[60px] relative rounded-[38px] w-[369px]"
      }
      data-node-id="165:609"
    >
      <div
        aria-hidden="true"
        className="absolute bg-gradient-to-b from-[#100b16] inset-0 pointer-events-none rounded-[38px] to-[#0f0220]"
      />
      <div
        className="relative flex shrink-0 size-[40px] items-center justify-start text-white"
        data-name="Brain"
        data-node-id="165:610"
      >
        <Brain aria-hidden className="size-[40px]" strokeWidth={1.5} />
      </div>
      <div
        className="content-stretch flex flex-col gap-[16px] items-start not-italic relative shrink-0 w-full"
        data-node-id="165:613"
      >
        <p
          className="font-['Inter:Black',sans-serif] font-black leading-[40px] relative shrink-0 text-[32px] text-white w-[282px]"
          data-node-id="165:614"
        >
          AI Product Development
        </p>
        <p
          className="font-['Inter:Light',sans-serif] font-light leading-[26px] relative shrink-0 text-[#d1d5dc] text-[16px] w-[273px]"
          data-node-id="165:615"
        >
          Intelligent automation powered by machine learning and natural language processing to
          transform your business operations.
        </p>
      </div>
      <div className="absolute flex h-[98.623px] items-center justify-center left-[-42px] top-[-59px] w-[95.759px]">
        <div className="flex-none rotate-[57.05deg]">
          <div className="h-[65.42px] relative w-[75.124px]" data-node-id="165:616">
            <div className="absolute inset-[-82.24%_-71.61%]">
              <img alt="" className="block max-w-none size-full" src={imgEllipse3} />
            </div>
          </div>
        </div>
      </div>
      <div
        className="bg-white content-stretch flex gap-[4px] items-center overflow-clip px-[24px] py-[16px] relative rounded-[40px] shrink-0"
        data-name="Button 13"
        data-node-id="165:617"
      >
        <div
          className="absolute bg-[#46ff62] blur-[7.5px] inset-[69px_0_-103px_0] opacity-0 rounded-tl-[60px] rounded-tr-[60px]"
          data-name="glow"
          data-node-id="I165:617;13:52"
        />
        <p
          className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#252525] text-[18px] whitespace-nowrap"
          data-node-id="I165:617;13:33"
        >
          Continue
        </p>
        <div
          className="absolute bg-[#46ff62] blur-[7.5px] inset-[64px_0_-98px_0] opacity-0 rounded-tl-[60px] rounded-tr-[60px]"
          data-name="glow"
          data-node-id="I165:617;13:44"
        />
        <div
          className="overflow-clip relative shrink-0 size-[20px]"
          data-name="Right"
          data-node-id="I165:617;13:34"
        >
          <div
            className="absolute inset-[8.33%]"
            data-name="safearea"
            data-node-id="I165:617;13:34;21:1594"
          >
            <img alt="" className="absolute block max-w-none size-full" src={imgSafearea} />
          </div>
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_10.8px_0px_rgba(54,255,208,0.2),inset_0px_-23px_12px_-1px_rgba(27,255,65,0.17),inset_0px_-47px_16px_-33px_rgba(255,255,255,0.7),inset_0px_-30px_26.7px_-27px_rgba(9,46,21,0.5),inset_0px_-40px_46.3px_-30px_#00dc28]" />
    </div>
  );
}
