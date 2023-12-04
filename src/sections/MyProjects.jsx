import React from "react";
import { MiniBob } from "../components/mini-bob/MiniBob";

export const MyProjects = () => {
  return (
    <div className="flex justify-between h-screen relative snap-center px-28">
      <div className="h-full flex flex-col justify-evenly">
        <MiniBob text="wysi727" />
        <MiniBob text="4 in a row" />
        <MiniBob text="Nginx-manager" />
      </div>
      <div className="h-full flex flex-col justify-evenly ">
        <MiniBob text="Jana Vilatrons" />
        <MiniBob text="Netsai" />
        <MiniBob text="Pokedu" />
      </div>
    </div>
  );
};
