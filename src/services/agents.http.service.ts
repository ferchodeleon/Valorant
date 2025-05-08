import { AgentModels } from "../models/agents/Agents.model";
import BaseHttpService from "./base.http.service";

export class AgentHttpService {
  private base = new BaseHttpService<AgentModels>("agents", true);

  async getAllAgents(): Promise<AgentModels[]> {
    const data = await this.base.getAll();
    return data;
  }

  async getAgentById(agentId: string): Promise<AgentModels> {
    const data = await this.base.getById(agentId);
    return data;
  }
}
