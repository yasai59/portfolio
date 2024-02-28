import React from "react";
import { MiniBob } from "../components/mini-bob/MiniBob";

export const Technologies = () => {
  return (
    <div className="h-screen relative section snap-center grid grid-cols-1 2xl:grid-cols-2 place-items-center">
      <div className="grid grid-cols-2 place-items-center h-[80%] w-[900px] ms-10 container">
        <MiniBob text={"React, Vue, Angular"} />
        <MiniBob text={"Node, Express, Nest"} />
        <MiniBob text={"HTML, CSS, Tailwind"} />
        <MiniBob text={"NextJS, Laravel"} />
        <MiniBob text={"SQL, noSQL"} />
        <MiniBob text={"JavaScript, PHP"} />
      </div>
      <div id="technologies" className="row-start-1 2xl:col-start-2"></div>
    </div>
  );
};
