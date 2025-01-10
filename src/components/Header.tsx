import { Link } from "react-router-dom";
import Valorant from "../assets/Images/logo-valorant.png";
import "../styles/Header.css";

export const Header = () => {
  return (
    <header>
      <div className="header-logo">
        <Link to="/">
          <img src={Valorant} alt="Icon of Valorant" />
        </Link>
      </div>
      <menu className="header-menu">
        <ol>
          <li>
            <Link to="/agents">Agents</Link>
          </li>
          <li>
            <a>Maps</a>
          </li>
          <li>
            <a>Ranks</a>
          </li>
        </ol>
      </menu>
    </header>
  );
};
