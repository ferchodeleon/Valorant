import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Valorant from "../assets/Images/logo-valorant.png";
import "../styles/Header.css";

export const Header = () => {
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleLanguageChange = async (language: string) => {
    setIsTransitioning(true);
    i18n.changeLanguage(language);
    localStorage.setItem("language", language);

    await new Promise((resolve) => setTimeout(resolve, 100));
    window.location.reload();
    setIsTransitioning(false);
  };

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    } else {
      localStorage.setItem("language", "en");
      i18n.changeLanguage("en");
    }
  }, [i18n]);

  return (
    <header className={isTransitioning ? "transitioning" : ""}>
      <div className="header-logo">
        <Link to="/">
          <img src={Valorant} alt="Icon of Valorant" />
        </Link>
      </div>

      <div className="language-buttons">
        <button
          className={`${
            i18n.language === "es" ? "border-b-4" : ""
          } cursor-pointer transition-all duration-300`}
          onClick={() => handleLanguageChange("es")}
          disabled={i18n.language === "es" || isTransitioning}
        >
          <img
            className="p-2 w-10 h-10 transition-transform duration-300 hover:scale-110"
            src="https://images.vexels.com/media/users/3/164599/isolated/preview/ce858535b77f22068049aca2457e59ad-spain-flag-language-icon-circle.png"
            alt="Spanish"
          />
        </button>
        <button
          className={`${
            i18n.language === "en" ? "border-b-4" : ""
          } cursor-pointer transition-all duration-300`}
          onClick={() => handleLanguageChange("en")}
          disabled={i18n.language === "en" || isTransitioning}
        >
          <img
            className="p-2 w-10 h-10 transition-transform duration-300 hover:scale-110"
            src="https://images.vexels.com/media/users/3/163966/isolated/preview/6ecbb5ec8c121c0699c9b9179d6b24aa-england-flag-language-icon-circle.png"
            alt="English"
          />
        </button>
      </div>

      <div
        className="hamburger-menu"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <div className={`hamburger-line ${isMenuOpen ? "open" : ""}`}></div>
        <div className={`hamburger-line ${isMenuOpen ? "open" : ""}`}></div>
      </div>

      <nav className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
        <ul>
          <li className={location.pathname === "/agents" ? "active" : ""}>
            <Link to="/agents" onClick={() => setIsMenuOpen(false)}>
              <span>{t("agents")}</span>
            </Link>
          </li>
          <li className={location.pathname === "/maps" ? "active" : ""}>
            <Link to="/maps" onClick={() => setIsMenuOpen(false)}>
              <span>{t("maps")}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
