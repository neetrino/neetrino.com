import Image from "next/image";
import { FIGMA_ASSETS } from "@/lib/figma-assets";
import { imageUnoptimizedForSrc } from "@/lib/image-asset-optimization";
import { DEFAULT_IMAGE_QUALITY } from "@/lib/image-defaults";
import { SITE_FOOTER_DESKTOP_FOOTER_BOTTOM_TOP_PX } from "@/lib/site-footer-copyright-strip.constants";

/** Figma desktop footer — decorative glow layers and bottom strip (`10:223`–`10:238`). */
export function SiteFooterDesktopArt() {
  return (
    <>
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
        <div
          className="absolute h-[563px] left-[638px] opacity-70 top-[27px] w-[633px]"
          data-node-id="10:224"
          data-name="101"
        >
          <div className="absolute inset-0 overflow-hidden">
            <Image
              alt=""
              width={2400}
              height={2400}
              className="absolute h-[200.1%] left-0 max-w-none top-[-68.6%] w-full"
              src={FIGMA_ASSETS.img10}
              sizes="633px"
              quality={DEFAULT_IMAGE_QUALITY}
              loading="lazy"
            />
          </div>
        </div>
        <div
          className="absolute h-[563px] left-[640px] mix-blend-lighten opacity-70 top-[26px] w-[633px]"
          data-node-id="10:223"
          data-name="10"
        >
          <div className="absolute inset-0 overflow-hidden">
            <Image
              alt=""
              width={2400}
              height={2400}
              className="absolute h-[200.1%] left-0 max-w-none top-[-68.6%] w-full"
              src={FIGMA_ASSETS.img10}
              sizes="633px"
              quality={DEFAULT_IMAGE_QUALITY}
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <div
        className="absolute z-10 h-0 left-[99px] w-[1241px]"
        style={{ top: `${SITE_FOOTER_DESKTOP_FOOTER_BOTTOM_TOP_PX}px` }}
        data-node-id="10:238"
        data-name="Footer Bottom"
      >
        <div className="absolute inset-[0_0_-1px_0]">
          <Image
            alt=""
            width={2400}
            height={2400}
            unoptimized={imageUnoptimizedForSrc(FIGMA_ASSETS.imgFooterBottom)}
            className="block max-w-none size-full"
            src={FIGMA_ASSETS.imgFooterBottom}
            sizes="1241px"
            loading="lazy"
          />
        </div>
      </div>
    </>
  );
}
