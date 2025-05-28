import { BaseModel } from "../dtos/Base.model";
import { ShopData } from "../dtos/ShopData.model";
import { Skins } from "../dtos/Skins.model";

export interface Weapon extends BaseModel {
  displayIcon: string;
  shopData?: ShopData;
  skins?: Skins[];
}
