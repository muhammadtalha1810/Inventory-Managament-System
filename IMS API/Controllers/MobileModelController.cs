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
    }
}
