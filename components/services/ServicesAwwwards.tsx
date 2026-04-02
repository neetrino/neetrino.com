import Image from "next/image";
import Link from "next/link";
import { DesktopHeaderQuoteLink } from "@/components/shared/DesktopHeaderQuoteLink";
import { DESKTOP_HEADER_PHONE_LEFT_PX } from "@/lib/desktop-header-quote.constants";
import { COMPANY_PHONE_TEL_HREF } from "@/lib/nav-links";
import { imgNeetrinoItComapny2Png1, imgVector } from "./services-assets";

export function ServicesAwwwards({ className }: { className?: string }) {
  return (
    <div
      className={
        className || "bg-[rgba(255,255,255,0.21)] h-[64px] relative rounded-[72px] w-[1240px]"
      }
      data-name="Awwwards"
      data-node-id="165:646"
    >
      <div
        className="-translate-x-1/2 absolute bg-[rgba(40,43,103,0.38)] h-[48px] left-[calc(50%-70px)] rounded-[28px] top-[8px] w-[798px]"
        data-name="Link [button]"
        data-node-id="165:647"
      >
        <div
          className="-translate-x-1/2 absolute content-stretch flex font-['Inter:Semi_Bold',sans-serif] font-semibold gap-[41px] items-center leading-[0] left-1/2 not-italic text-[16px] text-white top-[16px] whitespace-nowrap"
          data-node-id="165:648"
        >
          <Link
            className="flex flex-col justify-center relative shrink-0"
            data-node-id="165:649"
            href="/"
          >
            <p className="leading-[15.6px]">Home</p>
          </Link>
          <Link
            className="flex flex-col justify-center relative shrink-0"
            data-node-id="165:650"
            href="/services"
          >
            <p className="leading-[15.6px]">Services</p>
          </Link>
          <Link
            className="flex flex-col justify-center relative shrink-0"
            data-node-id="165:651"
            href="/portfolio"
          >
            <p className="leading-[15.6px]">Portfolio</p>
          </Link>
          <Link
            className="flex flex-col justify-center relative shrink-0"
            data-node-id="165:652"
            href="/about-us"
          >
            <p className="leading-[15.6px]">About Us</p>
          </Link>
          <Link
            className="flex flex-col justify-center relative shrink-0"
            data-node-id="165:654"
            href="/contact"
          >
            <p className="leading-[15.6px]">Contact</p>
          </Link>
        </div>
      </div>
      <Link
        href="/"
        aria-label="Go to home page"
        className="absolute left-[20px] top-[13px] h-[37px] w-[130px]"
        data-name="Neetrino-it-comapny-(2)png 1"
        data-node-id="165:657"
      >
        <span className="relative block size-full">
          <Image
            alt=""
            src={imgNeetrinoItComapny2Png1}
            fill
            sizes="130px"
            className="object-cover pointer-events-none"
          />
        </span>
      </Link>
      <DesktopHeaderQuoteLink />
      <a
        href={COMPANY_PHONE_TEL_HREF}
        aria-label="Call Neetrino"
        className="absolute top-[8px] size-[48px] rounded-full bg-white"
        style={{ left: DESKTOP_HEADER_PHONE_LEFT_PX }}
        data-node-id="165:658"
      >
        <div
          className="absolute left-[11px] top-[11px] size-[25px]"
          data-name="Vector"
          data-node-id="165:660"
        >
          <span className="relative block size-full">
            <Image alt="" src={imgVector} fill sizes="25px" className="object-contain" />
          </span>
        </div>
      </a>
    </div>
  );
}
