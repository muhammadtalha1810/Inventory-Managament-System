using IMS_API.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace IMS_API.Controllers
{
    [Route("api/user")]
    [ApiController]
    public class UserController : ControllerBase
    {
        [HttpGet("getdetails")]
        [Authorize]
        public IActionResult GetDetails()
        {
            // Access user claims
            var userId = User.FindFirst("UserName")?.Value; // or any other claim type
            //var userName = User.FindFirst(ClaimTypes.Name)?.Value;

            if (userId != null)
            {
                // You can return user data as needed
                
                return Ok(new {userid = userId});
            }

            return NotFound(new { message = "User data not found" });
        }
    }
}
