var connection = require('./connection');

var orm = {
    // selectAll()
    // insertOne()
    // updateOne()

    selectAll = function(callback) {
            connection.query("SELECT * FROM burgers", (err, result) => {
            if (err) throw err;
            console.log(result);
            callback(result);
        });
    },

    // insertOne()
    insertOne = function(burger_name, callback) {
        connection.query('INSERT INTO burgers SET ?', {
            burger_name,
            devoured: false
          }, (err, result) => {
            if (err) throw err;
            callback(result);
          });
    },
 
    // updateOne()
    updateOne = function(burgerID, callback){
      connection.query('UPDATE burgers SET ? WHERE ?', [{devoured: true}, {id: burgerID}], (err, result) => {
          if (err) throw err;
          callback(result);
        });
  
    }
}
  