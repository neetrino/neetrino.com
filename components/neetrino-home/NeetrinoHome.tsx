"use client";

import { DeferredMount } from "@/components/layout/DeferredMount";
import { NeetrinoHomeDesktopVectorGrid } from "./NeetrinoHomeDesktopVectorGrid";
import { NeetrinoHomeBelowFold } from "./NeetrinoHomeBelowFold";
import { NeetrinoHomeEndCap } from "./NeetrinoHomeEndCap";
import { NeetrinoHomeSegment1 } from "./NeetrinoHomeSegment1";
import { NeetrinoHomeSegment2 } from "./NeetrinoHomeSegment2";
import { NeetrinoHomeSegment3 } from "./NeetrinoHomeSegment3";
import { NeetrinoHomeSegment4 } from "./NeetrinoHomeSegment4";
import { NeetrinoHomeVerticalPipe } from "./NeetrinoHomeVerticalPipe";

export function NeetrinoHome() {
  return (
    <div
      className="relative w-full min-h-full min-w-0 bg-transparent"
      data-name="HOME"
      data-node-id="10:219"
    >
      <NeetrinoHomeDesktopVectorGrid />
      <NeetrinoHomeSegment1 />
      {/* ~below first screen on most viewports — defers images + Three chunk until scroll */}
      <DeferredMount topClassName="top-[1500px]" rootMargin="120px 0px 120px 0px">
        <NeetrinoHomeSegment2 />
        <NeetrinoHomeSegment3 />
        <NeetrinoHomeSegment4 />
        <NeetrinoHomeVerticalPipe />
        <NeetrinoHomeBelowFold />
        <NeetrinoHomeEndCap />
      </DeferredMount>
    </div>
  );
}
