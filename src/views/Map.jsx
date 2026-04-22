import { useShallow } from "zustand/shallow";
import { useProgressStore } from "../store/progressStore";

// Coordinates as percentages of the image's natural dimensions (width x height)
// Original coords example: "175,88,332,245" on an image of natural width W and height H
// x1% = 175/W * 100, y1% = 88/H * 100, x2% = 332/W * 100, y2% = 245/H * 100
const ROOM_AREAS = [
  {
    id: 14,
    label: "rainforest",
    style: { left: "40.89%", top: "9.50%", width: "36.68%", height: "16.95%" },
  },
  {
    id: 13,
    label: "mountain",
    style: { left: "6.78%", top: "28.08%", width: "34.58%", height: "16.20%" },
  },
  {
    id: 12,
    label: "dessert",
    style: { left: "62.15%", top: "42.98%", width: "34.35%", height: "16.31%" },
  },
  {
    id: 11,
    label: "mediterranean",
    style: { left: "7.94%", top: "54.00%", width: "34.35%", height: "16.20%" },
  },
];

export default function Map() {
  const { selectRoom, getRoomPercentage } = useProgressStore(
    useShallow((s) => ({
      selectRoom: s.selectRoom,
      getRoomPercentage: s.getRoomPercentage,
    })),
  );

  return (
    <main className="min-h-screen flex justify-center p-4 bg-[linear-gradient(0deg,_#F1F8E9_54.33%,_#C3E2FF_100%)]">
      <div className="relative inline-block">
        <img
          src="/botanical-garden-v2/images/map/overview-map.png"
          alt="Garden map"
          className="block max-w-full h-auto"
        />
        {ROOM_AREAS.map((area) => (
          <div
            key={area.id}
            onClick={() => selectRoom(area.id)}
            title={area.label}
            aria-label={area.label}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && selectRoom(area.id)}
            className="absolute cursor-pointer"
            style={area.style}
          />
        ))}
      </div>
    </main>
  );
}
