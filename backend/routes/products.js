const express = require('express')
const {
    createProduct,
    getProducts,
    getProductWithID,
    deleteProduct,
    updateProduct
} = require('../controllers/productsController')


const router = express.Router()

// GET all products

router.get('/', getProducts)

//GET a specific product

router.get('/:id', getProductWithID)

//POST a new product

router.post('/', createProduct)

// DELETE a product

router.delete('/:id',deleteProduct)

//UPDATE a product

router.patch('/:id',updateProduct)


module.exports = router