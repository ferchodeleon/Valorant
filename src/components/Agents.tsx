import { useEffect, useState } from "react";
import { AgentModels } from "../models/agents/Agents.model";
import { AgentHttpService } from "../services/agents.http.service";

import "../styles/Agents.css";

const getAgents = new AgentHttpService();

export default function Agents() {
  const [agents, setAgents] = useState<AgentModels[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

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

  return (
    <div className="agents-container">
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{`Error ${error}`}</h2>
      ) : (
        agents.map((agent) => {
          return (
            <div className="agent-card" key={agent.uuid}>
              {/* <img src={agent.displayIcon} /> */}
              <h3 className="agent-card-title">{agent.displayName}</h3>
              <p className="agent-card-description">{agent.description}</p>
              <div className="agent-role">
                <p className="agent-role-name">{agent.role!.displayName}</p>
                <img className="agent-role-img" src={agent.role!.displayIcon} />
              </div>
              <div className="agent-abilities-container">
                {agent.abilities.map((ability) => {
                  return (
                    <div
                      className="agent-abilities-info"
                      key={ability.displayName}
                    >
                      <img src={ability.displayIcon} />
                      <p>{ability.displayName}</p>
                      <p className="agent-abilities-slot">{ability.slot}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}
