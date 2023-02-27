export class Customer {
  customerName: string;
  customerEmail: string;
  customerPhone: string;

  constructor(customerName: string, customerEmail: string, customerPhone: string) {
    this.customerName = customerName;
    this.customerEmail = customerEmail;
    this.customerPhone = customerPhone;
  }
}
