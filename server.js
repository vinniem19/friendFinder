// Your `server.js` file should require the basic npm packages we've used in class: `express` and `path`
// Dependencies

var express = require("express");
var path = require("path");

// sets up express app
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up express app to handle data parsing
app.use(express.urlencoded({
    extended: true }));
app.use(express.json());


//New section
// ROUTER
// Routes
app.use(express.static("app/public"));
require("./app/routing/apiRoutes")(app)
require("./app/routing/htmlRoutes")(app)

// start the server and listen for input
app.listen(PORT, function() {
    console.log("Listening on port: " + PORT);
});