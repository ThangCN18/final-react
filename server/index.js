const dotenv = require("dotenv")
const path = require("path")
const express = require("express")
const DB = require("./config/connectDB")
const router = require("./routes")
const bodyParser = require("body-parser")
const cors = require("cors")
dotenv.config()
const app = express()

// Middleware body-parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(cors())

// static movie url
app.use(express.static(path.join(__dirname, "public")))




// Connect Mongoose Database
DB.connect()



router(app)
const PORT = process.env.PORT
console.log(PORT)
app.listen(PORT,() => console.log(`server running on port: ${PORT}`))