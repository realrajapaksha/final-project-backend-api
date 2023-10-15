const express = require('express')
const { addProduct, getProduct, getAllProducts, getAllOnly, updateProduct } = require('../controllers/productController')

const router = express.Router()

router.get('/prodcut', getProduct)
router.get('/prodcuts', getAllProducts)
router.get('/prodcutsonly', getAllOnly)
router.get('/prodcut', getAllProducts)
router.post('/prodcut', addProduct)
router.put('/prodcut', updateProduct)

module.exports = {
    routes: router
}