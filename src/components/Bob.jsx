import React from "react";
import "./Bob.css";
import { Eyes } from "./eyes";

export const Bob = () => {
  return (
    <div className="bob">
      <div className="content">
        <h1 className="text-[160px]">
          <span className="fill">HI I'M</span> <br />
          <span className="void">
            ALEJANDRO <br /> VIDAL <br /> CASADO
          </span>
        </h1>
      </div>
      <Eyes />
      <div className="line line-1"></div>
      <div className="line line-2"></div>
      <div className="line line-3"></div>
      <div className="bob-shadow"></div>
    </div>
  );
};
