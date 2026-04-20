import { useState } from "react";
import { useProgressStore } from "../store/progressStore";
import { useShallow } from "zustand/shallow";

export default function RoomDialogue() {
  const { roomScript, goToHint, getCurrentRoom } = useProgressStore(
    useShallow((s) => ({
      roomScript: s.roomScript,
      goToHint: s.goToHint,
      getCurrentRoom: s.getCurrentRoom,
    })),
  );
  const images = {
    11: "bg-[url('/images/room/med.png')]",
    12: "bg-[url('/images/room/des.png')]",
    13: "bg-[url('/images/room/hum.png')]",
    14: "bg-[url('/images/room/trop.png')]",
  };
  let [step, setStep] = useState(0);
  return (
    <main
      className={`${images[getCurrentRoom()] || "bg-gray-200"} min-h-screen bg-cover bg-center bg-no-repeat`}
    >
      <div className="flex flex-col justify-end items-center p-8 text-center">
        <p
          onClick={() => {
            if (step >= Object.keys(roomScript).length - 1) {
              goToHint();
            } else {
              setStep(step + 1);
            }
          }}
        >
          {roomScript[step]}
        </p>
      </div>
    </main>
  );
}
