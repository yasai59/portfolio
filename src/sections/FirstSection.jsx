import React from "react";
import { Bob } from "../components/Bob/Bob";
import { LangSelector } from "../components/langSelector/LangSelector";

export const FirstSection = () => {
  return (
    <section
      id="start"
      className="flex justify-center items-center mt-10 flex-col"
    >
      <LangSelector />
      <Bob />
    </section>
  );
};
