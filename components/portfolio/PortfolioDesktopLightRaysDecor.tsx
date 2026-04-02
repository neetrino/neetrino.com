"use client";

import { useEffect, useState } from "react";
import { SERVICES_LIGHT_RAYS_DECOR_IDLE_TIMEOUT_MS } from "@/lib/desktop-scene-mount.constants";
import * as figma from "@/components/portfolio/portfolio-figma-assets";

/**
 * Light rays + star + noise + title — deferred so the ~5MB star WebP does not block first paint.
 * (Asset is also resized/compressed on disk; see public/figma-assets/638bcc05-*.webp.)
 */
export function PortfolioDesktopLightRaysDecor() {
  const [showDecor, setShowDecor] = useState(false);

  useEffect(() => {
    let cancelled = false;
    let idleId: number | undefined;
    let fallbackTimer: number | undefined;

    const reveal = () => {
      if (!cancelled) {
        setShowDecor(true);
      }
    };

    if (typeof requestIdleCallback === "function") {
      idleId = requestIdleCallback(reveal, {
        timeout: SERVICES_LIGHT_RAYS_DECOR_IDLE_TIMEOUT_MS,
      });
    } else {
      fallbackTimer = window.setTimeout(reveal, 48) as unknown as number;
    }

    return () => {
      cancelled = true;
      if (idleId !== undefined && typeof cancelIdleCallback === "function") {
        cancelIdleCallback(idleId);
      }
      if (fallbackTimer !== undefined) {
        window.clearTimeout(fallbackTimer);
      }
    };
  }, []);

  if (!showDecor) {
    return null;
  }

  return (
    <div
      className="-translate-x-1/2 absolute h-[1898px] left-[calc(50%+1px)] overflow-clip top-0 w-[1438px]"
      data-name="Light Rays Effect"
      data-node-id="166:1208"
    >
      <div
        className="-translate-x-1/2 absolute bottom-[70.05%] left-[calc(50%+62.8px)] top-[-21.87%] w-[1047.338px]"
        data-node-id="166:1209"
      >
        <div className="absolute inset-[-52.12%_-48.95%]">
          <img
            alt=""
            className="block max-w-none size-full"
            src={figma.imgEllipse27}
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
      <div
        className="-translate-x-1/2 absolute bottom-[61.34%] left-[calc(50%+793.12px)] top-[-13.17%] w-[1047.338px]"
        data-node-id="166:1210"
      >
        <div className="absolute inset-[-52.12%_-48.95%]">
          <img
            alt=""
            className="block max-w-none size-full"
            src={figma.imgEllipse28}
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
      <div className="absolute flex h-[5878.103px] items-center justify-center left-[-797.93px] mix-blend-plus-lighter top-[-3956.96px] w-[5638.546px]">
        <div className="flex-none rotate-[24.39deg]">
          <div className="h-[4590.797px] relative w-[4109.595px]" data-node-id="166:1211">
            <div className="absolute inset-[-2.59%_-2.9%]">
              <img
                alt=""
                className="block max-w-none size-full"
                height={4829}
                src={figma.imgStar22}
                width={4348}
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute h-[1137px] left-0 mix-blend-soft-light opacity-58 top-0 w-[1758px]"
        data-name="Noise"
        data-node-id="166:1212"
      >
        <div
          aria-hidden="true"
          className="absolute bg-size-[1253.707855939865px_417.9026186466217px] bg-top-left inset-0 opacity-74 pointer-events-none"
          style={{ backgroundImage: `url('${figma.imgNoise}')` }}
        />
      </div>
      <p
        className="absolute font-['Megatrox',sans-serif] leading-[normal] left-[calc(50%-646px)] not-italic text-[#fffcfc] text-[90px] top-[152px] whitespace-nowrap"
        data-node-id="166:1213"
      >
        PORTFOLIO
      </p>
    </div>
  );
}
