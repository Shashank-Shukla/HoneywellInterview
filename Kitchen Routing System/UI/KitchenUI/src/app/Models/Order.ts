import { IOrderItem } from "./IOrderItem";
import { OrderStatus } from "./OrderStatus.enum";

export class Order {
  id: number;
  items: IOrderItem[];
  status: OrderStatus;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  createdDate: Date;

  constructor(id: number, items: IOrderItem[], customerName: string, customerEmail: string, customerPhone: string) {
    this.id = id;
    this.items = items;
    this.status = OrderStatus.Pending;
    this.customerName = customerName;
    this.customerEmail = customerEmail;
    this.customerPhone = customerPhone;
    this.createdDate = new Date();
  }
}
