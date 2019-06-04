var express = require("express");
var app = express()
console.log("SUCCESS")
// "/" "hi"
app.get("/", function(requ, resp){

})
// "/bye" "bye" 

// "/chungus" "I think moto moto likes you" 

app.listen(5000, function(){
    console.log("Serving dog demo on port 5000")
})

// on C9, go app.listen(proccess.env.PORT)