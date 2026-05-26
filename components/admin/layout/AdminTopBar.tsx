"use client";

import { Menu, PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { cn } from "@/lib/utils";

type AdminTopBarProps = {
  collapsed: boolean;
  onOpenMobileMenu: () => void;
  onToggleCollapse: () => void;
};

export function AdminTopBar({ collapsed, onOpenMobileMenu, onToggleCollapse }: AdminTopBarProps) {
  return (
    <header className="sticky top-0 z-30 flex h-14 shrink-0 items-center gap-2 border-b border-[#151515]/[0.06] bg-[#f4f5f7]/90 px-4 backdrop-blur-md sm:px-6">
      <button
        type="button"
        onClick={onOpenMobileMenu}
        className="flex size-9 items-center justify-center rounded-lg text-[#151515]/70 transition-colors hover:bg-white hover:text-[#151515] lg:hidden"
        aria-label="Open menu"
      >
        <Menu className="size-5" aria-hidden />
      </button>

      <button
        type="button"
        onClick={onToggleCollapse}
        className={cn(
          "hidden size-9 items-center justify-center rounded-lg text-[#151515]/70 transition-colors hover:bg-white hover:text-[#151515] lg:flex",
        )}
        aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
      >
        {collapsed ? (
          <PanelLeftOpen className="size-5" aria-hidden />
        ) : (
          <PanelLeftClose className="size-5" aria-hidden />
        )}
      </button>

      <div className="ml-auto flex items-center gap-2">
        <span className="rounded-full border border-[#151515]/[0.08] bg-white px-3 py-1 text-xs font-medium text-[#151515]/55 shadow-sm">
          Admin
        </span>
      </div>
    </header>
  );
}
