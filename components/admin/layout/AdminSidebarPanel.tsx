"use client";

import Link from "next/link";
import { LogOut, PanelLeftClose, PanelLeftOpen, User } from "lucide-react";
import { ADMIN_NAV_ITEMS } from "@/lib/admin/admin-nav.config";
import { SidebarItem } from "@/components/admin/layout/SidebarItem";
import { cn } from "@/lib/utils";

type AdminSidebarPanelProps = {
  collapsed: boolean;
  onNavigate?: () => void;
  onToggleCollapse?: () => void;
  showCollapseControl?: boolean;
  className?: string;
};

export function AdminSidebarPanel({
  collapsed,
  onNavigate,
  onToggleCollapse,
  showCollapseControl = false,
  className,
}: AdminSidebarPanelProps) {
  return (
    <div
      className={cn(
        "grid h-full min-h-0 grid-rows-[auto_minmax(0,1fr)_auto] overflow-hidden",
        className,
      )}
    >
      <div
        className={cn(
          "flex shrink-0 items-center border-b border-[#151515]/[0.06] bg-white px-4 py-5",
          collapsed ? "justify-center px-3" : "gap-3",
        )}
      >
        <Link
          href="/admin/blog"
          onClick={onNavigate}
          className={cn(
            "flex items-center gap-3 transition-opacity hover:opacity-90",
            collapsed && "justify-center",
          )}
          aria-label="Neetrino Admin home"
        >
          <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-[#151515] text-sm font-bold text-white shadow-[0_4px_14px_rgba(21,21,21,0.2)]">
            N
          </span>
          {!collapsed ? (
            <span className="min-w-0">
              <span className="block text-sm font-semibold tracking-[-0.02em] text-[#151515]">
                Neetrino
              </span>
              <span className="block text-xs text-[#151515]/45">Admin Panel</span>
            </span>
          ) : null}
        </Link>
      </div>

      <nav
        className="min-h-0 space-y-1 overflow-y-auto overflow-x-hidden overscroll-contain px-3 py-4"
        aria-label="Admin"
      >
        {ADMIN_NAV_ITEMS.map((item) => (
          <SidebarItem key={item.href} item={item} collapsed={collapsed} onNavigate={onNavigate} />
        ))}
      </nav>

      <div className="shrink-0 border-t border-[#151515]/[0.06] bg-white p-3">
        <div
          className={cn(
            "mb-2 flex items-center gap-3 rounded-xl px-2 py-2",
            collapsed && "justify-center px-0",
          )}
        >
          <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#151515]/[0.06] text-[#151515]/70">
            <User className="size-4" aria-hidden />
          </span>
          {!collapsed ? (
            <span className="min-w-0">
              <span className="block truncate text-sm font-medium text-[#151515]">Admin</span>
              <span className="block truncate text-xs text-[#151515]/45">Signed in</span>
            </span>
          ) : null}
        </div>

        <form action="/admin/logout" method="post">
          <button
            type="submit"
            title={collapsed ? "Logout" : undefined}
            className={cn(
              "flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-[#151515]/65 transition-colors duration-200 hover:bg-red-500/[0.08] hover:text-red-700",
              collapsed && "justify-center px-2.5",
            )}
          >
            <LogOut className="size-[1.125rem] shrink-0" aria-hidden />
            {!collapsed ? <span>Logout</span> : null}
          </button>
        </form>

        {showCollapseControl && onToggleCollapse ? (
          <button
            type="button"
            onClick={onToggleCollapse}
            className={cn(
              "mt-2 flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-[#151515]/50 transition-colors duration-200 hover:bg-[#151515]/[0.05] hover:text-[#151515]/80",
              collapsed && "justify-center px-2.5",
            )}
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {collapsed ? (
              <PanelLeftOpen className="size-[1.125rem] shrink-0" aria-hidden />
            ) : (
              <PanelLeftClose className="size-[1.125rem] shrink-0" aria-hidden />
            )}
            {!collapsed ? <span>Collapse</span> : null}
          </button>
        ) : null}
      </div>
    </div>
  );
}
