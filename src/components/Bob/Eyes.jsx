import { useRef } from "react";

import "./Eyes.css";
import { useEffect } from "react";
import { useContext } from "react";
import { LangContext } from "../../context/LangContext";

export const Eyes = () => {
  const eyes = useRef(null);

  const { lang, activeSection } = useContext(LangContext);

  const onMouseMove = (e) => {
    const { clientX: x, clientY: y } = e;

    const { left, top, right, bottom } = eyes.current.getBoundingClientRect();

    // get the coordinates of the middle of the eyes
    const middleX = left + (right - left) / 2;
    const middleY = top + (bottom - top) / 2;

    const pupils = eyes.current.querySelectorAll(".pupil");

    pupils.forEach((pupil) => {
      const moveX = middleX - x;
      const moveY = middleY - y;

      // move the eyes relative to the mouse position and the middle of the eyes and the width and height of the window
      const width = window.innerWidth;
      const height = window.innerHeight;

      // calculate the percentage of the movement relative to the width and height of the window
      const move = {
        x: (-moveX / width) * 100 - 50,
        y: (-moveY / height) * 100 - 50,
      };

      // limit the movement of the eyes
      if (move.x < -100) move.x = -100;
      if (move.x > 100) move.x = 100;
      if (move.y > 20) move.y = 20;

      pupil.style.transform = `translate(${move.x}%, ${move.y}%)`;

      // calculate the distance between the mouse and the middle of the eyes
    });
  };

  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  useEffect(() => {
    const width = eyes.current.getBoundingClientRect().width;

    const positions = [
      { top: "20px", right: "10px" },
      {
        top: "20px",
        right: `${250 - width / 2}px`,
      },
      { top: "40px", right: `${500 - width / 2}px` },
      {
        top: "40px",
        right: `${450 - width / 2}px`,
      },
    ];

    const { top, right } = positions[activeSection] || positions[0];

    eyes.current.style.top = top;
    eyes.current.style.right = right;
  }, [activeSection]);

  return (
    <div className="eyes" ref={eyes}>
      <div className={`eye ${lang.code == "ja" ? "eye-ja" : ""}`}>
        <div className="background"></div>
        <div className="pupil"></div>
      </div>
      <div className={`eye ${lang.code == "ja" ? "eye-ja" : ""}`}>
        <div className="background"></div>
        <div className="pupil"></div>
      </div>
    </div>
  );
};
