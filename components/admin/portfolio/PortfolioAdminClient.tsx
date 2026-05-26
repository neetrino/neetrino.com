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
import { GripVertical, ImageIcon } from "lucide-react";
import { PortfolioAdminMediaThumb } from "@/components/admin/portfolio/PortfolioAdminMediaThumb";
import { AdminDetailField, AdminDetailSection } from "@/components/admin/ui/admin-detail-field";
import { AdminDetailSheet } from "@/components/admin/ui/admin-detail-sheet";
import { AdminList, AdminListEmpty } from "@/components/admin/ui/admin-list";
import { useAdminDetailSheet } from "@/components/admin/ui/use-admin-detail-sheet";
import { ADMIN_LIST_ROW_CLASS } from "@/lib/admin/admin-ui.constants";
import { PORTFOLIO_UPLOAD_FORM_FIELD } from "@/lib/constants/portfolio-upload.constants";
import { cn } from "@/lib/utils";
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
  onOpen,
  onToggleActive,
  onDelete,
}: {
  row: AdminPortfolioRow;
  onOpen: (id: string) => void;
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
    <div ref={setNodeRef} style={style} className={cn(ADMIN_LIST_ROW_CLASS, "cursor-default p-0")}>
      <button
        type="button"
        className="flex h-full w-full cursor-pointer items-center gap-4 px-5 py-4 text-left"
        onClick={() => onOpen(row.id)}
      >
        <div className="relative h-14 w-20 shrink-0 overflow-hidden rounded-xl bg-[#151515]/[0.04]">
          <PortfolioAdminMediaThumb
            url={row.url}
            mediaType={row.mediaType}
            fileName={row.fileName}
          />
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold text-[#151515]">{row.fileName}</p>
          <p className="mt-0.5 truncate text-sm text-[#151515]/55">
            Slot {row.slot} · {row.mediaType}
          </p>
          <p className="mt-1 text-xs text-[#151515]/45">{row.active ? "Visible" : "Hidden"}</p>
        </div>
      </button>

      <div className="flex shrink-0 items-center gap-2 pr-4">
        <button
          type="button"
          className="flex size-9 cursor-grab touch-none items-center justify-center rounded-xl border border-[#151515]/10 bg-[#f8f8fa] text-[#151515]/50 active:cursor-grabbing"
          aria-label="Drag to reorder"
          onClick={(event) => event.stopPropagation()}
          {...attributes}
          {...listeners}
        >
          <GripVertical className="size-4" aria-hidden />
        </button>
        <label
          className="flex items-center gap-2 rounded-xl border border-[#151515]/10 bg-[#f8f8fa] px-3 py-2 text-xs font-medium text-[#151515]/70"
          onClick={(event) => event.stopPropagation()}
        >
          <input
            type="checkbox"
            checked={row.active}
            onChange={(event) => {
              onToggleActive(row.id, event.target.checked);
            }}
          />
          Active
        </label>
        <button
          type="button"
          className="rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-xs font-medium text-red-800 hover:bg-red-100"
          onClick={(event) => {
            event.stopPropagation();
            onDelete(row.id);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export function PortfolioAdminClient({ initialRows }: PortfolioAdminClientProps) {
  const router = useRouter();
  const sheet = useAdminDetailSheet<string>();
  const [rows, setRows] = useState<AdminPortfolioRow[]>(() => [...initialRows]);
  const [message, setMessage] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  const selectedRow = rows.find((row) => row.id === sheet.selectedId) ?? null;

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
      if (sheet.selectedId === id) {
        sheet.close();
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
          Upload images, WebM animations, or GIF fallbacks. Reorder cards and toggle visibility.
          Slots update automatically.
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
            accept=".webp,.png,.jpg,.jpeg,.gif,.webm,image/webp,image/png,image/jpeg,image/gif,video/webm"
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
          Upload animation / image
        </label>
        <p className="w-full text-xs text-black/50">
          Recommended: WebM for better performance. GIF is supported as fallback. Max 10 MB.
        </p>
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

      {rows.length === 0 ? (
        <AdminListEmpty message="No portfolio items yet." />
      ) : (
        <AdminList>
          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
          >
            <SortableContext items={rows.map((r) => r.id)} strategy={verticalListSortingStrategy}>
              {rows.map((row) => (
                <SortableAdminRow
                  key={row.id}
                  row={row}
                  onOpen={sheet.open}
                  onToggleActive={toggleActive}
                  onDelete={deleteRow}
                />
              ))}
            </SortableContext>
          </DndContext>
        </AdminList>
      )}

      <AdminDetailSheet
        open={sheet.isOpen}
        onClose={sheet.close}
        title={selectedRow?.fileName ?? "Portfolio item"}
        subtitle={selectedRow ? `Slot ${selectedRow.slot}` : undefined}
        icon={<ImageIcon className="size-4" aria-hidden />}
        badge={
          selectedRow ? (
            <span className="inline-flex rounded-full bg-[#151515]/[0.06] px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-[#151515]/70">
              {selectedRow.active ? "Active" : "Hidden"}
            </span>
          ) : null
        }
        footer={
          selectedRow ? (
            <button
              type="button"
              className="text-sm font-medium text-red-600 hover:text-red-700"
              onClick={() => void deleteRow(selectedRow.id)}
            >
              Delete item
            </button>
          ) : null
        }
      >
        {selectedRow ? (
          <div className="space-y-6">
            <div className="overflow-hidden rounded-2xl border border-[#151515]/10 bg-[#151515]/[0.03]">
              <div className="relative aspect-video w-full">
                <PortfolioAdminMediaThumb
                  url={selectedRow.url}
                  mediaType={selectedRow.mediaType}
                  fileName={selectedRow.fileName}
                />
              </div>
            </div>

            <AdminDetailSection title="Item">
              <AdminDetailField label="File name" value={selectedRow.fileName} />
              <AdminDetailField label="Media type" value={selectedRow.mediaType} />
              <AdminDetailField label="Slot" value={selectedRow.slot} mono />
              <AdminDetailField label="Storage key" value={selectedRow.key} mono />
              <AdminDetailField label="URL" value={selectedRow.url} mono />
              <AdminDetailField
                label="Visibility"
                value={selectedRow.active ? "Visible on site" : "Hidden"}
              />
            </AdminDetailSection>
          </div>
        ) : null}
      </AdminDetailSheet>
    </div>
  );
}
