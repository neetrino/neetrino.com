import Image from "next/image";
import { FigmaFillImage } from "@/components/shared/FigmaFillImage";
import { DEFAULT_IMAGE_QUALITY } from "@/lib/image-defaults";
import { img10, imgRectangle17414, imgRectangle17416, imgVector2 } from "./services-assets";

/** Layers under the Light Rays group (vector wash, mid images, band). */
export function ServicesDesktopBackdrop() {
  return (
    <>
      <div className="-translate-x-1/2 absolute flex h-[3723px] items-center justify-center left-[calc(50%-38px)] mix-blend-overlay top-[-40px] w-[1722px]">
        <div className="flex-none rotate-90">
          <div className="h-[1722px] relative w-[3723px]" data-name="Vector" data-node-id="165:667">
            <FigmaFillImage src={imgVector2} />
          </div>
        </div>
      </div>
      <div
        className="-translate-x-1/2 absolute h-[664px] left-[calc(50%-4.5px)] top-[1529px] w-[1437px]"
        data-node-id="165:668"
      >
        <div className="absolute inset-[-28.94%_-15.66%_-29.47%_-15.66%]">
          <FigmaFillImage src={imgRectangle17416} />
        </div>
      </div>
      <div className="absolute contents left-[600px] top-[1611px]" data-node-id="165:669">
        <div
          className="absolute h-[563px] left-[600px] mix-blend-lighten opacity-70 top-[1614px] w-[633px]"
          data-name="10"
          data-node-id="165:670"
        >
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <Image
              alt=""
              className="absolute h-[200.1%] left-0 max-w-none top-[-68.6%] w-full"
              src={img10}
              width={2400}
              height={2400}
              quality={DEFAULT_IMAGE_QUALITY}
              sizes="633px"
              loading="lazy"
            />
          </div>
        </div>
        <div
          className="absolute h-[563px] left-[600px] opacity-70 top-[1611px] w-[633px]"
          data-name="101"
          data-node-id="165:671"
        >
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <Image
              alt=""
              className="absolute h-[200.1%] left-0 max-w-none top-[-68.6%] w-full"
              src={img10}
              width={2400}
              height={2400}
              quality={DEFAULT_IMAGE_QUALITY}
              sizes="633px"
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <div
        className="-translate-x-1/2 absolute h-[405px] left-[calc(50%+0.5px)] top-[1013px] w-[1437px]"
        data-node-id="165:672"
      >
        <div className="absolute inset-[-50.95%_-15.66%_-51.42%_-15.66%]">
          <FigmaFillImage src={imgRectangle17414} />
        </div>
      </div>
    </>
  );
}
