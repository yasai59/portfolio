export const getBobSize = (activeSection) => {
  let bobWidth;
  let bobLeft;
  let bobTop;
  let bobHeight;
  let bobDisplay;

  const height = window.innerHeight;
  const width = window.innerWidth;

  let left = ["50vw", `75vw`, "35vw"];
  // detect mobile
  if (width < 768) {
    left = ["50vw", "50vw", "50vw", "50vw"];
  }

  bobTop = `${height * activeSection + height / 2 - 20}px`;
  bobLeft = left[activeSection] || "50vw";
  if (activeSection === 4) {
  } else {
    bobWidth = "fit-content";
  }

  if (activeSection === 2) {
    bobWidth = `44rem`;
  }

  const heights = ["inherit", "60vh", "60vh", "60vh", "60vh"];

  const displays = ["block", "block", width < 768 && "none", "block", "block"];

  bobHeight = heights[activeSection];

  bobDisplay = displays[activeSection];

  return {
    width: bobWidth,
    left: bobLeft,
    top: bobTop,
    height: bobHeight,
    display: bobDisplay,
  };
};
