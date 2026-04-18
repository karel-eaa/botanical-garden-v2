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
    <>
      <button onClick={() => selectRoom(11)} className="font-bold">
        ROOM 11 - {getRoomPercentage(11) + "%"}
      </button>
      <button onClick={() => selectRoom(12)} className="font-bold">
        ROOM 12 - {getRoomPercentage(12) + "%"}
      </button>
      <button onClick={() => selectRoom(13)} className="font-bold">
        ROOM 13 - {getRoomPercentage(13) + "%"}
      </button>
      <button onClick={() => selectRoom(14)} className="font-bold">
        ROOM 14 - {getRoomPercentage(14) + "%"}
      </button>
    </>
  );
}
