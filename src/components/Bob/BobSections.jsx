import React from "react";
import { useContext } from "react";
import { LangContext } from "../../context/LangContext";

const ContactItem = ({ text, img }) => {
  return (
    <div className="flex items-center me-5">
      <img src={`/assets/${img}`} alt="" className="w-20 h-20 me-10" />
      <p className="pixel text-light text-2xl">{text}</p>
    </div>
  );
};

export const BobSections = ({ index }) => {
  const { lang } = useContext(LangContext);

  const section = [
    // seccion 0 - Introduccion
    <div className="titles">
      <h1
        style={{
          fontSize: "10rem",
        }}
      >
        <span className="fill">{lang.code == "en" ? "HI I'M" : "私は"}</span>
        <br />
        <span className="void">
          ALEJANDRO
          <br /> VIDAL <br /> CASADO
        </span>
      </h1>
    </div>,
    // seccion 1 - Tecnologias
    <div className="titles grid place-items-center h-full w-full">
      <h1
        className={`text-center`}
        style={{
          fontSize: `${lang.code == "en" ? 10 : 7}rem`,
        }}
      >
        <span className="fill">
          {lang.code == "en" ? "FULLSTACK" : "フルスタック"}
        </span>{" "}
        <br />
        <span className="void">
          {lang.code == "en" ? "DEVELOPER" : "デベロッパー"}
        </span>
      </h1>
    </div>,
    // seccion 2 - Sobre mi
    <div className="titles grid place-items-center h-full w-full">
      <h1
        style={{
          fontSize: `${lang.code == "en" ? 10 : 7}rem`,
        }}
      >
        <span className="void">{lang.code == "en" ? "ABOUT" : "私に"}</span>{" "}
        <br />
        <span
          className={`fill`}
          style={{
            marginLeft: `${lang.code == "en" ? "300px" : "200px"}`,
          }}
        >
          {lang.code == "en" ? "ME" : "ついて"}
        </span>
      </h1>
    </div>,
    // seccion 3 - Proyectos
    <div className="titles grid place-items-center h-full w-full">
      <h1
        className={`text-center`}
        style={{
          fontSize: `${lang.code == "en" ? 10 : 7}rem`,
        }}
      >
        <span className="void">{lang.code == "en" ? "MY" : "私の"}</span> <br />
        <span
          className="void"
          style={{
            fontSize: `${lang.code == "en" ? 10 : 6}rem`,
          }}
        >
          {lang.code == "en" ? "PROJECTS" : "プロジェクト"}
        </span>
      </h1>
    </div>,
    // seccion 4 - Contacto
    <div className="h-full w-full">
      <div className="flex flex-col h-full p-10 pt-0">
        <h1
          className={`text-center mt-5 titles`}
          style={{
            fontSize: `${lang.code == "en" ? 10 : 7}rem`,
          }}
        >
          <span className="void">
            {lang.code == "en" ? "CONTACT" : "私に"}{" "}
          </span>
          <span className="fill">{lang.code == "en" ? "ME" : "連絡して"}</span>
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
