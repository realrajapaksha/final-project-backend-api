const express = require('express')
const {
    addUser,
    getUser,
    getAllUser,
    updateUser } = require('../controllers/userController')

const router = express.Router()

router.post('/user', addUser)
router.get('/user', getUser)
router.get('/users', getAllUser)
router.put('/user', updateUser)

module.exports = {
    routes: router
}
