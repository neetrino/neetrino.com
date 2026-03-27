"use client";

import Image from "next/image";
import Link from "next/link";
import { FIGMA_ASSETS } from "@/components/assets";

export function HomeDesktopHeader() {
  return (
    <div className="relative hidden h-[91px] lg:block">
      <div
        className="-translate-x-1/2 absolute bg-[rgba(255,255,255,0.21)] h-[64px] left-1/2 rounded-[72px] top-[27px] w-[1240px]"
        data-name="Awwwards"
        data-node-id="10:442"
      >
        <div
          className="-translate-x-1/2 absolute bg-[rgba(40,43,103,0.38)] h-[48px] left-[calc(50%-70px)] rounded-[28px] top-[8px] w-[798px]"
          data-name="Link [button]"
          data-node-id="10:443"
        >
          <div
            className="-translate-x-1/2 absolute content-stretch flex font-['Inter:Semi_Bold',sans-serif] font-semibold gap-[41px] items-center leading-[0] left-1/2 not-italic text-[16px] text-white top-[16px] whitespace-nowrap"
            data-node-id="10:444"
          >
            <Link className="flex flex-col justify-center relative shrink-0" data-node-id="10:445" href="/">
              <p className="leading-[15.6px]">Home</p>
            </Link>
            <Link className="flex flex-col justify-center relative shrink-0" data-node-id="10:446" href="/services">
              <p className="leading-[15.6px]">Services</p>
            </Link>
            <Link className="flex flex-col justify-center relative shrink-0" data-node-id="10:447" href="/portfolio">
              <p className="leading-[15.6px]">Portfolio</p>
            </Link>
            <Link className="flex flex-col justify-center relative shrink-0" data-node-id="10:448" href="/about-us">
              <p className="leading-[15.6px]">About Us</p>
            </Link>
            <Link className="flex flex-col justify-center relative shrink-0" data-node-id="10:450" href="/contact">
              <p className="leading-[15.6px]">Contact</p>
            </Link>
          </div>
        </div>
        <div className="absolute bg-[#473dff] h-[48px] left-[986px] rounded-[28px] top-[8px] w-[144px]" data-name="Link [button]" data-node-id="10:451">
          <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold justify-center leading-[0] left-[25px] not-italic text-[16px] text-white top-[24px] whitespace-nowrap" data-node-id="10:452">
            <p className="leading-[15.6px]">Get a Quote</p>
          </div>
        </div>
        <Link
          href="/"
          aria-label="Go to home page"
          className="absolute h-[37px] left-[20px] top-[13px] w-[130px]"
          data-name="Neetrino-it-comapny-(2)png 1"
          data-node-id="10:453"
        >
          <Image alt="" unoptimized width={2400} height={2400} className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={FIGMA_ASSETS.imgNeetrinoItComapny2Png1} />
        </Link>
        <div className="absolute bg-white left-[1141px] rounded-full size-[48px] top-[8px]" data-node-id="10:454">
          <div className="absolute left-[11px] size-[25px] top-[11px]" data-name="Vector" data-node-id="10:456">
            <Image alt="" unoptimized width={2400} height={2400} className="absolute block max-w-none size-full" src={FIGMA_ASSETS.imgVector} />
          </div>
        </div>
      </div>
    </div>
  );
}
