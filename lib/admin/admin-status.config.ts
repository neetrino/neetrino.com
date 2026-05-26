type StatusTone = "neutral" | "success" | "warning" | "danger" | "info";

const STATUS_TONE_CLASS: Record<StatusTone, string> = {
  neutral: "bg-[#151515]/[0.06] text-[#151515]/70",
  success: "bg-emerald-50 text-emerald-800 ring-1 ring-emerald-200/80",
  warning: "bg-amber-50 text-amber-900 ring-1 ring-amber-200/80",
  danger: "bg-red-50 text-red-800 ring-1 ring-red-200/80",
  info: "bg-[#473dff]/10 text-[#473dff] ring-1 ring-[#473dff]/20",
};

const ORDER_STATUS_TONE: Record<string, StatusTone> = {
  PAID: "success",
  PENDING: "warning",
  FAILED: "danger",
  CANCELLED: "neutral",
};

const BLOG_STATUS_TONE: Record<string, StatusTone> = {
  PUBLISHED: "success",
  DRAFT: "neutral",
};

const PRODUCT_STATUS_TONE: Record<string, StatusTone> = {
  ACTIVE: "success",
  INACTIVE: "neutral",
  SOLD: "info",
};

export function getAdminStatusTone(
  entity: "order" | "blog" | "product",
  status: string,
): StatusTone {
  const map =
    entity === "order"
      ? ORDER_STATUS_TONE
      : entity === "blog"
        ? BLOG_STATUS_TONE
        : PRODUCT_STATUS_TONE;
  return map[status] ?? "neutral";
}

export function getAdminStatusClass(entity: "order" | "blog" | "product", status: string): string {
  return STATUS_TONE_CLASS[getAdminStatusTone(entity, status)];
}
