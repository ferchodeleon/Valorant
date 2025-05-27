import { useEffect, useState } from "react";
import { Weapon } from "../../models/weapons/Weapons";
import { AgentHttpService } from "../../services/agents.http.service";

const fetchWeapons = new AgentHttpService();

export const Weapons = () => {
  const [getWeapons, setGetWeapons] = useState<Weapon[]>([]);

  const searchWeapons = async () => {
    try {
      const weapons = await fetchWeapons.getAllWeapons();
      setGetWeapons(weapons);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    searchWeapons();
  }, []);

  return (
    <div>
      {getWeapons.map((weapon) => (
        <div key={weapon.uuid}>{weapon.displayName}</div>
      ))}
    </div>
  );
};
