var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var User = require('../models/user');
var StitchSteps = require('../models/stitchsteps');
var app = express();
//Importing a file = Cap name
// var mongodb = require('mongodb');

// var dbConn = mongodb.MongoClient.connect('mongodb://localhost:27017');

mongoose.connect('mongodb://localhost/stitch-app');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//add database and connect
//connect form
//if made step x dont allow to make another step x

//root route
app.get('/', (req, res) => {
  res.sendfile("index.html");
})

//  index route. Displays a list of all blogs-show
app.get('/stitches', (req, res) => {
  res.render('../index');
  /*
  Blog.find({}, (err, allBlogs) => {
    if(err){
      console.log('err')
    } else {
      res.render('../client/src/views/index', {blogs: allBlogs});
    }
  });
  */
});

// new route. Displays form to make a new blog post
app.get('/stitches/new', (req, res) => res.render('../client/src/views/new'));

//show route. shows more info about one blog post // always get, always :id -- always after new bc may think it's a string
app.get('/stitches/:id', (req, res) => {
  stitch.findById()
  // Blog.findById(req.params.id, (err, foundBlog) => {
  //   if(err) {
  //     res.redirect('/blogs');
  //   } else {
  //     res.render('../client/src/views/show', {blog: foundBlog});
  //   }
  // });
})


// create route. Add new something to DB. //logic for form on html
app.post('/stitches', (req, res) => {
  // var Step_number = req.body.stepNumber;
  //   var step_instruction = req.body.stepInstruction;
  //   console.log(JSON.stringify(req.body));
  //   console.log('req.body.name', req.body['name']);
  db.collection("stitchSteps").save(req.body, (err, newStitch) => {
    if (err) {
      return console.log("err");
    } else {
      res.redirect("/stitches")
    }
  });
  // req.body.blog.body = req.sanitize(req.body.blog.body);
  // Blog.create(req.body.blog, (err, newBlog) => {
  //   if(err) {
  //     res.render('../client/src/views/new');
  //   } else {
  //     // redirect back to the companies page
  //     res.redirect('/blogs');
  //   }
  // });
});

// edit route. edit current blog post.
app.get('/stitches/:id/edit', (req, res) => {
  // Blog.findById(req.params.id, (err, foundBlog) => {
  //   if(err) {
  //     res.redirect('/blogs');
  //   } else {
  //     res.render('../client/src/views/edit', {blog: foundBlog});
  //   }
  // });
})

// update route. update current blog post //edit, update, post - 3 required to update
app.put('/stitches/:id', (req, res) => {
  // req.body.blog.body = req.sanitize(req.body.blog.body);
  // Blog.findByIdAndUpdate(req.params.id, req.body.blog, (err, updatedBlog) => {
  //   if(err) {
  //     res.redirect('/blogs');
  //   } else {
  //     res.redirect('/blogs/' + req.params.id);
  //   }
  // });
})

// delete route. delete a blog post
app.delete('/stiches/:id', (req, res) => {
  // Blog.findByIdAndRemove(req.params.id, (err) => {
  //   if(err) {
  //     res.redirect('/blogs');
  //   } else {
  //     res.redirect('/blogs');
  //   }
  // });
})

app.listen(4000, () => console.log('stitch-kitten server is listening on port 4000!'));