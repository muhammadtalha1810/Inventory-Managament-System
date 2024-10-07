namespace IMS_API.Models
{
    public class EmployeeUser : MyUser
    {
        public int EmployeeId { get; }
        public string EmployeeRole { get; }

        public EmployeeUser(): base("Employee") { }

        //public EmployeeUser(int userId, string userName, string email, string firstName, string phoneNumber, string address, int employeeId, string employeeRole, string lastName = "", string description="") :
        //    base(userId, userName, email, firstName, "Employee",phoneNumber, address, lastName:lastName, description:description) 
        //{
        //    EmployeeId = employeeId;
        //    EmployeeRole = employeeRole;
        //}
    }
}
