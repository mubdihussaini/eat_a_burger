//dependencies
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var path = require("path");

var PORT = 3000;
var app = express();

//serving static content from the "assets"
app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended: false}));

//Override with POST 
app.use(methodOverride("_method"));

//use handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

//import routes 
var routes = require('./controllers/burgers_controllers.js')

app.use("/", routes);
app.use("/update", routes);
app.use("/create", routes);
app.use("/delete", routes);

console.log("listening on port 3000");

app.listen(PORT);
