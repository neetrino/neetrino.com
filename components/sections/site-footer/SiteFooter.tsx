import Image from "next/image";
import Link from "next/link";
import { FIGMA_ASSETS } from "@/lib/figma-assets";
import { cn } from "@/lib/utils";
import { companyLinks, serviceLinks } from "./footer-data";
import { FooterColumnTitle, FooterSocialRow } from "./FooterPrimitives";
import { FooterMessageForm } from "./FooterMessageForm";

export function Footer() {
  return (
    <footer
      id="contact"
      className={cn(
        "dm-sans-opsz-14 border-t border-white/20 bg-[#151515] font-[family-name:var(--font-dm-sans)]",
      )}
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
                <span className="whitespace-pre-line">
                  {"Working Hours\nMon. - Fri. 10AM - 7PM"}
                </span>
              </li>
            </ul>
          </div>

          <div>
            <FooterColumnTitle>Message us</FooterColumnTitle>
            <p className="mt-3 text-lg font-normal leading-relaxed text-white/80">
              Step into the digital world with one message. Our team will get back to you shortly.
            </p>
            <FooterMessageForm />
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
