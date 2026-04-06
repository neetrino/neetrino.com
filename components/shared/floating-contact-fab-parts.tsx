import { Globe, Phone } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";
import { ContactSocialIcon } from "@/components/contact/ContactSocialIcon";
import { CONTACT_DETAILS, CONTACT_SOCIAL_LINKS } from "@/components/contact/content";
import { FLOATING_CONTACT_WEBSITE_HREF } from "@/lib/floating-contact.constants";
import { cn } from "@/lib/utils";

export const MENU_PANEL_CLASS =
  "inline-flex max-h-[min(70vh,520px)] w-fit max-w-[calc(100vw-1.5rem)] flex-col gap-3 overflow-y-auto rounded-2xl border border-amber-500/70 bg-[#2c2f36] px-2 py-3 shadow-xl shadow-black/40";

export const MENU_ICON_RING =
  "flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-white/90 text-white transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400/80";

type SocialMenuLinkProps = {
  href: string;
  label: string;
  children: ReactNode;
};

export function SocialMenuLink({ href, label, children }: SocialMenuLinkProps) {
  if (href.startsWith("viber:")) {
    return (
      <a href={href} aria-label={label} className={MENU_ICON_RING}>
        {children}
      </a>
    );
  }
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={MENU_ICON_RING}
    >
      {children}
    </Link>
  );
}

type ContactFlyoutMenuProps = {
  menuId: string;
};

export function ContactFlyoutMenu({ menuId }: ContactFlyoutMenuProps) {
  return (
    <div
      id={menuId}
      role="region"
      aria-label="Contact options"
      className={cn(MENU_PANEL_CLASS, "transition-opacity duration-200")}
    >
      <div className="flex flex-col items-center gap-3">
        <a
          href={CONTACT_DETAILS.phoneTelHref}
          aria-label="Call Neetrino"
          className={MENU_ICON_RING}
        >
          <Phone className="size-5" strokeWidth={2} aria-hidden />
        </a>
        {CONTACT_SOCIAL_LINKS.map((social) => (
          <SocialMenuLink key={social.id} href={social.href} label={social.label}>
            <ContactSocialIcon id={social.id} />
          </SocialMenuLink>
        ))}
        <SocialMenuLink href={FLOATING_CONTACT_WEBSITE_HREF} label="Neetrino website">
          <Globe className="size-[22px] shrink-0" strokeWidth={2} aria-hidden />
        </SocialMenuLink>
      </div>
    </div>
  );
}

type ContactFabTriggerProps = {
  open: boolean;
  menuId: string;
  onToggle: () => void;
};

export function ContactFabTrigger({ open, menuId, onToggle }: ContactFabTriggerProps) {
  return (
    <button
      type="button"
      aria-expanded={open}
      aria-controls={open ? menuId : undefined}
      aria-haspopup="true"
      onClick={onToggle}
      className={cn(
        "flex size-16 shrink-0 items-center justify-center rounded-full border-4 border-white/25 bg-[#473ff9] shadow-lg shadow-black/30 transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60",
      )}
    >
      <Phone className="size-7 text-white" strokeWidth={2.5} aria-hidden />
      <span className="sr-only">{open ? "Close contact menu" : "Open contact menu"}</span>
    </button>
  );
}
