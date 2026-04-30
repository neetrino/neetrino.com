/**
 * Routes that already paint the `/services`-style `imgVector2` mesh inside a canvas or Figma block.
 * `DesktopFlowServicesVectorGrid` skips these to avoid double meshes.
 */
export function desktopRouteHasEmbeddedServicesVectorGrid(pathname: string): boolean {
  if (pathname === "/" || pathname === "/portfolio" || pathname === "/services") {
    return true;
  }
  if (pathname.startsWith("/about-us")) {
    return true;
  }
  return false;
}
