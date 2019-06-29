var express = require("express")
var app = express()
var bodyParser = require("body-parser")
app.set("view engine", "ejs")

app.use(bodyParser.urlencoded({extended: true}))

var campgrounds = [
    {name: "Salmon Arm", image:"https://az837918.vo.msecnd.net/publishedimages/listings/4290/en-CA/images/1/red-deer-lions-campground-S-19.jpg"},
    {name: "Shuswap Lake", image:"https://az837918.vo.msecnd.net/publishedimages/listings/4290/en-CA/images/1/red-deer-lions-campground-S-19.jpg"},
    {name: "Bragg Creek", image:"https://az837918.vo.msecnd.net/publishedimages/listings/4290/en-CA/images/1/red-deer-lions-campground-S-19.jpg"},
    {name: "Salmon Arm", image:"https://az837918.vo.msecnd.net/publishedimages/listings/4290/en-CA/images/1/red-deer-lions-campground-S-19.jpg"},
    {name: "Shuswap Lake", image:"https://az837918.vo.msecnd.net/publishedimages/listings/4290/en-CA/images/1/red-deer-lions-campground-S-19.jpg"},
    {name: "Bragg Creek", image:"https://az837918.vo.msecnd.net/publishedimages/listings/4290/en-CA/images/1/red-deer-lions-campground-S-19.jpg"},
    {name: "Salmon Arm", image:"https://az837918.vo.msecnd.net/publishedimages/listings/4290/en-CA/images/1/red-deer-lions-campground-S-19.jpg"},
    {name: "Shuswap Lake", image:"https://az837918.vo.msecnd.net/publishedimages/listings/4290/en-CA/images/1/red-deer-lions-campground-S-19.jpg"},
    {name: "Bragg Creek", image:"https://az837918.vo.msecnd.net/publishedimages/listings/4290/en-CA/images/1/red-deer-lions-campground-S-19.jpg"}
]

app.get("/", function(req, res){
res.render("landing")
})



app.get("/campgrounds", function(req, res){
  res.render("campground", {campgrounds:campgrounds})
    })

    app.post("/campgrounds", function(req, res){
        // get data from form
       var name = req.body.name
       var image = req.body.image
       var newCampround = {name: name, image: image}
       campgrounds.push(newCampround)
        // add to campgrounds array
        // redirect back to /campgrounds page
        res.redirect("/campgrounds")
    })


    app.get("/campgrounds/new", function(req, res){
        res.render("new")
    })

app.listen(4005, function(){
    console.log("YelpCamp site on PORT 4005")
})