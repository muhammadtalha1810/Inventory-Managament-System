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

        //public List<ImageData> GetImage(int modelId)
        //{
        //    return _dbContext.GetImageData(modelId);
        //}

        public async Task<string> UploadImage(IFormFile file, string modelName)
        {
            using (var memoryStream = new MemoryStream())
            {
                await file.CopyToAsync(memoryStream);
                var imageBytes = memoryStream.ToArray();
                // Save imageBytes to the database
                var image = new ImageData()
                {
                    ImageBytes = Convert.ToBase64String(imageBytes),
                    ContentType = file.ContentType,
                    ModelName = modelName
                };
                string result =  _dbContext.UploadImage(image);
                return result;
            }
        }
    }
}
/*// Handle saving image (local storage or database)
            */