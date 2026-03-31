import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { socialLinks } from "./footer-data";

export function FooterColumnTitle({ children }: { children: ReactNode }) {
  return (
    <p
      className={cn(
        "dm-sans-opsz-14 font-[family-name:var(--font-dm-sans)] text-[20px] font-bold leading-[22px] text-white",
      )}
    >
      {children}
    </p>
  );
}

export function FooterSocialRow({ iconSize = 24 }: { iconSize?: number }) {
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
          <Image src={icon} alt="" width={iconSize} height={iconSize} className="object-contain" />
        </Link>
      ))}
    </div>
  );
}
