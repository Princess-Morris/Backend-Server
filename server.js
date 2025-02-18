const express = require('express');
const path = require('path');
const port = process.env.PORT || 8000

const app = express();

// setup static folder
// app.use(express.static(path.join(__dirname, 'public')))

let posts = [
    { id: 1, title: "Post One" },
    { id: 2, title: "Post Two" },
    { id: 3, title: "Post Three" }

]


// get all posts
app.get('/api/posts', (req, res) => {
   res.json(posts)
})


// get single posts
app.get('/api/posts/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id )

    if (post){
        return res
        .status(200)
        .json(post)
    }
        res.json({msg: "This post does not exist"})

})

app.listen(port, () => console.log(`Server is running on port ${port}`))

