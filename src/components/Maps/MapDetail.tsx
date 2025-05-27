// import { useParams } from "react-router-dom";
import { AgentHttpService } from "../../services/agents.http.service";
import { Maps } from "../../models/maps/Maps.model";
import { useEffect, useState } from "react";

import "../../styles/MapDetail.css";
import { t } from "i18next";

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
      <h2 className="map-detail__title">{map?.displayName}</h2>

      <div className="map-detail__info">
        <p>
          {map?.tacticalDescription != null
            ? map?.tacticalDescription
            : `${t("noDescription")}`}
        </p>
        <img src={map?.listViewIcon} alt="Image of the map" />
        <p>
          {map?.coordinates != null
            ? map?.coordinates
            : `${t("noCoordinates")}`}
        </p>
      </div>

      <div className="map-detail__images">
        <img src={map?.displayIcon} alt={map?.displayName} />
        <img src={map?.splash} alt={map?.displayName} />
      </div>

      <h3 className="zona-title">{t("interestAreas")}</h3>

      <div className="map-detail-callouts">
        {map?.callouts.map((region) => (
          <div className="map-detail-callouts-item">
            <p>
              Nombre: <span>{region.regionName}</span>
            </p>
            <p>
              Zona: <span>{region.superRegionName}</span>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MapDetail;
