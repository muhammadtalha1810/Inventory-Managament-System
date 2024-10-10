CREATE PROCEDURE UploadImage
	@ImageData VARBINARY(MAX),
	@ContentType NVARCHAR(100) = 'image/jpg',
	@ModelId INT,
	@Result VARCHAR(MAX) OUTPUT

AS
BEGIN
	BEGIN TRY
		INSERT INTO IMAGES(IMAGEDATA, CONTENTTYPE, MODELID)
		VALUES (@ImageData, @ContentType, @ModelId)
		SET @Result = 'Image Uploaded Succesfully';
	END TRY
	BEGIN CATCH
		DECLARE @ErrorNumber INT = ERROR_NUMBER();
		DECLARE @ErrorMessage NVARCHAR(4000) = ERROR_MESSAGE();
		 IF @ImageData IS NULL  -- Division by zero error
        BEGIN
            SET @Result = 'Please provide a valid image file';
        END
        ELSE IF @ErrorNumber = 547  -- Foreign key violation error
        BEGIN
            SET @Result = 'Model not found';
        END
        ELSE
        BEGIN
            PRINT 'An error occurred: ' + @ErrorMessage;
        END
	END CATCH
END