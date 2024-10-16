using IMS_API.Data_Access_Layer;
using IMS_API.Data_Transfer_Objects;
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
        private readonly DBContext _dbContext;

        public UserController(DBContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpGet("getdetails")]
        [Authorize]
        public IActionResult GetDetails()
        {
            // Access user claims
            var userid = int.Parse(User.FindFirst("UserId")?.Value); // or any other claim type
            //var userName = User.FindFirst(ClaimTypes.Name)?.Value;

            var user = _dbContext.GetUser(userid);

            if (user != null)
            {
                return Ok(user);
            }
            return NotFound(new { message = "User data not found" });
        }

        [HttpPost("register")]
        public IActionResult RegisterUser(RegisterUserDTO registerUserDTO)
        {
            if(registerUserDTO.userType.ToLower() == "user")
            {
                var result = _dbContext.RegisterUser(registerUserDTO);
                if (result == "success")
                {
                    return Ok(new { message = "Registeration Succesful" });
                }
                else if (result == "username conflict")
                {
                    return BadRequest(new { message = "Username already exists" });
                }
                else
                {
                    return BadRequest(new { message = "Some Error Occured" });
                }
            }
            else
            {
                return Unauthorized(new { message = "You are not authorized to perform this action" });
            }
        }

        [HttpGet("getuserslist")]
        [Authorize]
        public IActionResult GetUsersList(int PageNumber, int PageSize)
        {
            var userid = int.Parse(User.FindFirst("UserId")?.Value);
            var user = _dbContext.GetUser(userid);
            if (user != null && user.UserType.ToLower() == "admin")
            {
                var result = _dbContext.GetUsersList(PageNumber, PageSize);
                return Ok(result);
            }
            return Unauthorized(new { message = "You don't have the permission to complete this action" });
        }

        [HttpPost("adduser")]
        [Authorize]
        public IActionResult addUser(RegisterUserDTO registerUserDTO)
        {
            var userid = int.Parse(User.FindFirst("UserId")?.Value);
            var user = _dbContext.GetUser(userid);
            if (user != null && user.UserType.ToLower() == "admin")
            {
                var result = _dbContext.RegisterUser(registerUserDTO);
                if (result == "success")
                {
                    return Ok(new { message = "Registeration Succesful" });
                }
                else if (result == "username conflict")
                {
                    return BadRequest(new { message = "Username already exists" });
                }
                else
                {
                    return BadRequest(new { message = "Some Error Occured" });
                }
            }
            return Unauthorized(new { message = "You don't have the permission to complete this action" });
        }
    }
}
