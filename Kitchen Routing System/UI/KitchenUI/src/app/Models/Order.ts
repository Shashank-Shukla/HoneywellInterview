import { Customer } from "./Customer";
import { IOrderItem } from "./IOrderItem";
import { OrderStatus } from "./OrderStatus.enum";

export class Order {
  id: number;
  items: IOrderItem[];
  status: OrderStatus;
  customerDetails: Customer;
  createdDate: Date;

  constructor(id: number, items: IOrderItem[], customerName: string, customerEmail: string, customerPhone: string) {
    this.id = id;
    this.items = items;
    this.status = OrderStatus.Pending;
    this.customerDetails = new Customer(customerName, customerEmail, customerPhone);
    this.createdDate = new Date();
  }
}
