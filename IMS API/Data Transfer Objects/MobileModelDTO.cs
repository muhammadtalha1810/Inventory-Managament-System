namespace IMS_API.Data_Transfer_Objects
{
    public class MobileModelDTO
    {
        public string BrandName { get; set; }
        public string ModelName { get; set; }
        public string ReleaseDate { get; set; }
        public decimal? ScreenSize { get; set; }
        public int? Battery { get; set; }
        public int? Charging { get; set; }
        public int? SimSlots { get; set; }
    }
}
