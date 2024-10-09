namespace IMS_API.Data_Transfer_Objects
{
    public class FiltersDTO
    {
        public int PageNumber { get; set; }
        public int PageSize { get; set; }
        public string? BrandsFilter { get; set; }
        public int PriceFilterMin { get; set; }
        public int PriceFilterMax { get; set; }
        public int RatingFilterMin { get; set; }
        public int RatingFilterMax { get; set; }
        public int RamFilterValue { get; set; }
        public int StorageFilterValue { get; set; }
        public int BatteryFilterMin { get; set; }
        public int BatteryFilterMax { get; set; }
        public string? SearchKeyword { get; set; }
    }
}