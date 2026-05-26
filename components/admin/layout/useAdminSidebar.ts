"use client";

import { useCallback, useEffect, useState, useSyncExternalStore } from "react";
import { ADMIN_SIDEBAR_STORAGE_KEY } from "@/lib/admin/admin-nav.config";

const SIDEBAR_COLLAPSE_CHANGE_EVENT = "neetrino-admin-sidebar-collapse-change";

function readCollapsedFromStorage(): boolean {
  try {
    return localStorage.getItem(ADMIN_SIDEBAR_STORAGE_KEY) === "true";
  } catch {
    return false;
  }
}

function writeCollapsedToStorage(collapsed: boolean): void {
  try {
    localStorage.setItem(ADMIN_SIDEBAR_STORAGE_KEY, String(collapsed));
  } catch {
    /* localStorage unavailable */
  }
  window.dispatchEvent(new Event(SIDEBAR_COLLAPSE_CHANGE_EVENT));
}

function subscribeToCollapsed(callback: () => void): () => void {
  const onChange = () => callback();
  window.addEventListener(SIDEBAR_COLLAPSE_CHANGE_EVENT, onChange);
  window.addEventListener("storage", onChange);
  return () => {
    window.removeEventListener(SIDEBAR_COLLAPSE_CHANGE_EVENT, onChange);
    window.removeEventListener("storage", onChange);
  };
}

export function useAdminSidebar() {
  const collapsed = useSyncExternalStore(
    subscribeToCollapsed,
    readCollapsedFromStorage,
    () => false,
  );
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (!mobileOpen) {
      return;
    }
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [mobileOpen]);

  const toggleCollapsed = useCallback(() => {
    writeCollapsedToStorage(!collapsed);
  }, [collapsed]);

  const openMobile = useCallback(() => {
    setMobileOpen(true);
  }, []);

  const closeMobile = useCallback(() => {
    setMobileOpen(false);
  }, []);

  return {
    collapsed,
    mobileOpen,
    toggleCollapsed,
    openMobile,
    closeMobile,
  };
}
