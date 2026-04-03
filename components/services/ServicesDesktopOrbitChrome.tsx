import { CanvasFooter } from "@/components/sections/Footer";
import { imgComponent21, imgEllipse1, imgPngwing6 } from "./services-assets";

export function ServicesDesktopOrbitChrome() {
  return (
    <>
      <div
        className="-translate-x-1/2 absolute contents h-[2233.132px] left-[calc(50%+3586.51px)] mix-blend-hard-light top-[2816px] w-[2229.008px]"
        data-name="Planet"
        data-node-id="165:696"
      >
        <div className="absolute flex h-[1513.932px] items-center justify-center left-[3526.05px] mix-blend-hard-light top-[3123.23px] w-[1554.175px]">
          <div className="flex-none rotate-[-8.02deg]">
            <div
              className="h-[1334.261px] opacity-40 relative w-[1381.565px]"
              data-node-id="165:697"
            >
              <div className="absolute inset-[-1.5%_-1.45%]">
                <img alt="" className="block max-w-none size-full" src={imgEllipse1} />
              </div>
            </div>
          </div>
        </div>
        <div className="-translate-x-1/2 absolute flex h-[1885.436px] items-center justify-center left-[calc(50%+3586.51px)] mix-blend-hard-light top-[2989.85px] w-[1878.113px]">
          <div className="flex-none rotate-[-68.02deg]">
            <div
              className="h-[1439.104px] opacity-40 relative w-[1452.347px]"
              data-name="pngwing 6"
              data-node-id="165:698"
            >
              <img
                alt=""
                className="absolute block max-w-none size-full"
                height="1439.104"
                src={imgPngwing6}
                width="1452.347"
              />
            </div>
          </div>
        </div>
      </div>
      <CanvasFooter className="left-0 top-[1584px]" />
      <div
        className="pointer-events-none absolute inset-[-30.68%_-197.36%_118.77%_150.21%]"
        data-name="Component 21"
        data-node-id="165:832"
      >
        <img alt="" className="absolute block max-w-none size-full" src={imgComponent21} />
      </div>
    </>
  );
}
