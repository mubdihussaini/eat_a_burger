//setup mysql connection
var connection;
var mysql = require("mysql");

if (process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL)
}  else {
    connection = mysql.createConnection({

    port: 3306,
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'burgers_db'
  });
};
connection.connect();

//export connection
module.exports = connection;
