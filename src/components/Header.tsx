import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

// import i18n from "../translation";
import Valorant from "../assets/Images/logo-valorant.png";
import "../styles/Header.css";

export const Header = () => {
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (language: string) => {
    i18n.changeLanguage(language);
    localStorage.setItem("language", language);
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
    <header>
      <div className="header-logo">
        <Link to="/">
          <img src={Valorant} alt="Icon of Valorant" />
        </Link>
      </div>
      <menu className="header-menu">
        <ol>
          <li
            className={`header-menu-a ${
              location.pathname === "/agents" ? "active" : ""
            }`}
          >
            <Link to="/agents">
              <span>{t("agents")}</span>
            </Link>
          </li>
          <li>
            <a className="header-menu-a">
              <span>{t("maps")}</span>
            </a>
          </li>
          <li>
            <a className="header-menu-a">
              <span>{t("ranks")}</span>
            </a>
          </li>
        </ol>
      </menu>
      <div className="flex">
        <button
          className={`${
            i18n.language === "es" ? "border-b-4" : ""
          } cursor-pointer`}
          onClick={() => handleLanguageChange("es")}
        >
          <img
            className="p-2 w-12 h-12"
            src="https://images.vexels.com/media/users/3/164599/isolated/preview/ce858535b77f22068049aca2457e59ad-spain-flag-language-icon-circle.png"
          />
        </button>
        <button
          className={`${
            i18n.language === "en" ? "border-b-4" : ""
          } cursor-pointer`}
          onClick={() => handleLanguageChange("en")}
        >
          <img
            className="p-2 w-12 h-12"
            src="https://images.vexels.com/media/users/3/163966/isolated/preview/6ecbb5ec8c121c0699c9b9179d6b24aa-england-flag-language-icon-circle.png"
          />
        </button>
      </div>
    </header>
  );
};
