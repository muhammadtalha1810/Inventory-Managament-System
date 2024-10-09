
CREATE TABLE MODEL
(
	MODELID INT PRIMARY KEY IDENTITY(1,1),
	MODEL_NAME VARCHAR(50) NOT NULL,
	RELEASE_DATE DATE NOT NULL,
	OVERALL_RATING DECIMAL(2,1) NOT NULL,
	IMAGE_URL VARCHAR(200) NOT NULL,
	BRANDID INT,
	FOREIGN KEY (BRANDID) REFERENCES BRANDS(BRANDID)
	ON DELETE CASCADE
	ON UPDATE CASCADE
)



SELECT * FROM MODEL


INSERT INTO MODEL (MODEL_NAME, RELEASE_DATE, OVERALL_RATING, IMAGE_URL, BRANDID) VALUES
-- Brand 1: Apple
('iPhone 14', '2022-09-16', 4.7, 'https://example.com/images/iphone14.jpg', 1),
('iPhone 14 Pro', '2022-09-16', 4.8, 'https://example.com/images/iphone14pro.jpg', 1),
('iPhone 14 Pro Max', '2022-09-16', 4.9, 'https://example.com/images/iphone14promax.jpg', 1),
('iPhone SE (2022)', '2022-03-18', 4.5, 'https://example.com/images/iphonese2022.jpg', 1),
('iPhone 13', '2021-09-24', 4.6, 'https://example.com/images/iphone13.jpg', 1),

-- Brand 2: Samsung
('Galaxy S22', '2022-02-25', 4.6, 'https://example.com/images/galaxys22.jpg', 2),
('Galaxy S22 Ultra', '2022-02-25', 4.8, 'https://example.com/images/galaxys22ultra.jpg', 2),
('Galaxy Z Flip4', '2022-08-26', 4.5, 'https://example.com/images/galaxyzflip4.jpg', 2),
('Galaxy A53', '2022-03-17', 4.4, 'https://example.com/images/galaxya53.jpg', 2),
('Galaxy Note 20', '2020-08-21', 4.7, 'https://example.com/images/galaxynote20.jpg', 2),

-- Brand 3: Google
('Pixel 6', '2021-10-28', 4.6, 'https://example.com/images/pixel6.jpg', 3),
('Pixel 6 Pro', '2021-10-28', 4.7, 'https://example.com/images/pixel6pro.jpg', 3),
('Pixel 5a', '2021-08-26', 4.5, 'https://example.com/images/pixel5a.jpg', 3),
('Pixel 5', '2020-10-29', 4.4, 'https://example.com/images/pixel5.jpg', 3),
('Pixel 4a', '2020-08-20', 4.3, 'https://example.com/images/pixel4a.jpg', 3),

-- Brand 4: Xiaomi
('Xiaomi 12', '2022-03-15', 4.6, 'https://example.com/images/xiaomi12.jpg', 4),
('Xiaomi 12 Pro', '2022-03-15', 4.8, 'https://example.com/images/xiaomi12pro.jpg', 4),
('Redmi Note 11', '2022-01-26', 4.5, 'https://example.com/images/redminote11.jpg', 4),
('Poco X4 Pro', '2022-02-28', 4.4, 'https://example.com/images/pocox4pro.jpg', 4),
('Xiaomi Mi 11', '2021-01-01', 4.7, 'https://example.com/images/xiaomimi11.jpg', 4),

-- Brand 5: OnePlus
('OnePlus 10 Pro', '2022-01-11', 4.7, 'https://example.com/images/oneplus10pro.jpg', 5),
('OnePlus 9', '2021-03-23', 4.5, 'https://example.com/images/oneplus9.jpg', 5),
('OnePlus Nord 2', '2021-07-22', 4.6, 'https://example.com/images/oneplusnord2.jpg', 5),
('OnePlus 8T', '2020-10-23', 4.4, 'https://example.com/images/oneplus8t.jpg', 5),
('OnePlus Nord', '2020-07-21', 4.5, 'https://example.com/images/oneplusnord.jpg', 5),

-- Brand 6: Oppo
('Oppo Find X5', '2022-02-24', 4.6, 'https://example.com/images/oppofindx5.jpg', 6),
('Oppo Reno7', '2021-11-25', 4.5, 'https://example.com/images/opporeno7.jpg', 6),
('Oppo A54', '2021-04-01', 4.4, 'https://example.com/images/oppoa54.jpg', 6),
('Oppo F19', '2021-04-06', 4.3, 'https://example.com/images/oppoF19.jpg', 6),
('Oppo A74', '2022-04-06', 4.5, 'https://example.com/images/oppoa74.jpg', 6),

-- Brand 7: Vivo
('Vivo V21', '2021-04-27', 4.5, 'https://example.com/images/vivov21.jpg', 7),
('Vivo X70', '2021-09-09', 4.6, 'https://example.com/images/vivox70.jpg', 7),
('Vivo Y21', '2021-08-12', 4.4, 'https://example.com/images/vivoy21.jpg', 7),
('Vivo S9', '2021-03-03', 4.7, 'https://example.com/images/vivos9.jpg', 7),
('Vivo V21e', '2021-05-06', 4.3, 'https://example.com/images/vivov21e.jpg', 7),

-- Brand 8: Sony
('Sony Xperia 1 III', '2021-08-19', 4.7, 'https://example.com/images/xperia1iii.jpg', 8),
('Sony Xperia 5 III', '2021-08-19', 4.6, 'https://example.com/images/xperia5iii.jpg', 8),
('Sony Xperia 10 III', '2021-05-19', 4.4, 'https://example.com/images/xperia10iii.jpg', 8),
('Sony Xperia Pro', '2021-02-24', 4.8, 'https://example.com/images/xperiapro.jpg', 8),
('Sony Xperia 1 II', '2020-07-24', 4.5, 'https://example.com/images/xperia1ii.jpg', 8),

-- Brand 9: Huawei
('Huawei P50', '2021-07-29', 4.6, 'https://example.com/images/huaweip50.jpg', 9),
('Huawei Mate 40', '2020-10-22', 4.8, 'https://example.com/images/huaweimate40.jpg', 9),
('Huawei P40', '2020-03-26', 4.5, 'https://example.com/images/huaweip40.jpg', 9),
('Huawei Nova 9', '2021-09-23', 4.4, 'https://example.com/images/huaweinova9.jpg', 9),
('Huawei Mate 30', '2019-09-19', 4.7, 'https://example.com/images/huaweimate30.jpg', 9),

-- Brand 10: Motorola
('Motorola Edge 20', '2021-07-29', 4.5, 'https://example.com/images/motorolaedge20.jpg', 10),
('Motorola G100', '2021-03-25', 4.4, 'https://example.com/images/motorolag100.jpg', 10),
('Motorola One 5G', '2020-09-02', 4.6, 'https://example.com/images/motorolaone5g.jpg', 10),
('Moto G Power (2021)', '2021-01-08', 4.3, 'https://example.com/images/motogpower2021.jpg', 10),
('Motorola Razr 5G', '2020-09-09', 4.7, 'https://example.com/images/motorolarazr5g.jpg', 10),

-- Brand 11: Infinix
('Infinix Zero 8', '2020-08-10', 4.4, 'https://example.com/images/infinixzero8.jpg', 11),
('Infinix Hot 11', '2021-03-03', 4.5, 'https://example.com/images/infinixhot11.jpg', 11),
('Infinix Note 11', '2021-10-07', 4.6, 'https://example.com/images/infinixnote11.jpg', 11),
('Infinix Note 10', '2021-06-15', 4.3, 'https://example.com/images/infinixnote10.jpg', 11),
('Infinix Smart 5', '2021-04-05', 4.2, 'https://example.com/images/infinixsmart5.jpg', 11),

-- Brand 12: TECNO
('TECNO Camon 18', '2021-09-30', 4.5, 'https://example.com/images/tecno18.jpg', 12),
('TECNO POVA 2', '2021-07-05', 4.4, 'https://example.com/images/tecno2.jpg', 12),
('TECNO Spark 8', '2021-09-01', 4.3, 'https://example.com/images/tecno8.jpg', 12),
('TECNO Phantom X', '2021-06-30', 4.6, 'https://example.com/images/tecnoX.jpg', 12),
('TECNO Pop 5', '2021-05-15', 4.2, 'https://example.com/images/tecno5.jpg', 12);
