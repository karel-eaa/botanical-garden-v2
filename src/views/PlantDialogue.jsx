import { useState } from "react";
import { useProgressStore } from "../store/progressStore";
import { useShallow } from "zustand/shallow";

export default function PlantDialogue() {
  const { plantScript, goToHintAfterDialogue, getCurrentRoom } = useProgressStore(
    useShallow((s) => ({
      plantScript: s.plantScript,
      goToHintAfterDialogue: s.goToHintAfterDialogue,
      getCurrentRoom: s.getCurrentRoom,
    })),
  );

  let [step, setStep] = useState(0);

  // Interactive Images for every Room
  const images = {
    11: "bg-[url('/images/room/med.png')]",
    12: "bg-[url('/images/room/des.png')]",
    13: "bg-[url('/images/room/hum.png')]",
    14: "bg-[url('/images/room/trop.png')]",
  };
  const gardener = `${import.meta.env.BASE_URL}images/instruction/InstructionPagePt2.png`;

  return (
    <main
      className={`${images[getCurrentRoom()] || "bg-gray-200"} min-h-screen bg-cover bg-center bg-no-repeat`}
    >
      <div className="flex flex-col justify-end items-center p-8 text-center">
        <img
          src={gardener}
          alt="gardener"
          height={500}
          width={300}
          className="fixed bottom-[25%]"
        />
        <p
          onClick={() => {
            if (step >= Object.keys(plantScript).length - 1) {
              goToHintAfterDialogue();
            } else {
              setStep(step + 1);
            }
          }}
          className="flex bg-white rounded-[50px] border-[5px] border-[#F2DBCD] fixed bottom-[10%] p-[24px] h-[140px] w-[400px] justify-center items-center"
        >
          {plantScript[step]}
        </p>
      </div>
    </main>
  );
}
