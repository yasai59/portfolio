import { useState, useRef, useContext } from "react";

import { LangContext } from "../../context/LangContext";
import "./LangSelector.css";

const SelectedLang = ({ lang }) => {
  return (
    <div className="text-light self-end text-xl border-light border-2 w-[150px] h-[45px] flex p-[5px] items-center justify-between cursor-pointer">
      <img src="/assets/www.png" alt="language-icon" className="w-[30px]" />
      <p>{lang.name}</p>
      <img src="/assets/arrowDown.png" className="w-[30px]" />
    </div>
  );
};

export const LangSelector = () => {
  const { lang, changeLang, langList } = useContext(LangContext);

  const [visible, setVisible] = useState(false);
  const div = useRef(null);

  const handleFocus = () => {
    setVisible(true);
  };

  const handleBlur = () => {
    setVisible(false);
  };

  const handleClick = (index) => {
    setVisible(false);
    div.current.blur();
    changeLang(index);
  };

  return (
    <div className="w-full flex items-center language mt-5 mb-5">
      <div
        className="container flex justify-end relative border-collapse"
        tabIndex="0"
        onFocus={handleFocus}
        onBlur={handleBlur}
        ref={div}
      >
        <SelectedLang lang={lang} />

        <div
          className={`lang-selector absolute top-[100%] text-white ${
            visible ? "" : "hidden"
          } `}
        >
          {langList.map((lang, index) => (
            <div
              key={index}
              className="lang-selector-item w-[150px] h-[45px] flex items-center ps-[10px] border-2 border-white my-[-2px] cursor-pointer"
              onClick={() => handleClick(index)}
            >
              {lang.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
