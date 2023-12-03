import React from "react";
import { MiniBob } from "../components/mini-bob/MiniBob";

export const Technologies = () => {
  return (
    <div className="h-screen relative section snap-center grid grid-cols-2 place-items-center">
      <div className="grid grid-cols-2 place-items-center h-[80%] w-full ms-10">
        <MiniBob text={"React, Vue, Angular"} />
        <MiniBob text={"Node, Express, Nest"} />
        <MiniBob text={"HTML + CSS+ Tailwind"} />
        <MiniBob text={"NextJS, Laravel"} />
        <MiniBob text={"SQL, noSQL"} />
        <MiniBob text={"JavaScript, PHP"} />
      </div>
    </div>
  );
};
