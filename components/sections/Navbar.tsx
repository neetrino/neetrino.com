import Image from "next/image";
import Link from "next/link";
import { NavbarMobileShell } from "@/components/nav/NavbarMobileShell";
import {
  COMPANY_PHONE_TEL_HREF,
  PRIMARY_NAV_LINK_DESKTOP_CLASS,
  PRIMARY_NAV_LINKS,
} from "@/lib/nav-links";
import { FIGMA_ASSETS } from "@/lib/figma-assets";

function PhoneIcon({ className }: { className?: string }) {
  return (
    <div className={`relative size-10 shrink-0 ${className ?? ""}`}>
      <Image
        alt=""
        width={200}
        height={200}
        sizes="40px"
        className="h-full w-full object-contain"
        src={FIGMA_ASSETS.imgGroup70642}
      />
      <div className="pointer-events-none absolute inset-0">
        <Image
          alt=""
          width={200}
          height={200}
          sizes="40px"
          className="h-full w-full object-contain"
          src={FIGMA_ASSETS.imgVector}
        />
      </div>
    </div>
  );
}

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-2">
      <div className="mx-auto w-[calc(100%-24px)] max-w-[1120px] bg-transparent py-2.5 pl-4 pr-1 md:w-[calc(100%-40px)] md:pl-5 md:pr-1 lg:w-[calc(100%-56px)] lg:pl-5 lg:pr-1">
        <div className="flex items-center justify-between gap-2 lg:grid lg:grid-cols-[210px_1fr_auto] lg:gap-4">
          <Link
            href="/"
            className="relative h-9 w-[118px] shrink-0 min-[360px]:w-[140px] sm:w-[170px] md:w-[190px] lg:w-[210px]"
          >
            <Image
              alt="Neetrino"
              width={400}
              height={400}
              sizes="(max-width: 1024px) 190px, 210px"
              className="h-full w-full object-contain"
              src={FIGMA_ASSETS.imgNeetrinoItComapny2Png1}
              priority
            />
          </Link>

          <nav
            className="hidden lg:flex items-center justify-center gap-5 lg:gap-6 min-w-0"
            aria-label="Main"
          >
            {PRIMARY_NAV_LINKS.map(({ label, href }) => (
              <Link key={label} href={href} className={PRIMARY_NAV_LINK_DESKTOP_CLASS}>
                {label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-1 min-[360px]:gap-2 sm:gap-3">
            <NavbarMobileShell links={PRIMARY_NAV_LINKS} />
            <a
              href={COMPANY_PHONE_TEL_HREF}
              aria-label="Call Neetrino"
              className="hidden lg:inline-flex shrink-0 rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/80"
            >
              <PhoneIcon />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
