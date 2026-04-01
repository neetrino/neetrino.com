import Image from "next/image";
import Link from "next/link";
import { NavbarMobileShell } from "@/components/nav/NavbarMobileShell";
import { PRIMARY_NAV_LINK_DESKTOP_CLASS, PRIMARY_NAV_LINKS } from "@/lib/nav-links";
import { FIGMA_ASSETS } from "@/lib/figma-assets";

function PhoneIcon({ className }: { className?: string }) {
  return (
    <div className={`relative size-10 shrink-0 ${className ?? ""}`}>
      <Image
        alt=""
        unoptimized
        width={200}
        height={200}
        className="h-full w-full object-contain"
        src={FIGMA_ASSETS.imgGroup70642}
      />
      <div className="pointer-events-none absolute inset-0">
        <Image
          alt=""
          unoptimized
          width={200}
          height={200}
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
      <div className="w-[calc(100%-24px)] md:w-[calc(100%-40px)] lg:w-[calc(100%-56px)] max-w-[1120px] mx-auto rounded-full bg-white/15 backdrop-blur-xl pl-4 pr-1 md:pl-5 md:pr-1 lg:pl-5 lg:pr-1 py-2.5">
        <div className="flex items-center justify-between gap-2 lg:grid lg:grid-cols-[210px_1fr_auto] lg:gap-4">
          <Link
            href="/"
            className="relative h-9 w-[118px] shrink-0 min-[360px]:w-[140px] sm:w-[170px] md:w-[190px] lg:w-[210px]"
          >
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
            <div className="hidden lg:block">
              <PhoneIcon />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
