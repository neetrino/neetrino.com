import { LayoutGrid } from "lucide-react";
import {
  imgBuilding,
  imgEllipse6,
  imgEllipse7,
  imgSafearea,
  imgShieldDone,
} from "./services-assets";
import {
  ServicesCard3 as ServicesLowerCard3,
  ServicesCard2 as ServicesLowerCard2,
} from "./ServicesCardsBlockA";
import { ServicesCard, ServicesCard1 } from "./ServicesCardsBlockB";
/** Top card row + lower cards (inside Light Rays layer). */
export function ServicesDesktopCardsScene() {
  return (
    <>
      <div
        className="-translate-x-1/2 absolute content-stretch flex gap-[58px] items-center left-[calc(50%+0.5px)] top-[370px]"
        data-node-id="165:689"
      >
        <div
          className="content-stretch flex flex-col gap-[30px] h-[463px] items-start overflow-clip px-[40px] py-[60px] relative rounded-[38px] shrink-0 w-[369px]"
          data-name="Card 4"
          data-node-id="165:690"
        >
          <div
            aria-hidden="true"
            className="absolute bg-gradient-to-b from-[#0d0c12] inset-0 pointer-events-none rounded-[38px] to-[#0d111d]"
          />
          <div
            className="relative shrink-0 size-[40px]"
            data-name="Shield done"
            data-node-id="I165:690;406:2853"
          >
            <img alt="" className="absolute block max-w-none size-full" src={imgShieldDone} />
          </div>
          <div
            className="content-stretch flex flex-col gap-[16px] items-start not-italic relative shrink-0 w-full"
            data-node-id="I165:690;406:2861"
          >
            <p
              className="font-['Inter:Black',sans-serif] font-black leading-[40px] relative shrink-0 text-[32px] text-white w-full"
              data-node-id="I165:690;406:2862"
            >
              SaaS Development
            </p>
            <p
              className="font-['Inter:Light',sans-serif] font-light leading-[26px] relative shrink-0 text-[#d1d5dc] text-[16px] w-full"
              data-node-id="I165:690;406:2863"
            >
              Scalable SaaS platforms built for growth. Secure, flexible, and ready to evolve with
              your product.
            </p>
          </div>
          <div className="absolute flex h-[99.524px] items-center justify-center left-[-42px] top-[-59px] w-[97.992px]">
            <div className="flex-none rotate-[51.41deg]">
              <div className="h-[65.42px] relative w-[75.124px]" data-node-id="I165:690;406:2871">
                <div className="absolute inset-[-82.24%_-71.61%]">
                  <img alt="" className="block max-w-none size-full" src={imgEllipse6} />
                </div>
              </div>
            </div>
          </div>
          <div
            className="bg-white content-stretch flex gap-[4px] items-center overflow-clip px-[24px] py-[16px] relative rounded-[40px] shrink-0"
            data-name="Button 13"
            data-node-id="I165:690;406:3012"
          >
            <div
              className="absolute bg-[#46fff4] blur-[7.5px] inset-[69px_0_-103px_0] opacity-0 rounded-tl-[60px] rounded-tr-[60px]"
              data-name="glow"
              data-node-id="I165:690;406:3012;13:52"
            />
            <p
              className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#252525] text-[18px] whitespace-nowrap"
              data-node-id="I165:690;406:3012;13:33"
            >
              Continue
            </p>
            <div
              className="absolute bg-[#46fff4] blur-[7.5px] inset-[64px_0_-98px_0] opacity-0 rounded-tl-[60px] rounded-tr-[60px]"
              data-name="glow"
              data-node-id="I165:690;406:3012;13:44"
            />
            <div
              className="overflow-clip relative shrink-0 size-[20px]"
              data-name="Right"
              data-node-id="I165:690;406:3012;13:34"
            >
              <div
                className="absolute inset-[8.33%]"
                data-name="safearea"
                data-node-id="I165:690;406:3012;13:34;21:1594"
              >
                <img alt="" className="absolute block max-w-none size-full" src={imgSafearea} />
              </div>
            </div>
          </div>
          <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_10.8px_0px_rgba(102,148,255,0.2),inset_0px_-30px_12px_-1px_rgba(35,101,255,0.15),inset_0px_-24px_16.7px_-9px_rgba(255,255,255,0.64),inset_0px_-34px_26.7px_-10px_rgba(102,148,255,0.5),inset_0px_-30px_46.8px_-33px_#144ccd]" />
        </div>
        <div
          className="content-stretch flex flex-col gap-[30px] h-[463px] items-start overflow-clip px-[40px] py-[60px] relative rounded-[38px] shrink-0 w-[369px]"
          data-name="Card 2"
          data-node-id="165:691"
        >
          <div
            aria-hidden="true"
            className="absolute bg-gradient-to-b from-[#120a0b] inset-0 pointer-events-none rounded-[38px] to-[#1b0a03]"
          />
          <div
            className="relative flex shrink-0 size-[40px] items-center justify-center text-white"
            data-name="CRM grid"
            data-node-id="I165:691;406:3043"
          >
            <LayoutGrid aria-hidden className="size-[40px]" strokeWidth={1.5} />
          </div>
          <div
            className="content-stretch flex flex-col gap-[16px] items-start not-italic relative shrink-0 w-full"
            data-node-id="I165:691;406:3047"
          >
            <p
              className="font-['Inter:Black',sans-serif] font-black leading-[40px] relative shrink-0 text-[32px] text-white w-full"
              data-node-id="I165:691;406:3048"
            >
              CRM Systems
            </p>
            <p
              className="font-['Inter:Light',sans-serif] font-light leading-[26px] relative shrink-0 text-[#d1d5dc] text-[16px] w-full"
              data-node-id="I165:691;406:3049"
            >
              Powerful customer relationship management solutions to streamline your sales process
              and boost customer satisfaction.
            </p>
          </div>
          <div className="absolute flex h-[99.524px] items-center justify-center left-[-42px] top-[-59px] w-[97.992px]">
            <div className="flex-none rotate-[51.41deg]">
              <div className="h-[65.42px] relative w-[75.124px]" data-node-id="I165:691;406:3057">
                <div className="absolute inset-[-82.24%_-71.61%]">
                  <img alt="" className="block max-w-none size-full" src={imgEllipse7} />
                </div>
              </div>
            </div>
          </div>
          <div
            className="bg-white content-stretch flex gap-[4px] items-center overflow-clip px-[24px] py-[16px] relative rounded-[40px] shrink-0"
            data-name="Button 13"
            data-node-id="I165:691;406:3091"
          >
            <div
              className="absolute bg-[#46fff4] blur-[7.5px] inset-[69px_0_-103px_0] opacity-0 rounded-tl-[60px] rounded-tr-[60px]"
              data-name="glow"
              data-node-id="I165:691;406:3091;13:52"
            />
            <p
              className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#252525] text-[18px] whitespace-nowrap"
              data-node-id="I165:691;406:3091;13:33"
            >
              Continue
            </p>
            <div
              className="absolute bg-[#46fff4] blur-[7.5px] inset-[64px_0_-98px_0] opacity-0 rounded-tl-[60px] rounded-tr-[60px]"
              data-name="glow"
              data-node-id="I165:691;406:3091;13:44"
            />
            <div
              className="overflow-clip relative shrink-0 size-[20px]"
              data-name="Right"
              data-node-id="I165:691;406:3091;13:34"
            >
              <div
                className="absolute inset-[8.33%]"
                data-name="safearea"
                data-node-id="I165:691;406:3091;13:34;21:1594"
              >
                <img alt="" className="absolute block max-w-none size-full" src={imgSafearea} />
              </div>
            </div>
          </div>
          <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_10.8px_0px_rgba(255,237,102,0.2),inset_0px_-30px_12px_-1px_rgba(255,233,177,0.17),inset_0px_-37px_16px_-36px_rgba(255,255,255,0.25),inset_0px_-34px_26.7px_-15px_rgba(255,240,126,0.5),inset_0px_-40px_46.8px_-30px_#e63e28]" />
        </div>
        <ServicesCard1 className="content-stretch flex flex-col gap-[30px] h-[463px] items-start overflow-clip px-[40px] py-[60px] relative rounded-[38px] shrink-0 w-[369px]" />
      </div>
      <ServicesCard className="absolute content-stretch flex flex-col gap-[30px] h-[463px] items-start left-[108px] overflow-clip px-[40px] py-[60px] rounded-[38px] top-[906px] w-[369px]" />
      <ServicesLowerCard2 className="absolute content-stretch flex flex-col gap-[30px] h-[463px] items-start left-[535px] overflow-clip px-[40px] py-[60px] rounded-[38px] top-[906px] w-[369px]" />
      <ServicesLowerCard3 className="absolute content-stretch flex flex-col gap-[30px] h-[463px] items-start left-[962px] overflow-clip px-[40px] py-[60px] rounded-[38px] top-[906px] w-[369px]" />
    </>
  );
}
