import "./MiniBob.css";

export const MiniBob = ({ text, href }) => {
  return (
    <div className={`mini-bob ${href ? "mini-bob-link" : ""}`}>
      <div className="mini-bob-content">{text}</div>
      <div className="mini-line mini-line-1"></div>
      <div className="mini-line mini-line-2"></div>
      <div className="mini-line mini-line-3"></div>
    </div>
  );
};
