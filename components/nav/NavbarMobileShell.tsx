"use client";

import Link from "next/link";
import { useState } from "react";
import { useBodyScrollLock } from "@/lib/hooks/useBodyScrollLock";
import type { PrimaryNavLink } from "@/lib/nav-links";

type NavbarMobileShellProps = {
  links: readonly PrimaryNavLink[];
};

export function NavbarMobileShell({ links }: NavbarMobileShellProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  useBodyScrollLock(menuOpen);

  return (
    <>
      <button
        type="button"
        className="lg:hidden relative z-[60] flex size-9 min-[360px]:size-10 items-center justify-center rounded-full text-white"
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

      <div
        id="mobile-nav-overlay"
        className={`fixed inset-0 z-40 lg:hidden ${menuOpen ? "block" : "hidden"}`}
        aria-hidden={!menuOpen}
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-black/40"
          onClick={() => setMenuOpen(false)}
        />
        <div
          className="relative z-10 flex min-h-full flex-col bg-[#0f0f14]/95 backdrop-blur-xl px-6 pb-10 pt-24"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <nav className="flex flex-col gap-2">
            {links.map(({ label, href }) => (
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
        </div>
      </div>
    </>
  );
}
