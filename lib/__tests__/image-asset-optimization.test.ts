import { describe, expect, it } from "vitest";
import { imageUnoptimizedForSrc, isSvgAssetSrc } from "@/lib/image-asset-optimization";

describe("image-asset-optimization", () => {
  it("detects SVG URLs", () => {
    expect(isSvgAssetSrc("https://cdn.neetrino.com/figma-assets/foo.svg")).toBe(true);
    expect(isSvgAssetSrc("https://cdn.neetrino.com/figma-assets/foo.webp")).toBe(false);
  });

  it("skips optimizer only for SVG", () => {
    expect(imageUnoptimizedForSrc("https://cdn.neetrino.com/icons/bar.svg?v=1")).toBe(true);
    expect(imageUnoptimizedForSrc("https://cdn.neetrino.com/figma-assets/hero.webp")).toBe(false);
  });
});
