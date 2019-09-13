var mongoose = require("mongoose")
mongoose.connect("mongodb://localhost/cat_app");

var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    isCool: Boolean
});

var Cat = mongoose.model("Cat", catSchema);

// add cat to database

/* var george = new Cat({
     name: "Isaiah",
     age: 9,
     isCool: true
 })

 george.save(function(err, cat){
     if(err){
         console.log("Sothing went wrong, please try again")
     } else{
         console.log("We just saved a cat to our databases")
         console.log(cat);
     }
 }) */

Cat.create({
    name: "Magnus",
    age: 15,
    isCool: false
}, function(err, cat){
    if(err){
        console.log(err)
    } else {
        console.log(cat)
    }
})

// retrieve cats from database

Cat.find({}, function(err, cats){
    if(err){
        console.log("Something went wrong, please try again!")
        console.log(err)
    } else {
        console.log("All the cats you wanted...")
        console.log(cats)
    }
})