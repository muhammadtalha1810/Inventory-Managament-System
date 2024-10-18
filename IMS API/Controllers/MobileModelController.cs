using IMS_API.Data_Access_Layer;
using IMS_API.Data_Transfer_Objects;
using IMS_API.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace IMS_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MobileModelController : ControllerBase
    {
        private readonly DBContext _dbContext;

        public MobileModelController(DBContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpPost("getmodels")]
        public IActionResult GetModels(FiltersDTO filtersDTO)
        {
            return Ok(_dbContext.GetModels(filtersDTO));
        }

        [HttpGet("getmodelsnames")]
        public IActionResult GetModelsNames(string Keyword, int ResultsCount)
        {
            return Ok(_dbContext.GetModelsNames(Keyword, ResultsCount));
        }

        [HttpGet("mobiledata/{modelId}")]
        public IActionResult GetModelData(int modelId)
        {
            var modelData = _dbContext.GetModel(modelId);
            var images = _dbContext.GetImageData(modelId);
            var specifications = _dbContext.GetSpecifications(modelId);
            var variantsData = _dbContext.GetVariantsData(modelId);
            if(modelData != null)
            {
                return Ok(new { ModelData = modelData, ImageData = images, Specifications = specifications, Variants = variantsData });
            }
            else
            {
                return BadRequest(new { message = "No model data found" });
            }
        }

        [HttpGet("getmanufacturersnames")]
        public IActionResult GetManufacturersNames(string Keyword, int ResultsCount)
        {
            return Ok(_dbContext.GetManufacturersNames(Keyword, ResultsCount));
        }

        [HttpGet("getbrandnames")]
        public IActionResult GetBrandNames(string Keyword, int ResultsCount)
        {
            return Ok(_dbContext.GetBrandNames(Keyword, ResultsCount));
        }

        [HttpPost("addmanufacturer")]
        [Authorize]
        public IActionResult AddManufacturer(ManufacturerDTO manufacturerDTO)
        {
            var userid = int.Parse(User.FindFirst("UserId")?.Value); // or any other claim type
            //var userName = User.FindFirst(ClaimTypes.Name)?.Value;

            var user = _dbContext.GetUser(userid);

            if (user != null && user.UserType.ToLower() == "admin")
            {
                var result = _dbContext.AddManufacturer(manufacturerDTO);
                return Ok(new {message = result});
            }
            return Unauthorized(new { message = "You don't have the permission to complete this action" });
        }

        [HttpPost("addvariant")]
        [Authorize]
        public IActionResult AddVariants(VariantDTO variantDTO)
        {
            var userid = int.Parse(User.FindFirst("UserId")?.Value); // or any other claim type
            //var userName = User.FindFirst(ClaimTypes.Name)?.Value;

            var user = _dbContext.GetUser(userid);

            if (user != null && user.UserType.ToLower() == "admin")
            {
                var result = _dbContext.AddVariant(variantDTO);
                return Ok(new { message = result });
            }
            return Unauthorized(new { message = "You don't have the permission to complete this action" });
        }

        [HttpPost("addmodel")]
        [Authorize]
        public IActionResult AddModel(MobileModelDTO mobileModel)
        {
            var userid = int.Parse(User.FindFirst("UserId")?.Value); // or any other claim type
            //var userName = User.FindFirst(ClaimTypes.Name)?.Value;

            var user = _dbContext.GetUser(userid);

            if (user != null && user.UserType.ToLower() == "admin")
            {
                var result = _dbContext.AddModel(mobileModel);
                if (result == "success")
                {
                    return Ok(new { message = "Model Added Successfully" });
                }
                else if (result == "brand not found")
                {
                    return BadRequest(new { message = "The enetered brand is not found" });
                }
                else if (result == "already exists")
                {
                    return BadRequest(new { message = "The enetered model already exists" });
                }
                else if (result == "incorrectdata")
                {
                    return BadRequest(new { message = "Incomplete data, kindly fill the top 3 fields" });
                }
                else
                {
                    return BadRequest(new { message = "Some Error Occured" });
                }
            }
            return Unauthorized(new { message = "You don't have the permission to complete this action" });
        }
        [HttpPost("addbrand")]
        [Authorize]
        public IActionResult AddBrand(BrandDTO brand)
        {
            var userid = int.Parse(User.FindFirst("UserId")?.Value); // or any other claim type
            //var userName = User.FindFirst(ClaimTypes.Name)?.Value;

            var user = _dbContext.GetUser(userid);

            if (user != null && user.UserType.ToLower() == "admin")
            {
                var result = _dbContext.AddBrand(brand);
                if (result == "success")
                {
                    return Ok(new { message = "Brand Added Successfully" });
                }
                else if (result == "already exists")
                {
                    return BadRequest(new { message = "The entered brand already exists" });
                }
                else if (result == "incorrectdata")
                {
                    return BadRequest(new { message = "Incomplete data, kindly fill the top 2 fields" });
                }
                else
                {
                    return BadRequest(new { message = "Some Error Occured" });
                }
            }
            return Unauthorized(new { message = "You don't have the permission to complete this action" });
        }


        [HttpGet("getorders")]
        [Authorize]
        public IActionResult GetRequests(int PageNumber, int PageSize, string OrderStatus)
        {
            var userid = int.Parse(User.FindFirst("UserId")?.Value);
            var user = _dbContext.GetUser(userid);
            if (user != null && user.UserType.ToLower() == "admin")
            {
                var result = _dbContext.GetOrders(PageNumber, PageSize, OrderStatus);
                return Ok(result);
            }
            return Unauthorized(new { message = "You don't have the permission to complete this action" });
        }
    }
}
