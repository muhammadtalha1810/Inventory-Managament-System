CREATE PROCEDURE GetModels
	@PageNumber INT = 0,
	@PageSize INT = 25,
	@BrandsFilter NVARCHAR(MAX) = NULL,
	@PriceFilterMin INT = 0,
	@PriceFilterMax INT = 12000,
	@RatingFilterMin INT = 1,
	@RatingFilterMax INT = 5,
	@RamFilterMin INT = 1,
	@RamFilterMax INT = 24,
	@StorageFilterMin INT = 8,
	@StorageFilterMax INT = 3000,
	@BatteryFilterMin INT = 2000,
	@BatteryFilterMax INT = 10000
AS
BEGIN

	SELECT
	*
	FROM MODEL M
	INNER JOIN BRANDS B ON M.BRANDID = B.BRANDID
	INNER JOIN SPECIFICATIONS S ON M.MODELID = S.MODELID
	INNER JOIN VARIANT V ON M.MODELID = V.MODELID
	WHERE 
		(@BrandsFilter IS NULL OR NULL like '%' + B.DISPLAY_NAME + '%') AND 
		M.MODELID = (SELECT TOP 1 V.MODELID WHERE V.RETAILPRICE BETWEEN @PriceFilterMin AND @PriceFilterMax) AND
		M.OVERALL_RATING BETWEEN @RatingFilterMin AND @RatingFilterMax AND
		M.MODELID = (SELECT TOP 1 V.MODELID WHERE V.RAM BETWEEN @RamFilterMin AND @RamFilterMax) AND 
		M.MODELID = (SELECT TOP 1 V.MODELID WHERE V.STORAGE BETWEEN @StorageFilterMin AND @StorageFilterMax) AND
		M.MODELID = (SELECT TOP 1 V.MODELID WHERE S.BATTERYSIZE BETWEEN @BatteryFilterMin AND @BatteryFilterMax)

	ORDER BY M.MODEL_NAME
	OFFSET (@PageNumber - 1) * @PageSize ROWS
	FETCH NEXT @PageSize ROWS ONLY

END



EXEC GetModels @PageNumber = 1, @PageSize = 25, @BrandsFilter = NULL



--Battery, brands, ram, storage, 
