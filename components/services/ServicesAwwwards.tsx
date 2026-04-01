import Link from "next/link";
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
        className="absolute h-[37px] left-[20px] top-[13px] w-[130px]"
        data-name="Neetrino-it-comapny-(2)png 1"
        data-node-id="165:657"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={imgNeetrinoItComapny2Png1}
        />
      </Link>
      <div
        className="absolute bg-white left-[1172px] rounded-full size-[48px] top-[8px]"
        data-node-id="165:658"
      >
        <div
          className="absolute left-[11px] size-[25px] top-[11px]"
          data-name="Vector"
          data-node-id="165:660"
        >
          <img alt="" className="absolute block max-w-none size-full" src={imgVector} />
        </div>
      </div>
    </div>
  );
}
