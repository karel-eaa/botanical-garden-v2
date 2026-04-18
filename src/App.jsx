import { useProgressStore } from "./store/progressStore";
import LandingPage from "./views/LandingPage";
import LandingPage2 from "./views/LandingPage2";
import LandingPage3 from "./views/LandingPage3";
import LandingPage4 from "./views/LandingPage4";
import PlantDialogue from "./views/PlantDialogue";
import Hint from "./views/Hint";
import Map from "./views/Map";
import Scanner from "./views/Scanner";
import WrongScan from "./views/WrongScan";
import RoomDialogue from "./views/RoomDialogue";

function App() {
  const view = useProgressStore((s) => s.view);

  if (view === "landing") return <LandingPage />;
  if (view === "landing2") return <LandingPage2 />;
  if (view === "landing3") return <LandingPage3 />;
  if (view === "landing4") return <LandingPage4 />;
  if (view === "map") return <Map />;
  if (view === "scanner") return <Scanner />;
  if (view === "roomDialogue") return <RoomDialogue />;
  if (view === "plantDialogue") return <PlantDialogue />;
  if (view === "hint") return <Hint />;
  if (view === "wrong") return <WrongScan />;

  return <LandingPage />;
}

export default App;
