const express = require('express')
const router = express.Router()

const { addCart, getCart, deleteCartItem } = require('../controllers/cartController')

router.get('/cart', getCart)
router.post('/cart', addCart)
// router.put('/cart', updateCart)
router.delete('/cart', deleteCartItem)

module.exports = {
    routes: router
}