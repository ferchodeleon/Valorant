import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { AgentHttpService } from "../services/agents.http.service";
import { AgentModels } from "../models/agents/Agents.model";
import ArrowBack from "../assets/Images/arrow-back.png";

import "../styles/AgentDetail.css";

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
      <div className="agent-details__back-button">
        <Link to="/agents">
          <img src={ArrowBack} alt="arrow back" />
        </Link>
      </div>

      <div
        style={{ backgroundImage: `url(${agent?.background})` }}
        className="agent-details__image-section"
      >
        <img
          className="agent-details__image-agent"
          src={agent?.fullPortrait}
          alt={agent?.displayName}
        />
      </div>

      <div className="agent-details__info-section">
        <h2>{agent?.displayName}</h2>
        <p className="agent-details__info-section__description">
          {agent?.description}
        </p>
        <div className="agent-details__role-section">
          <div className="agent-details__role-section__image">
            <img
              className="agent-details__role-section__image_icon"
              src={agent?.role?.displayIcon}
              alt={agent?.role?.displayName}
            />
            <p className="agent-details__role-section__image_title">
              {agent?.role?.displayName}
            </p>
          </div>
          <div className="agent-details__role-section__info">
            <p>{agent?.role?.description}</p>
          </div>
        </div>
      </div>

      <div className="agent-details__abilities-section_container">
        {agent?.abilities.map((ability) => (
          <div className="agent-details__abilities-section">
            {/* <div className="agent-details__abilities-section__title"> */}
            <img
              src={
                ability.displayIcon != null
                  ? ability.displayIcon
                  : "https://i.scdn.co/image/ab67616100005174f777c8d6f705fa1e32f75b86"
              }
              alt={ability.displayName}
            />
            <p>{ability.displayName}</p>
            {/* </div> */}
            <div className="agent-details__abilities-section__description">
              <p>{ability.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AgentDetails;
