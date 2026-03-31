"use client";

import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { FIGMA_ASSETS } from "@/components/assets";
import { CONTACT_SOCIALS } from "@/app/contact/content";
import { cn } from "@/lib/utils";

const companyLinks = [
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about-us", label: "About Us" },
  { href: "/contact", label: "Contact" },
] as const;

const serviceLinks = [
  { href: "/services", label: "Website" },
  { href: "/services", label: "Mobile App" },
  { href: "/services", label: "CRM Systems" },
  { href: "/services", label: "SAAS Platforms" },
  { href: "/services", label: "AI integration" },
  { href: "/services", label: "All" },
] as const;

const contactSocialHrefByLabel = Object.fromEntries(
  CONTACT_SOCIALS.map(({ label, href }) => [label, href])
) as Record<string, string>;

const socialLinks = [
  {
    href: contactSocialHrefByLabel.Facebook,
    icon: FIGMA_ASSETS.imgSocialMediaIconSquareFacebook,
    label: "Facebook",
  },
  {
    href: contactSocialHrefByLabel.Instagram,
    icon: FIGMA_ASSETS.imgSocialMediaIconSquareInstagram,
    label: "Instagram",
  },
  {
    href: contactSocialHrefByLabel.LinkedIn,
    icon: FIGMA_ASSETS.imgGroup73,
    label: "LinkedIn",
  },
  {
    href: contactSocialHrefByLabel.Telegram,
    icon: FIGMA_ASSETS.imgGroup,
    label: "Telegram",
  },
  {
    href: contactSocialHrefByLabel.WhatsApp,
    icon: FIGMA_ASSETS.imgGroup74,
    label: "WhatsApp",
  },
  {
    href: contactSocialHrefByLabel.Viber,
    icon: FIGMA_ASSETS.imgVector6,
    label: "Viber",
  },
] as const;

function FooterColumnTitle({ children }: { children: ReactNode }) {
  return (
    <p
      className="font-[family-name:var(--font-dm-sans)] text-[20px] font-bold leading-[22px] text-white"
      style={{ fontVariationSettings: "'opsz' 14" }}
    >
      {children}
    </p>
  );
}

function FooterSocialRow({ iconSize = 24 }: { iconSize?: number }) {
  return (
    <div className="flex flex-wrap items-center gap-4">
      {socialLinks.map(({ href, icon, label }, index) => (
        <Link
          key={`${label}-${index}`}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="opacity-80 transition hover:opacity-100"
        >
          <Image
            src={icon}
            alt=""
            width={iconSize}
            height={iconSize}
            className="object-contain"
          />
        </Link>
      ))}
    </div>
  );
}

export function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-white/20 bg-[#151515] font-[family-name:var(--font-dm-sans)]"
      style={{ fontVariationSettings: "'opsz' 14" }}
    >
      <div className="section-container py-12 md:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-8 lg:grid-cols-4 lg:gap-8">
          <div>
            <FooterColumnTitle>Menu</FooterColumnTitle>
            <ul className="mt-4 space-y-2">
              {companyLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-lg font-normal text-white transition hover:text-gray-300"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <FooterColumnTitle>Services</FooterColumnTitle>
            <ul className="mt-4 space-y-2">
              {serviceLinks.map(({ href, label }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="pointer-events-auto text-lg font-normal text-white transition hover:text-gray-300"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <FooterColumnTitle>Contact</FooterColumnTitle>
            <ul className="mt-4 space-y-4 text-lg font-normal text-white">
              <li className="flex gap-3">
                <Image
                  src={FIGMA_ASSETS.imgVector3}
                  alt=""
                  width={20}
                  height={20}
                  className="mt-0.5 h-5 w-5 shrink-0 object-contain"
                />
                <span>108/10 Andranik Zoravar St.</span>
              </li>
              <li className="flex gap-3">
                <Image
                  src={FIGMA_ASSETS.imgVector4}
                  alt=""
                  width={20}
                  height={20}
                  className="mt-0.5 h-5 w-5 shrink-0 object-contain"
                />
                <Link href="mailto:info@neetrino.com" className="transition hover:text-gray-300">
                  info@neetrino.com
                </Link>
              </li>
              <li className="flex gap-3">
                <Image
                  src={FIGMA_ASSETS.imgVector5}
                  alt=""
                  width={20}
                  height={20}
                  className="mt-0.5 h-5 w-5 shrink-0 object-contain"
                />
                <Link href="tel:+37444343000" className="transition hover:text-gray-300">
                  +374 44 343 000
                </Link>
              </li>
              <li className="flex gap-3">
                <Image
                  src={FIGMA_ASSETS.imgGroup2087329580}
                  alt=""
                  width={20}
                  height={20}
                  className="mt-0.5 h-5 w-5 shrink-0 object-contain"
                />
                <span className="whitespace-pre-line">{"Working Hours\nMon. - Fri. 10AM - 7PM"}</span>
              </li>
            </ul>
          </div>

          <div>
            <FooterColumnTitle>Message us</FooterColumnTitle>
            <p className="mt-3 text-lg font-normal leading-relaxed text-white/80">
              Step into the digital world with one message. Our team will get back to you shortly.
            </p>
            <form className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center" onSubmit={(event) => event.preventDefault()}>
              <label htmlFor="footer-message" className="sr-only">
                Your message
              </label>
              <input
                id="footer-message"
                type="text"
                name="message"
                placeholder="Enter your message"
                className="min-h-12 w-full flex-1 rounded-full border-0 bg-white px-5 py-3 text-[#151515] placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#4a3aff]"
              />
              <button
                type="submit"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#4a3aff] px-6 py-3 text-white transition hover:bg-[#3d2fe0]"
              >
                <span>Send</span>
                <Image
                  src={FIGMA_ASSETS.imgGroup221}
                  alt=""
                  width={20}
                  height={20}
                  className="h-5 w-5 object-contain"
                />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t border-white/20 pt-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <FooterSocialRow />
            </div>
            <p className="text-center text-sm text-white/70 lg:text-right">
              Copyright © 2017 - 2026 Neetrino IT Company. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

type CanvasFooterProps = {
  className?: string;
};

export function CanvasFooter({ className }: CanvasFooterProps) {
  return (
    <div
      id="contact"
      className={cn("absolute h-[590px] overflow-clip w-[1440px]", className)}
      data-name="Footer v2"
    >
      <div className="absolute h-0 left-[99px] top-[497.76px] w-[1241px]">
        <div className="absolute inset-[0_0_-1px_0]">
          <Image
            alt=""
            unoptimized
            width={2400}
            height={2400}
            className="block max-w-none size-full"
            src={FIGMA_ASSETS.imgFooterBottom}
          />
        </div>
      </div>
      <div className="absolute h-0 left-0 top-[1.24px] w-[1440px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <Image
            alt=""
            unoptimized
            width={2400}
            height={2400}
            className="block max-w-none size-full"
            src={FIGMA_ASSETS.imgLine135}
          />
        </div>
      </div>

      <div className="absolute left-[69px] top-[116px] z-[2] flex gap-[94px]">
        <div className="flex w-[114.275px] flex-col gap-[40px]">
          <FooterColumnTitle>Menu</FooterColumnTitle>
          <div className="flex flex-col gap-[18px]">
            {companyLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="font-[family-name:var(--font-dm-sans)] text-[18px] font-normal leading-[20px] text-white"
                style={{ fontVariationSettings: "'opsz' 14" }}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex w-[130.078px] flex-col gap-[40px]">
          <FooterColumnTitle>Services</FooterColumnTitle>
          <div className="flex flex-col gap-[18px]">
            {serviceLinks.map(({ href, label }) => (
              <Link
                key={label}
                href={href}
                className="pointer-events-auto font-[family-name:var(--font-dm-sans)] text-[18px] font-normal leading-[20px] text-white"
                style={{ fontVariationSettings: "'opsz' 14" }}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex w-[244px] flex-col gap-[40px]">
          <FooterColumnTitle>Contact</FooterColumnTitle>
          <div className="flex flex-col gap-[18px]">
            <div className="flex items-center gap-[6px] text-white">
              <Image src={FIGMA_ASSETS.imgVector3} alt="" width={14} height={18} className="h-[18px] w-[14px]" />
              <p
                className="font-[family-name:var(--font-dm-sans)] text-[18px] font-normal leading-[20px]"
                style={{ fontVariationSettings: "'opsz' 14" }}
              >
                108/10 Andranik Zoravar St.
              </p>
            </div>
            <div className="flex items-center gap-[9px] text-white">
              <Image src={FIGMA_ASSETS.imgVector4} alt="" width={20} height={15} className="h-[15px] w-[20px]" />
              <Link
                href="mailto:info@neetrino.com"
                className="font-[family-name:var(--font-dm-sans)] text-[18px] font-normal leading-[20px]"
                style={{ fontVariationSettings: "'opsz' 14" }}
              >
                info@neetrino.com
              </Link>
            </div>
            <div className="flex items-center gap-[9px] text-white">
              <Image src={FIGMA_ASSETS.imgVector5} alt="" width={18} height={18} className="size-[18px]" />
              <Link
                href="tel:+37444343000"
                className="font-[family-name:var(--font-dm-sans)] text-[16px] font-normal leading-[18px]"
                style={{ fontVariationSettings: "'opsz' 14" }}
              >
                +374 44 343 000
              </Link>
            </div>
            <div className="flex items-start gap-[9px] text-white">
              <Image
                src={FIGMA_ASSETS.imgGroup2087329580}
                alt=""
                width={21.5}
                height={21}
                className="h-[21px] w-[21.5px]"
              />
              <p
                className="whitespace-pre font-[family-name:var(--font-dm-sans)] text-[16px] font-medium leading-[22px]"
                style={{ fontVariationSettings: "'opsz' 14" }}
              >
                {"Working Hours\nMon. - Fri. 10AM - 7PM"}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute left-[902.57px] top-[116.02px] w-[436.431px]">
        <div className="flex w-[436px] flex-col gap-[24px]">
          <div className="flex flex-col gap-[10px]">
            <FooterColumnTitle>Message us</FooterColumnTitle>
            <p
              className="w-[358.364px] font-[family-name:var(--font-dm-sans)] text-[18px] font-normal leading-[30px] text-[#dcd5d5]"
              style={{ fontVariationSettings: "'opsz' 14" }}
            >
              Step into the digital world with one message, powered by Neetrino.
            </p>
          </div>
          <div className="h-[68px] w-full rounded-[108px] border border-[#d9dbe9] bg-white shadow-[0px_2px_12px_0px_rgba(20,20,43,0.08)]">
            <div className="ml-[23px] mt-[25px]">
              <p
                className="font-[family-name:var(--font-dm-sans)] text-[16px] font-normal leading-[18px] text-[#dcd5d5]"
                style={{ fontVariationSettings: "'opsz' 14" }}
              >
                Enter your message
              </p>
            </div>
          </div>
          <button className="relative h-[56px] w-[120px] rounded-[35px] bg-[#4a3aff]">
            <span className="absolute left-[18px] top-[16px] font-['Poppins:Regular',sans-serif] text-[16px] leading-[24px] text-white">
              Send
            </span>
            <div className="absolute left-[71px] top-[7px] size-[42px]">
              <Image
                src={FIGMA_ASSETS.imgGroup221}
                alt=""
                width={42}
                height={42}
                className="block size-full"
              />
            </div>
          </button>
        </div>
      </div>

      <div className="absolute left-[1075px] top-[527px]">
        <FooterSocialRow iconSize={20} />
      </div>

      <p
        className="absolute left-[110px] top-[536.01px] font-[family-name:var(--font-dm-sans)] text-[18px] font-normal leading-[20px] whitespace-nowrap text-[#dcd5d5]"
        style={{ fontVariationSettings: "'opsz' 14" }}
      >
        Copyright © 2017 - 2026 Neetrino IT Company. All Rights Reserved.
      </p>
    </div>
  );
}
