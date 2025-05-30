import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Translation resources
const resources = {
  en: {
    translation: {
      // English translations
      welcome: "Welcome to Valorant",
      language: "Language",
      agents: "Agents",
      maps: "Maps",
      ranks: "Ranks",
      descriptionHome:
        "A pleasure to have you here, here, you will have information about Valorant ☝️",
      mapsList: "Maps List",
      searchMaps: "Search Maps",
      noDescription: "No description",
      noCoordinates: "No coordinates",
      interestAreas: "Interest Areas",
      weapons: "Weapons",
    },
  },
  es: {
    translation: {
      // Spanish translations
      welcome: "Bienvenido a Valorant",
      language: "Idioma",
      agents: "Agentes",
      maps: "Mapas",
      ranks: "Rangos",
      descriptionHome:
        "Un gusto tenerte por aquí, aquí, tendrás información de Valorant ☝️",
      mapsList: "Lista de mapas",
      searchMaps: "Buscar mapas",
      noDescription: "No hay descripción",
      noCoordinates: "Sin coordenadas",
      interestAreas: "Zonas de interés",
      weapons: "Armas",
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
