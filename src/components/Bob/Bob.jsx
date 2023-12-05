import React from "react";
import "./Bob.css";
import { Eyes } from "./Eyes";
import { useEffect } from "react";
import { useContext } from "react";
import { LangContext } from "../../context/LangContext";
import { useRef } from "react";
import { BobSections } from "./BobSections";

export const Bob = () => {
  const { activeSection } = useContext(LangContext);

  const bobWrapper = useRef(null);

  useEffect(() => {
    const height = window.innerHeight;
    const width = window.innerWidth;

    const left = ["50vw", `${width - 500}px`, "700px"];

    bobWrapper.current.style.top = `${
      height * activeSection + height / 2 - 50
    }px`;
    bobWrapper.current.style.left = left[activeSection] || "50vw";

    if (activeSection === 3) {
      bobWrapper.current.style.width = "900px";
    } else if (activeSection === 4) {
      bobWrapper.current.style.width = "1300px";
    } else {
      bobWrapper.current.style.width = "700px";
    }
  }, [activeSection]);

  return (
    <div className="bob-wraper" ref={bobWrapper}>
      <div className="bob">
        <BobSections index={activeSection} />
        <Eyes />
        <div className="bob-shadow"></div>
        <div className="line line-1"></div>
        <div className="line line-2"></div>
        <div className="line line-3"></div>
      </div>
    </div>
  );
};
