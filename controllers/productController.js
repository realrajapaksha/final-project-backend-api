'use strict';

const firestore = require('../db')
const Product = require('../models/Product')

const addProduct = async (req, res) => {
    try {
        const data = req.body
        await firestore.collection('products').add(data)
        res.status(200).send("Save complete")
    } catch (error) {
        res.status(400).send(error.message)
    }
}

const getProduct = async (req, res) => {
    try {
        const id = req.body.id
        const product = await firestore.doc('products/' + id).get()
        if (!product.exists) {
            res.status(404).send("no product found")
        } else {
            const p = new Product(
                product.id,
                product.data().name,
                product.data().price,
                product.data().qty,
                product.data().description,
                product.data().timestamp,
                product.data().image,
                product.data().rate,
                product.data().tags,
                product.data().category
            )
            res.status(200).send(p)
        }
    } catch (error) {
        res.status(404).send(error.message)
    }
}

const getAllProducts = async (req, res) => {
    try {
        const products = await firestore.collection('products').get()
        const productsArray = []
        if (products.empty) {
            res.status(404).send("no products found")
        } else {
            products.forEach(product => {
                const u = new User(
                    product.id,
                    product.data().name,
                    product.data().price,
                    product.data().qty,
                    product.data().description,
                    product.data().timestamp,
                    product.data().image,
                    product.data().rate,
                    product.data().tags,
                    product.data().category
                )
                productsArray.push(u)
            })
            res.status(200).send(productsArray)
        }
    } catch (error) {
        res.status(404).send(error.message)
    }
}


const getAllOnly = async (req, res) => {
    try {
        const data = req.body;
        const products = await firestore.collection('products').where("category", "==", data.category).get()
        const productsArray = []
        if (products.empty) {
            res.status(404).send("no products found")
        } else {
            products.forEach(product => {
                const u = new User(
                    product.id,
                    product.data().name,
                    product.data().price,
                    product.data().qty,
                    product.data().description,
                    product.data().timestamp,
                    product.data().image,
                    product.data().rate,
                    product.data().tags,
                    product.data().category
                )
                productsArray.push(u)
            })
            res.status(200).send(productsArray)
        }
    } catch (error) {
        res.status(404).send(error.message)
    }
}

const updateProduct = async (req, res) => {
    try {
        const data = req.body
        await firestore.collection('products').doc(data.id).update(data)
        res.status(200).send("Update complete")
    } catch (error) {
        res.status(400).send(error.message)
    }
}

module.exports = {
    addProduct, getProduct, getAllProducts, getAllOnly, updateProduct
}
