namespace IMS_API.Data_Transfer_Objects
{
    public class RegisterUserDTO
    {
        public string userName { get; set; }
        public string password { get; set; }
        public string email { get; set; }
        public string userType { get; set; }
        public string firstName { get; set; }
        public string lastName { get; set; }
        public string phoneNumber { get; set; }
        public string streetAddress { get; set; }
        public string city { get; set; }
        public string state { get; set; }
        public string country { get; set; }
    }
}
