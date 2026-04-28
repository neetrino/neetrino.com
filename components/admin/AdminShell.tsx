import Link from "next/link";

export function AdminShell({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-[#f5f5f7] text-[#151515]">
      <header className="border-b border-black/10 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/admin/blog" className="text-lg font-semibold tracking-[-0.03em]">
            Neetrino Admin
          </Link>
          <nav className="flex items-center gap-4 text-sm">
            <Link href="/admin/blog" className="font-medium text-black/70 hover:text-black">
              Blog
            </Link>
            <Link href="/admin/logout" className="font-medium text-black/55 hover:text-black">
              Logout
            </Link>
          </nav>
        </div>
      </header>
      <div className="mx-auto max-w-6xl px-6 py-8">{children}</div>
    </main>
  );
}
