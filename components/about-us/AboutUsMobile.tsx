"use client";

import Image from "next/image";
import { DEFAULT_IMAGE_QUALITY } from "@/lib/image-defaults";
import {
  img02A0Ab86C3Fe4B8381Ab86B982Bb800C1,
  imgChatGptImageApr32026At011015Pm1,
  imgChatGptImageMar272026At064658Pm1,
  imgLayer1,
} from "@/lib/about-us-figma-asset-urls";

/**
 * Mobile/tablet (<lg) About Us layout. Mirrors the same content/order/CTA copy as the
 * Figma-pixel desktop blocks (`AboutUsFigmaBlock1a..3`) but renders it in normal flow
 * with responsive Tailwind utilities. Desktop layout is untouched (kept in `figma/`).
 */
export function AboutUsMobile() {
  return (
    <div className="lg:hidden">
      <div className="section-container max-w-[720px] pb-16">
        <HeroSection />
        <NeetrinoIntroSection />
        <MissionVisionSection />
        <WhyChooseUsSection />
        <ValuesSection />
        <CountriesSection />
        <BottomStatsSection />
      </div>
    </div>
  );
}

const HERO_PARAGRAPHS = [
  "Over the past 7 years, Neetrino IT has developed more than 400 online resources, ranging from simple websites to large-scale internet portals and e-commerce platforms.",
  "We specialize in website development, AI and bot solutions, CRM system integration, mobile app development, as well as SEO and SMM optimization—delivering a comprehensive digital presence for your business.",
] as const;

const HERO_STATS: ReadonlyArray<StatItem> = [
  { value: "450+", label: "Projects Delivered", gradient: GRADIENT_PURPLE() },
  { value: "6+", label: "Core Services", gradient: GRADIENT_ORANGE() },
  { value: "24/7", label: "Support Available", gradient: GRADIENT_GREEN_CYAN() },
];

const BOTTOM_STATS: ReadonlyArray<StatItem> = [
  { value: "380+", label: "Active Users", gradient: GRADIENT_PURPLE() },
  { value: "400+", label: "Projects Done", gradient: GRADIENT_ORANGE() },
  { value: "25+", label: "Members", gradient: GRADIENT_WHITE_PEACH() },
  { value: "8", label: "Years of Experience", gradient: GRADIENT_CYAN() },
];

const FEATURES: ReadonlyArray<readonly [string, string]> = [
  ["Fast and premium", "execution delivered in record time"],
  ["A selection of over", "100,000 design options"],
  ["Websites created 10 times", "faster than traditional methods"],
  ["24/7 technical support", "and free consultations"],
];

const VALUES: ReadonlyArray<string> = [
  "Love to work",
  "Transparency",
  "Continuous learning",
  "Respect for each other",
];

type StatItem = { value: string; label: string; gradient: string };

function GRADIENT_PURPLE(): string {
  return "linear-gradient(90deg, #473dff 0%, #6b5fff 100%)";
}
function GRADIENT_ORANGE(): string {
  return "linear-gradient(90deg, #ff7500 0%, #ff9500 100%)";
}
function GRADIENT_GREEN_CYAN(): string {
  return "linear-gradient(90deg, #73ff00 0%, #46ffe9 100%)";
}
function GRADIENT_WHITE_PEACH(): string {
  return "linear-gradient(180deg, #ffffff 0%, #ffd0a9 100%)";
}
function GRADIENT_CYAN(): string {
  return "linear-gradient(265deg, #acf0ff 22%, #00c6f3 85%)";
}

function HeroSection() {
  return (
    <section className="pt-2 pb-10 sm:pt-4 sm:pb-12">
      <h1 className="font-['Inter:Regular',sans-serif] text-[clamp(2.5rem,13vw,4.75rem)] uppercase tracking-tight text-white leading-[0.95]">
        <span className="block">
          With <span className="font-black italic">us</span>
        </span>
        <span className="block">every idea</span>
        <span className="block">becomes</span>
        <span className="block font-['Megatrox',sans-serif] font-normal not-italic tracking-normal">
          possible
        </span>
      </h1>
      <div className="mt-6 space-y-4 text-[15px] font-extralight leading-6 text-white/85 sm:text-base sm:leading-7">
        {HERO_PARAGRAPHS.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
      <StatsCard stats={HERO_STATS} className="mt-8" />
    </section>
  );
}

function StatsCard({ stats, className }: { stats: ReadonlyArray<StatItem>; className?: string }) {
  return (
    <div
      className={`grid grid-cols-1 gap-4 rounded-3xl border border-white/10 bg-[rgba(40,43,103,0.38)] p-5 backdrop-blur-md sm:grid-cols-3 sm:gap-3 sm:p-6 ${className ?? ""}`}
    >
      {stats.map((s) => (
        <div key={s.label} className="min-w-0 text-center">
          <p
            className="bg-clip-text text-4xl font-black leading-tight text-transparent sm:text-5xl"
            style={{ backgroundImage: s.gradient }}
          >
            {s.value}
          </p>
          <p className="mt-2 text-sm font-light text-[#99a1af]">{s.label}</p>
        </div>
      ))}
    </div>
  );
}

function NeetrinoIntroSection() {
  return (
    <section className="py-10">
      <p className="text-[15px] font-extralight leading-7 text-white/85 sm:text-base sm:leading-8">
        <span className="font-extrabold">Neetrino</span> is the first company to{" "}
        <span className="font-extrabold">offer website sales</span> through a Platform that provides
        access to <span className="font-extrabold">over 100,000</span> professional designs. Our
        Platform enables businesses to quickly and affordably create fully functional websites,
        perfectly tailored to <span className="font-extrabold">modern business needs</span>. We not
        only save you time and resources but also guarantee high quality, advanced functionality,
        and ongoing support—maximizing the efficiency and competitiveness of{" "}
        <span className="font-extrabold">your online presence</span>.
      </p>
    </section>
  );
}

function MissionVisionSection() {
  return (
    <section className="grid grid-cols-1 gap-8 py-10 sm:grid-cols-2 sm:gap-6">
      <article className="min-w-0">
        <SectionHeading>
          THE <span className="text-[#ff7500]">MISSION</span>
        </SectionHeading>
        <p className="mt-4 text-[15px] font-extralight leading-7 text-white/85">
          Our goal is to deliver fast, affordable, and high-quality digital solutions, empowering
          businesses to effortlessly build and expand their online presence, no matter how complex
          the project.
        </p>
      </article>
      <article className="min-w-0">
        <SectionHeading>
          THE <span className="text-[#ff7500]">VISION</span>
        </SectionHeading>
        <p className="mt-4 text-[15px] font-extralight leading-7 text-white/85">
          We envision a world where businesses of all sizes can effortlessly establish a strong
          digital presence using our fast, cutting-edge technological solutions. Our aim is to lead
          the transformation of website and app development, making these tools accessible to
          everyone, everywhere.
        </p>
      </article>
    </section>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-['Inter:Black_Italic',sans-serif] text-[clamp(1.5rem,6.5vw,2.125rem)] font-black italic uppercase leading-tight text-white">
      {children}
    </h2>
  );
}

function WhyChooseUsSection() {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 sm:p-7">
      <SectionHeading>
        WHY <span className="text-[#ff7500]">CHOOSE</span> US?
      </SectionHeading>
      <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
        {FEATURES.map(([line1, line2]) => (
          <div
            key={line1}
            className="rounded-2xl border border-white/8 bg-white/[0.02] p-4 text-[#f5f5f5]"
          >
            <p className="text-sm font-extrabold leading-snug">{line1}</p>
            <p className="text-sm font-extrabold leading-snug">{line2}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function ValuesSection() {
  return (
    <section className="py-10">
      <SectionHeading>
        THE <span className="text-[#ff7500]">VALUES</span> THAT ALWAYS DRIVE US
      </SectionHeading>
      <ul className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {VALUES.map((v) => (
          <li
            key={v}
            className="rounded-2xl border border-white/10 bg-white/[0.04] px-3 py-4 text-center text-sm font-extrabold leading-snug text-[#f5f5f5]"
          >
            {v}
          </li>
        ))}
      </ul>
      <ValueImagesRow />
    </section>
  );
}

function ValueImagesRow() {
  const images: ReadonlyArray<{ src: string; alt: string }> = [
    { src: imgChatGptImageMar272026At064658Pm1, alt: "" },
    { src: imgChatGptImageApr32026At011015Pm1, alt: "" },
    { src: img02A0Ab86C3Fe4B8381Ab86B982Bb800C1, alt: "" },
  ];
  return (
    <div className="mt-6 grid grid-cols-3 gap-3">
      {images.map((img, i) => (
        <div key={img.src} className="relative aspect-square overflow-hidden rounded-2xl">
          <Image
            alt={img.alt}
            src={img.src}
            fill
            sizes="(max-width: 640px) 33vw, 220px"
            className="object-cover"
            quality={DEFAULT_IMAGE_QUALITY}
            loading={i === 0 ? "eager" : "lazy"}
          />
        </div>
      ))}
    </div>
  );
}

function CountriesSection() {
  return (
    <section className="py-10">
      <h2 className="text-center font-['Inter:Black_Italic',sans-serif] text-[clamp(1.25rem,5.5vw,1.875rem)] font-black italic uppercase leading-tight text-white">
        WE WORK WITH MORE THAN <span className="text-[#ff7500]">10 COUNTRIES</span>
      </h2>
      <div className="relative mt-6 aspect-[1195/460] w-full overflow-hidden rounded-2xl">
        <Image
          alt="World map"
          src={imgLayer1}
          fill
          sizes="(max-width: 720px) 100vw, 720px"
          className="object-contain"
          quality={DEFAULT_IMAGE_QUALITY}
          loading="lazy"
        />
      </div>
    </section>
  );
}

function BottomStatsSection() {
  return (
    <section className="pt-6">
      <div className="grid grid-cols-2 gap-4 rounded-3xl border border-white/10 bg-white/[0.03] p-5 sm:grid-cols-4 sm:gap-3 sm:p-6">
        {BOTTOM_STATS.map((s) => (
          <div key={s.label} className="min-w-0 text-center">
            <p
              className="bg-clip-text text-4xl font-black leading-tight text-transparent sm:text-5xl"
              style={{ backgroundImage: s.gradient }}
            >
              {s.value}
            </p>
            <p className="mt-2 text-xs font-light text-[#99a1af] sm:text-sm">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
