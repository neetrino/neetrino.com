import Image from "next/image";
import { cn } from "@/lib/utils";
import { DEFAULT_IMAGE_QUALITY, SIZES_DESKTOP_MAX_1440 } from "@/lib/image-defaults";

type FigmaFillImageProps = {
  src: string;
  /** Tailwind / layout classes; `object-fill` is applied unless you override with object-* */
  className?: string;
  sizes?: string;
  quality?: number;
  priority?: boolean;
  loading?: "lazy" | "eager";
};

/**
 * Figma-export style raster in a positioned box: parent must be `relative` (or absolute/fixed)
 * with explicit dimensions. Replaces `<img className="absolute … size-full" />` patterns.
 */
export function FigmaFillImage({
  src,
  className,
  sizes = SIZES_DESKTOP_MAX_1440,
  quality = DEFAULT_IMAGE_QUALITY,
  priority = false,
  loading,
}: FigmaFillImageProps) {
  return (
    <Image
      src={src}
      alt=""
      fill
      sizes={sizes}
      quality={quality}
      priority={priority}
      loading={priority ? "eager" : (loading ?? "lazy")}
      className={cn("object-fill", className)}
    />
  );
}
