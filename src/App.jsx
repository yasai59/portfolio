import { useRef } from "react";
import { FirstSection } from "./sections/FirstSection";
import { Technologies } from "./sections/Technologies";
import { useEffect } from "react";
import { useContext } from "react";
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
      if (e.target.scrollTop % window.innerHeight === 0) {
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
      <div
        className="relative w-full h-screen overflow-auto snap-y snap-mandatory"
        ref={all}
      >
        <Bob />
        <FirstSection />
        <Technologies />
        <AboutMe />
        <MyProjects />
        <ContactMe />
      </div>
    </>
  );
}

export default App;
