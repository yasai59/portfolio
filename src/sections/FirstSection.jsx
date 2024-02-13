import React from "react";
import { LangSelector } from "../components/langSelector/LangSelector";

export const FirstSection = ({ all }) => {
  const scrollOnClick = () => {
    console.log("as");
    all.current.scrollBy({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section id="start" className="h-screen relative section snap-center">
      <div className="flex justify-center items-center flex-col">
        <LangSelector />
      </div>
      {/* flecha para indicar el scroll */}
      <div
        className="absolute bottom-10 "
        style={{
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <img
          onClick={scrollOnClick}
          src="/assets/arrowBack.svg"
          alt="arrow-down"
          className="w-[80px] mx-auto rotate-[-90deg] hover:cursor-pointer"
        />
      </div>
    </section>
  );
};
