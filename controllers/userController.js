'use strict';

const firestore = require('../db')
const User = require('../models/User')

const addUser = async (req, res) => {
    try {
        const data = req.body
        var user = await firestore.collection('users').doc(data.email).get();
        if (user.exists) {
            res.status(208).send("user already exist")
            return;
        }
        await firestore.collection('users').doc(data.email).set(data)
        res.status(200).send("save complete")
    } catch (error) {
        res.status(400).send(error.message)
    }
}

const getUser = async (req, res) => {
    try {
        const email = req.query.email
        const user = await firestore.doc('users/' + email).get()
        if (!user.exists) {
            res.status(404).send("no user found")
        } else {
            const u = new User(
                user.data().id,
                user.data().email,
                user.data().fullName,
                user.data().image,
                user.data().age,
                user.data().gender,
                user.data().tele1,
                user.data().tele2,
                user.data().city,
                user.data().address,
                user.data().country,
                user.data().status,
                user.data().type,
            )
            res.status(200).send(u)
        }
    } catch (error) {
        res.status(405).send(error.message)
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
                    user.data().id,
                    user.data().email,
                    user.data().fullName,
                    user.data().image,
                    user.data().age,
                    user.data().gender,
                    user.data().tele1,
                    user.data().tele2,
                    user.data().city,
                    user.data().address,
                    user.data().country,
                    user.data().status,
                    user.data().type,
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
        var user = await firestore.collection('users').doc(data.email).get();
        if (user.exists) {
            await firestore.collection('users').doc(data.email).update(data)
            res.status(200).send("Update complete")
        } else {
            res.status(404).send("no user found")
        }
    } catch (error) {
        res.status(400).send(error.message)
    }
}

module.exports = {
    addUser, getUser, getAllUser, updateUser
}
