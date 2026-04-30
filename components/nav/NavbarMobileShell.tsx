"use client";

import { useState } from "react";
import { MobileNavDrawer } from "@/components/nav/MobileNavDrawer";
import { MobileNavMenuTrigger } from "@/components/nav/MobileNavMenuTrigger";
import { useBodyScrollLock } from "@/lib/hooks/useBodyScrollLock";
import { type NavItem } from "@/lib/nav-links";

type NavbarMobileShellProps = {
  links: readonly NavItem[];
};

export function NavbarMobileShell({ links }: NavbarMobileShellProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  useBodyScrollLock(menuOpen);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <MobileNavMenuTrigger
        menuOpen={menuOpen}
        onClick={() => {
          setMenuOpen((open) => !open);
        }}
      />
      <MobileNavDrawer links={links} menuOpen={menuOpen} onClose={closeMenu} />
    </>
  );
}
