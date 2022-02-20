const express = require('express')
const upload = require('../utils/upload')
const postController = require('../controller/postController')
const imageController = require('../controller/imageController')
const userController = require('../controller/userController')

// json auth
const auth = require('../auth/auth')

const router = express.Router()

// Blog routes
router.post('/create/:token',auth, postController.createPost)
router.get('/posts', postController.getAllPost)
router.get('/post/:id', postController.getPostById)
router.post('/update/:id', postController.updatePost)
router.delete('/delete/:id', postController.deletePost)
router.post('/file/upload', upload.single('file'), imageController.uploadFile)

// get the image
router.get('/images/:filename', imageController.getImage)

// User routes
router.post('/user/signup', userController.createUser)
router.post('/user/login', userController.loginUser)
// router.post('/user/logout', async (req,res) => {
//     res.redirect
// } )

router.get('/home/:token',auth, userController.homeView)



module.exports = router