var express = require("express"),
app = express(),
bodyParser = require("body-parser"), 
mongoose = require("mongoose"),
Campground = require("./models/campground"),
passport = require("passport"),
LocalStrategy = require("passport-local"),
User = require("./models/user"),
Comment = require("./models/comment")



mongoose.connect("mongodb://localhost:27017/yelpcamp", {useNewUrlParser: true})

app.set("view engine", "ejs")
app.use(bodyParser.urlencoded({extended: true}), express.static(__dirname + "/public"))

app.use(require("express-session")({
    secret: "YelpCamp is about to be done!",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize())
app.use(passport.session())
passport.use(new LocalStrategy(User.authenticate()))
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

app.use(function(req, res, next){
    res.locals.currentUser = req.user
    next()
})


app.get("/", function(req, res){
res.render("landing")
})

// Passport confifuration

app.get("/campgrounds", function(req, res){
    // Get all campgrounds from DB
    Campground.find({}, function(err, allcampgrounds){
        if(err){
            console.log(err)
        } else {
        res.render("campgrounds/index", {campgrounds: allcampgrounds})   
    }
    })
    
    })

    app.post("/campgrounds", function(req, res){
        // get data from form
       var name = req.body.name
       var image = req.body.image
       var description = req.body.description
       var newCampground = {name: name, image: image, description: description}
      
        // Create new campground and save to database
        Campground.create(newCampground, function(err, newcampground){
            if(err){
                console.log(err)
            } else {
                // redirect back to /campgrounds page
                res.redirect("/campgrounds")
            }
        })
       
    })


    app.get("/campgrounds/new", function(req, res){
        res.render("campgrounds/new")
    })
// SHOW - Shows more info about a specific campground
app.get("/campgrounds/:id", function(req, res){
    // find campground with provided ID
    Campground.findById(req.params.id).populate("comments").exec(function(err, foundCamp){
        if(err){
            console.log(err)        
        } else {
            // render show template with that ID
            res.render("campgrounds/show", {campground: foundCamp})
        }
    })
    
})
// =================
// Comment Route
// =================
app.get("/campgrounds/:id/comments/new", isLoggedIn, function(req, res){
    Campground.findById(req.params.id, function(err, campground){
        if(err){
            console.log(err)
        } else {
            res.render("comments/new", {campground: campground})
        }
    })

})
app.post("/campgrounds/:id/comments", isLoggedIn, function(req, res){
    // look up campground using id
    Campground.findById(req.params.id, function(err, campground){
        if(err){
            console.log(err)
            res.redirect("/campgrounds")
        } else {
            Comment.create(req.body.comment, function(err, comment){
                if(err){
                    console.log(err)
                } else {
                    campground.comments.push(comment);
                    campground.save();
                    res.redirect("/campgrounds/" + campground._id)
                }
            })
        }
    })
    // create comment
    // associate comment to campground
    // redirect user to show page
})

// AUTH ROUTES

// show register form
app.get("/register", function(req, res){
    res.render("register")
})
// handle sign up logic
app.post("/register", function(req, res){
    var newUser = new User({username: req.body.username})
    User.register(newUser, req.body.password, function(err, user){
        if(err){
            console.log(err)
           return res.render("register")
        } 
        passport.authenticate("local")(req, res, function(){
            res.redirect("/campgrounds")
        })
    })
})
// show login form
app.get("/login", function(req, res){
    res.render("login")
})
// handling login logic
app.post("/login", passport.authenticate("local", {
    successRedirect: "/campgrounds",
    failureRedirect: "/login"
}), function(req, res){

})
// logout
app.get("/logout", function(req, res){
    req.logout()
    res.redirect("/campgrounds")
})

function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next()
    }
    res.redirect("/login")
}

app.listen(4005, function(){
    console.log("YelpCamp site on PORT 4005")
})