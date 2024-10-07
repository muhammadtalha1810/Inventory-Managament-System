
Use[Inventory_Management]

CREATE TABLE USERS
(
	USERID INT PRIMARY KEY IDENTITY(1,1),
	USERNAME VARCHAR(50) NOT NULL,
	[PASSWORD] VARCHAR(50) NOT NULL,
	EMAIL VARCHAR(50) NOT NULL,
	FIRSTNAME VARCHAR(20) NOT NULL,
	LASTNAME VARCHAR(20),
	[DESCRIPTION] VARCHAR(200),
	BALANCE DECIMAL(18,2) NOT NULL,
	[ADDRESS] VARCHAR(200) NOT NULL,
	PHONENUMBER VARCHAR(20) NOT NULL,
	USERTYPE VARCHAR(30) NOT NULL
)

DELETE from users

ALTER TABLE USERS
DROP COLUMN DESCR
SELECT * FROM USERS where USERNAME = 'talha'



INSERT INTO USERS 
(
    USERNAME,
    [PASSWORD],
    EMAIL,
    FIRSTNAME,
    LASTNAME,
    [DESCRIPTION],
    BALANCE,
    [ADDRESS],
    PHONENUMBER,
    USERTYPE
)
VALUES ('talha', 'talha2002', 'talha.naeem@curemd.com', 'Talha', 'Naeem', 'Talha is an Admin User', 14200, 'Relax Inn Hotel, Davis Road, Lahore', '+923046751252', 'Employee')

INSERT INTO USERS 
(
    USERNAME,
    [PASSWORD],
    EMAIL,
    FIRSTNAME,
    LASTNAME,
    [DESCRIPTION],
    BALANCE,
    [ADDRESS],
    PHONENUMBER,
    USERTYPE
)
VALUES
('michael_business0', 'Pass100', 'michael.williams@example.com', 'Michael', 'Williams', 'Small business owner', 728.01, '834 Miller Rd, CityD, CountryX', '+2943374147', 'Business'),
('robert_employee1', 'Pass101', 'robert.williams@example.com', 'Robert', 'Williams', 'Human Resources Employee', 238.30, '125 Jones Rd, CityA, CountryZ', '+4352334464', 'Employee'),
('mary_employee2', 'Pass102', 'mary.lopez@example.com', 'Mary', 'Lopez', 'Human Resources Employee', 4156.34, '223 Smith St, CityC, CountryY', '+9388775916', 'Employee'),
('james_business3', 'Pass103', 'james.davis@example.com', 'James', 'Davis', 'Small business owner', 2701.82, '336 Davis Blvd, CityC, CountryX', '+7280298343', 'Business'),
('michael_business4', 'Pass104', 'michael.garcia@example.com', 'Michael', 'Garcia', 'Small business owner', 8335.82, '17 Martinez Blvd, CityC, CountryZ', '+5694995651', 'Business'),
('michael_indivisual5', 'Pass105', 'michael.lopez@example.com', 'Michael', 'Lopez', 'Freelancer', 6430.38, '508 Smith Ave, CityC, CountryY', '+7466933563', 'Indivisual'),
('robert_business6', 'Pass106', 'robert.johnson@example.com', 'Robert', 'Johnson', 'Small business owner', 9771.45, '116 Lopez Blvd, CityC, CountryX', '+6378065928', 'Business'),
('william_business7', 'Pass107', 'william.martinez@example.com', 'William', 'Martinez', 'Small business owner', 644.09, '902 Smith Rd, CityB, CountryY', '+6857181827', 'Business'),
('emma_employee8', 'Pass108', 'emma.smith@example.com', 'Emma', 'Smith', 'Human Resources Employee', 1177.86, '774 Jones Ave, CityD, CountryY', '+9993621433', 'Employee'),
('olivia_business9', 'Pass109', 'olivia.johnson@example.com', 'Olivia', 'Johnson', 'Small business owner', 1968.07, '859 Martinez Blvd, CityC, CountryX', '+5007548623', 'Business'),
('michael_business10', 'Pass110', 'michael.davis@example.com', 'Michael', 'Davis', 'Small business owner', 9026.45, '725 Garcia Blvd, CityB, CountryZ', '+8922974310', 'Business'),
('alice_employee11', 'Pass111', 'alice.miller@example.com', 'Alice', 'Miller', 'Human Resources Employee', 3302.86, '55 Davis Blvd, CityA, CountryX', '+6725894096', 'Employee'),
('robert_indivisual12', 'Pass112', 'robert.lopez@example.com', 'Robert', 'Lopez', 'Freelancer', 3893.49, '420 Martinez Rd, CityA, CountryZ', '+1488488442', 'Indivisual'),
('mary_employee13', 'Pass113', 'mary.johnson@example.com', 'Mary', 'Johnson', 'Human Resources Employee', 8230.97, '813 Brown St, CityB, CountryY', '+8685385669', 'Employee'),
('john_employee14', 'Pass114', 'john.lopez@example.com', 'John', 'Lopez', 'Human Resources Employee', 8701.95, '643 Smith Blvd, CityD, CountryZ', '+7624267094', 'Employee'),
('james_indivisual15', 'Pass115', 'james.lopez@example.com', 'James', 'Lopez', 'Freelancer', 1619.49, '594 Williams Ave, CityB, CountryX', '+3749639489', 'Indivisual'),
('william_employee16', 'Pass116', 'william.martinez@example.com', 'William', 'Martinez', 'Human Resources Employee', 514.94, '568 Lopez St, CityD, CountryY', '+5769497339', 'Employee'),
('emma_employee17', 'Pass117', 'emma.williams@example.com', 'Emma', 'Williams', 'Human Resources Employee', 5371.55, '117 Smith Ave, CityA, CountryZ', '+8049591400', 'Employee'),
('olivia_employee18', 'Pass118', 'olivia.davis@example.com', 'Olivia', 'Davis', 'Human Resources Employee', 2029.25, '811 Jones Ave, CityC, CountryY', '+6769468962', 'Employee'),
('alice_employee19', 'Pass119', 'alice.lopez@example.com', 'Alice', 'Lopez', 'Human Resources Employee', 4165.99, '336 Johnson St, CityD, CountryZ', '+8253832824', 'Employee'),
('john_employee20', 'Pass120', 'john.jones@example.com', 'John', 'Jones', 'Human Resources Employee', 6639.55, '468 Williams St, CityD, CountryY', '+5994655646', 'Employee'),
('james_employee21', 'Pass121', 'james.williams@example.com', 'James', 'Williams', 'Human Resources Employee', 719.83, '735 Williams Ave, CityB, CountryX', '+9129567991', 'Employee'),
('robert_business22', 'Pass122', 'robert.davis@example.com', 'Robert', 'Davis', 'Small business owner', 9012.05, '514 Williams St, CityC, CountryX', '+9206632125', 'Business'),
('alice_employee23', 'Pass123', 'alice.martinez@example.com', 'Alice', 'Martinez', 'Human Resources Employee', 4547.22, '183 Miller Rd, CityA, CountryZ', '+1421874120', 'Employee'),
('william_business24', 'Pass124', 'william.jones@example.com', 'William', 'Jones', 'Small business owner', 1203.61, '737 Williams Rd, CityD, CountryX', '+2719257160', 'Business'),
('olivia_employee25', 'Pass125', 'olivia.lopez@example.com', 'Olivia', 'Lopez', 'Human Resources Employee', 8257.71, '735 Brown Ave, CityA, CountryY', '+3581466353', 'Employee'),
('alice_employee26', 'Pass126', 'alice.miller@example.com', 'Alice', 'Miller', 'Human Resources Employee', 1786.04, '819 Williams Ave, CityD, CountryX', '+3494391607', 'Employee'),
('william_indivisual27', 'Pass127', 'william.johnson@example.com', 'William', 'Johnson', 'Freelancer', 1781.23, '197 Garcia Blvd, CityB, CountryY', '+6725916633', 'Indivisual'),
('olivia_indivisual28', 'Pass128', 'olivia.smith@example.com', 'Olivia', 'Smith', 'Freelancer', 4335.58, '36 Johnson Blvd, CityD, CountryY', '+1838254139', 'Indivisual'),
('jane_business29', 'Pass129', 'jane.martinez@example.com', 'Jane', 'Martinez', 'Small business owner', 4405.18, '711 Jones St, CityD, CountryY', '+2689768126', 'Business'),
('emma_employee30', 'Pass130', 'emma.smith@example.com', 'Emma', 'Smith', 'Human Resources Employee', 814.19, '372 Williams Ave, CityC, CountryZ', '+9535279909', 'Employee'),
('john_business31', 'Pass131', 'john.martinez@example.com', 'John', 'Martinez', 'Small business owner', 9022.44, '204 Davis Rd, CityA, CountryX', '+8352900737', 'Business'),
('robert_indivisual32', 'Pass132', 'robert.jones@example.com', 'Robert', 'Jones', 'Freelancer', 2511.22, '765 Johnson Blvd, CityA, CountryY', '+5174213669', 'Indivisual'),
('john_business33', 'Pass133', 'john.jones@example.com', 'John', 'Jones', 'Small business owner', 4595.61, '934 Johnson Blvd, CityD, CountryX', '+2363145684', 'Business'),
('james_indivisual34', 'Pass134', 'james.martinez@example.com', 'James', 'Martinez', 'Freelancer', 3301.94, '165 Miller Ave, CityD, CountryY', '+2243990137', 'Indivisual'),
('william_business35', 'Pass135', 'william.davis@example.com', 'William', 'Davis', 'Small business owner', 1703.77, '894 Davis Ave, CityB, CountryY', '+5708146357', 'Business'),
('john_employee39', 'Pass139', 'john.miller@example.com', 'John', 'Miller', 'Human Resources Employee', 6077.74, '86 Davis St, CityC, CountryZ', '+7424564373', 'Employee'),
('william_indivisual40', 'Pass140', 'william.davis@example.com', 'William', 'Davis', 'Freelancer', 6837.49, '741 Smith St, CityB, CountryZ', '+6291484157', 'Indivisual'),
('jane_employee41', 'Pass141', 'jane.johnson@example.com', 'Jane', 'Johnson', 'Human Resources Employee', 5471.30, '933 Brown Rd, CityD, CountryY', '+8552575782', 'Employee'),
('mary_employee42', 'Pass142', 'mary.miller@example.com', 'Mary', 'Miller', 'Human Resources Employee', 702.68, '405 Smith St, CityB, CountryZ', '+1695013806', 'Employee'),
('michael_indivisual43', 'Pass143', 'michael.garcia@example.com', 'Michael', 'Garcia', 'Freelancer', 4520.54, '795 Miller Rd, CityA, CountryY', '+1493422318', 'Indivisual'),
('michael_indivisual44', 'Pass144', 'michael.miller@example.com', 'Michael', 'Miller', 'Freelancer', 4848.17, '645 Garcia St, CityB, CountryZ', '+5665717103', 'Indivisual'),
('michael_employee45', 'Pass145', 'michael.johnson@example.com', 'Michael', 'Johnson', 'Human Resources Employee', 3880.10, '150 Johnson St, CityA, CountryX', '+5409109165', 'Employee'),
('william_employee46', 'Pass146', 'william.martinez@example.com', 'William', 'Martinez', 'Human Resources Employee', 8746.74, '591 Smith Ave, CityB, CountryX', '+4887239282', 'Employee'),
('jane_business47', 'Pass147', 'jane.garcia@example.com', 'Jane', 'Garcia', 'Small business owner', 9795.11, '55 Davis St, CityD, CountryY', '+4917155225', 'Business'),
('william_employee48', 'Pass148', 'william.garcia@example.com', 'William', 'Garcia', 'Human Resources Employee', 438.11, '345 Garcia St, CityB, CountryZ', '+1222191165', 'Employee'),
('jane_indivisual49', 'Pass149', 'jane.johnson@example.com', 'Jane', 'Johnson', 'Freelancer', 4172.69, '519 Smith St, CityD, CountryY', '+9269402279', 'Indivisual');
