import { BaseModel } from "../dtos/Base.model";
import Abilities from "./Abilities.model";
import { Roles } from "./Roles.model";

export interface AgentModels extends BaseModel {
  displayIcon: string;
  portraitAgent: string;
  background: string;
  role?: Roles;
  abilities: Abilities[];
}
