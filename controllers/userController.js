'use strict';

const firestore = require('../db')
const User = require('../models/User')

const addUser = async (req, res) => {
    try {
        const data = req.body
        await firestore.collection('users').doc(data.email).set(data)
        res.status(200).send("Save complete")
    } catch (error) {
        res.status(400).send(error.message)
    }
}

const getUser = async (req, res) => {
    try {
        const email = req.body.email
        const user = await firestore.doc('users/' + email).get()
        if (!user.exists) {
            res.status(404).send("no user found")
        } else {
            const u = new User(
                user.data().email,
                user.data().fullName,
                user.data().image,
                user.data().age,
                user.data().gender,
                user.data().mobile,
                user.data().telephone,
                user.data().city,
                user.data().province,
                user.data().country,
                user.data().address
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
            users.forEach(user => {
                const u = new User(
                    user.data().email,
                    user.data().fullName,
                    user.data().image,
                    user.data().age,
                    user.data().gender,
                    user.data().mobile,
                    user.data().telephone,
                    user.data().city,
                    user.data().province,
                    user.data().country,
                    user.data().address
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
        await firestore.collection('users').doc(data.email).update(data)
        res.status(200).send("Update complete")
    } catch (error) {
        res.status(400).send(error.message)
    }
}

module.exports = {
    addUser, getUser, getAllUser, updateUser
}
