

CREATE TABLE SUPPLIER
(
	SUPPLIERID INT PRIMARY KEY IDENTITY(1,1),
	[NAME] VARCHAR(50) NOT NULL,
	CONTACT_PERSON VARCHAR(50) NOT NULL,
	CONTACT_EMAIL VARCHAR(50) NOT NULL,
	[ADDRESS] VARCHAR(200) NOT NULL,
	OVERALL_RATING DECIMAL(2,1) NOT NULL
)

SELECT * FROM SUPPLIER


INSERT INTO SUPPLIER (NAME, CONTACT_PERSON, CONTACT_EMAIL, ADDRESS, OVERALL_RATING) VALUES
('Global Supplies Co.', 'John Doe', 'contact@globalsupplies.com', '123 Main St, New York, NY', 4.0),
('Tech Solutions Ltd.', 'Jane Smith', 'info@techsolutions.com', '456 Elm St, Los Angeles, CA', 4.8),
('Worldwide Electronics', 'Robert Brown', 'support@worldwideelectronics.com', '789 Oak St, Chicago, IL', 4.0),
('Advanced Parts Corp.', 'Emily Johnson', 'sales@advancedparts.com', '101 Pine St, Houston, TX', 4.6),
('Premier Manufacturing', 'Michael Green', 'info@premiermanufacturing.com', '202 Maple St, Phoenix, AZ', 3.7),
('Reliable Components', 'Sarah Davis', 'contact@reliablecomponents.com', '303 Cedar St, Dallas, TX', 3.6),
('Fast Delivery Inc.', 'David Miller', 'support@fastdelivery.com', '404 Spruce St, Miami, FL', 4.7),
('Mega Distributors', 'Linda Martinez', 'info@megadistributors.com', '505 Birch St, San Francisco, CA', 4.5),
('United Wholesale', 'Kevin Wilson', 'sales@unitedwholesale.com', '606 Redwood St, Boston, MA', 4.5),
('Direct Supply Chain', 'Jessica Thompson', 'support@directsupply.com', '707 Fir St, Denver, CO', 4.5),
('Quality Products Group', 'William White', 'contact@qualityproducts.com', '808 Sycamore St, Philadelphia, PA', 4.5),
('TopLine Suppliers', 'Laura Black', 'info@toplinesuppliers.com', '909 Aspen St, Las Vegas, NV', 4.8),
('Innovative Imports', 'James King', 'support@innovativeimports.com', '1010 Magnolia St, Detroit, MI', 4.6),
('Pro Supply', 'Sandra Lee', 'info@prosupply.com', '1111 Chestnut St, New Orleans, LA', 4.5),
('Global Distribution Ltd.', 'Daniel Harris', 'contact@globaldistribution.com', '1212 Pine St, Seattle, WA', 4.6);