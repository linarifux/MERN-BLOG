const express = require('express')
const cors = require('cors')
const router = require('./routes/route')

// components
const db = require('./databse/db')

const app = express()
const port = process.env.PORT || 8000

app.listen(port, () => {
    console.log('server started listening on port: ', port);
})

app.use(cors())
app.use(express.json())


// db connection
db()


/// crate route
app.use('/', router)

app.get('/', (req,res) => {
    res.send("Hello Express!")
})

