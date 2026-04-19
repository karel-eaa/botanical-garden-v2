import { useShallow } from "zustand/shallow";
import { useProgressStore } from "../store/progressStore";

const rooms = [
  { id: 11, label: "The Mediterranean", x: "50%", y: "19%" },
  { id: 12, label: "The Dry Dessert", x: "80%", y: "46%" },
  { id: 13, label: "The Humid Mountain", x: "33%", y: "48%" },
  { id: 14, label: "Tropical Rainforest", x: "53%", y: "79%" },
];

const imageMap = {
  11: "./images/map/mediterranean.png",
  12: "./images/map/dessert.png",
  13: "./images/map/mountain.png",
  14: "./images/map/rainforest.png",
};

export default function Map() {
  const { selectRoom, getRoomPercentage } = useProgressStore(
    useShallow((s) => ({
      selectRoom: s.selectRoom,
      getRoomPercentage: s.getRoomPercentage,
    })),
  );

  return (
    <main className="min-h-screen flex justify-center p-4 bg-[#F1F8E9]">
      <section className="relative h-[800px] w-full max-w-md">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 100 130"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M 8 6 C 8 20, 24 22, 50 22 C 78 22, 92 26, 92 40 C 92 54, 79 58, 66 58 C 50 58, 36 57, 22 62 C 9 66, 6 75, 8 83 C 11 94, 24 100, 54 100"
            fill="none"
            stroke="#CAA77E"
            strokeWidth="8"
            strokeLinecap="round"
          />
        </svg>

        {rooms.map((room) => {
          const imageSrc = imageMap[room.id];
          const percentage = getRoomPercentage(room.id);

          return (
            <article
              key={room.id}
              className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center"
              style={{ left: room.x, top: room.y }}
            >
              <button
                onClick={() => selectRoom(room.id)}
                className="relative h-22 w-22"
                aria-label={room.label}
              >
                <svg
                  className="absolute inset-0 w-full h-full"
                  viewBox="0 0 113 114"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <filter
                      id={`filter-${room.id}`}
                      x="0"
                      y="0"
                      width="112.03"
                      height="113.03"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dx="-2" dy="3" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.580392 0 0 0 0 0.490196 0 0 0 0 0.388235 0 0 0 1 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow"
                        result="shape"
                      />
                    </filter>
                  </defs>
                  <g filter={`url(#filter-${room.id})`}>
                    <circle cx="56.5" cy="57" r="50" fill="#FDFFFA" />
                    <circle
                      cx="56.5"
                      cy="57"
                      r="50"
                      stroke="#CAA77E"
                      strokeWidth="10"
                      fill="none"
                    />
                  </g>
                </svg>
                <img
                  src={imageSrc}
                  alt={room.label}
                  className="absolute inset-0 object-contain"
                />
              </button>
              <p className="mt-2 text-center whitespace-nowrap">
                {room.label} - {percentage}%
              </p>
            </article>
          );
        })}
      </section>
    </main>
  );
}
