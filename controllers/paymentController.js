'use strict';

const firestore = require('../db')

const makePayment = async (req, res) => {
    try {
        const data = req.body

        // call stripe
        await createPayment(data);

        //await firestore.collection('tickets').doc(data.id).set(data)
        res.status(200).send("Save tickets complete")
    } catch (error) {
        res.status(400).send(error.message)
    }
}

const createPayment = async (data) => {
    
}

module.exports = {
    makePayment
}