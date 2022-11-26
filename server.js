const index = require("./index")
const dotenv = require("dotenv") 
const mongoose = require("mongoose") 
const cors = require('cors')
const bodyParser = require('body-parser')
index.use(cors())
process.on("uncaughtException", (err) => { 
    console.log(`error :${err.message}`)
    console.log(`unwante error`)
    process.exit(1)
})
dotenv.config({ path: "./config/config.env" }) 

const connectDatabase = () => {
    mongoose.connect(process.env.DB_URI).then((data) => {
        console.log(`mongodb connected with server ${data.connection.host}`)
    })
}

connectDatabase() 

port = process.env.PORT 
const server = index.listen(port, () => {
    console.log(`server is runing on http://localhost:${port}`) 
})
index.use(bodyParser.json({limit:"30mb", extended:true}))
index.use(bodyParser.urlencoded({limit:"30mb", extended:true}))

process.on("unhandledRejection", (err) => { 
    console.log(`error :${err.message}`)
    console.log(`Shutting down the server due to unwanted promise rejection`)
    server.close(() => {
        process.exit(1)
    })
})
