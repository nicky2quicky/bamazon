-- Creating dependencies for the SQL Database

DROP DATABASE IF EXISTS bamazonDB;

CREATE DATABASE bamazonDB;

USE bamazonDB;

-- Table Properties for the Bamazon Catalog

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(100) NOT NULL,
  price DECIMAL (10,2) NOT NULL,
  stock INT (100) NULL,
  PRIMARY KEY (item_id)
);

-- Inserting Values into the Table

INSERT INTO products (product_name, department_name, price, stock)
VALUES ("Odyssey Putter", "Sporting Goods", 129, 50);

INSERT INTO products (product_name, department_name, price, stock)
VALUES ("Bananas", "Produce", 2.99, 200);

INSERT INTO products (product_name, department_name, price, stock)
VALUES ("Louisville Baseball Bat", "Sporting Goods", 249, 50);

INSERT INTO products (product_name, department_name, price, stock)
VALUES ("Samsung LED TV", "Electronics", 400, 40);

INSERT INTO products (product_name, department_name, price, stock)
VALUES ("Bose Headphones", "Electronics", 200, 50);

INSERT INTO products (product_name, department_name, price, stock)
VALUES ("Case of Oranges", "Produce", 7.50, 100);

INSERT INTO products (product_name, department_name, price, stock)
VALUES ("Premium Tee Shirts", "Clothing", 29, 25);

INSERT INTO products (product_name, department_name, price, stock)
VALUES ("Jordan 4s", "Clothing", 199, 15);

INSERT INTO products (product_name, department_name, price, stock)
VALUES ("Ray Ban Sunglasses", "Clothing", 149, 35);

INSERT INTO products (product_name, department_name, price, stock)
VALUES ("Pack of Towels", "Home Goods", 25, 40);