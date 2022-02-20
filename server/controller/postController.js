const Post = require('../models/postSchema')

const createPost = async (req,res) => {
    try{
        const post = new Post(req.body)
        post.username = req.user.username
        await post.save()
        res.status(201).json({post})
    }catch(e){
        res.status(500).json(e)
    }
}

const getAllPost = async (req,res) => {
    const username = req.query.username
    const categories = req.query.category
    let posts;
    try{
        if(username)
            posts = await Post.find({username})
        else if(categories)
            posts = await Post.find({categories})
        else
            posts = await Post.find()
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

const updatePost = async (req,res) => {
    try{
        const post = await Post.findByIdAndUpdate(req.params.id,{$set: req.body})
        res.status(201).send(post)
    }catch(e){
        res.status(500).send(e)
    }
}

const deletePost = async (req,res) => {
    try{
        const post = await Post.findByIdAndDelete(req.params.id)
        res.status(201).send(post)
    }catch(e){
        res.status(500).send(e)
    }
}

module.exports = {createPost, getAllPost, getPostById, updatePost, deletePost};