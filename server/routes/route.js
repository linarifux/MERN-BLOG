const express = require('express')
const postController = require('../controller/postController')

const router = express.Router()

router.post('/create', postController.createPost)
router.get('/posts', postController.getAllPost)
router.get('/post/:id', postController.getPostById)


module.exports = router