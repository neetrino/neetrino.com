import "server-only";
import { revalidatePath } from "next/cache";

export function revalidatePortfolioCaches(): void {
  revalidatePath("/portfolio");
  revalidatePath("/admin/portfolio");
}
