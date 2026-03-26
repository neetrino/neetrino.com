import { NeetrinoHome } from "@/components/NeetrinoHome";
import { CanvasScaler } from "@/components/CanvasScaler";

export default function Home() {
  return (
    <div className="min-h-dvh w-full min-w-0">
      <CanvasScaler>
        <NeetrinoHome />
      </CanvasScaler>
    </div>
  );
}
