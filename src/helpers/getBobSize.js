export const getBobSize = (activeSection) => {
  let bobWidth;
  let bobLeft;
  let bobTop;

  const height = window.innerHeight;
  const width = window.innerWidth;

  const left = ["50vw", `75vw`, "35vw"];

  bobTop = `${height * activeSection + height / 2 - 20}px`;
  bobLeft = left[activeSection] || "50vw";
  if (activeSection === 4) {
    bobWidth = "80rem";
  } else {
    bobWidth = "44rem";
  }

  return { width: bobWidth, left: bobLeft, top: bobTop };
};
