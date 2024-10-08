namespace IMS_API.Data_Transfer_Objects
{
    public class BrandModelDTO
    {
        public int ModelId { get; set; }
        public string ModelName { get; set; }
        public string BrandName { get; set; }
        public decimal Price { get; set; }
        public string ImageUrl { get; set; }
    }
}
