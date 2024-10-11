CREATE PROCEDURE GetModelsNames
	@SearchKeyword VARCHAR(200) = NULL,
	@ResultsCount INT = 5
AS
BEGIN
	SELECT TOP (@ResultsCount) MODEL_NAME FROM MODEL WHERE MODEL_NAME LIKE '%' + @SearchKeyword + '%';
END


EXEC GetModelsNames @SearchKeyword = 'infinix', @ResultsCount = 5