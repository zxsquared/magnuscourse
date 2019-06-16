var express = require("express");
var bodyParser = require("body-parser");
var app = express()
app.use(bodyParser.urlencoded({extended: true}))
app.set("view engine", "ejs");

var friends = ["Colby", "Graysan", "Jonathan", "Jacob", "Hyson", "Max", "Daimian", "Hayden"]

app.get("/", function(req, res){
    res.render("home")
})

app.get("/friends", function(req, res){
    res.render("friends", {friends: friends})
})

app.post("/addfriend", function(req, res){
    var newFriend = req.body.new
    res.redirect("/friends")
    friends.push(newFriend)
   
})

app.listen(4005, function(){
    console.log("Post Request on PORT 4005 (like always)!")
})