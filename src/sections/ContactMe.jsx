import React from "react";

export const ContactMe = () => {
  const handleClick = () => {};

  return (
    <div className="h-screen snap-center relative">
      <div className="give-a-cookie flex flex-col items-center">
        <p className="pixel text-white text-center text-2xl">
          Give Bob a cookie
        </p>
        <img
          src="/assets/cookie.png"
          style={{
            width: "150px",
          }}
        />
      </div>
    </div>
  );
};
