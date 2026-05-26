import type { LucideIcon } from "lucide-react";
import { FileText, Image, Package, ShoppingCart } from "lucide-react";

export const ADMIN_SIDEBAR_WIDTH_EXPANDED_PX = 260;
export const ADMIN_SIDEBAR_WIDTH_COLLAPSED_PX = 72;
export const ADMIN_SIDEBAR_STORAGE_KEY = "neetrino-admin-sidebar-collapsed";

export type AdminNavItem = {
  label: string;
  href: string;
  icon: LucideIcon;
  /** When true, child paths count as active (default). */
  matchPrefix?: boolean;
};

/** Primary admin navigation — only routes that exist in the app. */
export const ADMIN_NAV_ITEMS: readonly AdminNavItem[] = [
  {
    label: "Blog",
    href: "/admin/blog",
    icon: FileText,
  },
  {
    label: "Portfolio",
    href: "/admin/portfolio",
    icon: Image,
  },
  {
    label: "Products",
    href: "/admin/products",
    icon: Package,
  },
  {
    label: "Orders",
    href: "/admin/orders",
    icon: ShoppingCart,
  },
] as const;
