import Link from "next/link";
import type { ReactNode } from "react";
import { ContactSocialIcon } from "@/components/contact/ContactSocialIcon";
import { CONTACT_SOCIAL_LINKS } from "@/components/contact/content";
import { cn } from "@/lib/utils";

/** `ContactSocialIcon` is 22×22; scale to match previous raster sizes (20 / 24). */
const FOOTER_SOCIAL_ICON_SCALE: Record<number, string> = {
  20: "origin-center scale-[10/11]",
  24: "origin-center scale-[12/11]",
};

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
  const iconScaleClass = FOOTER_SOCIAL_ICON_SCALE[iconSize] ?? "origin-center scale-100";

  return (
    <div className="flex flex-wrap items-center gap-4">
      {CONTACT_SOCIAL_LINKS.map(({ id, href, label }) => (
        <Link
          key={id}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="text-white opacity-80 transition hover:opacity-100"
        >
          <span className={cn("inline-flex", iconScaleClass)} aria-hidden>
            <ContactSocialIcon id={id} />
          </span>
        </Link>
      ))}
    </div>
  );
}
