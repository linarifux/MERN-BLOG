const Post = require('../models/postSchema')

const createPost = async (req,res) => {
    try{
        const post = new Post(req.body)
        await post.save()
        res.status(200).send(post)
    }catch(e){
        res.status(500).json(e)
    }
}

const getAllPost = async (req,res) => {
    try{
        const posts = await Post.find({})
        res.status(200).send(posts)
    }catch(e){
        res.status(500).send(e)
    }
}

const getPostById = async (req,res) => {
    try{
        const post = await Post.findById(req.params.id)
        if(!post){
            return res.status(404).send('No Post Found!')
        }
        res.status(200).send(post)
    }catch(e){
        res.status(500).send(e)
    }
}

module.exports = {createPost, getAllPost, getPostById};