"use client";

import Image from "next/image";
import { imgChangeColor, imgChangeColor1, imgEllipse3463, imgSafearea1 } from "./figma-assets";

type GroupProps = {
  className?: string;
  property1?: "Default" | "Variant2";
};

export function Group({ className, property1 = "Default" }: GroupProps) {
  return (
    <div className={className || "h-[276px] relative w-[642px]"} data-node-id="1:140">
      <div
        className="absolute inset-[-105.8%_-69%] opacity-0"
        data-name="σàëµûæ flare"
        data-node-id="1:141"
      >
        <div className="absolute contents inset-0" data-name="glow" data-node-id="1:143">
          <div
            className="absolute inset-0 mask-position-[0px_0px,_0px_0px]"
            data-name="µö╣σÅÿΘó£Φë▓ change color"
            data-node-id="1:145"
            style={{
              backgroundImage:
                "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1528 860\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(6.1295e-15 -43 76.4 2.3112e-13 764 430)\\'><stop stop-color=\\'rgba(211,255,248,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(164,235,248,1)\\' offset=\\'0.026042\\'/><stop stop-color=\\'rgba(116,214,249,1)\\' offset=\\'0.052083\\'/><stop stop-color=\\'rgba(68,194,249,1)\\' offset=\\'0.078125\\'/><stop stop-color=\\'rgba(45,184,249,1)\\' offset=\\'0.091146\\'/><stop stop-color=\\'rgba(21,173,250,1)\\' offset=\\'0.10417\\'/><stop stop-color=\\'rgba(11,138,227,1)\\' offset=\\'0.29688\\'/><stop stop-color=\\'rgba(1,102,204,1)\\' offset=\\'0.48958\\'/><stop stop-color=\\'rgba(1,81,165,1)\\' offset=\\'0.61719\\'/><stop stop-color=\\'rgba(1,60,125,1)\\' offset=\\'0.74479\\'/><stop stop-color=\\'rgba(2,38,86,1)\\' offset=\\'0.8724\\'/><stop stop-color=\\'rgba(2,17,47,1)\\' offset=\\'1\\'/></radialGradient></defs></svg>')",
              maskImage: `url('${imgChangeColor}'), url('${imgChangeColor1}')`,
            }}
          />
        </div>
      </div>
      <div
        className="absolute border border-[#6a92ff] border-solid inset-[39.86%_39.72%_39.86%_39.41%] overflow-clip rounded-[40px]"
        data-name="Button 2"
        data-node-id="1:146"
      >
        <div
          className="absolute bg-black inset-[-1px] opacity-0 rounded-[40px]"
          data-name="shadow"
          data-node-id="1:147"
        />
        <div
          className="-translate-x-1/2 -translate-y-1/2 absolute bg-black h-[56px] left-1/2 rounded-[40px] top-1/2 w-[134px]"
          data-name="background"
          data-node-id="1:148"
        />
        <p
          className="absolute font-[family-name:var(--font-dm-sans)] font-medium leading-[24px] left-[23px] text-[18px] text-white top-[15px] whitespace-nowrap"
          data-node-id="1:149"
          style={{ fontVariationSettings: "'opsz' 14" }}
        >
          Explore
        </p>
        <div
          className="absolute left-[89px] overflow-clip size-[20px] top-[17px]"
          data-name="Right"
          data-node-id="1:150"
        >
          <div
            className="absolute inset-[8.33%]"
            data-name="safearea"
            data-node-id="I1:150;21:1594"
          >
            <Image
              alt=""
              unoptimized
              width={2400}
              height={2400}
              className="absolute block max-w-none size-full"
              src={imgSafearea1}
            />
          </div>
        </div>
        <div className="absolute h-[31px] left-[22px] top-[39px] w-[88px]" data-node-id="1:151">
          <div className="absolute inset-[-45.16%_-15.91%]">
            <Image
              alt=""
              unoptimized
              width={2400}
              height={2400}
              className="block max-w-none size-full"
              src={imgEllipse3463}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
