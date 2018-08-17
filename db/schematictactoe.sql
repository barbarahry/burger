### Schema
DROP DATABASE burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	cel1 VARCHAR(100) NOT NULL,
	cel2 VARCHAR(100) NOT NULL,
	cel3 VARCHAR(100) NOT NULL,
	cel4 VARCHAR(100) NOT NULL,
	cel5 VARCHAR(100) NOT NULL,
	cel6 VARCHAR(100) NOT NULL,
	cel7 VARCHAR(100) NOT NULL,
	cel8 VARCHAR(100) NOT NULL,
	cel9 VARCHAR(100) NOT NULL,
	PRIMARY KEY (id)
);

INSERT INTO burgers (cel1, cel2, cel3, cel4, cel5, cel6, cel7, cel8, cel9)
VALUES ("1", "2", "3", "4", "5", "6", "7", "8", "9");