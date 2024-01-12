require('dotenv').config()

const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const productsRoutes = require('./routes/products')


// express app
const app = express()

//middleware
app.use(cors())
app.use(express.json())
app.use((req,res,next) => {
    console.log(req.path, req.method)
    next()
})


// routes
app.use('/api/products', productsRoutes)


// connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {

        // listen for request

        app.listen(process.env.PORT, () => {
            console.log("Connected to mongodb and Listening on port", process.env.PORT)
        })

    })
    .catch((error) => {
        console.log(error)
    })


