"use client";

import Image from "next/image";
import { imgAnimation, imgBody, imgDelete, imgScreen } from "./figma-assets";

export function MacBookPro({ className }: { className?: string }) {
  return (
    <div
      className={className || "h-[330px] relative w-[546px]"}
      data-name="MacBook Pro 14"
      data-node-id="76:534"
    >
      <div className="absolute contents inset-0" data-name="MacBook contents" data-node-id="76:535">
        <div
          className="absolute contents inset-[93.26%_0_0_0]"
          data-name="Body"
          data-node-id="76:536"
        >
          <div
            className="absolute inset-[93.26%_0_0_0] overflow-clip"
            data-name="Body"
            data-node-id="76:537"
          >
            <div className="absolute inset-[-44.96%_-0.6%_-1.53%_-1.05%]">
              <Image
                alt=""
                width={2400}
                height={2400}
                className="block max-w-none size-full"
                src={imgBody}
              />
            </div>
          </div>
        </div>
        <div
          className="absolute inset-[0_8.84%_6.74%_8.88%]"
          data-name="Screen"
          data-node-id="76:565"
        >
          <Image
            alt=""
            width={2400}
            height={2400}
            className="absolute block max-w-none size-full"
            src={imgScreen}
          />
        </div>
      </div>
      <div
        className="absolute contents left-[55.95px] top-[17px]"
        data-name="≡ƒƒó Design"
        data-node-id="48:498"
      >
        <div
          className="absolute contents left-[55.95px] top-[17px]"
          data-name="Design"
          data-node-id="48:500"
        >
          <div
            className="absolute h-[277.881px] left-[55.95px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[435.864px_276px] overflow-clip top-[17px] w-[435.864px]"
            data-name="Animation"
            data-node-id="48:501"
            style={{ maskImage: `url('${imgAnimation}')` }}
          >
            <div
              className="absolute bg-white inset-[0.25%_0_-603.98%_0] overflow-clip"
              data-node-id="I48:501;1107:319"
            >
              <div
                className="absolute inset-[0_-0.08%_0_0]"
                data-name="DELETE"
                data-node-id="I48:501;1107:319;1107:304"
              >
                <Image
                  alt=""
                  width={2400}
                  height={2400}
                  className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
                  src={imgDelete}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
