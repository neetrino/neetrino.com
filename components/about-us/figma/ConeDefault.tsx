import type { CSSProperties } from "react";
import Image from "next/image";
import { DEFAULT_IMAGE_QUALITY } from "@/lib/image-defaults";
import { imgCone012 } from "@/lib/about-us-figma-asset-urls";

type ConeDefaultProps = {
  className?: string;
};

/** Figma `Cone/Default` (335:915) — from get_design_context. */
export function ConeDefault({ className }: ConeDefaultProps) {
  /** Sepia + hue toward brand orange. No mask: Figma mask coords target a different box and hid the cone. */
  const coneOrangeFilter =
    "sepia(1) saturate(4) hue-rotate(345deg) brightness(1.08) contrast(1.02)";

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
          style={{ filter: coneOrangeFilter } as CSSProperties}
        />
      </div>
    </div>
  );
}
