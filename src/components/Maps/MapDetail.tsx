// import { useParams } from "react-router-dom";
import { AgentHttpService } from "../../services/agents.http.service";
import { Maps } from "../../models/maps/Maps.model";
import { useEffect, useState } from "react";

import "../../styles/MapDetail.css";

const MapDetail = ({ mapId }: { mapId: string }) => {
  const [map, setMap] = useState<Maps | null>(null);
  // const { mapId } = useParams();

  const dataMap = new AgentHttpService();

  const getMap = async () => {
    if (mapId != null) {
      const map = await dataMap.getMapById(mapId);
      setMap(map);
    }
  };

  useEffect(() => {
    getMap();
  }, []);

  return (
    <section className="map-detail__container">
      <h2>{map?.displayName}</h2>

      <div className="map-detail__info">
        <p>{map?.tacticalDescription}</p>
        <img src={map?.listViewIcon} alt="Image of the map" />
        <p>{map?.coordinates}</p>
      </div>

      <div className="map-detail__images">
        <img src={map?.displayIcon} alt={map?.displayName} />
        <img src={map?.splash} alt={map?.displayName} />
      </div>
    </section>
  );
};

export default MapDetail;
