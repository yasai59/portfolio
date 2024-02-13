import React from "react";
import { MiniBob } from "../components/mini-bob/MiniBob";

export const MyProjects = () => {
  return (
    <div className="flex justify-between h-screen relative snap-center px-28">
      <div className="h-full flex flex-col justify-evenly">
        <MiniBob text="wysi727" href="https://wysi727.com/" />
        <MiniBob
          text="Cheese (work in progress)"
          href="https://github.com/yasai59/Cheese-web"
        />
        <MiniBob
          text="Nginx-manager (work in progress)"
          href="https://github.com/yasai59/nginx-manager"
        />
      </div>
      <div className="h-full flex flex-col justify-evenly ">
        <MiniBob
          text="Jana Vilatrons"
          href="https://jana-vilatrons.yasai59.com/"
        />
        <MiniBob text="Netsai" href="https://netsai.yasai59.com/" />
        <MiniBob text="Pokedu" href="https://pokedu.yasai59.com/" />
      </div>
    </div>
  );
};
