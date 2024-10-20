namespace IMS_API.Data_Transfer_Objects
{
    public class AddStockDTO
    {
        public string VariantName { get; set; }
        public string ManufacturerName { get; set; }
        public int Quantity { get; set; }
        public string WareHouseName { get; set; }
    }
}
