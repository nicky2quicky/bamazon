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

connection.connect(function(err) {
    if (err) throw err;
    console.log(chalk.blue("****************************"));
    queryCatalog();
  });

  function queryCatalog(){
      connection.query("SELECT * FROM products", function(err, res){
          for(var i = 0; i < res.length; i++){
              console.log(chalk.green("Product: " + res[i].item_id + " || " + res[i].product_name + " || Price: " + res[i].price));
              console.log(chalk.blue("****************************"));
          }
      })
  }