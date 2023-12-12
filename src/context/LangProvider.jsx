import { LangContext } from "./LangContext";
import { useEffect, useState } from "react";
// contexto para el idioma
export const LangProvider = ({ children }) => {
  // lista de idiomas
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
  const [lang, setLang] = useState(langList[0]);
  // al cargar la pagina, si no hay idioma en el localstorage, se establece el idioma en ingles

  // funcion para cambiar el idioma
  const changeLang = (pos) => {
    const lang = langList[pos];
    localStorage.setItem("lang", JSON.stringify(lang));
    setLang(lang);
  };

  useEffect(() => {
    const lang = localStorage.getItem("lang");
    if (lang) {
      setLang(JSON.parse(lang));
    } else {
      localStorage.setItem("lang", JSON.stringify(langList[0]));
      changeLang(0);
    }
  }, []);

  // seccion activa (no deberia estar aqui pero no queria crear otro contexto separado para esto)
  const [activeSection, setActiveSection] = useState(0);
  // se provee el contexto
  return (
    <LangContext.Provider
      value={{ lang, changeLang, langList, activeSection, setActiveSection }}
    >
      {children}
    </LangContext.Provider>
  );
};
