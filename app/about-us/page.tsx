import { Navbar } from "@/components/sections/Navbar";
import { WhoWeAre } from "@/components/sections/WhoWeAre";
import { Footer } from "@/components/sections/Footer";

export default function AboutUsPage() {
  return (
    <div className="min-h-dvh w-full min-w-0 overflow-x-hidden bg-[#151515]">
      <Navbar />
      <main className="pt-24">
        <WhoWeAre />
      </main>
      <Footer />
    </div>
  );
}
