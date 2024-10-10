using IMS_API.Data_Access_Layer;
using IMS_API.Data_Transfer_Objects;
using IMS_API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using System.Data;

namespace IMS_API.Services
{
    public class ImageService
    {
        private readonly ImagesDBContext _dbContext;

        public ImageService(ImagesDBContext dbContext)
        {
            _dbContext = dbContext;
        }

        public FileResult GetImage(int modelId)
        {
            var image = _dbContext.GetImageData(modelId);  // Fetch the image bytes from the database


            // Return a FileResult that contains the image bytes and the content type
            return new FileContentResult(image.ImageBytes, image.ContentType);  // Adjust the content type as needed
        }

        public async Task<string> UploadImage(IFormFile file, int modelId)
        {
            using (var memoryStream = new MemoryStream())
            {
                await file.CopyToAsync(memoryStream);
                var imageBytes = memoryStream.ToArray();
                // Save imageBytes to the database
                var image = new ImageData()
                {
                    ImageBytes = imageBytes,
                    ContentType = file.ContentType,
                    ModelId = modelId
                };
                string result =  _dbContext.UploadImage(image);
                return result;
            }
        }
    }
}
/*// Handle saving image (local storage or database)
            */