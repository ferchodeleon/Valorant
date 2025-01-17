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
    </header>
  );
};
