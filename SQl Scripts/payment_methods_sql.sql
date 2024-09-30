

CREATE TABLE PAYMENTMETHODS
(
	METHODID INT PRIMARY KEY IDENTITY(1,1),
	[DESCRIPTION] VARCHAR(200) NOT NULL,
	ISACTIVE BIT,
	TRANSACTION_FEE DECIMAL(10,2)
)



INSERT INTO PAYMENTMETHODS (DESCRIPTION, ISACTIVE, TRANSACTION_FEE) VALUES
('Credit Card', 1, 2.5),
('Debit Card', 1, 1.75),
('PayPal', 1, 2.9),
('Bank Transfer', 1, 0.0),
('Cash on Delivery', 1, 0.0),
('Google Pay', 1, 1.5),
('Apple Pay', 1, 1.5),
('Gift Card', 0, 0.0),
('Bitcoin', 1, 3.0),
('Check', 0, 0.5);