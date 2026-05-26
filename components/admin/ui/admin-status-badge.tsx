import { getAdminStatusClass } from "@/lib/admin/admin-status.config";
import { cn } from "@/lib/utils";

type AdminStatusBadgeProps = {
  readonly entity: "order" | "blog" | "product";
  readonly status: string;
  readonly className?: string;
};

export function AdminStatusBadge({ entity, status, className }: AdminStatusBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.08em]",
        getAdminStatusClass(entity, status),
        className,
      )}
    >
      {formatStatusLabel(status)}
    </span>
  );
}

function formatStatusLabel(status: string): string {
  return status.replaceAll("_", " ");
}
