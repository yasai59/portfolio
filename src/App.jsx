import { useEffect, useRef, useContext } from "react";
import { FirstSection } from "./sections/FirstSection";
import { Technologies } from "./sections/Technologies";
import { LangContext } from "./context/LangContext";
import { Bob } from "./components/Bob/Bob";
import { AboutMe } from "./sections/AboutMe";
import { MyProjects } from "./sections/MyProjects";
import { ContactMe } from "./sections/ContactMe";

function App() {
  const all = useRef(null);
  const { setActiveSection } = useContext(LangContext);

  useEffect(() => {
    all.current.addEventListener("scroll", (e) => {
      if (e.target.scrollTop % window.innerHeight < 10) {
        const section = Math.floor(e.target.scrollTop / window.innerHeight);
        setActiveSection(section);
      }
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowDown") {
        const options = {
          top: window.innerHeight,
          behavior: "smooth",
        };
        all.current.scrollBy(options);
      } else if (e.key === "ArrowUp") {
        const options = {
          top: -window.innerHeight,
          behavior: "smooth",
        };
        all.current.scrollBy(options);
      }
    });

    return () => {
      all.current.removeEventListener("scroll", () => {});
      document.removeEventListener("keydown", () => {});
    };
  }, []);

  return (
    <>
      {/* esto es para que carguen antes las fuentes del japonés */}
      <p className="mintsoda absolute opacity-0">Hola</p>
      <p className="bestTen absolute opacity-0">Hola</p>
      <div
        className="relative w-full h-screen overflow-auto snap-y snap-mandatory"
        ref={all}
      >
        <div className="container m-auto">
          <Bob />
          <FirstSection all={all} />
          <Technologies />
          <AboutMe />
          <MyProjects />
          <ContactMe />
        </div>
      </div>
    </>
  );
}

export default App;
