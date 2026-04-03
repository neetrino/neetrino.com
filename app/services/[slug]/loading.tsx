/**
 * Route transition feedback for individual service pages.
 */
export default function ServiceDetailLoading() {
  return (
    <div className="min-h-dvh w-full bg-[#151515]" aria-busy="true" aria-label="Loading service">
      <div className="h-0.5 w-full animate-pulse bg-white/15" />
    </div>
  );
}
