"use client";

import Image from "next/image";
import Link from "next/link";
import { DesktopHeaderQuoteLink } from "@/components/shared/DesktopHeaderQuoteLink";
import { DESKTOP_HEADER_PHONE_LEFT_PX } from "@/lib/desktop-header-quote.constants";
import { FIGMA_ASSETS } from "@/lib/figma-assets";
import { COMPANY_PHONE_TEL_HREF } from "@/lib/nav-links";
import { cn } from "@/lib/utils";

/**
 * Desktop nav chrome from the Home Figma canvas (`Awwwards` block) — canonical site header bar.
 */
export function HomeDesktopHeader({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "z-[100]",
        className ??
          "relative h-[64px] w-[1240px] rounded-[72px] bg-[rgba(255,255,255,0.21)] backdrop-blur-xl backdrop-saturate-150",
      )}
      data-name="Awwwards"
      data-node-id="10:442"
    >
      <div
        className="-translate-x-1/2 absolute bg-[rgba(40,43,103,0.38)] h-[48px] left-[calc(50%-70px)] rounded-[28px] top-[8px] w-[798px]"
        data-name="Link [button]"
        data-node-id="10:443"
      >
        <div
          className="-translate-x-1/2 absolute content-stretch flex font-semibold gap-[41px] items-center leading-[0] left-1/2 not-italic text-[16px] text-white top-[16px] whitespace-nowrap"
          data-node-id="10:444"
        >
          <Link
            className="flex flex-col justify-center relative shrink-0"
            data-node-id="10:445"
            href="/"
          >
            <p className="leading-[15.6px]">Home</p>
          </Link>
          <Link
            className="flex flex-col justify-center relative shrink-0"
            data-node-id="10:446"
            href="/services"
          >
            <p className="leading-[15.6px]">Services</p>
          </Link>
          <Link
            className="flex flex-col justify-center relative shrink-0"
            data-node-id="10:447"
            href="/portfolio"
          >
            <p className="leading-[15.6px]">Portfolio</p>
          </Link>
          <Link
            className="flex flex-col justify-center relative shrink-0"
            data-node-id="10:448"
            href="/about-us"
          >
            <p className="leading-[15.6px]">About Us</p>
          </Link>
          <Link
            className="flex flex-col justify-center relative shrink-0"
            data-node-id="10:450"
            href="/contact"
          >
            <p className="leading-[15.6px]">Contact</p>
          </Link>
        </div>
      </div>
      <Link
        href="/"
        aria-label="Go to home page"
        className="absolute h-[37px] left-[20px] top-[13px] w-[130px]"
        data-name="Neetrino-it-comapny-(2)png 1"
        data-node-id="10:453"
      >
        <Image
          alt=""
          width={2400}
          height={2400}
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={FIGMA_ASSETS.imgNeetrinoItComapny2Png1}
          sizes="130px"
        />
      </Link>
      <DesktopHeaderQuoteLink />
      <a
        href={COMPANY_PHONE_TEL_HREF}
        aria-label="Call Neetrino"
        className="pointer-events-auto absolute z-[110] bg-white rounded-full size-[48px] top-[8px]"
        style={{ left: DESKTOP_HEADER_PHONE_LEFT_PX }}
        data-node-id="10:454"
      >
        <div
          className="absolute left-[11px] size-[25px] top-[11px]"
          data-name="Vector"
          data-node-id="10:456"
        >
          <Image
            alt=""
            width={2400}
            height={2400}
            className="absolute block max-w-none size-full"
            src={FIGMA_ASSETS.imgVector}
            sizes="25px"
          />
        </div>
      </a>
    </div>
  );
}
