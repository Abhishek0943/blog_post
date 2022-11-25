const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const dotenv = require("dotenv")
const cors = require('cors')
const data = require('./routes/root')


const app = express()
dotenv.config({ path: "./config/config.env" })
app.use('/post', data)
app.use(bodyParser.json({limit:"30mb", extended:true}))
app.use(bodyParser.urlencoded({limit:"30mb", extended:true}))
app.use(cors())

const port = process.env.PORT
mongoose.connect(process.env.DB_URL).then(() => app.listen(port, () => {
    console.log(`server runing on ${port}`)
}))
