create database Grids;
use Grids;
create table Customer(
			id tinyint(255) UNSIGNED AUTO_INCREMENT,
			cust_name varchar(100) CHARSET cp1251 COLLATE cp1251_general_ci NOT NULL,
			inn decimal(12,0) UNSIGNED NOT NULL,
			address varchar(255) CHARSET cp1251 COLLATE cp1251_general_ci,
			PRIMARY KEY(id)
			);

create table Account(
			cust_id tinyint(255) NOT NULL,
			acc_number decimal(20,0),
      acc_name varchar(100) CHARSET cp1251 COLLATE cp1251_general_ci,
			bik decimal(9,0) NOT NULL,
			balance decimal(14,2) NOT NULL,
			PRIMARY KEY (acc_number), INDEX(cust_id)
			);

create user web_conn@localhost IDENTIFIED BY '321';
GRANT ALL PRIVILEGES ON Grids.* to web_conn@localhost;
FLUSH PRIVILEGES;




insert into Customer (cust_name, inn, address) VALUES
                        ('Vasilisa', 323, 'Tsarstvo');
insert into Customer (cust_name, inn, address) VALUES
                        ('Innokentiy', 123456789, 'Lives in AZ');
insert into Customer (cust_name, inn, address) VALUES
                        ('Guzman', 523456789, 'CU');

insert into Account (cust_id, acc_number, acc_name, bik, balance) VALUES
                        (1, 323, 'Noviy Urengoi', 246, 354548945.12);
insert into Account (cust_id, acc_number, acc_name, bik, balance) VALUES
                        (2, 07645637, 'Kesha in Africa', 108568346, 8945.34);
insert into Account (cust_id, acc_number, acc_name, bik, balance) VALUES
                        (2, 8645637, 'Somebody calling K', 108568346, 8945.34);
insert into Account (cust_id, acc_number, acc_name, bik, balance) VALUES
                        (3, 33546347234465754, 'Banco nacional', 46, 6548945.12);
