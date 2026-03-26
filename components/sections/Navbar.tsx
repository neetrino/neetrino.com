"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
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

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 pt-2">
        <div className="w-[calc(100%-24px)] md:w-[calc(100%-40px)] lg:w-[calc(100%-56px)] max-w-[1120px] mx-auto rounded-full bg-white/15 backdrop-blur-xl pl-4 pr-1 md:pl-5 md:pr-1 lg:pl-5 lg:pr-1 py-2.5">
          <div className="flex items-center justify-between gap-3 md:grid md:grid-cols-[190px_1fr_auto] md:gap-4 lg:grid-cols-[210px_1fr_auto]">
            <Link href="/" className="relative h-9 w-[150px] shrink-0 sm:w-[170px] md:w-[190px] lg:w-[210px]">
              <Image
                alt="Neetrino"
                unoptimized
                width={200}
                height={200}
                className="object-contain w-full h-full"
                src={FIGMA_ASSETS.imgNeetrinoItComapny2Png1}
                priority
              />
            </Link>

            <nav
              className="hidden md:flex items-center justify-center gap-5 lg:gap-6 min-w-0"
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
                    className={`block h-0.5 w-full rounded-full bg-white transition-transform duration-300 ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
                  />
                  <span
                    className={`block h-0.5 w-full rounded-full bg-white transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`}
                  />
                  <span
                    className={`block h-0.5 w-full rounded-full bg-white transition-transform duration-300 ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
                  />
                </span>
              </button>

              <button
                type="button"
                className="inline-flex items-center justify-center rounded-full bg-[#473dff] px-5 py-2.5 font-['Inter:Semi_Bold',sans-serif] font-semibold text-sm lg:text-base text-white transition-opacity hover:opacity-90"
              >
                Get a Quote
              </button>

              <div className="hidden md:block lg:block">
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
          <nav className="flex flex-col gap-2">
            {NAV_LINKS.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="py-3 text-xl font-semibold text-white transition-opacity hover:opacity-70 active:opacity-50"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="mt-8 flex flex-col gap-4">
            <button
              type="button"
              className="w-full rounded-full bg-[#473dff] py-4 text-base font-semibold text-white transition-opacity hover:opacity-90"
            >
              Get a Quote
            </button>
            <div className="flex items-center gap-3 text-white/70">
              <PhoneIcon />
              <span className="text-sm">+374 44 343 000</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
