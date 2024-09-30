



CREATE TABLE MANUFACTURER
(
	MANUFACTURERID INT PRIMARY KEY IDENTITY(1,1),
	MNAME VARCHAR(50) NOT NULL,
	CITY VARCHAR(20) NOT NULL,
	[ADDRESS] VARCHAR(200) NOT NULL,
	[DESCRIPTION] VARCHAR(500),
	CAPACITY INT NOT NULL,
	BRANDID INT,
	FOREIGN KEY (BRANDID) REFERENCES BRANDS(BRANDID)
	ON DELETE CASCADE
	ON UPDATE CASCADE
)

SELECT * FROM MANUFACTURER

INSERT INTO MANUFACTURER (MNAME, CITY, ADDRESS, DESCRIPTION, CAPACITY, BRANDID) VALUES
-- Brand 1: Apple
('Apple Manufacturing', 'Cupertino', '1 Infinite Loop, Cupertino, CA', 'Produces premium smartphones and accessories.', 20000, 1),
('Apple Innovations', 'Cupertino', '2 Infinite Loop, Cupertino, CA', 'Focuses on cutting-edge technology.', 18000, 1),
('Apple Tech', 'Cupertino', '3 Infinite Loop, Cupertino, CA', 'Known for high-quality mobile devices.', 22000, 1),

-- Brand 2: Samsung
('Samsung Electronics', 'Seoul', '129 Samsung Rd, Seoul, South Korea', 'Leading manufacturer of mobile phones.', 25000, 2),
('Samsung Mobile', 'Seoul', '130 Samsung Rd, Seoul, South Korea', 'Innovative designs and advanced features.', 24000, 2),
('Samsung Technologies', 'Seoul', '131 Samsung Rd, Seoul, South Korea', 'Known for flagship smartphones.', 26000, 2),

-- Brand 3: Google
('Google Hardware', 'Mountain View', '1600 Amphitheatre Parkway, Mountain View, CA', 'Produces smartphones with integrated services.', 15000, 3),
('Google Devices', 'Mountain View', '1601 Amphitheatre Parkway, Mountain View, CA', 'Known for AI and machine learning integration.', 14000, 3),
('Google Innovations', 'Mountain View', '1602 Amphitheatre Parkway, Mountain View, CA', 'Focuses on user-friendly mobile solutions.', 16000, 3),

-- Brand 4: Xiaomi
('Xiaomi Corporation', 'Beijing', '1 Xiaomi Rd, Beijing, China', 'Produces affordable smartphones with high specs.', 30000, 4),
('Mi Electronics', 'Beijing', '2 Xiaomi Rd, Beijing, China', 'Known for feature-rich devices.', 29000, 4),
('Xiaomi Innovations', 'Beijing', '3 Xiaomi Rd, Beijing, China', 'Focuses on smart home and mobile integration.', 31000, 4),

-- Brand 5: OnePlus
('OnePlus Tech', 'Shenzhen', '1 OnePlus Blvd, Shenzhen, China', 'Manufactures flagship smartphones at competitive prices.', 18000, 5),
('OnePlus Innovations', 'Shenzhen', '2 OnePlus Blvd, Shenzhen, China', 'Known for fast charging technology.', 17000, 5),
('OnePlus Electronics', 'Shenzhen', '3 OnePlus Blvd, Shenzhen, China', 'Focuses on user-centric design.', 19000, 5),

-- Brand 6: Oppo
('Oppo Electronics', 'Dongguan', '1 Oppo Rd, Dongguan, China', 'Produces smartphones with advanced camera technology.', 22000, 6),
('Oppo Mobile', 'Dongguan', '2 Oppo Rd, Dongguan, China', 'Known for sleek designs and fast performance.', 21000, 6),
('Oppo Innovations', 'Dongguan', '3 Oppo Rd, Dongguan, China', 'Focuses on affordable mobile devices.', 23000, 6),

-- Brand 7: Vivo
('Vivo Technologies', 'Dongguan', '1 Vivo Rd, Dongguan, China', 'Specializes in high-quality cameras and audio.', 24000, 7),
('Vivo Electronics', 'Dongguan', '2 Vivo Rd, Dongguan, China', 'Focuses on innovative mobile solutions.', 23000, 7),
('Vivo Innovations', 'Dongguan', '3 Vivo Rd, Dongguan, China', 'Known for stylish designs.', 25000, 7),

-- Brand 8: Sony
('Sony Mobile', 'Tokyo', '1 Sony Rd, Tokyo, Japan', 'Produces smartphones with advanced multimedia capabilities.', 19000, 8),
('Sony Innovations', 'Tokyo', '2 Sony Rd, Tokyo, Japan', 'Known for integration with gaming technology.', 18000, 8),
('Sony Electronics', 'Tokyo', '3 Sony Rd, Tokyo, Japan', 'Focuses on high-performance mobile devices.', 20000, 8),

-- Brand 9: Huawei
('Huawei Technologies', 'Shenzhen', '1 Huawei Rd, Shenzhen, China', 'Leading manufacturer of smartphones and networks.', 28000, 9),
('Huawei Mobile', 'Shenzhen', '2 Huawei Rd, Shenzhen, China', 'Known for innovative features and designs.', 27000, 9),
('Huawei Innovations', 'Shenzhen', '3 Huawei Rd, Shenzhen, China', 'Focuses on 5G mobile technology.', 29000, 9),

-- Brand 10: Motorola
('Motorola Solutions', 'Chicago', '1 Motorola Rd, Chicago, IL', 'Produces a wide range of mobile devices.', 15000, 10),
('Motorola Mobility', 'Chicago', '2 Motorola Rd, Chicago, IL', 'Known for durable smartphones.', 14000, 10),
('Moto Innovations', 'Chicago', '3 Motorola Rd, Chicago, IL', 'Focuses on user-friendly interfaces.', 16000, 10),

-- Brand 11: Infinix
('Infinix Mobility', 'Hong Kong', '1 Infinix Rd, Hong Kong', 'Known for affordable smartphones.', 12000, 11),
('Infinix Technologies', 'Hong Kong', '2 Infinix Rd, Hong Kong', 'Focuses on stylish and functional designs.', 11000, 11),
('Infinix Innovations', 'Hong Kong', '3 Infinix Rd, Hong Kong', 'Produces devices tailored for young users.', 13000, 11),

-- Brand 12: TECNO
('TECNO Mobile', 'Lagos', '1 TECNO Rd, Lagos, Nigeria', 'Produces affordable smartphones for emerging markets.', 11000, 12),
('TECNO Technologies', 'Lagos', '2 TECNO Rd, Lagos, Nigeria', 'Known for quality and innovative features.', 10000, 12),
('TECNO Innovations', 'Lagos', '3 TECNO Rd, Lagos, Nigeria', 'Focuses on customer-centric designs.', 12000, 12);


