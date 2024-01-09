const mongoose = require("mongoose")

const Schema = mongoose.Schema

const productsSchema = new Schema({

    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    seller: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    }
    // image: {
    //     type: Buffer,
    //     required: true
    // }
}, { timestamps:true })

module.exports = mongoose.model('product', productsSchema)

