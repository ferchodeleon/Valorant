import { useEffect, useState } from "react";

import { AgentHttpService } from "../../services/agents.http.service";
import { Maps } from "../../models/maps/Maps.model";
import LoadingSpinner from "./LoadingSpinner";
import Modal from "../Modal/Modal";
import MapDetail from "./MapDetail";

import "../../styles/MapsList.css";

const getMaps = new AgentHttpService();

const MapsList = () => {
  const [maps, setMaps] = useState<Maps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchMap, setSearchMap] = useState("");
  const [selectedMap, setSelectedMap] = useState<Maps | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleMapClick = (map: Maps) => {
    setSelectedMap(map);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedMap(null);
  };

  const searchMaps = async () => {
    try {
      setLoading(true);
      const data = await getMaps.getAllMaps();
      setMaps(data);
      setLoading(false);
    } catch (error) {
      setError(`Error fetching maps: ${error}`);
      setLoading(false);
    }
  };

  useEffect(() => {
    searchMaps();
  }, []);

  const filteredMaps = maps.filter((map) => {
    return map.displayName.toLowerCase().includes(searchMap.toLowerCase());
  });

  return (
    <section className="maps-list__container">
      <h2 className="maps-list__title">Maps List</h2>
      <input
        className="maps-list__search"
        type="text"
        placeholder="Search maps"
        value={searchMap}
        onChange={(e) => setSearchMap(e.target.value)}
      />
      {loading ? (
        <LoadingSpinner />
      ) : error ? (
        <h2 className="error-message">{error}</h2>
      ) : (
        <div className="maps-list__cards">
          {filteredMaps.map((map) => (
            <div
              key={map.uuid}
              onClick={() => handleMapClick(map)}
              style={{
                backgroundImage: `url(${map.splash})`,
              }}
              className="maps-list__card"
            >
              <div className="maps-list__counter-container">
                <p>{filteredMaps.indexOf(map) + 1}</p>
              </div>

              <div className="maps-list__card-info">
                <h3>{map.displayName}</h3>
              </div>
            </div>
          ))}
        </div>
      )}

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        {selectedMap && <MapDetail mapId={selectedMap.uuid} />}
      </Modal>
    </section>
  );
};

export default MapsList;
