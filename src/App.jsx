import { useProgressStore } from "./store/progressStore"
import PlantDialogue from "./views/PlantDialogue"
import Hint from "./views/Hint"
import Map from "./views/Map"
import Scanner from "./views/Scanner"
import WrongScan from "./views/WrongScan"
import RoomDialogue from "./views/RoomDialogue"

function App() {

  const view = useProgressStore(s => s.view)

  if (view === 'map') return <Map />
  if (view === 'scanner') return <Scanner />
  if (view === 'roomDialogue') return <RoomDialogue />
  if (view === 'plantDialogue') return <PlantDialogue />
  if (view === 'hint') return <Hint />
  if (view === 'wrong') return <WrongScan />
}

export default App
