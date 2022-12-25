const express = require('express')
const {
    addUser,
    getUser,
    getAllUser,
    updateUser,
    deleteUser } = require('../controllers/userController')

const router = express.Router()

router.post('/user', addUser)
router.get('/user', getUser)
router.get('/users', getAllUser)
router.put('/user', updateUser)
router.delete('/user', deleteUser)

module.exports = {
    routes: router
}
