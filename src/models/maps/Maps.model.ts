import { BaseModel } from "../dtos/Base.model";
import { Callouts } from "./Callouts";

export interface Maps extends BaseModel {
  tacticalDescription: string;
  coordinates: string;
  displayIcon: string;
  listViewIcon: string;
  listViewIconTall: string;
  splash: string;
  stylizedBackgroundImage: string;
  premierBackgroundImage: string;
  xMultiplier: number;
  yMultiplier: number;
  callouts: Callouts[];
}
