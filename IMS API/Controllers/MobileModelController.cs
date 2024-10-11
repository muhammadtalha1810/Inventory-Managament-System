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
    }
}
