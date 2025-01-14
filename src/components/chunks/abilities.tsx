import AbilitiesModel from "../../models/agents/Abilities.model";
import "../../styles/chunks/Abilities.css";

const Abilities = (ability: AbilitiesModel) => {
  return (
    <>
      {ability.displayIcon && (
        <div className="abilities-info" key={ability.displayName}>
          <img src={ability.displayIcon} />
          <p className="abilities-name">{ability.displayName}</p>
          <p className="abilities-slot">{ability.slot}</p>
        </div>
      )}
    </>
  );
};

export default Abilities;
