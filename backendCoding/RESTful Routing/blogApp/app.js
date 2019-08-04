var express = require("express"),
app = express(),
mongooose = require("mongoose"),
bodyParser = require("body-parser"),
methodOverride = require("method-override"),
expressSanitizer = require("express-sanitizer")

app.set("view engine", "ejs")
app.use(bodyParser.urlencoded({extended: true}),
express.static("public"),
methodOverride("_method"),
expressSanitizer())

// How to get mongoose running
mongooose.connect("mongodb://localhost:27017/rest", {useNewUrlParser: true})

var blogSchema = new mongooose.Schema({
    title: String,
    image: String,
    body: String,
    date: {type: Date, default:Date.now}
});

var Blog = mongooose.model("Blog", blogSchema);

// RESTful Routes

app.get("/", function(req, res){
    res.redirect("/blogs")
})
// INDEX
app.get("/blogs", function(req, res){
    Blog.find({}, function(err, blogs){
        if(err){
            console.log(err)
        } else {
            res.render("index", {blogs: blogs})
        }
    })
})

// NEW and Create Routes
app.get("/blogs/new", function(req, res){
    res.render("new")
})

app.post("/blogs", function(req, res){
    // create blog
    req.body.blog.body = req.sanitize(req.body.blog.body)
    Blog.create(req.body.blog, function(err, newBlog){
        if(err){
            res.render("new")
        } else {
              // redirect to the index
            res.redirect("/blogs")
        }
    })
})

app.get("/blogs/:id", function(req, res){
    Blog.findById(req.params.id, function(err, foundBlog){
if (err){
res.redirect("/blogs")
} else {
    res.render("show", {blog: foundBlog})
}
    })
})

app.get("/blogs/:id/edit", function(req, res){
    Blog.findById(req.params.id, function(err, foundBlog){
        if(err){
            res.redirect("/blogs")
        } else {
            res.render("edit", {blog: foundBlog})
        }
    })

})

// Update Route
app.put("/blogs/:id", function(req, res){
    req.body.blog.body = req.sanitize(req.body.blog.body)
    Blog.findByIdAndUpdate(req.params.id, req.body.blog, function(err, updateBlog){
        if(err){
            res.redirect("/blogs")
        } else {
            res.redirect("/blogs/" + req.params.id)
        }
    })
})

app.delete("/blogs/:id", function(req, res){
    // Destroy Blog
    Blog.findByIdAndRemove(req.params.id, function(err, detroyedBlog){
        if(err){
            res.redirect("/blogs")
        } else {
            res.redirect("/blogs")
        }
    })
    // redirect somewhere
})

app.listen("4005", function(){
    console.log("RESTful Blog App is running!")
})