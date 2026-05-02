/**
 * Generates image alt text from stored file name (no manual alt field).
 */
export function generateAltFromFileName(fileName: string): string {
  const base = fileName.replace(/\\/g, "/").split("/").pop() ?? fileName;
  const withoutExt = base.replace(/\.[^.]+$/i, "");
  return withoutExt.replace(/[-_]+/g, " ").replace(/\s+/g, " ").trim();
}
