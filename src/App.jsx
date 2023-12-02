import { FirstSection } from "./sections/FirstSection";
import { Technologies } from "./sections/Technologies";

function App() {
  return (
    <div className="relative w-full h-screen overflow-auto snap-y snap-mandatory">
      <FirstSection />
      <Technologies />
    </div>
  );
}

export default App;
