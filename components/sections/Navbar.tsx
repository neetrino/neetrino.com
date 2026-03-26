"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FIGMA_ASSETS } from "@/components/assets";

const NAV_LINKS = [
  { label: "Home", href: "#" },
  { label: "Services", href: "#" },
  { label: "Portfolio", href: "#" },
  { label: "Story", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Contact", href: "#" },
] as const;

const navLinkClassName =
  "font-['Inter:Semi_Bold',sans-serif] font-semibold text-white text-sm lg:text-base whitespace-nowrap transition-opacity hover:opacity-80";

function PhoneIcon({ className }: { className?: string }) {
  return (
    <div className={`relative size-10 shrink-0 ${className ?? ""}`}>
      <Image
        alt=""
        unoptimized
        width={200}
        height={200}
        className="object-contain w-full h-full"
        src={FIGMA_ASSETS.imgGroup70642}
      />
      <div className="pointer-events-none absolute inset-0">
        <Image
          alt=""
          unoptimized
          width={200}
          height={200}
          className="object-contain w-full h-full"
          src={FIGMA_ASSETS.imgVector}
        />
      </div>
    </div>
  );
}

function LanguageSelector() {
  return (
    <button
      type="button"
      className="flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-[#1e1e1e] shadow-sm"
    >
      <span className="relative size-6 shrink-0">
        <Image
          alt=""
          unoptimized
          width={200}
          height={200}
          className="object-contain w-full h-full"
          src={FIGMA_ASSETS.imgGroup70643}
        />
        <div className="pointer-events-none absolute inset-0">
          <Image
            alt=""
            unoptimized
            width={200}
            height={200}
            className="object-contain w-full h-full"
            src={FIGMA_ASSETS.imgVector1}
          />
        </div>
      </span>
      <span className="font-['Inter:Semi_Bold',sans-serif]">ENG</span>
    </button>
  );
}

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-3 md:px-6 lg:px-8">
        <div className="max-w-[1400px] mx-auto rounded-full bg-white/15 backdrop-blur-xl px-4 md:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-between gap-3">
            <Link href="/" className="relative h-9 w-[120px] shrink-0 sm:w-[140px]">
              <Image
                alt=""
                unoptimized
                width={200}
                height={200}
                className="object-contain w-full h-full"
                src={FIGMA_ASSETS.imgNeetrinoItComapny2Png1}
                priority
              />
            </Link>

            <nav
              className="hidden md:flex flex-1 items-center justify-center gap-6 lg:gap-8 min-w-0"
              aria-label="Main"
            >
              {NAV_LINKS.map(({ label, href }) => (
                <Link key={label} href={href} className={navLinkClassName}>
                  {label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-2 sm:gap-3">
              <button
                type="button"
                className="md:hidden relative z-[60] flex size-10 items-center justify-center rounded-full text-white"
                aria-expanded={menuOpen}
                aria-controls="mobile-nav-overlay"
                onClick={() => setMenuOpen((o) => !o)}
              >
                <span className="sr-only">Toggle menu</span>
                <span className="flex w-6 flex-col gap-1.5">
                  <span
                    className={`block h-0.5 w-full rounded-full bg-white transition-transform ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
                  />
                  <span
                    className={`block h-0.5 w-full rounded-full bg-white transition-opacity ${menuOpen ? "opacity-0" : ""}`}
                  />
                  <span
                    className={`block h-0.5 w-full rounded-full bg-white transition-transform ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
                  />
                </span>
              </button>

              <button
                type="button"
                className="hidden md:inline-flex lg:inline-flex items-center justify-center rounded-full bg-[#473dff] px-5 py-2.5 font-['Inter:Semi_Bold',sans-serif] font-semibold text-sm lg:text-base text-white transition-opacity hover:opacity-90"
              >
                Get a Quote
              </button>

              <div className="hidden lg:block">
                <LanguageSelector />
              </div>

              <div className="md:hidden lg:block">
                <PhoneIcon />
              </div>
            </div>
          </div>
        </div>
      </header>

      <div
        id="mobile-nav-overlay"
        className={`fixed inset-0 z-40 md:hidden transition-transform duration-300 ease-out ${
          menuOpen ? "translate-y-0" : "-translate-y-full pointer-events-none"
        }`}
        aria-hidden={!menuOpen}
      >
        <div
          className="flex min-h-full flex-col bg-[#0f0f14]/95 backdrop-blur-xl px-6 pb-10 pt-24"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <nav className="flex flex-col gap-6">
            {NAV_LINKS.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className={`${navLinkClassName} text-lg`}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}
