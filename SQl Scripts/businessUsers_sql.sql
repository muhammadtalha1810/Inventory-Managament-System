CREATE TABLE BUSINESSUSERS
(
	BUSINESSID INT PRIMARY KEY IDENTITY(1,1),
	BUSINESSNAME VARCHAR(50) NOT NULL,
	PERSONROLE VARCHAR(30) NOT NULL,
	[BUSINESS DESCRIPTION] VARCHAR(500),
	USERID INT
	FOREIGN KEY (USERID) REFERENCES USERS(USERID)
	ON DELETE CASCADE
	ON UPDATE CASCADE,
)


SELECT * FROM BUSINESSUSERS


DELETE FROM BUSINESSUSERS

begin Transaction

INSERT INTO BUSINESSUSERS (BUSINESSNAME, PERSONROLE, [BUSINESS DESCRIPTION], USERID)
SELECT 'Business B', 'finance', 'This is a description for business A', USERID 
FROM USERS
WHERE USERTYPE = 'Business'
ORDER BY USERID
OFFSET 6 ROWS
FETCH NEXT 100 ROWS ONLY

rollback;