import React from "react";
import "./Bob.css";
import { Eyes } from "./Eyes";
import { useEffect } from "react";
import { useContext } from "react";
import { LangContext } from "../../context/LangContext";
import { useRef } from "react";

const ContactItem = ({ text, img }) => {
  return (
    <div className="flex items-center me-5">
      <img src={`/assets/${img}`} alt="" className="w-20 h-20 me-10" />
      <p className="pixel text-light text-2xl">{text}</p>
    </div>
  );
};

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
    <div className="titles grid place-items-center h-full w-full">
      <h1 className="text-[160px]">
        <span className="void">ABOUT</span> <br />
        <span className="fill ms-[300px]">ME</span>
      </h1>
    </div>,
    // seccion 3 - Proyectos
    <div className="titles grid place-items-center h-full w-full">
      <h1 className="text-[160px] text-center">
        <span className="void">MY</span> <br />
        <span className="void">PROJECTS</span>
      </h1>
    </div>,
    // seccion 4 - Contacto
    <div className="h-full w-full">
      <div className="flex flex-col h-full p-10 pt-0">
        <h1 className="text-[160px] text-center titles mt-5">
          <span className="void">CONTACT </span>
          <span className="fill">ME</span>
        </h1>
        <div className="grid grid-cols-2 grow p-10">
          <div className="border-r-2 border-light flex flex-col items-end h-full">
            <div className="flex flex-col h-full justify-around">
              <ContactItem
                img="envelope.png"
                text="alexvidalcasado@gmail.com"
              />
              <ContactItem img="linkedin-logo.png" text="yasai" />
              <ContactItem img="github-logo.png" text="yasai59" />
            </div>
          </div>
          <div className="border-l-2 border-light flex flex-col ps-10 h-full">
            <div className="flex flex-col h-full justify-around">
              <ContactItem img="insta-logo.png" text="yasaii69" />
              <ContactItem img="x-logo.png" text="Yasai59_" />
              <ContactItem img="discord-logo.png" text="y4541" />
            </div>
          </div>
        </div>
      </div>
    </div>,
  ];

  return section[index];
};

export const Bob = () => {
  const { activeSection } = useContext(LangContext);

  const bobWrapper = useRef(null);

  useEffect(() => {
    const height = window.innerHeight;
    const width = window.innerWidth;

    const left = ["50vw", `${width - 500}px`, "700px"];

    bobWrapper.current.style.top = `${height * activeSection + height / 2}px`;
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
        <Section index={activeSection} />
        <Eyes />
        <div className="bob-shadow"></div>
        <div className="line line-1"></div>
        <div className="line line-2"></div>
        <div className="line line-3"></div>
      </div>
    </div>
  );
};
