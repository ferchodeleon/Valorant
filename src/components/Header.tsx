import { Link, useLocation } from "react-router-dom";
import Valorant from "../assets/Images/logo-valorant.png";
import "../styles/Header.css";

export const Header = () => {
  const location = useLocation();

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
              <span>Agents</span>
            </Link>
          </li>
          <li>
            <a className="header-menu-a">
              <span>Maps</span>
            </a>
          </li>
          <li>
            <a className="header-menu-a">
              <span>Ranks</span>
            </a>
          </li>
        </ol>
      </menu>
      <div className="flex">
        <img
          className="p-2 w-12 h-12"
          src="https://images.vexels.com/media/users/3/164599/isolated/preview/ce858535b77f22068049aca2457e59ad-spain-flag-language-icon-circle.png"
        />
        <img
          className="p-2 w-12 h-12"
          src="https://images.vexels.com/media/users/3/163966/isolated/preview/6ecbb5ec8c121c0699c9b9179d6b24aa-england-flag-language-icon-circle.png"
        />
      </div>
    </header>
  );
};
