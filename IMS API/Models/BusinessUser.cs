namespace IMS_API.Models
{
    public class BusinessUser : MyUser
    {
        public int BusinessId { get; set; }
        public string BusinessName { get; set; }
        public string PersonRole { get; set; }
        public string? BusinessDescription { get; set; }

        public BusinessUser(): base("Business") {}

        //public BusinessUser(int userId, string userName, string email, string firstName, string phoneNumber, string address, int businessId, string businessName, string personRole, string lastName = "", string description = "", string businessDescription = "") :
        //    base(userId, userName, email, firstName, "Business", phoneNumber, address, lastName: lastName, description: description)
        //{
        //    BusinessId = businessId;
        //    BusinessName = businessName;
        //    PersonRole = personRole;
        //    BusinessDescription = businessDescription;
        //}

    }
}
