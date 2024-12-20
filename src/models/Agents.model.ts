import { BaseModel } from "./dtos/Base.model";
import { Roles } from "./Roles.model";

export interface AgentModels extends BaseModel {
  displayIcon: string;
  portraitAgent: string;
  background: string;
  role?: Roles;
}
