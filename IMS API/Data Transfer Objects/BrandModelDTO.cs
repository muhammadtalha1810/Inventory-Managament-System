using IMS_API.Models;

namespace IMS_API.Data_Transfer_Objects
{
    public class BrandModelDTO
    {
        public int ModelId { get; set; }
        public string ModelName { get; set; }
        public string BrandName { get; set; }
        public decimal Price { get; set; }
        public List<ImageData> Images { get; set; }
    }
}
