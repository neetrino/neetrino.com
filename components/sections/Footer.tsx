"use client";

import Image from "next/image";
import Link from "next/link";
import { FIGMA_ASSETS } from "@/components/assets";

const companyLinks = [
  { href: "/about-us", label: "About" },
  { href: "/team", label: "Team" },
  { href: "/contact", label: "Contact us" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
] as const;

const serviceLinks = [
  { href: "/services/website", label: "Website" },
  { href: "/services/mobile-app", label: "Mobile App" },
  { href: "/services/crm", label: "CRM Systems" },
  { href: "/services/saas", label: "SAAS Platforms" },
  { href: "/services/ai", label: "AI integration" },
  { href: "/services", label: "All" },
] as const;

const socialLinks = [
  { href: "https://facebook.com", icon: FIGMA_ASSETS.imgSocialMediaIconSquareFacebook, label: "Facebook" },
  { href: "https://instagram.com", icon: FIGMA_ASSETS.imgSocialMediaIconSquareInstagram, label: "Instagram" },
  { href: "https://linkedin.com", icon: FIGMA_ASSETS.imgGroup73, label: "LinkedIn" },
  { href: "https://x.com", icon: FIGMA_ASSETS.imgGroup, label: "X" },
  { href: "https://youtube.com", icon: FIGMA_ASSETS.imgGroup74, label: "YouTube" },
  { href: "#", icon: FIGMA_ASSETS.imgVector6, label: "Social" },
  { href: "#", icon: FIGMA_ASSETS.imgVector7, label: "Social" },
] as const;

export function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-white/20 bg-[#151515] font-[family-name:var(--font-dm-sans)]"
      style={{ fontVariationSettings: "'opsz' 14" }}
    >
      <div className="section-container py-12 md:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-8 lg:grid-cols-4 lg:gap-8">
          {/* Company */}
          <div>
            <h3 className="text-xl font-bold text-white">Company</h3>
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

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold text-white">Services</h3>
            <ul className="mt-4 space-y-2">
              {serviceLinks.map(({ href, label }) => (
                <li key={href + label}>
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

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold text-white">Contact</h3>
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
                <Link
                  href="mailto:info@neetrino.com"
                  className="transition hover:text-gray-300"
                >
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

          {/* Message */}
          <div>
            <h3 className="text-xl font-bold text-white">Message us</h3>
            <p className="mt-3 text-lg font-normal leading-relaxed text-white/80">
              Step into the digital world with one message—our team will get back to you shortly.
            </p>
            <form
              className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center"
              onSubmit={(e) => e.preventDefault()}
            >
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
              {socialLinks.map(({ href, icon, label }, i) => (
                <Link
                  key={`social-${i}-${label}`}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center opacity-80 transition hover:opacity-100"
                  aria-label={label}
                >
                  <Image src={icon} alt="" width={24} height={24} className="h-6 w-6 object-contain" />
                </Link>
              ))}
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
