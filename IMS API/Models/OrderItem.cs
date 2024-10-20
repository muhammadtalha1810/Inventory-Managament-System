namespace IMS_API.Models
{
    public class OrderItem
    {
        public int VariantId { get; set; }
        public string VariantName { get; set; }
        public int Quantity { get; set; }
        public decimal UnitPrice { get; set; }
    }
}
