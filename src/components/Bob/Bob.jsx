import React from "react";
import "./Bob.css";
import { Eyes } from "./Eyes";
import { useEffect } from "react";
import { useContext } from "react";
import { LangContext } from "../../context/LangContext";
import { useRef } from "react";
import { BobSections } from "./BobSections";
import { getBobSize } from "../../helpers/getBobSize";

const BobSays = ({ text }) => {
  if (!text) {
    return <></>;
  }

  return (
    <div className="bob-says absolute bottom-[100%] w-full">
      <p className="bob-talk text-light text-xl text-center w-[40rem]">
        {text}
      </p>
      <img src="/assets/line.svg" className="ms-[20rem]" />
    </div>
  );
};

export const Bob = () => {
  const { activeSection, lang } = useContext(LangContext);

  const bobWrapper = useRef(null);

  useEffect(() => {
    const { top, left, width, height, display } = getBobSize(activeSection);
    bobWrapper.current.style.top = `${top}`;
    bobWrapper.current.style.left = `${left}`;
    bobWrapper.current.style.width = `${width}`;
    bobWrapper.current.style.height = `${height}`;
    bobWrapper.current.style.display = `${display}`;
  }, [activeSection]);

  let bobLines = [
    lang.code == "en" ? "This is Bob" : "ボブだ",
    lang.code == "en"
      ? "Bob will accompany you during your stay"
      : "ご滞在中はボブが同行",
    lang.code == "en"
      ? "Bob wants to explain more about me"
      : "ボブは私についてもっと説明したい",
    null,
    lang.code == "en"
      ? "thank you for staying till the end"
      : "最後まで残ってくれてありがとう",
  ];

  return (
    <div className="bob-wraper" ref={bobWrapper}>
      <div className="bob">
        <BobSections index={activeSection} />
        <Eyes />
        <div className="bob-shadow"></div>
        <div className="line line-1"></div>
        <div className="line line-2"></div>
        <div className="line line-3"></div>
        <BobSays text={bobLines[activeSection]} />
      </div>
    </div>
  );
};
