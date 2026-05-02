export function totalPagesForCount(itemCount: number, pageSize: number): number {
  if (pageSize < 1) {
    return 1;
  }
  if (itemCount <= 0) {
    return 1;
  }
  return Math.max(1, Math.ceil(itemCount / pageSize));
}

export function paginateItems<T>(items: readonly T[], currentPage: number, pageSize: number): T[] {
  if (pageSize < 1) {
    return [...items];
  }
  const total = items.length;
  const totalP = totalPagesForCount(total, pageSize);
  const page = Math.min(Math.max(1, currentPage), totalP);
  const start = (page - 1) * pageSize;
  return items.slice(start, start + pageSize);
}

export function clampPage(currentPage: number, itemCount: number, pageSize: number): number {
  const tp = totalPagesForCount(itemCount, pageSize);
  return Math.min(Math.max(1, currentPage), tp);
}
