import { useEffect, useState } from "react";
import { AgentModels } from "../models/Agents.model";
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
      // setAgents(data);
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
      ) : (
        agents.map((agent) => {
          return (
            <div className="agent-card" key={agent.id}>
              <img
              // src={agent.displayIcon}
              />
              <h3 className="agent-card-title">{agent.displayName}</h3>
              <p className="agent-card-description">{agent.description}</p>
            </div>
          );
        })
      )}
    </div>
  );
}
