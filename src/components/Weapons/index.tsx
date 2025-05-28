import { useEffect, useState } from "react";
import { Weapon } from "../../models/weapons/Weapons";
import { AgentHttpService } from "../../services/agents.http.service";
import "../../styles/Weapons.css";
import Modal from "../Modal/Modal";
import WeaponsDetail from "./WeaponsDetail";

const fetchWeapons = new AgentHttpService();

export const Weapons = () => {
  const [getWeapons, setGetWeapons] = useState<Weapon[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMap, setSelectedMap] = useState<Weapon | null>(null);

  const searchWeapons = async () => {
    try {
      const weapons = await fetchWeapons.getAllWeapons();
      setGetWeapons(weapons);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedMap(null);
  };

  const handleWeaponClick = (weapon: Weapon) => {
    setSelectedMap(weapon);
    setIsModalOpen(true);
  };

  useEffect(() => {
    searchWeapons();
  }, []);

  return (
    <div className="weapons-container">
      {getWeapons.map((weapon) => (
        <div
          key={weapon.uuid}
          className="weapon-card"
          onClick={() => handleWeaponClick(weapon)}
        >
          <img src={weapon.displayIcon} alt={weapon.displayName} />
          <p>{weapon.displayName}</p>
          <div className="weapon-card-info">
            <div className="weapon-card-info-category">
              <p>Category</p>
              <p>
                {weapon.shopData?.categoryText != null
                  ? weapon.shopData?.categoryText
                  : "No category"}
              </p>
            </div>

            <div className="weapon-card-info-cost">
              <p>Cost</p>
              <p>{weapon.shopData?.cost}</p>
            </div>
          </div>
        </div>
      ))}

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        {selectedMap && <WeaponsDetail weaponId={selectedMap.uuid} />}
      </Modal>
    </div>
  );
};
