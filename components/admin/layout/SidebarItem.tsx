"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { AdminNavItem } from "@/lib/admin/admin-nav.config";
import { cn } from "@/lib/utils";

type SidebarItemProps = {
  item: AdminNavItem;
  collapsed: boolean;
  onNavigate?: () => void;
};

function isNavItemActive(pathname: string, item: AdminNavItem): boolean {
  const matchPrefix = item.matchPrefix ?? true;
  if (matchPrefix) {
    return pathname === item.href || pathname.startsWith(`${item.href}/`);
  }
  return pathname === item.href;
}

export function SidebarItem({ item, collapsed, onNavigate }: SidebarItemProps) {
  const pathname = usePathname();
  const isActive = isNavItemActive(pathname, item);
  const Icon = item.icon;

  return (
    <Link
      href={item.href}
      onClick={onNavigate}
      title={collapsed ? item.label : undefined}
      aria-current={isActive ? "page" : undefined}
      className={cn(
        "group relative flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-200 ease-out",
        collapsed ? "justify-center px-2.5" : "px-3",
        isActive
          ? "bg-[#151515] text-white shadow-[0_2px_12px_rgba(21,21,21,0.18)]"
          : "text-[#151515]/65 hover:bg-[#151515]/[0.05] hover:text-[#151515]",
      )}
    >
      <Icon
        className={cn(
          "size-[1.125rem] shrink-0 transition-colors duration-200",
          isActive ? "text-white" : "text-[#151515]/50 group-hover:text-[#151515]/80",
        )}
        aria-hidden
      />
      {!collapsed ? <span className="truncate">{item.label}</span> : null}
      {collapsed ? (
        <span
          className="pointer-events-none absolute left-full z-50 ml-3 hidden whitespace-nowrap rounded-lg bg-[#151515] px-2.5 py-1.5 text-xs font-medium text-white opacity-0 shadow-lg transition-opacity duration-150 group-hover:opacity-100 lg:group-hover:block"
          role="tooltip"
        >
          {item.label}
        </span>
      ) : null}
    </Link>
  );
}
