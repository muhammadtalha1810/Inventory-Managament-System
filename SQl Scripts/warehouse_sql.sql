

CREATE TABLE WAREHOUSE
(
	WAREHOUSEID INT PRIMARY KEY IDENTITY(1,1),
	[NAME] VARCHAR(50) NOT NULL,
	CITY VARCHAR(50) NOT NULL,
	COUNTRY VARCHAR(50) NOT NULL,
	CAPACITY INT NOT NULL,
	PHONENO VARCHAR(20) NOT NULL,
	[ADDRESS] VARCHAR(200) NOT NULL,
	MANAGERNAME VARCHAR(50) NOT NULL,
	OPENING_TIME TIME NOT NULL,
	CLOSING_TIME TIME NOT NULL,
)




ALTER TABLE WAREHOUSE
DROP COLUMN ADMINUSERID


ALTER TABLE WAREHOUSE
ADD ADMINUSERID INT FOREIGN KEY (ADMINUSERID) REFERENCES USERS(USERID)





INSERT INTO WAREHOUSE ([NAME], CITY, COUNTRY, CAPACITY, PHONENO, [ADDRESS], MANAGERNAME, OPENING_TIME, CLOSING_TIME) 
VALUES
	('Central Warehouse', 'New York', 'USA', 100000, '(212) 555-1234', '123 Main St, New York, NY', 'John Doe', '08:00:00', '18:00:00'),
	('North Distribution', 'Los Angeles', 'USA', 120000, '(213) 555-5678', '456 Elm St, Los Angeles, CA', 'Emily Clark', '08:00:00', '18:00:00'),
	('East Storage Hub', 'Chicago', 'USA', 150000, '(312) 555-7890', '789 Oak St, Chicago, IL', 'Michael Smith', '08:00:00', '18:00:00'),
	('South Logistics', 'Houston', 'USA', 110000, '(713) 555-1011', '101 Pine St, Houston, TX', 'Sarah Johnson', '08:00:00', '18:00:00'),
	('West Supply Chain', 'Phoenix', 'USA', 130000, '(602) 555-2022', '202 Maple St, Phoenix, AZ', 'Robert Brown', '08:00:00', '18:00:00'),
	('Midwest Hub', 'Dallas', 'USA', 160000, '(214) 555-3033', '303 Cedar St, Dallas, TX', 'Laura Davis', '08:00:00', '18:00:00'),
	('Southeast Storage', 'Miami', 'USA', 140000, '(305) 555-4044', '404 Spruce St, Miami, FL', 'James Wilson', '08:00:00', '18:00:00'),
	('Pacific Logistics', 'San Francisco', 'USA', 170000, '(415) 555-5055', '505 Birch St, San Francisco, CA', 'Patricia Miller', '08:00:00', '18:00:00'),
	('Atlantic Warehouse', 'Boston', 'USA', 180000, '(617) 555-6066', '606 Redwood St, Boston, MA', 'David Lee', '08:00:00', '18:00:00'),
	('Mountain Hub', 'Denver', 'USA', 125000, '(303) 555-7077', '707 Fir St, Denver, CO', 'Christopher Harris', '08:00:00', '18:00:00'),
	('Northeast Distribution', 'Philadelphia', 'USA', 135000, '(215) 555-8088', '808 Sycamore St, Philadelphia, PA', 'Amanda Adams', '08:00:00', '18:00:00'),
	('Southwest Logistics', 'Las Vegas', 'USA', 155000, '(702) 555-9099', '909 Aspen St, Las Vegas, NV', 'Matthew Scott', '08:00:00', '18:00:00'),
	('Great Lakes Hub', 'Detroit', 'USA', 145000, '(313) 555-1010', '1010 Magnolia St, Detroit, MI', 'Daniel King', '08:00:00', '18:00:00'),
	('Gulf Coast Storage', 'New Orleans', 'USA', 165000, '(504) 555-1111', '1111 Chestnut St, New Orleans, LA', 'Jessica White', '08:00:00', '18:00:00'),
	('Northern Supply Center', 'Seattle', 'USA', 175000, '(206) 555-1212', '1212 Pine St, Seattle, WA', 'Brian Martinez', '08:00:00', '18:00:00');