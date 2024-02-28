import React from "react";
import { useState } from "react";
import { useRef } from "react";

export const ContactMe = () => {
  const divRef = useRef(null);
  const [time, setTime] = useState(0);

  const preventDrag = (e) => {
    e.preventDefault();
  };

  const handleClick = (e) => {
    setTime(time + 1);

    let audio = new Audio(
      time === 5 ? "/assets/pou_na.mp3" : "/assets/eat.mp3"
    );
    if (time === 5) {
      setTime(0);
    }

    const cookieEat = document.createElement("img");
    cookieEat.src = "/assets/cookie.png";
    cookieEat.classList.add("gotoCenter");
    setTimeout(() => {
      audio.play();
      cookieEat.remove();
    }, 400);

    divRef.current.appendChild(cookieEat);
  };

  return (
    <div className="h-screen snap-center relative">
      <div className="give-a-cookie flex flex-col items-center">
        <p className="pixel text-white text-center text-xl">
          Give Bob a cookie
        </p>
        <div ref={divRef}>
          <img
            src="/assets/cookie.png"
            style={{
              width: "150px",
            }}
            onClick={handleClick}
            onDragStart={preventDrag}
          />
        </div>
      </div>
    </div>
  );
};
