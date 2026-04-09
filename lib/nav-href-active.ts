/**
 * Whether `pathname` should count as “on” a nav target `href` (including nested routes).
 */
export function isNavHrefActive(pathname: string, href: string): boolean {
  if (href === "/") {
    return pathname === "/";
  }
  return pathname === href || pathname.startsWith(`${href}/`);
}
