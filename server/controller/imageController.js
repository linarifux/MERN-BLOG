const mongoose = require('mongoose')
const url = 'http://localhost:8000'
const MongoURI = 'mongodb+srv://linarifux:Allahuakber1@cluster0.2gmsy.mongodb.net/BLOG?retryWrites=true&w=majority'

const uploadFile = (req,res) => {
    try{
        if(!req.file){
            return res.status(404).send('File not found')
        }
        const iamgeUrl = `${url}/images/${req.file.filename}`

        res.status(200).send(iamgeUrl)

    }catch(e){
        res.status(500).send(e)
    }
}

const getImage = (req,res) => {
    try{
        const imageUrl = `http://localhost:8000/images/${req.params.filename}`
        res.status(200).send(imageUrl)
    }catch(e){
        res.status(500).send(e)
    }
}

module.exports = {uploadFile, getImage}