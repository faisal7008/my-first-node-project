const express = require('express')
var cors = require('cors');
const mongoose = require('mongoose')
const bodyparser = require('body-parser')

const app = express()

// database
const url = "mongodb://localhost:27017/cbit"
mongoose.connect(url, {useNewUrlParser:true})
const db = mongoose.connection

db.on('open', () => {
    console.log("Welcome back")
})

// cors
app.use(cors({ origin: true, credentials: true }));

app.use(bodyparser.urlencoded({extended:true}))

// Init Middleware
app.use(express.json({ extended: false }));

const port = process.env.PORT || 9000;

app.listen(port, () => {
    console.log(`server running on port ${port}`);
})

// console.log("hello world")

// routes
const routes = require('./router/controller')
app.use('/student', routes)
