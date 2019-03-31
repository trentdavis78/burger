// Import MySQL connection.
var connection = require("./connection.js");

function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
  }

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
    var arr = [];
  
    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
      var value = ob[key];
      console.log(value);
      // check to skip hidden properties
      if (Object.hasOwnProperty.call(ob, key)) {
        // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
        // e.g. {sleepy: true} => ["sleepy=true"]
        console.log(key +"=" + value);
        arr.push(key + "=" + value);
      }
    }
  
    // translate array of strings to a single comma-separated string
    return arr.toString();
  }



var orm ={
 selectAll:function(tableName, resultFun)
{
    var queryString ="select * from ?? ;";
    connection.query(queryString,tableName,function(err,result){
        if (err)
           throw err;
        resultFun(result);
    });

},
insertOne:function(tableName,cols, vals,resultFun){
    var queryString = "insert into ?? ( ?? ) values ( ? );";
    console.log(queryString);
    
    connection.query(queryString,[tableName,cols,vals],function(err,result){
        if (err)    
            throw err;
        resultFun(result);
    });

},
updateOne:function(tableName,objColVals,condition,resultFun){
    var queryString = "update ?? set " + objToSql(objColVals) + " where " + condition;
    connection.query(queryString,tableName,function(err,result){
        if (err)
            throw err;
        resultFun(result);
    });
}
};
module.exports=orm;