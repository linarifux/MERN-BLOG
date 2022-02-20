const User = require('../models/userSchema')

const createUser = async (req,res) => {
    try{
        const user = new User(req.body)
        const token = await user.generateAuthToken()
        await user.save()
        res.status(201).send({user, token})
    }catch(e){
        res.status(500).send(e)
    }
}

const loginUser = async (req,res) => {
    try{
        const {username, password} = req.body
        const user = await User.findOne({username: username})
        if(!user){
            return res.status(404).send('Incorrect Username or Password')
        }
        if(!user.password === password){
            return res.status(404).send('Incorrect Username or Password')
        }
        
        const token = await user.generateAuthToken()
        console.log(token);
        return res.status(200).send({user,token})
    }catch(e){
        return res.status(500).send(e)
    }
}

const logoutUser = async (req,res) => {
    try{
        res.redirect('/home/:token')
    }catch(e){
        res.status(500).send(e)
    }
}

const homeView =  (req,res) => {
    try{
        res.send(req.user)
    }catch(e){
        res.send(e)
    }
}


module.exports = {createUser, loginUser, homeView, logoutUser}