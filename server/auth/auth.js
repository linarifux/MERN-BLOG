const jwt = require('jsonwebtoken')
const User = require('../models/userSchema')

const auth = async (req,res,next) => {
    try{
        const userID = jwt.verify(req.params.token, 'blogapp')
        const user = await User.findById(userID)
        if(!user){
            return new Error('Invalid Username')
        }
        if(!user.password === req.body.password){
            return new Error("Password didn't match")
        }
        req.user = user
        next()

    }catch(e){
        res.status(401).send({error: 'Please Authenticate', code: 401})
    }
}

module.exports = auth