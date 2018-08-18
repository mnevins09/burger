//Dependencies
var express = require("express");
var exphbs = require("express-handlebars");
var app = express();
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

app.use(express.static("public/assets"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

var PORT = process.env.PORT || 8080;
var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.listen(PORT, function () {
  console.log("Listening on PORT " + PORT);
});