var mongoose = require("mongoose")
mongoose.connect("mongodb://localhost/cat_app");

var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    isCool: Boolean
});

var Cat = mongoose.model("Cat", catSchema);