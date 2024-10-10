using IMS_API.Data_Transfer_Objects;
using IMS_API.Models;
using Microsoft.Data.SqlClient;
using System.Data;

namespace IMS_API.Data_Access_Layer
{
    public class DBContext
    {
        private string connectionString = "Server=(localdb)\\local;Database=Inventory_Management;Trusted_Connection=False;TrustServerCertificate=True;";//Make it take from configuration settings
        //public DBContext(IConfiguration configuration) {
        //    connectionString = configuration.GetConnectionString("DefaultConnection");
        //}

        public DBContext() { }

        public Object GetModels(FiltersDTO filtersDTO)
        {
            var models = new List<BrandModelDTO>();

            using (SqlConnection conn = new SqlConnection(connectionString))
            {
                SqlCommand cmd = new SqlCommand("GetModels", conn)
                {
                    CommandType = CommandType.StoredProcedure
                };
                cmd.Parameters.AddWithValue("@PageNumber", filtersDTO.PageNumber);
                cmd.Parameters.AddWithValue("@PageSize", filtersDTO.PageSize);
                cmd.Parameters.AddWithValue("@BrandsFilter", filtersDTO.BrandsFilter);
                cmd.Parameters.AddWithValue("@PriceFilterMin", filtersDTO.PriceFilterMin);
                cmd.Parameters.AddWithValue("@PriceFilterMax", filtersDTO.PriceFilterMax);
                cmd.Parameters.AddWithValue("@RatingFilterMin", filtersDTO.RatingFilterMin);
                cmd.Parameters.AddWithValue("@RatingFilterMax", filtersDTO.RatingFilterMax);
                cmd.Parameters.AddWithValue("@RamFilterValue", filtersDTO.@RamFilterValue);
                cmd.Parameters.AddWithValue("@StorageFilterValue", filtersDTO.@StorageFilterValue);
                cmd.Parameters.AddWithValue("@BatteryFilterMin", filtersDTO.BatteryFilterMin);
                cmd.Parameters.AddWithValue("@BatteryFilterMax", filtersDTO.BatteryFilterMax);
                cmd.Parameters.AddWithValue("@SearchKeyword", filtersDTO.@SearchKeyword);
                var totalPagesParam = new SqlParameter("@TotalPages", SqlDbType.Int);
                totalPagesParam.Direction = ParameterDirection.Output;
                cmd.Parameters.Add(totalPagesParam);
                conn.Open();
                using (SqlDataReader reader = cmd.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        var model = new BrandModelDTO()
                        {
                            ModelId = (int)reader["MODELID"],
                            ModelName = reader["MODEL_NAME"].ToString(),
                            BrandName = reader["BRAND_NAME"].ToString(),
                            Price = (decimal)reader["PRICE"],
                            ImageUrl = reader["IMAGE_URL"].ToString()
                        };
                        
                        models.Add(model);
                    }
                    
                }
                conn.Close();
                return new { data = models, totalPages = totalPagesParam.Value };
            }
        }
    }
}