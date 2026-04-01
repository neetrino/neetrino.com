/**
 * Lightweight route transition feedback for /contact.
 */
export default function ContactLoading() {
  return (
    <div className="min-h-dvh w-full bg-[#151515]" aria-busy="true" aria-label="Loading page">
      <div className="h-0.5 w-full animate-pulse bg-white/15" />
    </div>
  );
}
