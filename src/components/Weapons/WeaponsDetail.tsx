import { useEffect } from "react";
import { useState } from "react";
import { Weapon } from "../../models/weapons/Weapons";
import { AgentHttpService } from "../../services/agents.http.service";

import "../../styles/chunks/WeaponsDetails.css";

const WeaponsDetail = ({ weaponId }: { weaponId: string }) => {
  const [weapon, setWeapon] = useState<Weapon | null>(null);
  const [selectedSkin, setSelectedSkin] = useState<string | null>(null);

  const dataWeapon = new AgentHttpService();

  const getWeapon = async () => {
    const weaponDetail = await dataWeapon.getWeaponById(weaponId);
    setWeapon(weaponDetail);
  };

  useEffect(() => {
    getWeapon();
  }, []);

  console.log("data ", weapon);

  return (
    <div className="weapon-detail__container">
      <h2>{weapon?.displayName}</h2>
      <img
        src={
          selectedSkin
            ? weapon?.skins?.find((skin) => skin.uuid === selectedSkin)
                ?.displayIcon
            : weapon?.displayIcon
        }
        alt={weapon?.displayName}
      />
      <div className="weapon-detail__info">
        <p>{weapon?.description}</p>
        <p>{weapon?.shopData?.cost}</p>
        <p>{weapon?.shopData?.categoryText}</p>
      </div>
      <div>
        <p>Lista de skins</p>
        <p>Selecciona una skin</p>
        {weapon?.skins?.map((skin) => (
          <div className="weapon-detail__skin" key={skin.uuid}>
            <button onClick={() => setSelectedSkin(skin.uuid)}>
              {skin.displayName}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeaponsDetail;
