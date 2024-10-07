namespace IMS_API.Models
{
    public class MyUser
    {
        public int UserId { get; set; }
        public string UserName { get; set; }
        public string Email { get; set; }
        public string FirstName { get; set; }
        public string? LastName { get; set; }
        public string UserType { get; set; }
        public string? Description { get; set; }
        public string PhoneNumber { get; set; }
        public string Address { get; set; }

        public MyUser(string userType) {
            UserType = userType;
        }
        public MyUser() { }

        //public MyUser(int userId, string userName, string email, string firstName, string userType, string phoneNumber, string address, string lastName = "", string description = "") 
        //{
        //    UserId = userId;
        //    UserName = userName;
        //    Email = email;
        //    FirstName = firstName;
        //    LastName = lastName;
        //    UserType = userType;
        //    Description = description;
        //    PhoneNumber = phoneNumber;
        //    Address = address;
        //}

        
    }
}
