import { CanvasScaler } from "@/components/CanvasScaler";
import Link from "next/link";
import { CanvasFooter, Footer } from "@/components/sections/Footer";
import { NonHomeMobileHeader } from "@/components/sections/NonHomeMobileHeader";
import portfolio3 from "../../Portfolio3.png";
import portfolio4 from "../../Portfolio4-1.png";
import portfolio6 from "../../Portfolio6.png";
import portfolio10 from "../../Portfolio10.png";
import portfolio14 from "../../Portfolio14.png";

const imgChangeColor1 = "/figma-assets/53371f6d-d157-4976-90d4-5fa4b36b2964.webp";
const imgChangeColor = "/figma-assets/fde0b065-eda1-4276-a20c-ac481a3f9738.svg";
const imgSafearea = "/figma-assets/0a975349-6cb5-426c-9105-122437f1f493.svg";
const imgEllipse3463 = "/figma-assets/3827d56e-88e4-4cc6-9474-52b88a6e0a79.svg";
const imgNeetrinoItComapny2Png1 = "/figma-assets/1afa9f81-036a-4bee-889b-ee12d55876da.webp";
const imgVector = "/figma-assets/a73bf0e5-771c-4bb2-831c-7a589c6a9fba.svg";
const imgSafearea1 = "/figma-assets/177d9223-da04-4cd8-877d-da701632ae99.svg";
const imgPngwing6 = "/figma-assets/ab2a4610-6b7a-4ce1-843b-12072e69deef.webp";
const imgStar22 = "/figma-assets/638bcc05-e40a-4ec9-9dbf-2e656be80829.webp";
const imgNoise = "/figma-assets/5aca0d4f-ece7-41f5-b9b3-19f21e3f757b.webp";
const img2661 = "/figma-assets/72e4c902-c44d-439a-9452-7b166ff7c459.webp";
const imgBiotechLogo1 = "/figma-assets/44bb3301-2f65-4c3e-a1ec-5af8255da89b.webp";
const img10 = "/figma-assets/93270034-139b-40d2-a8be-8fbf95885a44.webp";
const imgPortfolio161 = "/figma-assets/8be8e265-4992-454a-a827-fb48f745ca33.webp";
const imgEllipse1 = "/figma-assets/c7cc38b5-aa63-4300-8d2e-9c77ea8696d5.svg";
const imgEllipse27 = "/figma-assets/5d8398b8-e997-42f4-ad4c-a6b33e2942f5.svg";
const imgEllipse28 = "/figma-assets/d72a77f9-93d8-4afa-b3a0-0705a57074c7.svg";
const imgVector2 = "/figma-assets/983a9e42-87bb-4daa-9cdd-47e8a21b41e7.svg";
const imgLine734 = "/figma-assets/92168558-29fd-4a6c-bd9f-755a4f86ba1d.svg";
const imgLine735 = "/figma-assets/3e74d42e-97d3-4d09-b330-77bd54de2e80.svg";
const imgVector27397 = "/figma-assets/05792e50-c5ce-4389-82e8-5e21bf8228c4.svg";
const imgVector27398 = "/figma-assets/385a8388-8a45-4486-8dad-eb0883896f07.svg";
const imgRectangle240649642 = "/figma-assets/721b87b6-4181-4fcf-86be-431330b9b2f3.svg";
const imgRectangle240650146 = "/figma-assets/d741a9e6-79b7-4a26-8f99-33c2b857e3c4.svg";
const imgRectangle17414 = "/figma-assets/ff814312-4b7f-4ff6-91f0-db269f7fb8d5.svg";
const imgRectangle17417 = "/figma-assets/37b44c82-fc84-4532-91af-94ce4dc3bcff.svg";

const PORTFOLIO_CASE_IMAGES = [
  imgPortfolio161,
  portfolio3.src,
  portfolio4.src,
  portfolio6.src,
  portfolio10.src,
  portfolio14.src,
] as const;

const MOBILE_PORTFOLIO_ITEMS = [
  { title: "Landing Platform", image: img2661 },
  { title: "Biotech Identity", image: imgBiotechLogo1 },
  { title: "Portfolio Showcase", image: imgPortfolio161 },
  { title: "Product Campaign", image: portfolio3.src },
  { title: "Brand Story", image: portfolio4.src },
  { title: "Creative Launch", image: portfolio6.src },
  { title: "Visual System", image: portfolio10.src },
  { title: "Launch Experience", image: portfolio14.src },
] as const;

function Group({ className }: { className?: string }) {
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
            <img alt="" className="absolute block max-w-none size-full" src={imgSafearea} />
          </div>
        </div>
        <div className="absolute h-[31px] left-[22px] top-[39px] w-[88px]" data-node-id="1:151">
          <div className="absolute inset-[-45.16%_-15.91%]">
            <img alt="" className="block max-w-none size-full" src={imgEllipse3463} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Awwwards({ className }: { className?: string }) {
  return (
    <div
      className={
        className || "bg-[rgba(255,255,255,0.21)] h-[64px] relative rounded-[72px] w-[1240px]"
      }
      data-name="Awwwards"
      data-node-id="165:646"
    >
      <div
        className="-translate-x-1/2 absolute bg-[rgba(40,43,103,0.38)] h-[48px] left-[calc(50%-70px)] rounded-[28px] top-[8px] w-[798px]"
        data-name="Link [button]"
        data-node-id="165:647"
      >
        <div
          className="-translate-x-1/2 absolute content-stretch flex font-['Inter:Semi_Bold',sans-serif] font-semibold gap-[41px] items-center leading-[0] left-1/2 not-italic text-[16px] text-white top-[16px] whitespace-nowrap"
          data-node-id="165:648"
        >
          <Link
            className="flex flex-col justify-center relative shrink-0"
            data-node-id="165:649"
            href="/"
          >
            <p className="leading-[15.6px]">Home</p>
          </Link>
          <Link
            className="flex flex-col justify-center relative shrink-0"
            data-node-id="165:650"
            href="/services"
          >
            <p className="leading-[15.6px]">Services</p>
          </Link>
          <Link
            className="flex flex-col justify-center relative shrink-0"
            data-node-id="165:651"
            href="/portfolio"
          >
            <p className="leading-[15.6px]">Portfolio</p>
          </Link>
          <Link
            className="flex flex-col justify-center relative shrink-0"
            data-node-id="165:652"
            href="/about-us"
          >
            <p className="leading-[15.6px]">About Us</p>
          </Link>
          <Link
            className="flex flex-col justify-center relative shrink-0"
            data-node-id="165:654"
            href="/contact"
          >
            <p className="leading-[15.6px]">Contact</p>
          </Link>
        </div>
      </div>
      <Link
        href="/"
        aria-label="Go to home page"
        className="absolute h-[37px] left-[20px] top-[13px] w-[130px]"
        data-name="Neetrino-it-comapny-(2)png 1"
        data-node-id="165:657"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={imgNeetrinoItComapny2Png1}
        />
      </Link>
      <div
        className="absolute bg-white left-[1172px] rounded-full size-[48px] top-[8px]"
        data-node-id="165:658"
      >
        <div
          className="absolute left-[11px] size-[25px] top-[11px]"
          data-name="Vector"
          data-node-id="165:660"
        >
          <img alt="" className="absolute block max-w-none size-full" src={imgVector} />
        </div>
      </div>
    </div>
  );
}

function Button({ className }: { className?: string }) {
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
          <img alt="" className="absolute block max-w-none size-full" src={imgSafearea1} />
        </div>
      </div>
    </div>
  );
}

const desktopPortfolioRows = [
  PORTFOLIO_CASE_IMAGES.slice(0, 3),
  PORTFOLIO_CASE_IMAGES.slice(3),
] as const;

export default function Portfolio() {
  return (
    <>
      <div className="min-h-dvh w-full min-w-0 overflow-x-hidden bg-[#151515] lg:hidden">
        <NonHomeMobileHeader />
        <main className="section-container pt-24 pb-14">
          <section className="py-10">
            <p className="text-sm font-medium uppercase tracking-[0.12em] text-white/80">
              Portfolio
            </p>
            <h1 className="mt-3 font-['Megatrox',sans-serif] text-4xl leading-tight text-white">
              PORTFOLIO
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/75">
              A curated selection of digital products and interfaces delivered for growing
              businesses across different industries.
            </p>
          </section>

          <section className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2">
            {MOBILE_PORTFOLIO_ITEMS.map((item) => (
              <article
                key={item.title}
                className="min-w-0 overflow-hidden rounded-[24px] border border-white/12 bg-[#1a1a1a]"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <img
                    alt={item.title}
                    className="absolute inset-0 h-full w-full object-cover"
                    src={item.image}
                  />
                </div>
                <div className="p-4 sm:p-5">
                  <h2 className="text-lg font-semibold text-white">{item.title}</h2>
                  <Link
                    href="/contact"
                    className="mt-4 inline-flex items-center justify-center rounded-full bg-white px-4 py-2 text-sm font-medium text-[#252525]"
                  >
                    View case
                  </Link>
                </div>
              </article>
            ))}
          </section>
        </main>
        <Footer />
      </div>

      <div className="hidden lg:block">
        <CanvasScaler canvasWidth={1440} canvasHeight={2662}>
          <div
            className="bg-[#151515] relative h-[2662px] w-[1440px]"
            data-name="PORTFOLIO"
            data-node-id="166:1203"
          >
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
                    data-node-id="166:1206"
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
                  <img alt="" className="block max-w-none size-full" src={imgEllipse27} />
                </div>
              </div>
              <div
                className="-translate-x-1/2 absolute bottom-[61.34%] left-[calc(50%+793.12px)] top-[-13.17%] w-[1047.338px]"
                data-node-id="166:1210"
              >
                <div className="absolute inset-[-52.12%_-48.95%]">
                  <img alt="" className="block max-w-none size-full" src={imgEllipse28} />
                </div>
              </div>
              <div className="absolute flex h-[5878.103px] items-center justify-center left-[-797.93px] mix-blend-plus-lighter top-[-3956.96px] w-[5638.546px]">
                <div className="flex-none rotate-[24.39deg]">
                  <div className="h-[4590.797px] relative w-[4109.595px]" data-node-id="166:1211">
                    <div className="absolute inset-[-2.59%_-2.9%]">
                      <img
                        alt=""
                        className="block max-w-none size-full"
                        height="4828.797"
                        src={imgStar22}
                        width="4347.595"
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
                  style={{ backgroundImage: `url('${imgNoise}')` }}
                />
              </div>
              <p
                className="absolute font-['Megatrox',sans-serif] leading-[normal] left-[calc(50%-646px)] not-italic text-[#fffcfc] text-[90px] top-[152px] whitespace-nowrap"
                data-node-id="166:1213"
              >
                PORTFOLIO
              </p>
            </div>
            <div className="-translate-x-1/2 absolute flex h-[3723px] items-center justify-center left-[calc(50%-38px)] mix-blend-overlay top-[-40px] w-[1722px]">
              <div className="flex-none rotate-90">
                <div
                  className="h-[1722px] relative w-[3723px]"
                  data-name="Vector"
                  data-node-id="166:1214"
                >
                  <img alt="" className="absolute block max-w-none size-full" src={imgVector2} />
                </div>
              </div>
            </div>
            <div className="absolute contents left-[-20px] top-[-415px]" data-node-id="166:1215">
              <div
                className="absolute contents left-[952.53px] top-[-415px]"
                data-node-id="166:1216"
              >
                <div className="absolute flex h-[759.42px] items-center justify-center left-[973.17px] mix-blend-plus-lighter top-[-415px] w-0">
                  <div className="flex-none rotate-90">
                    <div className="h-0 relative w-[759.42px]" data-node-id="166:1217">
                      <div className="absolute inset-[-14.04px_-1.23%]">
                        <img alt="" className="block max-w-none size-full" src={imgLine734} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute flex h-[759.42px] items-center justify-center left-[973.17px] mix-blend-plus-lighter top-[-415px] w-0">
                  <div className="flex-none rotate-90">
                    <div className="h-0 relative w-[759.42px]" data-node-id="166:1218">
                      <div className="absolute inset-[-23.4px_-2.47%]">
                        <img alt="" className="block max-w-none size-full" src={imgLine735} />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="absolute bg-gradient-to-b blur-[35.104px] from-[rgba(255,255,255,0)] h-[759.42px] left-[952.53px] mix-blend-plus-lighter opacity-50 to-[#1797ff] top-[-415px] via-[#ff6613] via-[80%] w-[46.444px]"
                  data-node-id="166:1219"
                />
                <div
                  className="absolute bg-gradient-to-b blur-[15.212px] from-[rgba(255,255,255,0)] h-[759.42px] left-[952.53px] mix-blend-plus-lighter opacity-20 to-[#1797ff] top-[-415px] via-[#ff6613] via-[80%] w-[46.444px]"
                  data-node-id="166:1220"
                />
                <div
                  className="absolute bg-gradient-to-b blur-[24.573px] from-[rgba(255,255,255,0)] h-[759.42px] left-[952.53px] mix-blend-plus-lighter opacity-10 to-[#1797ff] top-[-415px] via-[#ff6613] via-[80%] w-[46.444px]"
                  data-node-id="166:1221"
                />
              </div>
              <div
                className="absolute h-[440.557px] left-[276.52px] mix-blend-plus-lighter top-[209.27px] w-[1119.172px]"
                data-node-id="166:1222"
              >
                <div className="absolute inset-[-20.19%_-7.95%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector27397} />
                </div>
              </div>
              <div
                className="absolute h-[435.5px] left-[78px] mix-blend-plus-lighter top-[176px] w-[1317.521px]"
                data-node-id="166:1223"
              >
                <div className="absolute inset-[-20.42%_-6.75%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector27398} />
                </div>
              </div>
              <div
                className="absolute h-[645.917px] left-[1084.12px] mix-blend-plus-lighter top-[339.74px] w-[341.879px]"
                data-node-id="166:1224"
              >
                <div className="absolute inset-[-21.01%_-39.7%]">
                  <img alt="" className="block max-w-none size-full" src={imgRectangle240649642} />
                </div>
              </div>
              <div className="absolute flex h-[645.917px] items-center justify-center left-[-20px] mix-blend-plus-lighter top-[288px] w-[341.879px]">
                <div className="-scale-y-100 flex-none rotate-180">
                  <div className="h-[645.917px] relative w-[341.879px]" data-node-id="166:1225">
                    <div className="absolute inset-[-21.01%_-39.7%]">
                      <img
                        alt=""
                        className="block max-w-none size-full"
                        src={imgRectangle240650146}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="-translate-x-1/2 absolute h-[405px] left-[calc(50%+0.5px)] top-[1013px] w-[1437px]"
              data-node-id="166:1226"
            >
              <div className="absolute inset-[-50.95%_-15.66%_-51.42%_-15.66%]">
                <img alt="" className="block max-w-none size-full" src={imgRectangle17414} />
              </div>
            </div>
            <div
              className="-translate-x-1/2 absolute h-[405px] left-[calc(50%+0.5px)] top-[783px] w-[1437px]"
              data-node-id="166:1227"
            >
              <div className="absolute inset-[-50.95%_-15.66%_-51.42%_-15.66%]">
                <img alt="" className="block max-w-none size-full" src={imgRectangle17414} />
              </div>
            </div>
            <div
              className="-translate-x-1/2 absolute h-[405px] left-[calc(50%+10.5px)] top-[1436px] w-[1437px]"
              data-node-id="166:1228"
            >
              <div className="absolute inset-[-50.95%_-15.66%_-51.42%_-15.66%]">
                <img alt="" className="block max-w-none size-full" src={imgRectangle17414} />
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
                      <img
                        alt=""
                        className="absolute h-[154.19%] left-0 max-w-none top-[-40.85%] w-full"
                        src={img2661}
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
                        <img
                          alt=""
                          className="absolute h-[120.37%] left-[-1.69%] max-w-none top-[-13.55%] w-[103.37%]"
                          src={imgBiotechLogo1}
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
            <Awwwards className="-translate-x-1/2 absolute bg-[rgba(255,255,255,0.21)] h-[64px] left-1/2 rounded-[72px] top-[27px] w-[1240px]" />
            <Group className="-translate-x-1/2 absolute h-[276px] left-1/2 top-[759px] w-[642px]" />
            <div
              className="-translate-x-1/2 absolute h-[664px] left-[calc(50%-7.5px)] top-[2017px] w-[1437px]"
              data-node-id="166:1259"
            >
              <div className="absolute inset-[-28.94%_-15.66%_-29.47%_-15.66%]">
                <img alt="" className="block max-w-none size-full" src={imgRectangle17417} />
              </div>
            </div>
            <div className="absolute contents left-[597px] top-[2099px]" data-node-id="166:1260">
              <div
                className="absolute h-[563px] left-[597px] mix-blend-lighten opacity-70 top-[2102px] w-[633px]"
                data-name="10"
                data-node-id="166:1261"
              >
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img
                    alt=""
                    className="absolute h-[200.1%] left-0 max-w-none top-[-68.6%] w-full"
                    src={img10}
                  />
                </div>
              </div>
              <div
                className="absolute h-[563px] left-[597px] opacity-70 top-[2099px] w-[633px]"
                data-name="101"
                data-node-id="166:1262"
              >
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img
                    alt=""
                    className="absolute h-[200.1%] left-0 max-w-none top-[-68.6%] w-full"
                    src={img10}
                  />
                </div>
              </div>
            </div>
            <CanvasFooter className="left-[-3px] top-[2072px]" />
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
                      key={image}
                      className="h-[262px] relative shrink-0 w-[423px]"
                      data-name={`Portfolio ${rowIndex + 1}-${imageIndex + 1}`}
                    >
                      <img
                        alt=""
                        className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
                        src={image}
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
          </div>
        </CanvasScaler>
      </div>
    </>
  );
}
