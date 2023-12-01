import { useRef } from "react";

import "./Eyes.css";
import { useEffect } from "react";

export const Eyes = () => {
  const eyes = useRef(null);

  const onMouseMove = (e) => {
    const { clientX: x, clientY: y } = e;

    const { left, top } = eyes.current.getBoundingClientRect();

    const pupils = eyes.current.querySelectorAll(".pupil");

    pupils.forEach((pupil) => {
      const { left: pupilLeft, top: pupilTop } = pupil.getBoundingClientRect();

      const diffX = x - (pupilLeft + left + pupil.offsetWidth / 2);
      const diffY = y - (pupilTop + top + pupil.offsetHeight / 2);
      // move the pupil to make it follow the mouse
    });
  };

  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  });

  return (
    <div className="eyes" ref={eyes}>
      <div className="eye">
        <div className="pupil"></div>
      </div>
      <div className="eye">
        <div className="pupil"></div>
      </div>
    </div>
  );
};
