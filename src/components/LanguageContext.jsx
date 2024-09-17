import React, { createContext, useContext, useState, useEffect } from "react";
import i18n from "@/utils/i18n";

// Crear el contexto
const LanguageContext = createContext();

// Proveedor del contexto
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
      setLanguage(savedLanguage);
    }
  }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLanguage(lng);
    localStorage.setItem("language", lng);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Hook para usar el contexto
export const useLanguage = () => {
  return useContext(LanguageContext);
};
