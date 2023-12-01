import { useContext } from "react";
import { LangContext } from "../../context/LangContext";
import "./LangSelector.css";

export const LangSelector = () => {
  const { lang, changeLang, langList } = useContext(LangContext);

  return (
    <div className="container flex justify-end">
      <div className="text-light self-end">{lang.name}</div>;
    </div>
  );
};
