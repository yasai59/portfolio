import React from "react";
import { Bob } from "../components/Bob/Bob";
import { LangSelector } from "../components/langSelector/LangSelector";

export const FirstSection = () => {
  return (
    <section id="start" className="h-screen relative section snap-center">
      <div className="flex justify-center items-center flex-col">
        <LangSelector />
        <Bob />
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
          src="/assets/arrowBack.svg"
          alt="arrow-down"
          className="w-[80px] mx-auto rotate-[-90deg]"
        />
      </div>
    </section>
  );
};
