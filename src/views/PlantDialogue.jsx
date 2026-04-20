import { useState } from "react";
import { useProgressStore } from "../store/progressStore";
import { useShallow } from "zustand/shallow";

export default function PlantDialogue() {
  const { plantScript, goToHintAfterDialogue } = useProgressStore(
    useShallow((s) => ({
      plantScript: s.plantScript,
      goToHintAfterDialogue: s.goToHintAfterDialogue,
    })),
  );

  let [step, setStep] = useState(0);

  return (
    <main className="bg-[#F1F8E9]">
      <p
        onClick={() => {
          if (step >= Object.keys(plantScript).length - 1) {
            goToHintAfterDialogue();
          } else {
            setStep(step + 1);
          }
        }}
      >
        {plantScript[step]}
      </p>
    </main>
  );
}
