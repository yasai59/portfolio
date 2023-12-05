import React from "react";
import "./Bob.css";
import { Eyes } from "./Eyes";
import { useEffect } from "react";
import { useContext } from "react";
import { LangContext } from "../../context/LangContext";
import { useRef } from "react";
import { BobSections } from "./BobSections";
import { getBobSize } from "../../helpers/getBobSize";

export const Bob = () => {
  const { activeSection } = useContext(LangContext);

  const bobWrapper = useRef(null);

  useEffect(() => {
    const { top, left, width } = getBobSize(activeSection);
    bobWrapper.current.style.top = `${top}`;
    bobWrapper.current.style.left = `${left}`;
    bobWrapper.current.style.width = `${width}`;
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
