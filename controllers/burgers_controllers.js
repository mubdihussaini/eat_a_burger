//dependencies

var express = require("express");

var router = express.Router();

//import the model burgers
var burger = require("../models/burger.js");

//route it
router.get("/", function(req, res) {
      res.redirect("/burgers")
    });

  router.get("/burgers", function(req, res) {
    burger.selectAll(function(burgerData) {
      res.render("index", {burger_data: burgerData});
    });
  });

  router.post("/burgers/create", function(req,res)
    {
        burger.insertOne(req.body.burger_name, function(result) {
          console.log(result);
          res.redirect("/");
        });
    });

    router.put("/burgers/update", function(req, res) {
      burger.updateOne(req.body.burger_id, function(result) {
      console.log(result);
      res.redirect("/");
    });
  });

  router.delete("/burgers/delete", function(req, res) {
    burger.deleteOne(req.body.burger_id, function(result) {
    console.log(result);
    res.redirect("/");
  });
});
module.exports = router;
