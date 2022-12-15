'use strict';

const firestore = require('../db')
const User = require('../models/User')

const addUser = async (req, res, next) => {
    try {
        const data = req.body
        console.log(data)
        await firestore.collection('users').doc().set(data)
        res.send("Save complete")
    } catch (error) {
        res.status(400).send(error.message)
    }
}

const getUser = async (req, res, next) => {

}

const getAllUser = async (req, res, next) => {
    try {
        const users = await firestore.collection('users')
        const data = await users.get()
        const usersArray = []
        if (data.empty) {
            res.status(404).send("no user found")
        } else {
            data.forEach(doc => {
                const u = new User(
                    doc.data().id,
                    doc.data().firstName,
                    doc.data().lastName
                )
                usersArray.push(u)
            })
            res.send(usersArray)
        }
    } catch (error) {
        res.status(404).send(error.message)
    }
}

const updateUser = async () => {

}

const deleteUser = async (req, res, next) => {

}

module.exports = {
    addUser, getUser, getAllUser, updateUser, deleteUser
}