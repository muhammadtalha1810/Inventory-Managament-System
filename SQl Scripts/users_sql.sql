

CREATE TABLE USERS
(
	USERID INT PRIMARY KEY IDENTITY(1,1),
	USERNAME VARCHAR(50) NOT NULL,
	[PASSWORD] VARCHAR(50) NOT NULL,
	EMAIL VARCHAR(50) NOT NULL,
	FIRSTNAME VARCHAR(20) NOT NULL,
	LASTNAME VARCHAR(20),
	[DESCRIPTION] VARCHAR(200),
	REGISTERATION_DATE DATE NOT NULL,
	BALANCE DECIMAL(18,2) NOT NULL,
)

SELECT * FROM USERS


INSERT INTO USERS (USERNAME, PASSWORD, EMAIL, FIRSTNAME, LASTNAME, DESCRIPTION, REGISTERATION_DATE, BALANCE) VALUES
('johndoe', 'password123', 'johndoe@example.com', 'John', 'Doe', 'Regular user', '2023-01-10', 1500.5),
('janedoe', 'securepass', 'janedoe@example.com', 'Jane', 'Doe', 'Premium user', '2022-12-15', 3200.75),
('mike123', 'mikepass', 'mike123@example.com', 'Mike', 'Smith', 'Active user', '2023-03-18', 275.2),
('emilyj', 'emilypass', 'emilyj@example.com', 'Emily', 'Jones', 'Inactive user', '2021-11-25', 500.0),
('robertr', 'robertpass', 'robertr@example.com', 'Robert', 'Brown', 'Verified user', '2020-07-22', 6800.99),
('davidk', 'davidpass', 'davidk@example.com', 'David', 'King', 'Frequent buyer', '2023-02-28', 125.75),
('lindam', 'lindapass', 'lindam@example.com', 'Linda', 'Martinez', 'VIP member', '2022-05-10', 5200.0),
('kevinb', 'kevinpass', 'kevinb@example.com', 'Kevin', 'Baker', 'Occasional user', '2023-04-12', 110.0),
('sarahr', 'sarahpass', 'sarahr@example.com', 'Sarah', 'Reed', 'New user', '2023-08-05', 300.0),
('williamt', 'williampass', 'williamt@example.com', 'William', 'Turner', 'Standard member', '2023-06-17', 850.6);