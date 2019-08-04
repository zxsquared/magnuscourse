var mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/blog_demo", {useNewUrlParser: true})

// POST - title. content

var postSchema = new mongoose.Schema({
    title: String,
    content: String
})

var postModel = mongoose.model("Post", postSchema);

// USER -email, name
var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [postSchema]
})

var User = mongoose.model("User", userSchema)

//   var newUser = new User({
//      email: "harry@hogwarts.edu",
//      name: "Harry Potter"
//  })

//  newUser.posts.push({
//      title: "I am",
//      content: "Harry Potter"
//  })

//  newUser.save(function(err, user){
//      if(err) {
//          console.log(err)
//      } else {
//          console.log(user)
//      }
//  })

// var newPost = new postModel({
//     title: "Test Post",
//     content: "This is a test, and will not be used otherwise."
// })

// newPost.save(function(err, user){
//      if(err) {
//          console.log(err)
//      } else {
//          console.log(user)
//      }
//  })

User.findOne({name: "Harry Potter"}, function(err, user){
    if(err) {
        console.log(err)
    } else {
    user.posts.push({
       title: "bfhjrgbkjfhbjwhjgbf",
       content: "gfnkgyuskigayfu"
    });
    user.save(function(err, user){
        if(err){
            console.log(err)
        } else {
            console.log(user)
        }
    })
    }
})