CREATE TABLE IMAGES
(
	IMAGEID INT PRIMARY KEY IDENTITY(1,1),
	IMAGEDATA VARBINARY(MAX) NOT NULL,
	CONTENTTYPE NVARCHAR(100),
	MODELID INT
	FOREIGN KEY (MODELID) REFERENCES MODEL(MODELID)
	ON UPDATE CASCADE
	ON DELETE CASCADE
)