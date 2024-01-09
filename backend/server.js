require('dotenv').config()

const express = require("express")
const productsRoutes = require('./routes/products')


// express app
const app = express()

//middleware
app.use(express.json())
app.use((req,res,next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/api/products', productsRoutes)

// listen for request

app.listen(process.env.PORT, () => {
    console.log("Listening on port", process.env.PORT)
})