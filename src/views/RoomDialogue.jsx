import { useState } from "react"
import { useProgressStore } from "../store/progressStore"
import { useShallow } from "zustand/shallow"

export default function RoomDialogue() {

    const { roomScript, goToHint } = useProgressStore(useShallow(s => ({
        roomScript: s.roomScript,
        goToHint: s.goToHint
    })))

    let [step, setStep] = useState(0)

    return <>
        <p onClick={() => {
            if(step >= Object.keys(roomScript).length - 1) {
                goToHint()
            } else {
                setStep(step + 1)
            }
        }}>{roomScript[step]}</p>
    </>
}