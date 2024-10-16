namespace IMS_API.Data_Transfer_Objects
{
    public class VariantDTO
    {
        public string brandName { get; set; }
        public string modelName { get; set; }
        public string variantName { get; set; }
        public int ram { get; set; }
        public int storage { get; set; }
        public string color { get; set; }
        public decimal retailPrice { get; set; }
        public decimal wholesalePrice { get; set; }
    }
}
