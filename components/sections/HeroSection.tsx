import Image from "next/image";
import Link from "next/link";
import { HeroGetQuoteCta } from "@/components/sections/HeroGetQuoteCta";
import { FIGMA_ASSETS } from "@/lib/figma-assets";
import { DEFAULT_IMAGE_QUALITY, HERO_IMAGE_QUALITY } from "@/lib/image-defaults";
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
          quality={HERO_IMAGE_QUALITY}
          loading="eager"
          priority
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

/**
 * Figma 241:827–828 — absolute title + robot (fixed px match 393px frame; no vh min-height).
 */
function HeroTitleAndRobot() {
  return (
    <>
      {/* Min left 24px — see MOBILE_HERO_TITLE_MIN_INSET_PX; keeps megatrox title off the edge on narrow viewports. */}
      <h1 className="absolute left-[max(24px,calc(50%-191px))] top-[66px] z-30 max-w-[260px] font-[family-name:var(--font-megatrox)] text-[91px] font-normal leading-[78px] tracking-[-0.04em] text-[#fffcfc]">
        <span className="block">NEET</span>
        <span className="block">RIN</span>
        <span className="block">O</span>
      </h1>

      <div className="pointer-events-none absolute left-[calc(50%+207px)] top-[61px] z-[1] h-[759px] w-[576px] max-w-[min(576px,148vw)] -translate-x-1/2 overflow-hidden">
        <div className="relative h-full w-full">
          {/* Figma 241:828 — crop inside 576×759 */}
          <Image
            src={FIGMA_ASSETS.img30}
            alt=""
            width={836}
            height={1491}
            priority
            quality={HERO_IMAGE_QUALITY}
            className="absolute left-[-22.58%] top-[-60.36%] h-[196.49%] w-[145.15%] max-w-none object-cover"
            sizes="576px"
          />
        </div>
      </div>
    </>
  );
}

/** Figma 241:840 — vertical center at Y=549 (frame); inner top = 461px with -translate-y-1/2. */
function HeroBodyCopy() {
  return (
    <div className="absolute left-6 top-[461px] z-30 flex h-[200px] w-[227px] -translate-y-1/2 flex-col justify-center text-left text-base font-extralight leading-[23px] text-white">
      <p>We build</p>
      <p className="font-black">high-performance </p>
      <p className="mb-0">
        <span className="font-black">websites</span>
        <span> </span>
      </p>
      <p>and digital solutions</p>
      <p>that help</p>
      <p>businesses grow,</p>
      <p>scale, and stand</p>
      <p>out online.</p>
    </div>
  );
}

function HeroCtas() {
  const baseLink =
    "absolute left-1/2 z-[25] flex h-14 w-[min(393px,calc(100%-48px))] -translate-x-1/2 items-center justify-center rounded-[28px] text-base font-extrabold transition-opacity hover:opacity-95";

  /** Frosted glass: strong backdrop blur; label stays sharp on a separate layer. */
  const glassLayer =
    "pointer-events-none absolute inset-0 rounded-[28px] backdrop-blur-3xl backdrop-saturate-150";

  return (
    <>
      <HeroGetQuoteCta />
      <Link
        href="/contact"
        className={`${baseLink} top-[761px] isolate text-[#473dff] shadow-lg shadow-black/15`}
      >
        <span className={`${glassLayer} border border-white/55 bg-white/14`} aria-hidden />
        <span className="relative z-10">Contact</span>
      </Link>
    </>
  );
}

function HeroStatsTop() {
  return (
    <div className="relative z-20 mt-0 grid grid-cols-2 gap-3 px-6">
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
    <div className="relative z-20 mt-[34px] min-h-[167px] w-full px-6">
      <div className={`relative overflow-visible rounded-[39px] px-8 pb-8 pt-8 text-left ${s.bg}`}>
        <div className="relative z-[2] max-w-[56%]">
          <p className={`text-[56px] font-black leading-9 ${s.text}`}>{s.value}</p>
          <p className={`mt-1 text-base font-extralight ${s.text}`}>{s.label}</p>
        </div>
        <div
          className="pointer-events-none absolute top-[42%] z-[1] h-[328px] w-[310px] -translate-y-1/2 -right-[48px] max-[380px]:top-[40%] max-[380px]:h-[288px] max-[380px]:w-[268px] max-[380px]:-right-10"
          aria-hidden
        >
          <div className="relative size-full">
            <div className="absolute inset-0 -scale-y-100 rotate-180">
              <Image
                src={FIGMA_ASSETS.img28A}
                alt=""
                fill
                className="object-contain object-[right_center]"
                sizes="(max-width: 768px) 310px, 310px"
                quality={DEFAULT_IMAGE_QUALITY}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Mobile home hero — Figma 241:821 absolute layout (Y / padding vs frame in mobile-home-hero.constants).
 * `min-h-[853px]` positions flow stats at frame Y=941 (88 + 853).
 */
/** Blur panel: top edge aligned with first CTA (pt-[88px] + top-[693px]) — no empty frosted strip above buttons. */
const HERO_LOWER_BLUR_TOP = "top-[calc(88px+660px)]";
const HERO_LOWER_BLUR_RADIUS = "rounded-[32px]";

export function HeroSection() {
  return (
    <section
      className={`relative min-w-0 overflow-x-hidden bg-[#151515] pb-10 ${interSans.className}`}
    >
      <HeroBackground />
      <div className="relative z-20 mx-auto w-full max-w-[393px] pt-[88px] text-left">
        <div
          className={`pointer-events-none absolute inset-x-0 ${HERO_LOWER_BLUR_TOP} bottom-0 z-[16] ${HERO_LOWER_BLUR_RADIUS} bg-[#151515]/30 backdrop-blur-2xl backdrop-saturate-150`}
          aria-hidden
        />
        <div className="relative min-h-[853px] w-full">
          <HeroTitleAndRobot />
          <HeroBodyCopy />
          <HeroCtas />
        </div>
        <HeroStatsTop />
        <HeroStatWide />
      </div>
    </section>
  );
}
