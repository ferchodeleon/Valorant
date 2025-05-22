import { AgentModels } from "../models/agents/Agents.model";
import { Maps } from "../models/maps/Maps.model";
import BaseHttpService from "./base.http.service";

export class AgentHttpService {
  private base = new BaseHttpService<AgentModels>("agents", true);
  private baseMaps = new BaseHttpService<Maps>("maps", true);

  async getAllAgents(): Promise<AgentModels[]> {
    const data = await this.base.getAll();
    return data;
  }

  async getAgentById(agentId: string): Promise<AgentModels> {
    const data = await this.base.getById(agentId);
    return data;
  }

  async getAllMaps(): Promise<Maps[]> {
    const data = await this.baseMaps.getAll();
    return data;
  }

  async getMapById(mapId: string): Promise<Maps> {
    const data = await this.baseMaps.getById(mapId);
    return data;
  }
}
