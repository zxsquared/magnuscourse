var express = require("express"),
app = express(),
mongooose = require("mongoose"),
bodyParser = require("body-parser")

app.set("view engine", "ejs")
app.use(bodyParser.urlencoded({extended: true}), express.static("public"))
// How to get mongoose running
mongooose.connect("mongodb://localhost:27017/rest", {useNewUrlParser: true})

var blogSchema = new mongooose.Schema({
    title: String,
    image: String,
    body: String,
    date: {type: Date, default:Date.now}
});

var Blog = mongooose.model("Blog", blogSchema);

// RESTful Routes

Blog.create({
    title: "Coca Cola",
    image:"",
    body:""
})

app.listen("4005", function(){
    console.log("RESTful Blog App is running!")
})