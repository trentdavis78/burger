var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

//Route to home page
router.get("/",function(req,res){
    burger.selectAll(function(data){
    
        var burgerObj = {
            burger:data
        };
        console.log(data);
        res.render("index",burgerObj) 
    });

});

// Get item to update

router.put("/api/burgers/:id",function(req,res){
    
    var condition = "id = " + req.params.id;

        console.log("condition",condition);
        console.log("colValobj:",req.body.devoured);
    burger.updateOne(
        {
         devoured: req.body.devoured 
        },condition,
        function(result)
        {
        if(result.changedRows===0){
            return res.status(404).end();
        }
        res.status(200).end();
    });
        
});

//add a new Burger
router.post("/api/burgers", function(req, res) {
    console.log(req.body.name);
  burger.insertOne("burger_name", req.body.name, function(result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
  });

// Export routes for server.js to use.
module.exports = router;