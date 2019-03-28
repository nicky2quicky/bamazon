// Dependencies

var mysql = require("mysql");
var inquirer = require("inquirer");

// Using Chalk Coloring for the console logs
const chalk = require("chalk");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "password",
  database: "bamazonDB"
});

// Creating the connection to the DB and calling the first function displaying the product catalog

connection.connect(function(err) {
  if (err) throw err;
  console.log(chalk.blue("****************************"));
  queryCatalog();
});

// Defining the first function calling out the catalog and prices

function queryCatalog() {
  connection.query("SELECT * FROM products", function(err, res) {
    for (var i = 0; i < res.length; i++) {
      console.log(
        chalk.green(
          "Product: " +
            res[i].item_id +
            " || " +
            res[i].product_name +
            " || Price: $" +
            res[i].price
        )
      );
      console.log(chalk.blue("****************************"));
    }
    questions();
  });
}

function questions() {
  inquirer
    .prompt([
      {
        // First prompt question asking for the product number
        message: "Please select a product number: ",
        type: "input",
        name: "item_id",
        // Validating to make sure they enter a # within their answer
        validate: function(value) {
          if (isNaN(value) === false) {
            return true;
          }
          return false;
        }
      },
      {
        // Then prompt question asking for the number of the product you'd like
        message: "Please enter the quantity of product you'd like: ",
        type: "input",
        name: "orderQuantity",
        // Validating to make sure they enter a # within their answer
        validate: function(value) {
          if (isNaN(value) === false) {
            return true;
          }
          return false;
        }
      }
    ])
    .then(function(input) {
      connection.query(
        "SELECT * FROM products WHERE ?",
        { item_id: input.item_id },
        function(err, results) {
          if (err) throw err;
          //   If user does not select an item 1-10, then console log the error and re-ask question
          if (results.length === 0) {
            console.log(
              chalk.red(
                "This item does not exist, please select a product from 1-10"
              )
            );
            questions();
          } else {
            var product = results[0];
            if (input.orderQuantity <= product.stock) {
              console.log(chalk.white.bold.bgBlue("Congratulations, your order of " + input.orderQuantity + " " + product.product_name + " has been placed!!!!"));
              var updateStock = "UPDATE products SET stock = " + (product.stock - input.orderQuantity) + " WHERE item_id = " + input.item_id;

              connection.query(updateStock, function(err, results) {
                if (err) throw err;
                console.log(chalk.white.bold.bgRed(
                  "Your total is $" + product.price * input.orderQuantity
                ));
                connection.end();
              });
            } 
            else {
                console.log(chalk.bold.bgRed(
                  "*** INSUFFICIENT QUANTITY! We do not have that number of items available for order, please reduce quantity ***"
                ));
                questions();
              }
          }
        }
      );
    });
}
