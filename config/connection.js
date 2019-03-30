var mysql = require('mysql');

// Setup connection
var connection = mysql.createConnection({
    port: 3306,
    hostname: 'localhost',
    username: 'root',
    password: null,
    database: 'burgers_db'
});

// Connect to db

connection.connect(err => {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
      }
      console.log("connected as id " + connection.threadId);
});


module.exports = connection;