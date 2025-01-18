using IMS_API.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace IMS_API.Controllers
{
    [Route("Images")]
    [ApiController]
    public class ImagesController : ControllerBase
    {
        private readonly ImageService _imageService;

        public ImagesController(ImageService imageService) {
            _imageService = imageService;
        }

        //[HttpGet("getimage/{modelId}")]
        //public IActionResult GetImage(int modelId)
        //{
        //    var images = _imageService.GetImage(modelId);
        //    return Ok(images);
        //}


        [HttpPost("upload")]
        public async Task<IActionResult> UploadImage(IFormFile file, string modelName)
        {
            if (file == null || file.Length == 0)
                return BadRequest(new { message = "No file uploaded." });

            string result  = _imageService.UploadImage(file, modelName).Result;
            return Ok(new { message = result});
        }
    }
}
