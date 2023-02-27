import { KitchenArea } from "./KitchenArea.enum";

export interface IOrderItem {
  id: number;
  name: string;
  quantity: number;
  area: KitchenArea;
}
