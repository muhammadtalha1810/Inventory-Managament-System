using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using IMS_API.Data_Transfer_Objects;
using IMS_API.Models;
using IMS_API.Data_Access_Layer;

namespace IMS_API.Controllers
{
    [Route("auth")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly DBContext _dbContext;

        public AuthController(DBContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpPost("login")]
        public async Task<ActionResult> GetName(LoginObjectDTO loginObjectDTO)
        {
            if (ModelState.IsValid)
            {
                var user = _dbContext.AuthenticateUser(loginObjectDTO);

                if (user == null)
                {
                    return BadRequest(new { message = "Invalid Login Attempt" });
                }

                var claims = new List<Claim>
                {
                    new Claim("UserName", user.UserName),
                    new Claim("UserId", user.UserId.ToString())

                };

                var claimsIdentity = new ClaimsIdentity(
                    claims, CookieAuthenticationDefaults.AuthenticationScheme);

                var authProperties = new AuthenticationProperties
                {
                    //AllowRefresh = true,
                    //ExpiresUtc = DateTimeOffset.UtcNow.AddDays(3),
                    //IsPersistent = true,
                };

                await HttpContext.SignInAsync(
                    CookieAuthenticationDefaults.AuthenticationScheme,
                    new ClaimsPrincipal(claimsIdentity),
                    authProperties);

                return Ok(new { message = "Logged in successfully." });
            }

            // Something failed
            return BadRequest(new { message = "Some Error Occured." });
        }


        private async Task<LoginObjectDTO> AuthenticateUser(string userName, string password)
        {
            // For demonstration purposes, authenticate a user
            // with a static email address. Ignore the password.
            // Assume that checking the database takes 500ms

            await Task.Delay(500);

            if (userName == "talha" && password == "talha2002")
            {
                return new LoginObjectDTO()
                {
                    Username = "talha",
                    Password = "talha2002"
                };
            }
            else
            {
                return null;
            }
        }


        
        [HttpPost("logout")]
        [Authorize]
        public async Task<ActionResult> SignOutAsync()
        {
            // Sign out the user and remove the authentication cookie
            //await HttpContext.SignOutAsync(CookieAuthenticationDefaults.AuthenticationScheme); // Use your cookie scheme name

            // Optionally clear session data if you're using sessions
            //await HttpContext.SignOutAsync();

            //Response.Cookies.Append(
            //".AspNetCore.Cookies",
            //"",
            //new CookieOptions
            //{
            //    Expires = DateTimeOffset.UtcNow.AddDays(-1), // Set expiration in the past
            //    Secure = false, // Matches the cookie's secure flag
            //    HttpOnly = false, // Matches the cookie's HttpOnly flag
            //    SameSite = SameSiteMode.None,
            //    Path = "/" // Matches the cookie's path
            //});

            Response.Cookies.Delete(".AspNetCore.Cookies");

            return Ok(new { message = "Logged out successfully." });
        }


        [HttpGet("isLoggedIn")]
        public IActionResult IsLoggedIn()
        {
            // Check if the user is authenticated
            if (User.Identity.IsAuthenticated)
            {
                return Ok(new { isLoggedIn = true, message = "User is logged in." });
            }
            else
            {
                return Ok(new { isLoggedIn = false, message = "User is not logged in." });
            }
        }
    }
}
