using IMS_API.Data_Transfer_Objects;
using IMS_API.Models;
using IMS_API.Services;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using Microsoft.Data.SqlClient;
using System.Data;
using System.Reflection;
using static System.Net.Mime.MediaTypeNames;

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

        public Object GetModel(int modelid)
        {
            object model = null;
            using (SqlConnection conn = new SqlConnection(_connectionString))
            {
                SqlCommand cmd = new SqlCommand("GetModel", conn)
                {
                    CommandType = CommandType.StoredProcedure
                };
                cmd.Parameters.AddWithValue("@ModelId", modelid);
                conn.Open();
                using (SqlDataReader reader = cmd.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        model = new
                        {
                            ModelId = Convert.ToInt32(reader["MODELID"]),
                            ModelName = Convert.ToString(reader["MODEL_NAME"]),
                            ReleasaeDate = Convert.ToDateTime(reader["RELEASE_DATE"]).Date.ToString("yyyy-MM-dd"),
                            Rating = Convert.ToDecimal(reader["OVERALL_RATING"]),
                            BrandName = Convert.ToString(reader["BRAND_NAME"])
                        };
                    }

                }
                conn.Close();
            }
            return model;
        }

        public Object GetSpecifications(int modelId)
        {
            object specifications = null;
            using (SqlConnection conn = new SqlConnection(_connectionString))
            {
                SqlCommand cmd = new SqlCommand("GetSpecifications", conn)
                {
                    CommandType = CommandType.StoredProcedure
                };
                cmd.Parameters.AddWithValue("@ModelId",modelId);
                conn.Open();
                using (SqlDataReader reader = cmd.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        specifications = new
                        {
                            //Screensize = Convert.ToDecimal(reader["SCREENSIZE"]),
                            //BatterySize = Convert.ToInt32(reader["BATTERYSIZE"]),
                            //SimSlots = Convert.ToInt32(reader["SIMSLOTS"]),
                            //ChargingSpeed = Convert.ToInt32(reader["CHARGINGSPEED"]),
                            //Weight = Convert.ToInt32(reader["WEIGHT"]),
                            //Processor = Convert.ToString(reader["PROCESSOR"]),
                            //Camera = Convert.ToInt32(reader["CAMERA"]),
                            //OperatingSystem = Convert.ToString(reader["OPERATINGSYSTEM"]),
                            //HorizontalPixels = Convert.ToInt32(reader["HORIZONTALPIXELS"]),
                            //VerticalPixels = Convert.ToInt32(reader["VERTICALPIXELS"]),
                            Screensize = !reader.IsDBNull(reader.GetOrdinal("SCREENSIZE")) ? (decimal)reader["SCREENSIZE"] : 0,
                            BatterySize = !reader.IsDBNull(reader.GetOrdinal("BATTERYSIZE")) ? (int)reader["BATTERYSIZE"] : 0,
                            SimSlots = !reader.IsDBNull(reader.GetOrdinal("SIMSLOTS")) ? (int)reader["SIMSLOTS"] : 0,
                            ChargingSpeed = !reader.IsDBNull(reader.GetOrdinal("CHARGINGSPEED")) ? (int)reader["CHARGINGSPEED"] : 0,
                            Weight = !reader.IsDBNull(reader.GetOrdinal("WEIGHT")) ? (int)reader["WEIGHT"] : 0,
                            Processor = !reader.IsDBNull(reader.GetOrdinal("PROCESSOR")) ? reader["PROCESSOR"].ToString() : string.Empty,
                            Camera = !reader.IsDBNull(reader.GetOrdinal("CAMERA")) ? (int)reader["CAMERA"] : 0,
                            OperatingSystem = !reader.IsDBNull(reader.GetOrdinal("OPERATINGSYSTEM")) ? reader["OPERATINGSYSTEM"].ToString() : string.Empty,
                            HorizontalPixels = !reader.IsDBNull(reader.GetOrdinal("HORIZONTALPIXELS")) ? (int)reader["HORIZONTALPIXELS"] : 0,
                            VerticalPixels = !reader.IsDBNull(reader.GetOrdinal("VERTICALPIXELS")) ? (int)reader["VERTICALPIXELS"] : 0
                        };
                    }
                }
                conn.Close();
            }
            return specifications;
        }

        public Object GetVariantsData(int modelId)
        {
            object variantsdata = null;
            using (SqlConnection conn = new SqlConnection(_connectionString))
            {
                SqlCommand cmd = new SqlCommand("GetVariantsData", conn)
                {
                    CommandType = CommandType.StoredProcedure
                };
                cmd.Parameters.AddWithValue("@ModelId", modelId);
                var ramdataparemeter = new SqlParameter("@RamData", SqlDbType.VarChar, 100);
                ramdataparemeter.Direction = ParameterDirection.Output;
                cmd.Parameters.Add(ramdataparemeter);

                var storagedataparemeter = new SqlParameter("@StorageData", SqlDbType.VarChar, 100);
                storagedataparemeter.Direction = ParameterDirection.Output;
                cmd.Parameters.Add(storagedataparemeter);

                var colordataparemeter = new SqlParameter("@ColorsData", SqlDbType.VarChar, 100);
                colordataparemeter.Direction = ParameterDirection.Output;
                cmd.Parameters.Add(colordataparemeter);

                conn.Open();
                cmd.ExecuteReader();
                variantsdata = new {
                    RamData = ramdataparemeter.Value.ToString().Split(','),
                    StorageData = storagedataparemeter.Value.ToString().Split(','),
                    ColorsData = colordataparemeter.Value.ToString().Split(',')
                };
                conn.Close();
            }
            return variantsdata;
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


        public string RegisterUser(RegisterUserDTO registerUserDTO)
        {
            using (SqlConnection conn = new SqlConnection(_connectionString))
            {
                SqlCommand cmd = new SqlCommand("RegisterUser", conn)
                {
                    CommandType = CommandType.StoredProcedure
                };
                cmd.Parameters.AddWithValue("@UserName", registerUserDTO.userName);
                cmd.Parameters.AddWithValue("@Password", registerUserDTO.password);
                cmd.Parameters.AddWithValue("@Email", registerUserDTO.email);
                cmd.Parameters.AddWithValue("@UserType", registerUserDTO.userType);
                cmd.Parameters.AddWithValue("@FirstName", registerUserDTO.firstName);
                cmd.Parameters.AddWithValue("@LastName", registerUserDTO.lastName);
                cmd.Parameters.AddWithValue("@PhoneNumber", registerUserDTO.phoneNumber);
                cmd.Parameters.AddWithValue("@Address", registerUserDTO.streetAddress + ", "+ registerUserDTO.city + ", " + registerUserDTO.state + ", " + registerUserDTO.country);

                var result = new SqlParameter("@Result", SqlDbType.VarChar, 200);
                result.Direction = ParameterDirection.Output;
                cmd.Parameters.Add(result);
                conn.Open();
                cmd.ExecuteReader();
                conn.Close();
                return result.Value.ToString();
            }
        }

        public MyUser AuthenticateUser(LoginObjectDTO loginDTO)
        {
            MyUser user = null;
            using (SqlConnection conn = new SqlConnection(_connectionString))
            {
                SqlCommand cmd = new SqlCommand("GetUser", conn)
                {
                    CommandType = CommandType.StoredProcedure
                };
                cmd.Parameters.AddWithValue("@UserName",loginDTO.Username);
                cmd.Parameters.AddWithValue("@Password", loginDTO.Password);
                conn.Open();
                using (SqlDataReader reader = cmd.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        user = new MyUser()
                        {
                            UserId = (int)reader["USERID"],
                            UserName = reader["USERNAME"].ToString(),
                            Email = reader["EMAIL"].ToString(),
                            FirstName = reader["FIRSTNAME"].ToString(),
                            LastName = reader["LASTNAME"].ToString(),
                            Description = reader["DESCRIPTION"].ToString(),
                            PhoneNumber = reader["PHONENUMBER"].ToString(),
                            Address = reader["ADDRESS"].ToString()
                        };
                    }

                }
                conn.Close();
            }
            return user;
        }

        public MyUser GetUser(int userId)
        {
            MyUser user = null;
            using (SqlConnection conn = new SqlConnection(_connectionString))
            {
                SqlCommand cmd = new SqlCommand("GetUser", conn)
                {
                    CommandType = CommandType.StoredProcedure
                };
                cmd.Parameters.AddWithValue("@UserID", userId);
                conn.Open();
                using (SqlDataReader reader = cmd.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        user = new MyUser()
                        {
                            UserId = (int)reader["USERID"],
                            UserName = reader["USERNAME"].ToString(),
                            Email = reader["EMAIL"].ToString(),
                            FirstName = reader["FIRSTNAME"].ToString(),
                            LastName = reader["LASTNAME"].ToString(),
                            UserType = reader["USERTYPE"].ToString(),
                            Description = reader["DESCRIPTION"].ToString(),
                            PhoneNumber = reader["PHONENUMBER"].ToString(),
                            Address = reader["ADDRESS"].ToString()
                        };
                    }

                }
                conn.Close();
            }
            return user;
        }

    }
}