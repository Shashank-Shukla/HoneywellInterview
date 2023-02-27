namespace KitchenServerAPI.Models
{
    public class Order
    {
        int Id { get; set; }
        public IOrderItem[] OrderItems { get; set; }
        OrderStatus OrderStatus { get; set; } = OrderStatus.Pending;
        DateTime CreatedDate { get; set; }
        public Customer CustomerDetails { get; set; }

        public Order(int id, OrderStatus orderStatus)
        {
            this.Id = id;
            this.OrderStatus = orderStatus;
            this.CreatedDate = DateTime.Now;
        }
    }
}
