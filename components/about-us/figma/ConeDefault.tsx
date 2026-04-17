import type { CSSProperties } from "react";
import Image from "next/image";
import { DEFAULT_IMAGE_QUALITY } from "@/lib/image-defaults";
import { imgCone012, imgRectangle15 } from "@/lib/about-us-figma-asset-urls";

type ConeDefaultProps = {
  className?: string;
};

/** Figma `Cone/Default` (335:915) — from get_design_context. */
export function ConeDefault({ className }: ConeDefaultProps) {
  return (
    <div
      className={className ?? "relative size-[191.206px]"}
      data-name="Cone/Default"
      data-node-id="335:915"
    >
      <div
        className="absolute inset-[-0.22%_0.56%_-0.28%_-1.05%]"
        data-name="Cone_01 2"
        data-node-id="335:916"
      >
        <Image
          alt=""
          fill
          className="object-cover pointer-events-none"
          src={imgCone012}
          sizes="192px"
          quality={DEFAULT_IMAGE_QUALITY}
          loading="lazy"
        />
      </div>
      <div
        className="absolute contents inset-[-0.22%_0.56%_-0.28%_-1.05%]"
        data-name="Mask Group"
        data-node-id="335:917"
      >
        <div
          className="-translate-x-1/2 absolute bottom-[-0.28%] left-[calc(50%-19.88px)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[1111.948px_436.556px] mask-size-[192.148px_192.149px] mix-blend-color top-[-0.22%] w-[2500px] bg-[#ff7500]"
          data-node-id="335:919"
          style={{ maskImage: `url('${imgRectangle15}')` } as CSSProperties}
        />
      </div>
    </div>
  );
}
