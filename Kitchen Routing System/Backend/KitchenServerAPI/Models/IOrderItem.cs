namespace KitchenServerAPI.Models
{
    public interface IOrderItem
    {
        int Id { get; set; }
        string Name { get; set; }
        int Quantity { get; set; }
        KitchenArea Area { get; set; }
    }
}
