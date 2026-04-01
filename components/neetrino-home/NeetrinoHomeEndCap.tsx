"use client";

import Image from "next/image";
import { img28A } from "./figma-assets";

export function NeetrinoHomeEndCap() {
  return (
    <>
      <div className="absolute flex h-[373px] items-center justify-center left-[989px] top-[904px] w-[450px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="h-[373px] relative w-[450px]" data-name="28A" data-node-id="10:462">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <Image
                alt=""
                width={2400}
                height={2400}
                className="absolute h-[214.48%] left-0 max-w-none top-[-70.38%] w-full"
                src={img28A}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
