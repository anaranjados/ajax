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
                        ('Agustín', 321, 'Canarias');
insert into Customer (cust_name, inn, address) VALUES
                        ('Jacinto', 135790, 'Las Palmas');
insert into Customer (cust_name, inn, address) VALUES
                        ('Maceo ', 024689, 'CU');

insert into Account (cust_id, acc_number, acc_name, bik, balance) VALUES
                        (1, 323, 'Kunashir', 07016446, 354548945.12);
insert into Account (cust_id, acc_number, acc_name, bik, balance) VALUES
                        (2, 07645637, 'Galápogos', 78568345, 8945.34);
insert into Account (cust_id, acc_number, acc_name, bik, balance) VALUES
                        (2, 8645637, 'Cauto', 10858346, 8945.34);
insert into Account (cust_id, acc_number, acc_name, bik, balance) VALUES
                        (3, 33546347234465754, 'Jatibonico', 6001159, 6548945.12);
