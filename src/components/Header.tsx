import Valorant from "../assets/valorant.png";

export const Header = () => {
  return (
    <header>
      <div>
        <img src={Valorant} alt="Icon of Valorant" />
      </div>
      <ol>
        <li>Agents</li>
        <li>Maps</li>
      </ol>
    </header>
  );
};
