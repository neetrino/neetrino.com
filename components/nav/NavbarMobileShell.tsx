"use client";

import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useBodyScrollLock } from "@/lib/hooks/useBodyScrollLock";
import type { NavItem } from "@/lib/nav-links";
import { cn } from "@/lib/utils";

type NavbarMobileShellProps = {
  links: readonly NavItem[];
};

export function NavbarMobileShell({ links }: NavbarMobileShellProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openGroupLabel, setOpenGroupLabel] = useState<string | null>(null);
  useBodyScrollLock(menuOpen);

  const closeMenu = () => {
    setMenuOpen(false);
    setOpenGroupLabel(null);
  };

  const toggleGroup = (label: string) => {
    setOpenGroupLabel((prev) => (prev === label ? null : label));
  };

  return (
    <>
      <button
        type="button"
        className="lg:hidden relative z-[60] flex size-9 min-[360px]:size-10 items-center justify-center rounded-full text-white"
        aria-expanded={menuOpen}
        aria-controls="mobile-nav-overlay"
        onClick={() => {
          if (menuOpen) {
            closeMenu();
          } else {
            setMenuOpen(true);
          }
        }}
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
        <div aria-hidden="true" className="absolute inset-0 bg-black/40" onClick={closeMenu} />
        <div
          className="relative z-10 flex min-h-full flex-col bg-[#0f0f14]/95 backdrop-blur-xl px-6 pb-10 pt-24"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <nav className="flex flex-col gap-2">
            {links.map((item) =>
              item.kind === "link" ? (
                <Link
                  key={item.href}
                  href={item.href}
                  className="py-3 text-xl font-semibold text-white transition-opacity hover:opacity-70 active:opacity-50"
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              ) : (
                <div key={item.label} className="flex flex-col">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-2 py-3 text-left text-xl font-semibold text-white transition-opacity hover:opacity-80"
                    aria-expanded={openGroupLabel === item.label}
                    onClick={() => toggleGroup(item.label)}
                  >
                    {item.label}
                    <ChevronDown
                      className={cn(
                        "size-6 shrink-0 transition-transform",
                        openGroupLabel === item.label && "rotate-180",
                      )}
                      aria-hidden
                    />
                  </button>
                  {openGroupLabel === item.label ? (
                    <div className="mb-2 ml-3 flex flex-col gap-1 border-l border-white/20 pl-4">
                      {item.items.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className="py-2 text-lg font-medium text-white/90 transition-opacity hover:opacity-80"
                          onClick={closeMenu}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              ),
            )}
          </nav>
        </div>
      </div>
    </>
  );
}
