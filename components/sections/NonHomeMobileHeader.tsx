"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FIGMA_ASSETS } from "@/components/assets";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About Us", href: "/about-us" },
  { label: "Contact", href: "/contact" },
] as const;

export function NonHomeMobileHeader({ className = "" }: { className?: string }) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <div className={className}>
      <header className="fixed inset-x-0 top-0 z-50 pt-2">
        <div className="mx-auto w-[calc(100%-16px)] max-w-[560px] rounded-full bg-white/15 px-3 py-2 backdrop-blur-xl">
          <div className="flex items-center justify-between gap-2">
            <Link href="/" className="relative h-8 w-[118px] shrink-0 min-[360px]:w-[132px]">
              <Image
                alt="Neetrino"
                unoptimized
                width={200}
                height={200}
                className="h-full w-full object-contain"
                src={FIGMA_ASSETS.imgNeetrinoItComapny2Png1}
                priority
              />
            </Link>
            <button
              type="button"
              aria-expanded={menuOpen}
              aria-controls="non-home-mobile-nav"
              className="inline-flex min-h-9 min-w-9 items-center justify-center rounded-full border border-white/20 px-3 text-sm font-semibold text-white"
              onClick={() => setMenuOpen((o) => !o)}
            >
              {menuOpen ? "Close" : "Menu"}
            </button>
          </div>
        </div>
      </header>

      <div
        id="non-home-mobile-nav"
        className={`fixed inset-0 z-40 ${menuOpen ? "block" : "hidden"}`}
        aria-hidden={!menuOpen}
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-black/45"
          onClick={() => setMenuOpen(false)}
        />
        <nav className="relative z-10 mt-20 mx-3 rounded-2xl border border-white/10 bg-[#0f0f14]/95 p-4 backdrop-blur-xl">
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="rounded-xl px-3 py-3 text-base font-semibold text-white transition hover:bg-white/10"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
}
