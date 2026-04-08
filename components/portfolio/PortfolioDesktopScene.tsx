import Image from "next/image";
import Link from "next/link";
import { DeferredMount } from "@/components/layout/DeferredMount";
import { FigmaFillImage } from "@/components/shared/FigmaFillImage";
import { desktopPortfolioRows } from "@/components/portfolio/portfolio-data";
import { PortfolioDesktopStarRayDeferred } from "@/components/portfolio/PortfolioDesktopStarRayDeferred";
import { PortfolioDesktopVectorDecorDeferred } from "@/components/portfolio/PortfolioDesktopVectorDecorDeferred";
import * as figma from "@/components/portfolio/portfolio-figma-assets";
import { CanvasFooter } from "@/components/sections/Footer";
import { DEFAULT_IMAGE_QUALITY } from "@/lib/image-defaults";

function Group({ className }: { className?: string }) {
  const { imgChangeColor1, imgChangeColor, imgSafearea, imgEllipse3463 } = figma;
  return (
    <div className={className || "h-[276px] relative w-[642px]"} data-node-id="1:140">
      <div
        className="absolute inset-[-105.8%_-69%] opacity-0"
        data-name="光斑 flare"
        data-node-id="1:141"
      >
        <div className="absolute contents inset-0" data-name="glow" data-node-id="1:143">
          <div
            className="absolute inset-0 mask-position-[0px_0px,_0px_0px]"
            data-name="改变颜色 change color"
            data-node-id="1:145"
            style={{
              backgroundImage:
                "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1528 860\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(6.1295e-15 -43 76.4 2.3112e-13 764 430)\\'><stop stop-color=\\'rgba(211,255,248,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(164,235,248,1)\\' offset=\\'0.026042\\'/><stop stop-color=\\'rgba(116,214,249,1)\\' offset=\\'0.052083\\'/><stop stop-color=\\'rgba(68,194,249,1)\\' offset=\\'0.078125\\'/><stop stop-color=\\'rgba(45,184,249,1)\\' offset=\\'0.091146\\'/><stop stop-color=\\'rgba(21,173,250,1)\\' offset=\\'0.10417\\'/><stop stop-color=\\'rgba(11,138,227,1)\\' offset=\\'0.29688\\'/><stop stop-color=\\'rgba(1,102,204,1)\\' offset=\\'0.48958\\'/><stop stop-color=\\'rgba(1,81,165,1)\\' offset=\\'0.61719\\'/><stop stop-color=\\'rgba(1,60,125,1)\\' offset=\\'0.74479\\'/><stop stop-color=\\'rgba(2,38,86,1)\\' offset=\\'0.8724\\'/><stop stop-color=\\'rgba(2,17,47,1)\\' offset=\\'1\\'/></radialGradient></defs></svg>')",
              maskImage: `url('${imgChangeColor}'), url('${imgChangeColor1}')`,
            }}
          />
        </div>
      </div>
      <Link
        href="/portfolio"
        className="absolute border border-[#6a92ff] border-solid inset-[39.86%_39.72%_39.86%_39.41%] overflow-clip rounded-[40px] no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6a92ff]"
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
          className="absolute font-['DM_Sans:Medium',sans-serif] font-medium leading-[24px] left-[23px] text-[18px] text-white top-[15px] whitespace-nowrap"
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
            <FigmaFillImage src={imgSafearea} sizes="20px" />
          </div>
        </div>
        <div className="absolute h-[31px] left-[22px] top-[39px] w-[88px]" data-node-id="1:151">
          <div className="absolute inset-[-45.16%_-15.91%]">
            <FigmaFillImage src={imgEllipse3463} sizes="88px" />
          </div>
        </div>
      </Link>
    </div>
  );
}

function Button({ className }: { className?: string }) {
  const { imgSafearea1 } = figma;
  return (
    <div
      className={
        className ||
        "bg-white content-stretch flex gap-[4px] items-center justify-center overflow-clip px-[24px] py-[16px] relative rounded-[40px] size-[56px]"
      }
      data-node-id="166:1041"
    >
      <div
        className="absolute bg-[#46fff4] blur-[7.5px] inset-[69px_0_-103px_0] opacity-0 rounded-tl-[60px] rounded-tr-[60px]"
        data-name="glow"
        data-node-id="166:1042"
      />
      <div
        className="absolute bg-[#46fff4] blur-[7.5px] inset-[64px_0_-98px_0] opacity-0 rounded-tl-[60px] rounded-tr-[60px]"
        data-name="glow"
        data-node-id="166:1043"
      />
      <div
        className="overflow-clip relative shrink-0 size-[20px]"
        data-name="Right"
        data-node-id="166:1044"
      >
        <div
          className="absolute inset-[8.33%]"
          data-name="safearea"
          data-node-id="I166:1044;21:1594"
        >
          <FigmaFillImage src={imgSafearea1} sizes="20px" />
        </div>
      </div>
    </div>
  );
}

function PortfolioPlanet() {
  const { imgEllipse1, imgPngwing6 } = figma;
  return (
    <div
      className="-translate-x-1/2 absolute contents h-[2233.132px] left-[calc(50%+3586.51px)] mix-blend-hard-light top-[2816px] w-[2229.008px]"
      data-name="Planet"
      data-node-id="166:1204"
    >
      <div className="absolute flex h-[1513.932px] items-center justify-center left-[3526.05px] mix-blend-hard-light top-[3123.23px] w-[1554.175px]">
        <div className="flex-none rotate-[-8.02deg]">
          <div
            className="h-[1334.261px] opacity-40 relative w-[1381.565px]"
            data-node-id="166:1205"
          >
            <div className="absolute inset-[-1.5%_-1.45%]">
              <FigmaFillImage src={imgEllipse1} sizes="(max-width: 1536px) 90vw, 1382px" />
            </div>
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute flex h-[1885.436px] items-center justify-center left-[calc(50%+3586.51px)] mix-blend-hard-light top-[2989.85px] w-[1878.113px]">
        <div className="flex-none rotate-[-68.02deg]">
          <div
            className="h-[1439.104px] opacity-40 relative w-[1452.347px]"
            data-name="pngwing 6"
            data-node-id="166:1206"
          >
            <Image
              alt=""
              className="absolute block max-w-none size-full"
              height={1439}
              src={imgPngwing6}
              width={1452}
              quality={DEFAULT_IMAGE_QUALITY}
              sizes="(max-width: 1536px) 90vw, 1452px"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function PortfolioMoreCases() {
  return (
    <div
      className="absolute h-[1098px] left-0 overflow-clip top-[974px] w-[1440px]"
      data-name="more cases"
      data-node-id="166:1394"
    >
      {desktopPortfolioRows.map((row, rowIndex) => (
        <div
          key={`portfolio-row-${rowIndex}`}
          className="-translate-x-1/2 absolute content-stretch flex gap-[33px] items-center justify-center left-[calc(50%+0.5px)]"
          data-node-id={rowIndex === 0 ? "166:1395" : "166:1399"}
          style={{ top: rowIndex === 0 ? 254 : 605 }}
        >
          {row.map((image, imageIndex) => (
            <div
              key={`${rowIndex}-${imageIndex}-${image}`}
              className="relative h-[262px] shrink-0 w-[423px]"
              data-name={`Portfolio ${rowIndex + 1}-${imageIndex + 1}`}
            >
              <Image
                alt=""
                src={image}
                fill
                sizes="423px"
                quality={DEFAULT_IMAGE_QUALITY}
                className="object-cover pointer-events-none"
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>
      ))}
      <p
        className="absolute font-['Megatrox',sans-serif] leading-[normal] left-[calc(50%-635px)] not-italic text-[#fffcfc] text-[90px] top-[82px] whitespace-nowrap"
        data-node-id="166:1403"
      >
        MORE CASES
      </p>
    </div>
  );
}

export function PortfolioDesktopScene() {
  return (
    <div
      className="bg-[#151515] relative h-[2662px] w-[1440px]"
      data-name="PORTFOLIO"
      data-node-id="166:1203"
    >
      <DeferredMount topClassName="top-[2400px]" rootMargin="400px 0px 400px 0px">
        <PortfolioPlanet />
      </DeferredMount>
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
            <FigmaFillImage src={figma.imgEllipse27} />
          </div>
        </div>
        <div
          className="-translate-x-1/2 absolute bottom-[61.34%] left-[calc(50%+793.12px)] top-[-13.17%] w-[1047.338px]"
          data-node-id="166:1210"
        >
          <div className="absolute inset-[-52.12%_-48.95%]">
            <FigmaFillImage src={figma.imgEllipse28} />
          </div>
        </div>
        <PortfolioDesktopStarRayDeferred />
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
      <PortfolioDesktopVectorDecorDeferred />
      <div
        className="-translate-x-1/2 absolute h-[405px] left-[calc(50%+0.5px)] top-[1013px] w-[1437px]"
        data-node-id="166:1226"
      >
        <div className="absolute inset-[-50.95%_-15.66%_-51.42%_-15.66%]">
          <FigmaFillImage src={figma.imgRectangle17414} />
        </div>
      </div>
      <div
        className="-translate-x-1/2 absolute h-[405px] left-[calc(50%+0.5px)] top-[783px] w-[1437px]"
        data-node-id="166:1227"
      >
        <div className="absolute inset-[-50.95%_-15.66%_-51.42%_-15.66%]">
          <FigmaFillImage src={figma.imgRectangle17414} />
        </div>
      </div>
      <div
        className="-translate-x-1/2 absolute h-[405px] left-[calc(50%+10.5px)] top-[1436px] w-[1437px]"
        data-node-id="166:1228"
      >
        <div className="absolute inset-[-50.95%_-15.66%_-51.42%_-15.66%]">
          <FigmaFillImage src={figma.imgRectangle17414} />
        </div>
      </div>
      <div
        className="absolute content-stretch flex flex-col gap-[53px] items-start leading-[0] left-[73px] top-[374px] w-[1295px]"
        data-name="portfolio"
        data-node-id="166:1229"
      >
        <div
          className="content-stretch flex gap-[26px] items-center relative shrink-0 w-full"
          data-name="banners1"
          data-node-id="166:1230"
        >
          <div
            className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0"
            data-node-id="166:1231"
          >
            <div
              className="col-1 h-[409.177px] ml-0 mt-0 relative rounded-[35px] row-1 w-[631.601px]"
              data-name="-266 1"
              data-node-id="166:1232"
            >
              <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[35px]">
                <Image
                  alt=""
                  className="absolute h-[154.19%] left-0 max-w-none top-[-40.85%] w-full"
                  src={figma.img2661}
                  width={2400}
                  height={2400}
                  quality={DEFAULT_IMAGE_QUALITY}
                  sizes="632px"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="col-1 flex items-center justify-center ml-[535.86px] mt-[15.86px] relative row-1 size-[78.276px]">
              <div className="flex-none rotate-[-36.26deg]">
                <Button className="bg-white content-stretch flex gap-[4px] items-center justify-center overflow-clip px-[24px] py-[16px] relative rounded-[40px] size-[56px]" />
              </div>
            </div>
          </div>
          <div
            className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0"
            data-node-id="166:1234"
          >
            <div
              className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1"
              data-node-id="166:1235"
            >
              <div
                className="col-1 h-[409.177px] ml-0 mt-0 relative rounded-[31px] row-1 w-[636.026px]"
                data-name="biotech _ logo 1"
                data-node-id="166:1236"
              >
                <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[31px]">
                  <Image
                    alt=""
                    className="absolute h-[120.37%] left-[-1.69%] max-w-none top-[-13.55%] w-[103.37%]"
                    src={figma.imgBiotechLogo1}
                    width={2400}
                    height={2400}
                    quality={DEFAULT_IMAGE_QUALITY}
                    sizes="636px"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
            <div className="col-1 flex items-center justify-center ml-[543.03px] mt-[16px] relative row-1 size-[78.276px]">
              <div className="flex-none rotate-[-36.26deg]">
                <Button className="bg-white content-stretch flex gap-[4px] items-center justify-center overflow-clip px-[24px] py-[16px] relative rounded-[40px] size-[56px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Group className="-translate-x-1/2 absolute h-[276px] left-1/2 top-[759px] w-[642px]" />
      <div
        className="-translate-x-1/2 absolute h-[664px] left-[calc(50%-7.5px)] top-[2017px] w-[1437px]"
        data-node-id="166:1259"
      >
        <div className="absolute inset-[-28.94%_-15.66%_-29.47%_-15.66%]">
          <FigmaFillImage src={figma.imgRectangle17417} />
        </div>
      </div>
      <DeferredMount topClassName="top-[1980px]" rootMargin="280px 0px 280px 0px">
        <div className="absolute contents left-[597px] top-[2099px]" data-node-id="166:1260">
          <div
            className="absolute h-[563px] left-[597px] mix-blend-lighten opacity-70 top-[2102px] w-[633px]"
            data-name="10"
            data-node-id="166:1261"
          >
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <Image
                alt=""
                className="absolute h-[200.1%] left-0 max-w-none top-[-68.6%] w-full"
                src={figma.img10}
                width={2400}
                height={2400}
                quality={DEFAULT_IMAGE_QUALITY}
                sizes="633px"
                loading="lazy"
              />
            </div>
          </div>
          <div
            className="absolute h-[563px] left-[597px] opacity-70 top-[2099px] w-[633px]"
            data-name="101"
            data-node-id="166:1262"
          >
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <Image
                alt=""
                className="absolute h-[200.1%] left-0 max-w-none top-[-68.6%] w-full"
                src={figma.img10}
                width={2400}
                height={2400}
                quality={DEFAULT_IMAGE_QUALITY}
                sizes="633px"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </DeferredMount>
      <CanvasFooter className="left-[-3px] top-[2072px]" />
      <DeferredMount topClassName="top-[700px]" rootMargin="320px 0px 320px 0px">
        <PortfolioMoreCases />
      </DeferredMount>
    </div>
  );
}
