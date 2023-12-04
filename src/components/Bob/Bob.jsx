import React from "react";
import "./Bob.css";
import { Eyes } from "./Eyes";
import { useEffect } from "react";
import { useContext } from "react";
import { LangContext } from "../../context/LangContext";
import { useRef } from "react";

const Section = ({ index }) => {
  const section = [
    // seccion 0 - Introduccion
    <div className="titles">
      <h1 className="text-[160px]">
        <span className="fill">HI I'M</span> <br />
        <span className="void">
          ALEJANDRO <br /> VIDAL <br /> CASADO
        </span>
      </h1>
    </div>,
    // seccion 1 - Tecnologias
    <div className="titles grid place-items-center h-full w-full">
      <h1 className="text-[160px] text-center">
        <span className="fill">FULLSTACK</span> <br />
        <span className="void">DEVELOPER</span>
      </h1>
    </div>,
    // seccion 2 - Sobre mi
    // seccion 3 - Proyectos
    // seccion 4 - Contacto
  ];

  return section[index];
};

export const Bob = () => {
  const { activeSection } = useContext(LangContext);

  const bobWrapper = useRef(null);

  useEffect(() => {
    const height = window.innerHeight;
    const width = window.innerWidth;

    const left = ["50vw", `${width - 500}px`];

    bobWrapper.current.style.top = `${height * activeSection + height / 2}px`;
    bobWrapper.current.style.left = left[activeSection];
  }, [activeSection]);

  return (
    <div className="bob-wraper" ref={bobWrapper}>
      <div className="bob">
        <Section index={activeSection} />
        <Eyes />
        <div className="line line-1"></div>
        <div className="line line-2"></div>
        <div className="line line-3"></div>
        <div className="bob-shadow"></div>
      </div>
    </div>
  );
};
