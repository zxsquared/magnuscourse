var mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/blog_demo_2", {useNewUrlParser: true})

// POST - title. content
var postSchema = new mongoose.Schema({
    title: String,
    content: String
})
var Post = mongoose.model("Post", postSchema);

// USER -email, name
var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: Post
        }
    ]
})
var User = mongoose.model("User", userSchema)
