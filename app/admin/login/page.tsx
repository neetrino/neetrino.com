import { redirect } from "next/navigation";
import { getCurrentAdminSession } from "@/lib/server/auth/guards";

type AdminLoginPageProps = {
  searchParams?: Promise<{
    error?: string;
    next?: string;
  }>;
};

const LOGIN_ERROR_MESSAGES = {
  invalid: "Invalid email or password.",
  server: "Sign in is temporarily unavailable. Check server auth configuration.",
} as const;

function sanitizeNextPath(nextPath: string | undefined): string {
  if (!nextPath || !nextPath.startsWith("/admin") || nextPath.startsWith("/admin/login")) {
    return "/admin/blog";
  }

  return nextPath;
}

function LoginField({
  label,
  name,
  type,
}: {
  label: string;
  name: string;
  type: "email" | "password";
}) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-white/75">{label}</span>
      <input
        className="mt-2 w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/35 focus:border-[#6a92ff]"
        name={name}
        required
        type={type}
      />
    </label>
  );
}

function getLoginErrorMessage(error: string | undefined): string | null {
  if (error === "server") {
    return LOGIN_ERROR_MESSAGES.server;
  }
  if (error) {
    return LOGIN_ERROR_MESSAGES.invalid;
  }

  return null;
}

function AdminLoginForm({
  errorMessage,
  nextPath,
}: {
  errorMessage: string | null;
  nextPath: string;
}) {
  return (
    <>
      {errorMessage ? (
        <p className="mt-5 rounded-2xl border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm text-red-100">
          {errorMessage}
        </p>
      ) : null}
      <form action="/api/admin/auth/login" method="post" className="mt-8 space-y-5">
        <input type="hidden" name="next" value={nextPath} />
        <LoginField label="Email" name="email" type="email" />
        <LoginField label="Password" name="password" type="password" />
        <button
          className="w-full rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#151515] transition-opacity hover:opacity-90"
          type="submit"
        >
          Sign in
        </button>
      </form>
    </>
  );
}

export default async function AdminLoginPage({ searchParams }: AdminLoginPageProps) {
  const session = await getCurrentAdminSession();
  const resolvedSearchParams = await searchParams;
  const nextPath = sanitizeNextPath(resolvedSearchParams?.next);
  const errorMessage = getLoginErrorMessage(resolvedSearchParams?.error);

  if (session) {
    redirect(nextPath);
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#151515] px-4 py-12 text-white">
      <section className="w-full max-w-md rounded-[28px] border border-white/10 bg-white/[0.04] p-8 shadow-[0_24px_80px_rgba(0,0,0,0.45)]">
        <p className="text-sm font-medium uppercase tracking-[0.16em] text-[#ff7500]">
          Neetrino Admin
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-[-0.03em]">Sign in</h1>
        <p className="mt-3 text-sm leading-relaxed text-white/65">
          Use the admin credentials configured in environment variables.
        </p>

        <AdminLoginForm errorMessage={errorMessage} nextPath={nextPath} />
      </section>
    </main>
  );
}
