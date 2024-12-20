CREATE TABLE ORDERS
(
	ORDERID INT PRIMARY KEY IDENTITY(1,1),
	PLACEDBY INT
	FOREIGN KEY (PLACEDBY) REFERENCES USERS(USERID),
	ORDERDATETIME DATETIME NOT NULL,
	PAYMENTMETHOD VARCHAR(50) NOT NULL,
	CUSTOMERID INT
	FOREIGN KEY (CUSTOMERID) REFERENCES CUSTOMER(CUSTOMERID),
	ORDERSTATUS VARCHAR(50) NOT NULL
)


ALTER TABLE ORDERS
ADD CONSTRAINT CUSTOMERID FOREIGN KEY (CUSTOMERID) REFERENCES CUSTOMER(CUSTOMERID)


UPDATE ORDERS
SET ORDERSTATUS = 'initiated'

SELECT *  FROM ORDERS


INSERT INTO ORDERS(PLACEDBY, CUSTOMERTYPE, ORDERDATETIME, PAYMENTMETHOD, USERID, ADDDRESSID, ORDERSTATUS)
VALUES (69, 'user', SYSDATETIME(), 'Cash', 69, 1, 'shipped')


