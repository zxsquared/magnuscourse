var express = require("express");
var request = require("request");
var app = express();
app.set("view engine", "ejs")

app.get("/", function(req, res){
    res.render("search")
})


app.get("/results", function(req, res){
    var query = req.query.search
    
    request("http://www.omdbapi.com/?s=" + query, function(error, response, body){
    if(!error && response.statusCode == 200){
         var parseData = JSON.parse(body);
        // console.log(parseData)
res.render("results", {parseData: parseData})
    }
    })
})

app.listen(4005, function(){
    console.log("Movie App has Started")
})