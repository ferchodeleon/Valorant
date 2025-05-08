import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Translation resources
const resources = {
  en: {
    translation: {
      // English translations
      welcome: "Welcome",
      language: "Language",
      agents: "Agents",
      maps: "Maps",
      ranks: "Ranks",
      // Add more translations as needed
    },
  },
  es: {
    translation: {
      // Spanish translations
      welcome: "Bienvenido",
      language: "Idioma",
      agents: "Agentes",
      maps: "Mapas",
      ranks: "Rangos",
      // Add more translations as needed
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en", // Default language
    interpolation: {
      escapeValue: false, // React already safes from xss
    },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
  });

export default i18n;
