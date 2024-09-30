Use[Inventory_Management]


CREATE TABLE BRANDS
(
	BRANDID INT PRIMARY KEY IDENTITY(1,1),
	DISPLAY_NAME VARCHAR(50) NOT NULL,
	LEGAL_NAME VARCHAR(50) NOT NULL,
	[DESCRIPTION] VARCHAR(200),
	LOGO_URL VARCHAR(500) NOT NULL,
	WEBSITE_URL VARCHAR(500),
	OVERALL_RATING DECIMAL(2,1) NOT NULL
)

SELECT * FROM BRANDS

INSERT INTO BRANDS(DISPLAY_NAME, LEGAL_NAME, [DESCRIPTION], LOGO_URL, WEBSITE_URL, OVERALL_RATING)
VALUES 
	('Apple', 'Apple Inc.', 'Apple Inc. designs, manufactures, and markets consumer electronics, software, and online services. Known for products like the iPhone, iPad, Mac, and Apple Watch.', 'https://upload.wikimedia.org/wikipedia/en/f/fa/Apple_logo.png', 'https://www.apple.com', 4.8),
	('Samsung', 'Samsung Electronics Co., Ltd.', 'Samsung Electronics is a global leader in consumer electronics, semiconductors, and telecommunications, known for its smartphones, TVs, and home appliances.', 'https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg', 'https://www.samsung.com', 4.5),
	('Google', 'Google LLC', 'Google LLC is a multinational technology company specializing in Internet-related services and products, including search engines, cloud computing, software, and hardware.', 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg', 'https://www.google.com', 4.7),
	('Xiaomi', 'Xiaomi Corporation', 'Xiaomi Corporation is a Chinese electronics company known for designing and manufacturing smartphones, smart home devices, and consumer electronics.', 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Xiaomi_logo.svg', 'https://www.mi.com', 4.4),
	('OnePlus', 'OnePlus Technology (Shenzhen) Co., Ltd.', 'OnePlus is a Chinese smartphone manufacturer known for its high-quality devices at competitive prices, emphasizing performance and user experience.', 'https://upload.wikimedia.org/wikipedia/commons/6/6e/OnePlus_Logo.svg', 'https://www.oneplus.com', 4.6),
	('Oppo', 'Oppo Electronics Corp.', 'Oppo is a Chinese consumer electronics and mobile communications company known for its smartphones and innovative technology in imaging and design.', 'https://upload.wikimedia.org/wikipedia/commons/f/fc/Oppo_Logo_2021.svg', 'https://www.oppo.com', 4.3),
	('Vivo', 'Vivo Communication Technology Co., Ltd.', 'Vivo is a Chinese smartphone manufacturer known for its innovative technology and focus on camera quality and design in its smartphones.', 'https://upload.wikimedia.org/wikipedia/commons/9/92/Vivo_logo.svg', 'https://www.vivo.com', 4.2),
	('Sony', 'Sony Group Corporation', 'Sony Group Corporation is a Japanese multinational conglomerate known for its electronics, gaming, entertainment, and financial services, including products like PlayStation and Sony TVs.', 'https://upload.wikimedia.org/wikipedia/commons/e/e1/Sony_logo.svg', 'https://www.sony.com', 4.5),
	('Huawei', 'Huawei Technologies Co., Ltd.', 'Huawei is a Chinese multinational technology company specializing in telecommunications equipment and consumer electronics, known for its smartphones and networking solutions.', 'https://upload.wikimedia.org/wikipedia/commons/3/3a/Huawei_logo.svg', 'https://www.huawei.com', 4.0),
	('Motorola', 'Motorola Mobility LLC', 'Motorola is an American consumer electronics and telecommunications company known for its smartphones, two-way radios, and innovation in mobile communication technology.', 'https://upload.wikimedia.org/wikipedia/commons/2/24/Motorola_logo.svg', 'https://www.motorola.com', 4.1),
	('Infinix', 'Infinix Mobility Limited', 'Infinix is a Hong Kong-based smartphone manufacturer known for offering affordable smartphones with competitive features, focusing on young consumers.', 'https://upload.wikimedia.org/wikipedia/en/5/5d/Infinix_Logo.png', 'https://www.infinixmobility.com', 4.0),
	('TECNO', 'TECNO Mobile', 'TECNO is a Chinese smartphone manufacturer focused on emerging markets, offering a range of budget-friendly smartphones with innovative features and stylish designs.', 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Tecno_Mobile_logo.png', 'https://www.tecno-mobile.com', 4.1)