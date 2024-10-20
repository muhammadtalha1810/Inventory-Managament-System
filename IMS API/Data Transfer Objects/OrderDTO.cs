using IMS_API.Models;

namespace IMS_API.Data_Transfer_Objects
{
    public class OrderDTO
    {
        public string PaymentMethod { get; set; }
        public CustomerDTO? Customer { get; set; } = null;
        public List<OrderItem> OrderItems { get; set; }
    }
}
