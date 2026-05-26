"use client";

import { useCallback, useState } from "react";

export function useAdminDetailSheet<TId extends string>() {
  const [selectedId, setSelectedId] = useState<TId | null>(null);

  const open = useCallback((id: TId) => {
    setSelectedId(id);
  }, []);

  const close = useCallback(() => {
    setSelectedId(null);
  }, []);

  return {
    selectedId,
    isOpen: selectedId !== null,
    open,
    close,
  };
}
