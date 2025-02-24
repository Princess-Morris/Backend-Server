import express from 'express';
const router = express.Router();


let posts = [
    { id: 1, title: "Post One" },
    { id: 2, title: "Post Two" },
    { id: 3, title: "Post Three" }
]


// get all posts
router.get('/', (req, res, next) => {
    const limit = parseInt(req.query.limit);

    if (!isNaN(limit) && limit > 0){
        return res.status(200).json(posts.slice(0, limit));
    }
    res.status(200).json(posts)
    // res.json(posts)
})


// get single post
router.get('/:id', (req, res, next) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id)

    if (!post) {
      const error = new Error(`A post with the id of ${id} was not found`)
      error.status = 404
      return next(error)
    }
    res.status(200).json(post);

})


// Create a new post
router.post('/', (req, res, next) => {
    const newPost = {
        id: posts.length + 1,
        title: req.body.title
    }

    if (!newPost.title) {
        const error = new Error(`Please include a title`)
        error.status = 400
        return next(error)
    }

    posts.push(newPost)
    res.status(201).json(posts)

    // res.status(201).json(posts)
})

// Update Post 
router.put('/:id', (req, res, next) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id)

    if (!post) {
        const error = new Error(`Post with this id ${id} does not exist`)
        error.status = 400;
        return next(error)
    }

    post.title = req.body.title
    res.json(post)
})

// Delete post
router.delete('/:id', (req, res, next) => {
    const id = parseInt(req.params.id)
    const post = posts.find((post) => post.id === id)

    if (!post) {
        return res
            .status(404)
            .json({ msg: `A post with the id ${id} does not exist` })
    }

    posts = posts.filter((post) => post.id !== id)
    res.json(posts)

    // posts.filter((post) => post.id !== id)
})

export default router;