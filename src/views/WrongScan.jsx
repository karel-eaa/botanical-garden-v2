import { useShallow } from "zustand/shallow"
import { useProgressStore } from "../store/progressStore"

export default function WrongScan() {

    const { goToHint } = useProgressStore(useShallow(s => ({
        goToHint: s.goToHint
    })))

    return <>
        <h1>Wrong Scan</h1>
        <button onClick={() => goToHint()}>Back To Hint</button>
    </>
}