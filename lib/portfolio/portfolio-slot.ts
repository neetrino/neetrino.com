const SLOT_RE = /^grid_(\d+)_(left|right)$/;

/**
 * Slot for item at zero-based visual order index (left then right per row).
 */
export function slotFromIndex(index: number): string {
  if (index < 0 || !Number.isFinite(index)) {
    throw new Error("slotFromIndex: index must be a non-negative finite number.");
  }
  const row = Math.floor(index / 2) + 1;
  const side = index % 2 === 0 ? "left" : "right";
  return `grid_${row}_${side}`;
}

function parseSlot(slot: string): { row: number; side: number } | null {
  const m = slot.trim().match(SLOT_RE);
  if (!m) {
    return null;
  }
  const row = Number(m[1]);
  const side = m[2] === "left" ? 0 : 1;
  if (!Number.isFinite(row) || row < 1) {
    return null;
  }
  return { row, side };
}

/**
 * Sort order: grid_1_left, grid_1_right, grid_2_left, … Unknown slots sort last.
 */
export function comparePortfolioSlots(a: string, b: string): number {
  const pa = parseSlot(a);
  const pb = parseSlot(b);
  if (pa && pb) {
    if (pa.row !== pb.row) {
      return pa.row - pb.row;
    }
    return pa.side - pb.side;
  }
  if (pa) {
    return -1;
  }
  if (pb) {
    return 1;
  }
  return a.localeCompare(b);
}

export type PortfolioSlotSortable = { slot: string };

export function sortPortfolioItemsBySlot<T extends PortfolioSlotSortable>(
  items: readonly T[],
): T[] {
  return [...items].sort((x, y) => comparePortfolioSlots(x.slot, y.slot));
}

/**
 * Next slot after all existing items (by slot order), for new uploads / sync append.
 */
export function getNextPortfolioSlot<T extends PortfolioSlotSortable>(items: readonly T[]): string {
  const sorted = sortPortfolioItemsBySlot(items);
  return slotFromIndex(sorted.length);
}
