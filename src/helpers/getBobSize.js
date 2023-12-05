export const getBobSize = (activeSection) => {
  let bobWidth;
  let bobLeft;
  let bobTop;

  const height = window.innerHeight;
  const width = window.innerWidth;

  const left = ["50vw", `${width - 500}px`, "700px"];

  bobTop = `${height * activeSection + height / 2 - 50}px`;
  bobLeft = left[activeSection] || "50vw";

  if (activeSection === 3) {
    bobWidth = "900px";
  } else if (activeSection === 4) {
    bobWidth = "1300px";
  } else {
    bobWidth = "700px";
  }

  return { width: bobWidth, left: bobLeft, top: bobTop };
};
