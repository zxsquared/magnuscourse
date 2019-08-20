var express = require("express")
var router = express.Router()
var Campground = require("../models/campground")

// Campground Rputes
// Passport confifuration
// index
router.get("/", function(req, res){
    // Get all campgrounds from DB
    Campground.find({}, function(err, allcampgrounds){
        if(err){
            console.log(err)
        } else {
        res.render("campgrounds/index", {campgrounds: allcampgrounds})   
    }
    })
    
    })

    router.post("/", function(req, res){
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
                res.redirect("/")
            }
        })
       
    })


    router.get("/new", function(req, res){
        res.render("campgrounds/new")
    })
// SHOW - Shows more info about a specific campground
router.get("/:id", function(req, res){
    // find campground with provided ID
    Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
        if(err){
            console.log(err)        
        } else {
            // render show template with that ID
            res.render("campgrounds/show", {campground: foundCampground})
        }
    })
    
})

module.exports = router