import { Link } from "react-router-dom";
import Valorant from "../assets/valorant.png";
import "../styles/Header.css";

export const Header = () => {
  return (
    <header>
      <div className="header-logo">
        <Link to="/">
          <img src={Valorant} alt="Icon of Valorant" />
        </Link>
      </div>
      <ol>
        <li>
          <Link to="/agents">Agents</Link>
        </li>
        <li>Maps</li>
        <li>Ranks</li>
      </ol>
    </header>
  );
};
