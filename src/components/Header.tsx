import Valorant from "../assets/valorant.png";
import "../styles/Header.css";

export const Header = () => {
  return (
    <header>
      <div className="header-logo">
        <img src={Valorant} alt="Icon of Valorant" />
      </div>
      <ol>
        <li>Agents</li>
        <li>Maps</li>
        <li>Ranks</li>
      </ol>
    </header>
  );
};
