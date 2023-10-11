'use strict';

const firestore = require('../db')
const User = require('../models/User')

const addUser = async (req, res) => {
    try {
        const data = req.body
        await firestore.collection('users').doc(data.id).set(data)
        res.status(200).send("Save complete")
    } catch (error) {
        res.status(400).send(error.message)
    }
}

const getUser = async (req, res) => {
    try {
        const id = req.body.id
        const user = await firestore.doc('users/' + id).get()
        if (!user.exists) {
            res.status(404).send("no user found")
        } else {
            const u = new User(
                user.id,
                user.data().firstName,
                user.data().lastName
            )
            res.status(200).send(u)
        }
    } catch (error) {
        res.status(404).send(error.message)
    }
}

const getAllUser = async (req, res) => {
    try {
        const users = await firestore.collection('users').get()
        const usersArray = []
        if (users.empty) {
            res.status(404).send("no user found")
        } else {
            users.forEach(doc => {
                const u = new User(
                    doc.data().id,
                    doc.data().firstName,
                    doc.data().lastName
                )
                usersArray.push(u)
            })
            res.status(200).send(usersArray)
        }
    } catch (error) {
        res.status(404).send(error.message)
    }
}

const updateUser = async (req, res) => {
    try {
        const data = req.body
        await firestore.collection('users').doc(data.id).update(data)
        res.status(200).send("Update complete")
    } catch (error) {
        res.status(400).send(error.message)
    }
}

module.exports = {
    addUser, getUser, getAllUser, updateUser
}
