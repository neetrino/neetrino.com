"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import {
  ContactFabTrigger,
  ContactFlyoutMenu,
} from "@/components/shared/floating-contact-fab-parts";
import { cn } from "@/lib/utils";

type FloatingContactFabProps = {
  className?: string;
};

export function FloatingContactFab({ className }: FloatingContactFabProps) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const menuId = useId();

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: PointerEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) close();
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [open, close]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, close]);

  return (
    <div
      ref={rootRef}
      className={cn(
        "fixed bottom-[max(1.5rem,env(safe-area-inset-bottom,0px))] right-[max(1.5rem,env(safe-area-inset-right,0px))] z-[60] flex flex-col items-end gap-3",
        className,
      )}
    >
      {open ? <ContactFlyoutMenu menuId={menuId} /> : null}
      <ContactFabTrigger open={open} menuId={menuId} onToggle={() => setOpen((v) => !v)} />
    </div>
  );
}
