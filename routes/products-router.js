const express = require('express')
const { addProduct, getProduct, getAllProducts, getAllOnly, updateProduct } = require('../controllers/productController')

const router = express.Router()

router.get('/product', getProduct)
router.get('/products', getAllProducts)
router.get('/productsonly', getAllOnly)
router.get('/product', getAllProducts)
router.post('/product', addProduct)
router.put('/product', updateProduct)

module.exports = {
    routes: router
}