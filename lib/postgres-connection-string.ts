/**
 * pg / pg-connection-string (used by @prisma/adapter-pg) warns when `sslmode` is
 * `require`, `prefer`, or `verify-ca` — in upcoming major versions these map to
 * stricter `verify-full` semantics. Neon and other hosts often ship `sslmode=require`.
 *
 * Adding `uselibpqcompat=true` opts into current libpq-compatible SSL handling and
 * removes the Node "SECURITY WARNING" until you explicitly choose `verify-full`.
 *
 * @see https://www.postgresql.org/docs/current/libpq-ssl.html
 */
const SSL_MODES_NEEDING_LIBPQ_COMPAT_FLAG = new Set(["require", "prefer", "verify-ca"]);

export function withPgSslLibpqCompatFlag(connectionString: string): string {
  let url: URL;
  try {
    url = new URL(connectionString);
  } catch {
    return connectionString;
  }

  if (url.searchParams.get("uselibpqcompat") === "true") {
    return connectionString;
  }

  const sslMode = url.searchParams.get("sslmode")?.toLowerCase();
  if (!sslMode || !SSL_MODES_NEEDING_LIBPQ_COMPAT_FLAG.has(sslMode)) {
    return connectionString;
  }

  url.searchParams.set("uselibpqcompat", "true");
  return url.toString();
}
