import { useShallow } from "zustand/shallow";
import { useProgressStore } from "../store/progressStore";

export default function Map() {
  const { selectRoom, getRoomPercentage } = useProgressStore(
    useShallow((s) => ({
      selectRoom: s.selectRoom,
      getRoomPercentage: s.getRoomPercentage,
    })),
  );

  return (
    <main className="min-h-screen flex justify-center p-4 bg-[linear-gradient(0deg,_#F1F8E9_54.33%,_#C3E2FF_100%)]">

      {/* ✅ useMap (camelCase), self-closing */}
      <img src="/botanical-garden-v2/images/map/overview-map.png" useMap="#image-map" alt="World map" />

      {/* ✅ All <area> tags are siblings, each self-closed */}
      <map name="image-map">
        <area target="" alt="rainforest" title="rainforest" coords="175,88,332,245" shape="rect" onClick={() => selectRoom(14)} />
        <area target="" alt="mountain" title="mountain" coords="29,260,177,410" shape="rect" onClick={() => selectRoom(13)} />
        <area target="" alt="dessert" title="dessert" coords="266,398,413,549" shape="rect" onClick={() => selectRoom(12)} />
        <area target="" alt="mediterranean" title="mediterranean" coords="34,500,181,650" shape="rect"  onClick={() => selectRoom(11)} />
      </map>

    </main>
  );
}
