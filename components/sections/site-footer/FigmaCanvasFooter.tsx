import Image from "next/image";
import Link from "next/link";
import { FIGMA_ASSETS } from "@/lib/figma-assets";
import { cn } from "@/lib/utils";
import { companyLinks, serviceLinks } from "./footer-data";
import { FooterColumnTitle, FooterSocialRow } from "./FooterPrimitives";

export type CanvasFooterProps = {
  className?: string;
};

export function CanvasFooter({ className }: CanvasFooterProps) {
  return (
    <div
      id="contact"
      className={cn("absolute h-[590px] w-[1440px] overflow-clip", className)}
      data-name="Footer v2"
    >
      <div className="absolute top-[497.76px] left-[99px] h-0 w-[1241px]">
        <div className="absolute inset-[0_0_-1px_0]">
          <Image
            alt=""
            width={2400}
            height={2400}
            className="block size-full max-w-none"
            src={FIGMA_ASSETS.imgFooterBottom}
          />
        </div>
      </div>
      <div className="absolute top-[1.24px] left-0 h-0 w-[1440px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <Image
            alt=""
            width={2400}
            height={2400}
            className="block size-full max-w-none"
            src={FIGMA_ASSETS.imgLine135}
          />
        </div>
      </div>

      <div className="absolute top-[116px] left-[69px] z-[2] flex gap-[94px]">
        <div className="flex w-[114.275px] flex-col gap-[40px]">
          <FooterColumnTitle>Menu</FooterColumnTitle>
          <div className="flex flex-col gap-[18px]">
            {companyLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="dm-sans-opsz-14 font-[family-name:var(--font-dm-sans)] text-[18px] font-normal leading-[20px] text-white"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex w-[130.078px] flex-col gap-[40px]">
          <FooterColumnTitle>Services</FooterColumnTitle>
          <div className="flex flex-col gap-[18px]">
            {serviceLinks.map(({ href, label }) => (
              <Link
                key={label}
                href={href}
                className="dm-sans-opsz-14 pointer-events-auto font-[family-name:var(--font-dm-sans)] text-[18px] font-normal leading-[20px] text-white"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex w-[244px] flex-col gap-[40px]">
          <FooterColumnTitle>Contact</FooterColumnTitle>
          <div className="flex flex-col gap-[18px]">
            <div className="flex items-center gap-[6px] text-white">
              <Image
                src={FIGMA_ASSETS.imgVector3}
                alt=""
                width={14}
                height={18}
                className="h-[18px] w-[14px]"
              />
              <p className="dm-sans-opsz-14 font-[family-name:var(--font-dm-sans)] text-[18px] font-normal leading-[20px]">
                108/10 Andranik Zoravar St.
              </p>
            </div>
            <div className="flex items-center gap-[9px] text-white">
              <Image
                src={FIGMA_ASSETS.imgVector4}
                alt=""
                width={20}
                height={15}
                className="h-[15px] w-[20px]"
              />
              <Link
                href="mailto:info@neetrino.com"
                className="dm-sans-opsz-14 font-[family-name:var(--font-dm-sans)] text-[18px] font-normal leading-[20px]"
              >
                info@neetrino.com
              </Link>
            </div>
            <div className="flex items-center gap-[9px] text-white">
              <Image
                src={FIGMA_ASSETS.imgVector5}
                alt=""
                width={18}
                height={18}
                className="size-[18px]"
              />
              <Link
                href="tel:+37444343000"
                className="dm-sans-opsz-14 font-[family-name:var(--font-dm-sans)] text-[16px] font-normal leading-[18px]"
              >
                +374 44 343 000
              </Link>
            </div>
            <div className="flex items-start gap-[9px] text-white">
              <Image
                src={FIGMA_ASSETS.imgGroup2087329580}
                alt=""
                width={21.5}
                height={21}
                className="h-[21px] w-[21.5px]"
              />
              <p className="dm-sans-opsz-14 whitespace-pre font-[family-name:var(--font-dm-sans)] text-[16px] font-medium leading-[22px]">
                {"Working Hours\nMon. - Fri. 10AM - 7PM"}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-[116.02px] left-[902.57px] w-[436.431px]">
        <div className="flex w-[436px] flex-col gap-[24px]">
          <div className="flex flex-col gap-[10px]">
            <FooterColumnTitle>Message us</FooterColumnTitle>
            <p className="dm-sans-opsz-14 w-[358.364px] font-[family-name:var(--font-dm-sans)] text-[18px] font-normal leading-[30px] text-[#dcd5d5]">
              Step into the digital world with one message, powered by Neetrino.
            </p>
          </div>
          <div className="h-[68px] w-full rounded-[108px] border border-[#d9dbe9] bg-white shadow-[0px_2px_12px_0px_rgba(20,20,43,0.08)]">
            <div className="mt-[25px] ml-[23px]">
              <p className="dm-sans-opsz-14 font-[family-name:var(--font-dm-sans)] text-[16px] font-normal leading-[18px] text-[#dcd5d5]">
                Enter your message
              </p>
            </div>
          </div>
          <button type="button" className="relative h-[56px] w-[120px] rounded-[35px] bg-[#4a3aff]">
            <span className="absolute top-[16px] left-[18px] font-['Poppins:Regular',sans-serif] text-[16px] leading-[24px] text-white">
              Send
            </span>
            <div className="absolute top-[7px] left-[71px] size-[42px]">
              <Image
                src={FIGMA_ASSETS.imgGroup221}
                alt=""
                width={42}
                height={42}
                className="block size-full"
              />
            </div>
          </button>
        </div>
      </div>

      <div className="absolute top-[527px] left-[1075px]">
        <FooterSocialRow iconSize={20} />
      </div>

      <p className="dm-sans-opsz-14 absolute top-[536.01px] left-[110px] font-[family-name:var(--font-dm-sans)] text-[18px] font-normal leading-[20px] whitespace-nowrap text-[#dcd5d5]">
        Copyright © 2017 - 2026 Neetrino IT Company. All Rights Reserved.
      </p>
    </div>
  );
}
