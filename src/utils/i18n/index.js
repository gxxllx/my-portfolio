import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enLang from "@/utils/i18n/locales/en/en.json";
import esLang from "@/utils/i18n/locales/es/es.json";

const resources = {
  es: {
    translation: esLang,
  },
  en: {
    translation: enLang,
  },
};

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
