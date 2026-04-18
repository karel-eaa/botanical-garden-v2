import { useShallow } from "zustand/shallow"
import { useProgressStore } from "../store/progressStore"

export default function Hint() {

    const { backToMap, currentRoom, currentPlantId, goToScanner } = useProgressStore(useShallow(s => ({
        backToMap: s.backToMap,
        currentRoom: s.currentRoom,
        currentPlantId: s.currentPlantId,
        goToScanner: s.goToScanner
    })))

    return <>
        <button onClick={() => backToMap()}>Back To Map</button>
        <h1>Room {currentRoom} selected</h1>
        <h1>Hint</h1>
        <img style={{ width: "200px" }} src={`/botanical-garden-v2/images/${currentRoom}/${currentPlantId}/0.webp`} alt="plant-img" />
        <button onClick={() => goToScanner()}>Go To Scanner</button>
    </>
}