var express = require("express");
var app = express()
console.log("SUCCESS")
// "/" "hi"
app.get("/", function(requ, resp){
resp.send("Hi there")
})
// "/bye" "bye" 
app.get("/bye", function(requ, resp){
    resp.send("Bye")
    })
// "/moto" "I think moto moto likes you" 
app.get("/moto", function(requ, resp){
    resp.send("I think moto moto likes you")
    })

    app.get("/js/:name", function(requ, resp){
        var subReddit = requ.params.name.toUpperCase();
        resp.send("Welcome to the " + subReddit + " subreddit!")
        
    })
// Any other sub-domain on the page
    app.get("*", function(requ, resp){
        resp.send("Error!!! Page not found.")
    })

   
app.listen(5000, function(){
    console.log("Serving dog demo on port 5000")
})

// on C9, go app.listen(proccess.env.PORT, proccess.env.IP)