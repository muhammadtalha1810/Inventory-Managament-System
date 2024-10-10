using IMS_API.Data_Transfer_Objects;
using IMS_API.Models;
using Microsoft.Data.SqlClient;
using System.Data;

namespace IMS_API.Data_Access_Layer
{
    public class ImagesDBContext
    {
        private readonly string _connectionString;
        public ImagesDBContext(IConfiguration configuration) {
            _connectionString = configuration.GetConnectionString("DefaultConnection");
        }

        public string UploadImage(ImageData image)
        {
            using (SqlConnection conn = new SqlConnection(_connectionString))
            {
                SqlCommand cmd = new SqlCommand("UploadImage", conn)
                {
                    CommandType = CommandType.StoredProcedure
                };
                cmd.Parameters.AddWithValue("@ImageData", image.ImageBytes);
                cmd.Parameters.AddWithValue("@ContentType", image.ContentType);
                cmd.Parameters.AddWithValue("@ModelId", image.ModelId);
                var resultParam = new SqlParameter("@Result", SqlDbType.VarChar);
                resultParam.Direction = ParameterDirection.Output;
                cmd.Parameters.Add(resultParam);
                conn.Open();
                cmd.ExecuteNonQuery();
                conn.Close();
                return resultParam.Value.ToString();
            }
        }

        public ImageData GetImageData(int modelId)
        {
            var image = new ImageData();
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
                        image = new ImageData()
                        {
                            ImageBytes = (byte[])reader["IMAGEDATA"],
                            ContentType = reader["CONTENTTYPE"].ToString(),
                            ModelId = (int) reader["MODELID"],
                        };
                    }

                }
                conn.Close();
                return image;
            }
        }
    }
}
