var express = require("express"),
mongoose = require("mongoose")
var passport = require("passport"),
bodyParser = require("body-parser"),
LocalStrategy = require("passport-local"),
passportLocalMongoose = require("passport-local-mongoose"),
User = require("./models/user")

mongoose.connect("mongodb://localhost:27017/auth-demo-app", {useNewUrlParser: true})


var app = express()
app.set("view engine", "ejs")
app.use(passport.initialize(), passport.session(), require("express-session")({
    secret: "Isasiah is the best in the world",
    resave: false,
    saveUninitialized: false
}))

passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())


// ==============
// Routes
// ==============


app.get("/", function(req, res){
    res.render("home")
})

app.get("/secret", function(req, res){
    res.render("secret")
})

// Auth Routes
// Register
app.get("/register", function(req, res){
    res.render("register")
})

app.listen(2254, function(){
    console.log("Server PORT 2254 running")
})