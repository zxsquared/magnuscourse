var express = require("express")
var app = express()  

app.use(express.static("public"))
app.set("view engine", "ejs")

app.get("/", function(req, res){
    res.send("<h1>Hi!</h1>")
})

app.get("/fallinlovewith/:thing", function(req, res){
 var thing = req.params.thing;
 res.render("home", {thingVar: thing})
})

app.get("/posts", function(req, res){
    var posts = [
        {title: "Post 1", author: "Magnus"},
        {title: "Post 2", author: "Magnus"},
        {title: "Post 3", author: "Magnus"},
    ]
    res.render("posts", {posts: posts})
})

app.listen(4005, function(){
    console.log("app.js running on PORT 4005")
});