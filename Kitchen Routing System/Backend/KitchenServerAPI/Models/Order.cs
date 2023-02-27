namespace KitchenServerAPI.Models
{
    public class Order
    {
        public int Id { get; set; }
        public IOrderItem[] OrderItems { get; set; }
        public OrderStatus OrderStatus { get; set; }
        public DateTime CreatedDate { get; set; }
        public Customer CustomerDetails { get; set; }
    }
}
