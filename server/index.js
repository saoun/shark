var express = require("express");
var app = express();
var mustache = require("mustache-express");

app.engine("html",mustache());
app.set("view engine", "html");
app.set("views", __dirname+"/../client/views");
app.use("/", express.static(__dirname+"/../client/public"));

//Define the port
var port = 8080;

//Define what happens then a user visits the root route
app.get("/",function(req,res)
{
  res.render("index"); //Tell Express which html file to render for this route
});

//Start the server on the defined port
app.listen(port, function()
{
  console.log("Server running on port: "+port);
})