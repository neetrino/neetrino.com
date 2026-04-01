"use client";

import { DeferredMount } from "@/components/layout/DeferredMount";
import { NeetrinoHomeBelowFold } from "./NeetrinoHomeBelowFold";
import { NeetrinoHomeEndCap } from "./NeetrinoHomeEndCap";
import { NeetrinoHomeSegment1 } from "./NeetrinoHomeSegment1";
import { NeetrinoHomeSegment2 } from "./NeetrinoHomeSegment2";
import { NeetrinoHomeSegment3 } from "./NeetrinoHomeSegment3";
import { NeetrinoHomeSegment4 } from "./NeetrinoHomeSegment4";

export function NeetrinoHome() {
  return (
    <div
      className="relative w-full min-h-full min-w-0 bg-[#151515]"
      data-name="HOME"
      data-node-id="10:219"
    >
      <NeetrinoHomeSegment1 />
      {/* ~below first screen on most viewports — defers images + Three chunk until scroll */}
      <DeferredMount topClassName="top-[1500px]">
        <NeetrinoHomeSegment2 />
        <NeetrinoHomeSegment3 />
        <NeetrinoHomeSegment4 />
        <NeetrinoHomeBelowFold />
        <NeetrinoHomeEndCap />
      </DeferredMount>
    </div>
  );
}
