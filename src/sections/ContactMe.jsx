import React from "react";
import { useRef } from "react";

export const ContactMe = () => {
  const divRef = useRef(null);

  const handleClick = (e) => {
    const audio = new Audio("/assets/eat.mp3");
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
        <p className="pixel text-white text-center text-2xl">
          Give Bob a cookie
        </p>
        <div ref={divRef}>
          <img
            src="/assets/cookie.png"
            style={{
              width: "150px",
            }}
            onClick={handleClick}
          />
        </div>
      </div>
    </div>
  );
};
