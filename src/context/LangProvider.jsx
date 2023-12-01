import { LangContext } from "./LangContext";
import { useEffect, useState } from "react";
// contexto para el idioma
export const LangProvider = ({ children }) => {
  const [lang, setLang] = useState("en");
  // al cargar la pagina, si no hay idioma en el localstorage, se establece el idioma en ingles
  useEffect(() => {
    const lang = localStorage.getItem("lang");
    if (lang) {
      setLang(JSON.parse(lang));
    } else {
      localStorage.setItem("lang", JSON.stringify(langList[0]));
    }
  }, []);
  // funcion para cambiar el idioma
  const changeLang = (pos) => {
    const lang = langList[pos];
    localStorage.setItem("lang", JSON.stringify(lang));
    setLang(lang);
  };

  const langList = [
    {
      code: "en",
      name: "English",
    },
    {
      code: "ja",
      name: "日本語",
    },
  ];
  // se provee el contexto
  return (
    <LangContext.Provider value={{ lang, changeLang, langList }}>
      {children}
    </LangContext.Provider>
  );
};
