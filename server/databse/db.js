const URL = 'mongodb+srv://linarifux:Allahuakber1@cluster0.2gmsy.mongodb.net/BLOG?retryWrites=true&w=majority'

const mongoose = require('mongoose')

const connection = async () => {
    try{
        await mongoose.connect(URL, {useNewUrlParser: true, useUnifiedTopology: true})
        console.log('DB Connected....');
    }catch(e){
        console.log(e);
    }
}


module.exports = connection;