var express = require("express");
var app = express();
app.set("view engine", "ejs")

app.get("/", function(req, res){
  res.render("home")
})
app.get("/about", function(req, res){
  res.render("about")
})

app.listen(1004, function(){
  console.log("Server on!")
})