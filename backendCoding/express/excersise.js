var express = require("express")

var app = express()

// Req & Res time!!! 

app.get("/speak/:animal", function(req, res){
    var animal = req.params.animal; 
    var sound = ""
    if(animal === "pig"){
        res.send("oink")
    }
    else if(animal === "sheep"){
        res.send("baah")
    }

    else if(animal === "dog"){
        res.send("woof")
    }

    else{
    res.send("That animal is not in our databases!")
}
})



app.get("/repeat/:word/:number", function(req, res){
    var word = req.params.word; 
    var number = Number(req.params.number);
    var result = ""
for(var i = 0; i <= number.length; i++){
    result += word;
} 
res.send(result)
})


app.get("*", function(req, res){
    res.send("ERR.PGE.NOT.FOUND")
})

app.listen(4005, function(){
    console.log("App on port 4005")
})