using IMS_API.Models;
using Microsoft.Data.SqlClient;
using System.Data;

namespace IMS_API.Data_Access_Layer
{
    public class DBContext
    {
        private string connectionString = "Server=(localdb)\\local;Database=Inventory_Management;User ID=talha.naeem@curemd.com;Password=MYh@ir2002;Trusted_Connection=False;TrustServerCertificate=True;";
        public DBContext() { }

        public List<MyUser> GetBooks()
        {
            var books = new List<MyUser>();

            using (SqlConnection conn = new SqlConnection(connectionString))
            {
                SqlCommand cmd = new SqlCommand("GetAllEmployees", conn)
                {
                    CommandType = CommandType.StoredProcedure
                };

                conn.Open();
                using (SqlDataReader reader = cmd.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        var myuser = new EmployeeUser()
                        {
                            UserId = (int)reader["Id"],
                            Title = reader["Title"].ToString(),
                            Author = reader["Author"].ToString(),
                            Price = (decimal)reader["Price"],
                            ImageUrl = reader["ImageUrl"].ToString()
                        };

                        books.Add(book);
                    }
                }
            }

            return books;
        }
    }
}
