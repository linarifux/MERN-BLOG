const express = require('express')
const cors = require('cors')
const router = require('./routes/route')
const path = require('path')
const cookieParser = require('cookie-parser')

// components
const db = require('./databse/db')

const app = express()
const port = process.env.PORT || 8000

app.listen(port, () => {
    console.log('server started listening on port: ', port);
})

app.use(cors())
app.use(express.json())
app.use(cookieParser())


// db connection
db()

// static file serve
app.use('/images', express.static(path.join(__dirname, 'public/uploads')))


/// blog route
app.use('/', router)

