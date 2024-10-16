namespace IMS_API.Data_Transfer_Objects
{
    public class ManufacturerDTO
    {
        public string brandName { get; set; }
        public string manufacturerName { get; set; }
        public string? location { get; set; }
        public string? description { get; set; }
        public int capacity { get; set; }
    }
}
