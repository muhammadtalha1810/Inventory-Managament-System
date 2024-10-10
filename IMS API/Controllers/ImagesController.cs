using IMS_API.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace IMS_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ImagesController : ControllerBase
    {
        private readonly ImageService _imageService;

        public ImagesController(ImageService imageService) {
            _imageService = imageService;
        }

        [HttpGet("getimage/{modelId}")]
        public IActionResult GetImage(int modelId)
        {
            var imagefile = _imageService.GetImage(modelId);
            return imagefile;
        }


        [HttpPost("upload")]
        public async Task<IActionResult> UploadImage(IFormFile file, int modelId)
        {
            if (file == null || file.Length == 0)
                return BadRequest(new { message = "No file uploaded." });

            string result  = _imageService.UploadImage(file, modelId).Result;
            return Ok(new { message = result});
        }
    }
}
