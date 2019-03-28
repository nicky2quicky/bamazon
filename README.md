# bamazon
Bamazon Homework Assignment
(Screenshots attached below)

Technologies Used:
NPM Install Package
Node.js
Inquirer 
MySQL
Chalk

Description

This application in a scaled down version of a customer facing store/inventory application. Upon opening up the application and starting it up (entering node bamazonCustomer.js), the customer will be prompted with a menu of of products to purchase.

There are a total of 10 items that have been inserted levearging MySQL workbench, and each of these items has an associated price, category, and inventory stock.

The customer is first promped to pick a product from 1-10.

After the customer selects a product, they are then asked the total quantity they would like to purchase.

Once both categories are selected, the terminal will prompt a successful purchase (if all inputs are valid). If the commands are not valid, they will be told to either enter another value or select a lower quantity as the quantity is too large.

Upon requested the item, the database of products and quantities will automatically be updated.


Image of SQL Table in VS Code
![Image of SQL Table in VS Code](Screen%20Shot%202019-03-27%20at%206.36.38%20PM.png)

Image of SQL Table in MySql
![Image of SQL Table in MySql](Screen%20Shot%202019-03-27%20at%206.36.01%20PM.png)

Image of First Product Menu in Terminal
![Image of First Product Menu in Terminal](Screen%20Shot%202019-03-27%20at%206.35.37%20PM.png)

Successful Order in the Terminal
![Successful Order in the Terminal](Screen%20Shot%202019-03-27%20at%206.35.15%20PM.png)

Invalid Order in the Terminal
![Invalid Order in the Terminal](Screen%20Shot%202019-03-27%20at%206.35.37%20PM.png)
