const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        trim: true
    },
    username: {
        type: String,
        unique: true,
        trim: true,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        validate (email) {
            if(!validator.isEmail(email)){
                throw new Error('Email is invalid')
            }
        }
    },
    password: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String
    },
    tokens: [
        {
            token: {
                type: String,
                required: true
            }
        }
    ]
})

userSchema.methods.generateAuthToken = async function (){
    const user = this
    const token = jwt.sign({_id: user._id.toString()}, 'blogapp')
    user.tokens = user.tokens.concat({token})
    await user.save()
    return token
}

userSchema.pre('save', async function (next) {
    const user = this
    if(user.isModified){
        user.password = await bcrypt.hash(user.password, 8)
    }
    next()
})

const User = new mongoose.model('user', userSchema)

module.exports = User