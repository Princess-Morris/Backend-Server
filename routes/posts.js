import express from 'express';
import { createPost, deletePost, getPost, getPosts, updatePost } from '../controllers/postController.js'
const router = express.Router();


// get all posts
router.get('/', getPosts) 


// get single post
router.get('/:id', getPost)


// Create a new post
router.post('/', createPost )

// Update Post 
router.put('/:id', updatePost)

// Delete post
router.delete('/:id', deletePost )

export default router;