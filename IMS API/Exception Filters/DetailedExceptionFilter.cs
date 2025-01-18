using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;

public class DetailedExceptionFilter : IExceptionFilter
{
    public void OnException(ExceptionContext context)
    {
        if (context.Exception is DetailedException detailedException)
        {
            context.Result = new ObjectResult(new
            {
                ErrorCode = detailedException.ErrorCode,
                Message = detailedException.Message,
                Details = detailedException.Details,
                Timestamp = DateTime.UtcNow
            })
            {
                StatusCode = 500
            };
        }
        else
        {
            // Generic handling for other exceptions
            context.Result = new ObjectResult(new
            {
                Message = "An unexpected error occurred.",
                Timestamp = DateTime.UtcNow
            })
            {
                StatusCode = 500
            };
        }

        context.ExceptionHandled = true;
    }
}
