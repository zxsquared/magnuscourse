var express = require("express");
var app = express()

app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("home")
})

app.get("/friends", function(req, res){
    var friends = ["Colby", "Graysan", "Jonathan", "Jacob", "Hyson", "Max", "Daimian", "Hayden"]
    res.render("friends", {friends: friends})
})

app.listen(4005, function(){
    console.log("Post Request on PORT 4005 (like always)!")
})