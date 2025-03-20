import { useEffect, useState } from "react";
import { AgentModels } from "../models/agents/Agents.model";
import { AgentHttpService } from "../services/agents.http.service";

import "../styles/Agents.css";
import Abilities from "./chunks/abilities";

const getAgents = new AgentHttpService();

const Agents = () => {
  const [agents, setAgents] = useState<AgentModels[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const searchAgents = async () => {
    try {
      const data = await getAgents.getAllAgents();
      setAgents(data);
      setLoading(false);
      console.log("Información", data);
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

  return (
    <section className="agents-section">
      <input
        className="agents-search-input"
        type="text"
        placeholder="Buscar agente"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="agents-container">
        {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>{`Error ${error}`}</h2>
        ) : (
          filteredAgents.map((agent) => {
            return (
              <div className="agent-card" key={agent.uuid}>
                <img src={agent.displayIcon} />
                <h3 className="agent-card-title">{agent.displayName}</h3>
                <p className="agent-card-description">{agent.description}</p>
                <div className="agent-role">
                  <p className="agent-role-name">{agent.role!.displayName}</p>
                  <img
                    className="agent-role-img"
                    src={agent.role!.displayIcon}
                  />
                </div>
                <div className="agent-abilities-container">
                  {agent.abilities.map((ability) => {
                    return <Abilities {...ability} />;
                  })}
                </div>
              </div>
            );
          })
        )}
      </div>
    </section>
  );
};

export default Agents;
