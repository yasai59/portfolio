import "./MiniBob.css";

export const MiniBob = ({ text, href }) => {
  const handleClick = () => {
    if (!href) return;
    window.open(href, "_blank");
  };

  return (
    <div
      className={`mini-bob ${href ? "mini-bob-link" : ""}`}
      onClick={handleClick}
    >
      <div className="mini-bob-content text-center">{text}</div>
      <div className="mini-line mini-line-1"></div>
      <div className="mini-line mini-line-2"></div>
      <div className="mini-line mini-line-3"></div>
    </div>
  );
};
