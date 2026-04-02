import Image from "next/image";
import Link from "next/link";
import { FIGMA_ASSETS } from "@/lib/figma-assets";
import { interSans } from "@/lib/fonts";
import {
  MOBILE_HERO_STAT_WIDE,
  MOBILE_HERO_STATS_TOP,
} from "@/components/sections/mobile-home-hero.constants";

function HeroBackground() {
  return (
    <>
      <div className="pointer-events-none absolute inset-0 z-0">
        <Image
          src={FIGMA_ASSETS.imgPhilippHubertDVVjhUcdb30Unsplash1}
          alt=""
          fill
          className="object-cover"
          style={{ transform: "scaleY(-1)" }}
          sizes="100vw"
          loading="eager"
        />
      </div>
      <div className="pointer-events-none absolute inset-0 z-[6] mix-blend-lighten opacity-60">
        <Image
          src={FIGMA_ASSETS.imgEricaAnderson1}
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          loading="lazy"
          unoptimized
        />
      </div>
    </>
  );
}

function HeroTitleBlock() {
  return (
    <div className="relative z-10 min-h-[360px] w-full text-left">
      <h1 className="relative z-30 max-w-[210px] pl-6 pr-2 pt-2 font-[family-name:var(--font-megatrox)] text-[clamp(3.1rem,15vw,5.2rem)] font-normal leading-[0.9] tracking-[-0.04em] text-[#fffcfc]">
        <span className="block">NEET</span>
        <span className="block">RIN</span>
        <span className="block">O</span>
      </h1>

      <div className="pointer-events-none absolute right-[-120px] top-[32px] z-[5] h-[min(78vh,680px)] w-[min(205vw,860px)] max-w-none">
        <div className="relative h-full w-full">
          <Image
            src={FIGMA_ASSETS.img30}
            alt=""
            fill
            className="object-contain object-right object-top"
            style={{ objectPosition: "88% 0%" }}
            sizes="(max-width: 768px) 205vw, 860px"
            priority
          />
        </div>
      </div>
    </div>
  );
}

function HeroBodyCopy() {
  return (
    <div className="relative z-30 mt-[10px] max-w-[170px] pl-6 text-left text-[15px] font-extralight leading-[21px] text-white">
      <p>We build</p>
      <p className="font-black">high-performance</p>
      <p>
        <span className="font-black">websites</span>
        <span> and digital solutions</span>
      </p>
      <p>that help</p>
      <p>businesses grow,</p>
      <p>scale, and stand</p>
      <p>out online.</p>
    </div>
  );
}

function HeroGradientStrip() {
  return (
    <div className="relative z-[15] mt-10 h-[min(42vw,249px)] w-full overflow-hidden">
      <Image
        src={FIGMA_ASSETS.imgRectangle17399}
        alt=""
        fill
        className="object-cover object-center rotate-180"
        sizes="100vw"
        loading="lazy"
      />
    </div>
  );
}

function HeroCtas() {
  const btn =
    "flex h-14 w-full items-center justify-center rounded-[28px] text-base font-extrabold transition-opacity hover:opacity-95";
  return (
    <div className="relative z-20 mt-6 flex w-full flex-col gap-2 px-6">
      <Link href="/contact" className={`${btn} bg-[#473dff] text-white`}>
        Get a Quote
      </Link>
      <Link href="/contact" className={`${btn} bg-white text-[#473dff]`}>
        Contact
      </Link>
    </div>
  );
}

function HeroStatsTop() {
  return (
    <div className="relative z-20 mt-10 grid grid-cols-2 gap-3 px-6">
      {MOBILE_HERO_STATS_TOP.map((item) => (
        <div
          key={item.value}
          className={`rounded-[39px] px-5 pb-6 pt-7 text-left ${item.bg} ${item.text}`}
        >
          <p className="text-[56px] font-black leading-9">{item.value}</p>
          <div className="mt-2 text-base font-extralight leading-[18px]">
            {item.labelLines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function HeroStatWide() {
  const s = MOBILE_HERO_STAT_WIDE;
  return (
    <div className="relative z-20 mt-3 min-h-[167px] w-full px-6">
      <div className={`relative overflow-hidden rounded-[39px] px-8 pb-8 pt-8 text-left ${s.bg}`}>
        <p className={`text-[56px] font-black leading-9 ${s.text}`}>{s.value}</p>
        <p className={`mt-1 text-base font-extralight ${s.text}`}>{s.label}</p>
        <div className="pointer-events-none absolute bottom-0 right-0 h-[min(52vw,224px)] w-[62%] max-w-[270px]">
          <div className="relative h-full w-full -scale-y-100 rotate-180">
            <Image
              src={FIGMA_ASSETS.img28A}
              alt=""
              fill
              className="object-contain object-bottom"
              sizes="(max-width: 768px) 62vw, 270px"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

/** Mobile home hero — matches Figma frame 241:821 (desktop uses NeetrinoHome canvas). */
export function HeroSection() {
  return (
    <section className={`relative overflow-hidden bg-[#151515] pb-10 ${interSans.className}`}>
      <HeroBackground />
      <div className="relative z-20 w-full pb-2 pt-14 text-left">
        <HeroTitleBlock />
        <HeroBodyCopy />
        <HeroGradientStrip />
        <HeroCtas />
        <HeroStatsTop />
        <HeroStatWide />
      </div>
    </section>
  );
}
