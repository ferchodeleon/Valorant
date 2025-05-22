import { BaseModel } from "../dtos/Base.model";
import Abilities from "./Abilities.model";
import { Role } from "./Role.model";

export interface AgentModels extends BaseModel {
  fullPortrait: string;
  background: string;
  displayIcon: string;
  portraitAgent: string;
  role?: Role;
  abilities: Abilities[];
}
