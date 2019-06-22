var express = require("express")
var app = express()
app.set("view engine", "ejs")

app.get("/", function(req, res){
res.render("landing")
})

app.get("/campgrounds", function(req, res){
    var campgrounds = [
        {name: "Salmon Arm", image:"https://az837918.vo.msecnd.net/publishedimages/listings/4290/en-CA/images/1/red-deer-lions-campground-S-19.jpg"},
        {name: "Shuswap Lake", image:"https://az837918.vo.msecnd.net/publishedimages/listings/4290/en-CA/images/1/red-deer-lions-campground-S-19.jpg"},
        {name: "Bragg Creek", image:"https://az837918.vo.msecnd.net/publishedimages/listings/4290/en-CA/images/1/red-deer-lions-campground-S-19.jpg"}
    ]

    res.render("campground", {campgrounds: camp})
    })

app.listen(4005, function(){
    console.log("YelpCamp site on PORT 4005")
})