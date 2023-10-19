'use strict';

const firestore = require('../db')
const Cart = require('../models/Cart')

const addCart = async (req, res) => {
    try {
        const data = req.body
        await firestore.collection('cart').add(data)
        res.status(200).send("Save complete")
    } catch (error) {
        res.status(400).send(error.message)
    }
}

const getCart = async (req, res) => {
    try {
        const carts = await firestore.collection('cart').get()
        const cartsArray = []
        if (carts.empty) {
            res.status(404).send("no cart found")
        } else {
            carts.forEach(cart => {
                const u = new Cart(
                    cart.id,
                    cart.data().name,
                    cart.data().price,
                    cart.data().qty,
                    cart.data().timestamp,
                    cart.data().image,
                )
                cartsArray.push(u)
            })
            res.status(200).send(cartsArray)
        }
    } catch (error) {
        res.status(404).send(error.message)
    }
}

const deleteCartItem = async (req, res) => {
    try {
        const data = req.body
        await firestore.collection('cart').doc(data.id).delete()
        res.status(200).send("delete complete")
    } catch (error) {
        res.status(400).send(error.message)
    }
}

module.exports = {
    addCart, getCart, deleteCartItem
}
