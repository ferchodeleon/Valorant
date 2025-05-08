import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { AgentHttpService } from "../services/agents.http.service";
import { AgentModels } from "../models/agents/Agents.model";

const AgentDetails = () => {
  const [agent, setAgent] = useState<AgentModels | null>(null);
  const { agentId } = useParams();

  const dataAgent = new AgentHttpService();

  const getAgent = async () => {
    if (agentId != null) {
      const agent = await dataAgent.getAgentById(agentId);
      console.log(agent);
      setAgent(agent);
    }
  };

  useEffect(() => {
    getAgent();
  }, []);

  return (
    <section className="agent-details-container">
      <div className="agent-details-container__image">
        <img src={agent?.background} alt={agent?.displayName} />
      </div>
    </section>
  );
};

export default AgentDetails;
