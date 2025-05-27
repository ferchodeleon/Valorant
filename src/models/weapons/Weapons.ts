import { BaseModel } from "../dtos/Base.model";
import { ShopData } from "../dtos/ShopData.model";

export interface Weapon extends BaseModel {
  displayIcon: string;
  shopData: ShopData[];
}
