import { Chroma } from "./Chromas.model";

export interface Skins {
  uuid: string;
  displayName: string;
  displayIcon: string;
  chromas: Chroma[];
}
