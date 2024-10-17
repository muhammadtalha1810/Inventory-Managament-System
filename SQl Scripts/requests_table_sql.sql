CREATE TABLE REQUESTS
(
	REQUESTID INT PRIMARY KEY IDENTITY(1,1),
	REQUEST_TITLE VARCHAR(100) NOT NULL,
	REQUEST_BODY VARCHAR(600) NOT NULL,
	REQUEST_STATUS VARCHAR(50) NOT NULL
)

select * from REQUESTS

INSERT INTO REQUESTS (REQUEST_TITLE, REQUEST_BODY, REQUEST_STATUS)
VALUES
('Custom Order for High-End Laptops', 'Customer requests 50 high-end gaming laptops with custom specifications for a corporate event.', 'pending'),
('Bulk Order for Mobile Phones', 'Client requested a bulk order of 200 mobile phones (various models) for distribution in their retail stores.', 'approved'),
('Request for Custom-Designed Furniture', 'A business requested a custom order for 30 ergonomically designed office chairs.', 'pending'),
('Large Order for 3D Printers', 'Customer requests a custom order of 10 industrial-grade 3D printers with an expedited delivery option.', 'approved'),
('Bulk Purchase of Smartwatches', 'A request was made for 150 smartwatches with a special engraving option for corporate gifting.', 'pending'),
('Custom Order for Office Desktops', 'A corporate client placed an order for 75 custom-configured desktops with specific CPU, RAM, and storage requirements.', 'declined'),
('Custom Order for Solar Panels', 'Customer requested a bulk order of 40 solar panels along with installation services for a commercial project.', 'pending'),
('Custom Order for Wireless Routers', 'Customer inquired about the availability and pricing for 100 high-speed wireless routers for a university project.', 'approved'),
('Request for Bulk Purchase of Monitors', 'A large IT firm placed a request for 120 LED monitors, 24-inch size, for their new office setup.', 'pending'),
('Custom Bulk Order for Drones', 'Client requested 25 advanced drones with customized features for a special surveillance project.', 'declined'),
('Custom Order for Educational Tablets', 'An educational institution requested 200 tablets with pre-installed learning software for their students.', 'approved'),
('Custom Order for Gym Equipment', 'A fitness center requested a custom order for treadmills, exercise bikes, and weights in bulk.', 'pending'),
('Bulk Purchase of Laptops for Training Center', 'Client requested a bulk order of 100 mid-range laptops for training purposes in their new facility.', 'approved'),
('Request for Custom Gaming Consoles', 'A gaming company requested a custom order of 50 gaming consoles with upgraded storage and controllers.', 'pending'),
('Bulk Order of Office Printers', 'A business placed an inquiry for the bulk purchase of 25 laser printers for office use.', 'declined');
