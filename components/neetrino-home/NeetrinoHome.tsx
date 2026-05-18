"use client";

import { NeetrinoHomeDesktopVectorGrid } from "./NeetrinoHomeDesktopVectorGrid";
import { NeetrinoHomeBelowFold } from "./NeetrinoHomeBelowFold";
import { NeetrinoHomeEndCap } from "./NeetrinoHomeEndCap";
import { NeetrinoHomeSegment1 } from "./NeetrinoHomeSegment1";
import { NeetrinoHomeSegment2 } from "./NeetrinoHomeSegment2";
import { NeetrinoHomeSegment3 } from "./NeetrinoHomeSegment3";
import { NeetrinoHomeSegment4 } from "./NeetrinoHomeSegment4";
import { NeetrinoHomeVerticalPipe } from "./NeetrinoHomeVerticalPipe";
import type { PublicPortfolioCard } from "@/lib/portfolio/public-portfolio.dto";

type NeetrinoHomeProps = {
  portfolioItems: readonly PublicPortfolioCard[];
};

export function NeetrinoHome({ portfolioItems }: NeetrinoHomeProps) {
  return (
    <div
      className="relative w-full min-h-full min-w-0 bg-transparent"
      data-name="HOME"
      data-node-id="10:219"
    >
      <NeetrinoHomeDesktopVectorGrid />
      <NeetrinoHomeSegment1 />
      <NeetrinoHomeSegment2 />
      <NeetrinoHomeSegment3 />
      <NeetrinoHomeSegment4 portfolioItems={portfolioItems} />
      <NeetrinoHomeVerticalPipe />
      <NeetrinoHomeBelowFold />
      <NeetrinoHomeEndCap />
    </div>
  );
}
