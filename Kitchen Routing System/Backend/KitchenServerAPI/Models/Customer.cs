using System.ComponentModel.DataAnnotations;

namespace KitchenServerAPI.Models
{
    public class Customer
    {
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        public string? Phone { get; set; }
        [Required]
        public string Email { get; set; }
    }
}
