var express = require("express"),
app = express(),
bodyParser = require("body-parser"), 
mongooose = require("mongoose")

mongooose.connect("mongodb://localhost:27017/yelpcamp", {useNewUrlParser: true})

app.set("view engine", "ejs")
app.use(bodyParser.urlencoded({extended: true}))

// Schema Setup
var campgroundSchema = new mongooose.Schema({
    name: String,
    image: String
})

var Campground = mongooose.model("Campground", campgroundSchema)

// Campground.create({name: "Bragg Creek", 
// image:"https://az837918.vo.msecnd.net/publishedimages/listings/4290/en-CA/images/1/red-deer-lions-campground-S-19.jpg"},
// function(err, campground){
// if(err){
//     console.log(err)
// } else {
//     console.log("Successfully created campground!")
//     console.log(campground)
// };
// });


app.get("/", function(req, res){
res.render("landing")
})



app.get("/campgrounds", function(req, res){
    // Get all campgrounds from DB
    Campground.find({}, function(err, allcampgrounds){
        if(err){
            console.log(err)
        } else {
        res.render("campground", {campgrounds:allcampgrounds})
        }
    })
    
    })

    app.post("/campgrounds", function(req, res){
        // get data from form
       var name = req.body.name
       var image = req.body.image
       var newCampground = {name: name, image: image}
      
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
        res.render("new")
    })

app.listen(4005, function(){
    console.log("YelpCamp site on PORT 4005")
})