import { useEffect, useState } from "react";
import { AgentModels } from "../../models/agents/Agents.model";
import { AgentHttpService } from "../../services/agents.http.service";
import { Link } from "react-router-dom";

import "../../styles/Agents.css";
import Abilities from "../chunks/abilities";

const getAgents = new AgentHttpService();

const Agents = () => {
  const [agents, setAgents] = useState<AgentModels[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const searchAgents = async () => {
    try {
      setLoading(true);
      const data = await getAgents.getAllAgents();
      setAgents(data);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    } catch (error) {
      console.error("Error fetching agents:", error);
      setError(`Error fetching agents: ${error}`);
      setLoading(false);
    }
  };

  useEffect(() => {
    searchAgents();
  }, []);

  const filteredAgents = agents.filter((agent) => {
    return agent.displayName.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const LoadingSkeleton = () => (
    <div className="agents-container">
      {[...Array(20)].map((_, index) => (
        <div className="agent-card loading" key={index}>
          <div className="loading-image animate__animated animate__flash"></div>
          <div className="loading-title animate__animated animate__slideInLeft"></div>
          <div className="loading-description animate__animated animate__slideInRight"></div>
          <div className="loading-role animate__animated animate__slideInLeft"></div>
          <div className="loading-abilities">
            {[...Array(4)].map((_, i) => (
              <div
                className="loading-ability animate__animated animate__slideInRight"
                style={{ animationDelay: `${i * 0.2}s` }}
                key={i}
              ></div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section className="m-auto agents-section">
      <input
        className="agents-search-input w-3/4 md:w-1/2 lg:w-1/4 border-none rounded-lg"
        type="text"
        placeholder="Buscar agente"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {loading ? (
        <LoadingSkeleton />
      ) : error ? (
        <h2 className="error-message">{error}</h2>
      ) : (
        <div className="agents-container">
          {filteredAgents.map((agent) => (
            <Link
              to={`/agents/${agent.uuid}`}
              className="agent-card"
              key={agent.uuid}
            >
              <img
                className="agent-card-img-agent"
                src={agent.displayIcon}
                alt={agent.displayName}
              />
              <h3 className="agent-card-title">{agent.displayName}</h3>
              <div className="agent-role">
                <img
                  className="agent-role-img"
                  src={agent.role!.displayIcon}
                  alt={agent.role!.displayName}
                />
                <p className="agent-role-name">{agent.role!.displayName}</p>
              </div>
              <div className="agent-abilities-container">
                <p>Habilidades</p>
                <div className="agent-abilities-container-abilities">
                  {agent.abilities.map((ability) => (
                    <Abilities key={ability.slot} {...ability} />
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
};

export default Agents;
