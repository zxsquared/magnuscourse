var express = require("express"),
app = express(),
bodyParser = require("body-parser"), 
mongoose = require("mongoose"),
Campground = require("./models/campground"),
Comment = require("./models/comment")



mongoose.connect("mongodb://localhost:27017/yelpcamp", {useNewUrlParser: true})

app.set("view engine", "ejs")
app.use(bodyParser.urlencoded({extended: true}), express.static(__dirname + "/public"))


app.get("/", function(req, res){
res.render("landing")
})



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
app.get("/campgrounds/:id/comments/new", function(req, res){
    Campground.findById(req.params.id, function(err, campground){
        if(err){
            console.log(err)
        } else {
            res.render("comments/new", {campground: campground})
        }
    })

})
app.post("/campgrounds/:id/comments", function(req, res){
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

app.listen(4005, function(){
    console.log("YelpCamp site on PORT 4005")
})