const VIDEO_EXT_PATTERN = /\.(webm|mp4|mov)$/i;

/**
 * True when a portfolio media URL/path should render as `<video>` (not `next/image` / static img).
 */
export function isVideoAsset(src: string): boolean {
  const path = src.split("?")[0]?.split("#")[0] ?? src;
  return VIDEO_EXT_PATTERN.test(path);
}
