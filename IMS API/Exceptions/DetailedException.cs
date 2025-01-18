namespace IMS_API.Exceptions
{
    public class DetailedException : Exception
    {
        public string ErrorCode { get; set; }
        public string Details { get; set; }

        public DetailedException(string message, string errorCode, string details)
            : base(message)
        {
            ErrorCode = errorCode;
            Details = details;
        }
    }
}
