using IMS_API.Data_Transfer_Objects;
using IMS_API.Models;
using IMS_API.Services;
using Microsoft.Data.SqlClient;
using System.Data;

namespace IMS_API.Data_Access_Layer
{
    public class DBContext
    {
        private readonly string _connectionString; //= "Server=(localdb)\\local;Database=Inventory_Management;Trusted_Connection=False;TrustServerCertificate=True;";//Make it take from configuration settings
        //public DBContext(IConfiguration configuration) {
        //    connectionString = configuration.GetConnectionString("DefaultConnection");
        //}

        public DBContext(IConfiguration configuration) {
            _connectionString = configuration.GetConnectionString("DefaultConnection");
        }

        public Object GetModels(FiltersDTO filtersDTO)
        {
            var models = new List<BrandModelDTO>();

            using (SqlConnection conn = new SqlConnection(_connectionString))
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
                            Images = GetImageData((int)reader["MODELID"])
                        };
                        models.Add(model);
                    }
                    
                }
                conn.Close();
                return new { data = models, totalPages = totalPagesParam.Value };
            }
        }

        public List<ImageData> GetImageData(int modelId)
        {
            var images = new List<ImageData>();
            using (SqlConnection conn = new SqlConnection(_connectionString))
            {
                SqlCommand cmd = new SqlCommand("GetImageData", conn)
                {
                    CommandType = CommandType.StoredProcedure
                };
                cmd.Parameters.AddWithValue("@ModelId", modelId);
                conn.Open();
                using (SqlDataReader reader = cmd.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        var image = new ImageData()
                        {
                            ImageBytes = reader["IMAGEDATA"].ToString(),
                            ContentType = reader["CONTENTTYPE"].ToString(),
                            ModelName = reader["MODEL_NAME"].ToString(),
                        };
                        images.Add(image);
                    }

                }
                conn.Close();
                return images;
            }
        }


        public List<String> GetModelsNames(string keyword, int resultsCount)
        {
            List<String> names = new List<String>();
            using (SqlConnection conn = new SqlConnection(_connectionString))
            {
                SqlCommand cmd = new SqlCommand("GetModelsNames", conn)
                {
                    CommandType = CommandType.StoredProcedure
                };
                cmd.Parameters.AddWithValue("@SearchKeyword", keyword);
                cmd.Parameters.AddWithValue("@ResultsCount", resultsCount);
                conn.Open();
                using (SqlDataReader reader = cmd.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        names.Add(reader["MODEL_NAME"].ToString());
                    }
                }
                conn.Close();
                return names;
            }
        }


    }
}