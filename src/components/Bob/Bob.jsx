import React from "react";
import "./Bob.css";
import { Eyes } from "./Eyes";

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
    // seccion 2 - Sobre mi
    // seccion 3 - Proyectos
    // seccion 4 - Contacto
  ];

  return section[index];
};

export const Bob = () => {
  return (
    <div className="bob">
      <Section index={0} />
      <Eyes />
      <div className="line line-1"></div>
      <div className="line line-2"></div>
      <div className="line line-3"></div>
      <div className="bob-shadow"></div>
    </div>
  );
};
