'use strict';

const firestore = require('../db')
const Product = require('../models/Product');
const axios = require('axios');

const search = async (req, res) => {
    try {
        const productsArray = []
        var result = "";

        await axios.get('http://127.0.0.1:5000/search', {
            data: {
                "search": req.body.search
            }
        }).then(async function (response) {
            result = response.data.response;
        }).catch(function (error) {
            console.log(error);
        });

        console.log(result);

        var products = await firestore.collection('products')
            .where("category", "==", "computer")
            .where("tags", "==", result)
            .get();

        products.forEach(product => {
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
            productsArray.push(p)
        });
        console.log(productsArray)

        res.status(200).send(productsArray)
    } catch (error) {
        res.status(400).send(error.message)
    }
}

module.exports = search