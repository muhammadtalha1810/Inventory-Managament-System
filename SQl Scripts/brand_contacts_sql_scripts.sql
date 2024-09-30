USE[Inventory_Management]

CREATE TABLE BRANDCONTACTS
(
	CONTACTID INT PRIMARY KEY IDENTITY(1,1),
	CONTACT_NAME VARCHAR(50) NOT NULL,
	CONTACT_EMAIL VARCHAR(50),
	CONTACT_PHONE VARCHAR(20) NOT NULL,
	[ADDRESS] VARCHAR(200) NOT NULL,
	BRANDID INT,
	FOREIGN KEY (BRANDID) REFERENCES BRANDS(BRANDID)
	ON DELETE CASCADE
	ON UPDATE CASCADE
)


SELECT * FROM BRANDCONTACTS

INSERT INTO BRANDCONTACTS (CONTACT_NAME, CONTACT_EMAIL, CONTACT_PHONE, ADDRESS, BRANDID) VALUES
-- Brand 1 Contacts
('Alice Smith', 'alice.smith@brand1.com', '555-0101', '123 Elm St, Springfield, IL', 1),
('Bob Johnson', 'bob.johnson@brand1.com', '555-0102', '456 Oak St, Springfield, IL', 1),
('Carol Williams', 'carol.williams@brand1.com', '555-0103', '789 Pine St, Springfield, IL', 1),

-- Brand 2 Contacts
('David Brown', 'david.brown@brand2.com', '555-0201', '123 Maple Ave, Springfield, IL', 2),
('Eva Green', 'eva.green@brand2.com', '555-0202', '234 Birch St, Springfield, IL', 2),
('Frank Harris', 'frank.harris@brand2.com', '555-0203', '345 Cedar St, Springfield, IL', 2),

-- Brand 3 Contacts
('Grace Lee', 'grace.lee@brand3.com', '555-0301', '456 Elm St, Springfield, IL', 3),
('Henry Miller', 'henry.miller@brand3.com', '555-0302', '567 Oak St, Springfield, IL', 3),
('Ivy Davis', 'ivy.davis@brand3.com', '555-0303', '678 Pine St, Springfield, IL', 3),

-- Brand 4 Contacts
('Jack Wilson', 'jack.wilson@brand4.com', '555-0401', '789 Maple Ave, Springfield, IL', 4),
('Kathy Taylor', 'kathy.taylor@brand4.com', '555-0402', '890 Birch St, Springfield, IL', 4),
('Liam Anderson', 'liam.anderson@brand4.com', '555-0403', '123 Cedar St, Springfield, IL', 4),

-- Brand 5 Contacts
('Mia Thomas', 'mia.thomas@brand5.com', '555-0501', '234 Elm St, Springfield, IL', 5),
('Noah Jackson', 'noah.jackson@brand5.com', '555-0502', '345 Oak St, Springfield, IL', 5),
('Olivia White', 'olivia.white@brand5.com', '555-0503', '456 Pine St, Springfield, IL', 5),

-- Brand 6 Contacts
('Paul Harris', 'paul.harris@brand6.com', '555-0601', '567 Maple Ave, Springfield, IL', 6),
('Quinn Clark', 'quinn.clark@brand6.com', '555-0602', '678 Birch St, Springfield, IL', 6),
('Rachel Lewis', 'rachel.lewis@brand6.com', '555-0603', '789 Cedar St, Springfield, IL', 6),

-- Brand 7 Contacts
('Sam Robinson', 'sam.robinson@brand7.com', '555-0701', '890 Elm St, Springfield, IL', 7),
('Tina Walker', 'tina.walker@brand7.com', '555-0702', '123 Oak St, Springfield, IL', 7),
('Ursula Hall', 'ursula.hall@brand7.com', '555-0703', '456 Pine St, Springfield, IL', 7),

-- Brand 8 Contacts
('Victor Young', 'victor.young@brand8.com', '555-0801', '789 Maple Ave, Springfield, IL', 8),
('Wendy King', 'wendy.king@brand8.com', '555-0802', '890 Birch St, Springfield, IL', 8),
('Xander Scott', 'xander.scott@brand8.com', '555-0803', '123 Cedar St, Springfield, IL', 8),

-- Brand 9 Contacts
('Yara Adams', 'yara.adams@brand9.com', '555-0901', '234 Elm St, Springfield, IL', 9),
('Zane Carter', 'zane.carter@brand9.com', '555-0902', '345 Oak St, Springfield, IL', 9),
('Anna Mitchell', 'anna.mitchell@brand9.com', '555-0903', '456 Pine St, Springfield, IL', 9),

-- Brand 10 Contacts
('Ben Perez', 'ben.perez@brand10.com', '555-1001', '567 Maple Ave, Springfield, IL', 10),
('Cindy Roberts', 'cindy.roberts@brand10.com', '555-1002', '678 Birch St, Springfield, IL', 10),
('Daniel Turner', 'daniel.turner@brand10.com', '555-1003', '789 Cedar St, Springfield, IL', 10),

-- Brand 11 Contacts
('Ella Green', 'ella.green@brand11.com', '555-1101', '890 Elm St, Springfield, IL', 11),
('Fiona Baker', 'fiona.baker@brand11.com', '555-1102', '123 Oak St, Springfield, IL', 11),
('George Thompson', 'george.thompson@brand11.com', '555-1103', '456 Pine St, Springfield, IL', 11),

-- Brand 12 Contacts
('Hannah Martinez', 'hannah.martinez@brand12.com', '555-1201', '567 Maple Ave, Springfield, IL', 12),
('Isaac Nelson', 'isaac.nelson@brand12.com', '555-1202', '678 Birch St, Springfield, IL', 12),
('Julia Rodriguez', 'julia.rodriguez@brand12.com', '555-1203', '789 Cedar St, Springfield, IL', 12);

