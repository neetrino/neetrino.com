"use client";

import {
  DndContext,
  type DragEndEvent,
  KeyboardSensor,
  PointerSensor,
  closestCenter,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { GripVertical } from "lucide-react";
import Image from "next/image";
import { PORTFOLIO_UPLOAD_FORM_FIELD } from "@/lib/constants/portfolio-upload.constants";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";

export type AdminPortfolioRow = {
  id: string;
  key: string;
  url: string;
  fileName: string;
  mediaType: string;
  slot: string;
  active: boolean;
};

export type PortfolioAdminClientProps = {
  initialRows: readonly AdminPortfolioRow[];
};

function SortableAdminRow({
  row,
  onToggleActive,
  onDelete,
}: {
  row: AdminPortfolioRow;
  onToggleActive: (id: string, active: boolean) => void;
  onDelete: (id: string) => void;
}) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: row.id,
  });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.85 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="flex flex-wrap items-center gap-3 rounded-xl border border-black/10 bg-white p-4 shadow-sm"
    >
      <button
        type="button"
        className="flex h-10 w-10 shrink-0 cursor-grab touch-none items-center justify-center rounded-lg border border-black/10 bg-[#f5f5f7] text-black/60 active:cursor-grabbing"
        aria-label="Drag to reorder"
        {...attributes}
        {...listeners}
      >
        <GripVertical className="size-5" aria-hidden />
      </button>
      <div className="relative h-16 w-24 shrink-0 overflow-hidden rounded-lg bg-black/5">
        {row.mediaType === "gif" ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={row.url} alt="" className="size-full object-cover" />
        ) : (
          <Image src={row.url} alt="" fill className="object-cover" sizes="96px" />
        )}
      </div>
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-medium text-black">{row.fileName}</p>
        <p className="mt-1 truncate text-xs text-black/50">{row.url}</p>
        <p className="mt-1 font-mono text-xs text-black/45">Slot: {row.slot}</p>
      </div>
      <label className="flex shrink-0 items-center gap-2 text-sm text-black/70">
        <input
          type="checkbox"
          checked={row.active}
          onChange={(e) => {
            onToggleActive(row.id, e.target.checked);
          }}
        />
        Active
      </label>
      <button
        type="button"
        className="shrink-0 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm font-medium text-red-800 hover:bg-red-100"
        onClick={() => {
          onDelete(row.id);
        }}
      >
        Delete
      </button>
    </div>
  );
}

export function PortfolioAdminClient({ initialRows }: PortfolioAdminClientProps) {
  const router = useRouter();
  const [rows, setRows] = useState<AdminPortfolioRow[]>(() => [...initialRows]);
  const [message, setMessage] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 6 } }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates }),
  );

  const refresh = useCallback(() => {
    router.refresh();
  }, [router]);

  const handleDragEnd = async (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id) {
      return;
    }
    const oldIndex = rows.findIndex((r) => r.id === active.id);
    const newIndex = rows.findIndex((r) => r.id === over.id);
    if (oldIndex < 0 || newIndex < 0) {
      return;
    }
    const next = arrayMove(rows, oldIndex, newIndex);
    setRows(next);
    setBusy(true);
    setMessage(null);
    try {
      const res = await fetch("/api/admin/portfolio/reorder", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ orderedIds: next.map((r) => r.id) }),
      });
      const data = (await res.json()) as { success?: boolean; error?: string };
      if (!res.ok || !data.success) {
        throw new Error(data.error ?? "Reorder failed.");
      }
      refresh();
    } catch (e: unknown) {
      router.refresh();
      setMessage(e instanceof Error ? e.message : "Reorder failed.");
    } finally {
      setBusy(false);
    }
  };

  const uploadFile = async (file: File) => {
    setBusy(true);
    setMessage(null);
    const fd = new FormData();
    fd.append(PORTFOLIO_UPLOAD_FORM_FIELD, file);
    try {
      const res = await fetch("/api/admin/portfolio/upload", {
        method: "POST",
        credentials: "include",
        body: fd,
      });
      const raw = await res.text();
      type UploadJson = {
        success?: boolean;
        error?: string;
        detail?: string;
        item?: AdminPortfolioRow;
      };
      let data: UploadJson = {};
      try {
        data = raw ? (JSON.parse(raw) as UploadJson) : {};
      } catch {
        throw new Error(`Upload failed (${res.status}).`);
      }
      if (!res.ok || !data.success || !data.item) {
        const parts = [data.error, data.detail].filter(
          (s): s is string => typeof s === "string" && s.trim().length > 0,
        );
        throw new Error(parts.length > 0 ? parts.join(" — ") : `Upload failed (${res.status}).`);
      }
      refresh();
    } catch (e: unknown) {
      setMessage(e instanceof Error ? e.message : "Upload failed.");
    } finally {
      setBusy(false);
    }
  };

  const toggleActive = async (id: string, active: boolean) => {
    setBusy(true);
    setMessage(null);
    try {
      await fetch(`/api/admin/portfolio/${id}/active`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ active }),
      }).then(async (res) => {
        const data = (await res.json()) as { success?: boolean; error?: string };
        if (!res.ok || !data.success) {
          throw new Error(data.error ?? "Update failed.");
        }
      });
      refresh();
    } catch (e: unknown) {
      setMessage(e instanceof Error ? e.message : "Update failed.");
    } finally {
      setBusy(false);
    }
  };

  const deleteRow = async (id: string) => {
    if (!window.confirm("Delete this portfolio item?")) {
      return;
    }
    setBusy(true);
    setMessage(null);
    try {
      const res = await fetch(`/api/admin/portfolio/${id}`, {
        method: "DELETE",
        credentials: "include",
      });
      const raw = await res.text();
      type DeleteJson = { success?: boolean; error?: string; detail?: string };
      let data: DeleteJson = {};
      try {
        data = raw ? (JSON.parse(raw) as DeleteJson) : {};
      } catch {
        throw new Error(`Delete failed (${res.status}).`);
      }
      if (!res.ok || !data.success) {
        const parts = [data.error, data.detail].filter(
          (s): s is string => typeof s === "string" && s.trim().length > 0,
        );
        throw new Error(parts.length > 0 ? parts.join(" — ") : `Delete failed (${res.status}).`);
      }
      refresh();
    } catch (e: unknown) {
      setMessage(e instanceof Error ? e.message : "Delete failed.");
    } finally {
      setBusy(false);
    }
  };

  const syncFromR2 = async () => {
    setBusy(true);
    setMessage(null);
    try {
      const res = await fetch("/api/admin/portfolio/sync", {
        method: "POST",
        credentials: "include",
      });
      const data = (await res.json()) as { success?: boolean; imported?: number; error?: string };
      if (!res.ok || !data.success) {
        throw new Error(data.error ?? "Sync failed.");
      }
      setMessage(`Imported ${data.imported ?? 0} new object(s).`);
      refresh();
    } catch (e: unknown) {
      setMessage(e instanceof Error ? e.message : "Sync failed.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold tracking-[-0.04em]">Portfolio</h1>
        <p className="mt-2 text-sm text-black/55">
          Upload images or GIFs, reorder cards, and toggle visibility. Slots update automatically.
        </p>
      </div>

      {message ? (
        <p className="rounded-lg border border-black/10 bg-white px-4 py-3 text-sm text-black/80">
          {message}
        </p>
      ) : null}

      <div className="flex flex-wrap items-center gap-3">
        <label className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-[#151515] px-5 py-2.5 text-sm font-semibold text-white hover:bg-black">
          <input
            type="file"
            accept=".webp,.png,.jpg,.jpeg,.gif,image/webp,image/png,image/jpeg,image/gif"
            className="sr-only"
            disabled={busy}
            onChange={(e) => {
              const f = e.target.files?.[0];
              e.target.value = "";
              if (f) {
                void uploadFile(f);
              }
            }}
          />
          Upload image / GIF
        </label>
        <button
          type="button"
          className="rounded-full border border-black/15 px-5 py-2.5 text-sm font-semibold text-black/80 hover:bg-black/5"
          disabled={busy}
          onClick={() => {
            void syncFromR2();
          }}
        >
          Sync from R2
        </button>
      </div>

      <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext items={rows.map((r) => r.id)} strategy={verticalListSortingStrategy}>
          <div className="space-y-3">
            {rows.map((row) => (
              <SortableAdminRow
                key={row.id}
                row={row}
                onToggleActive={toggleActive}
                onDelete={deleteRow}
              />
            ))}
          </div>
        </SortableContext>
      </DndContext>
    </div>
  );
}
