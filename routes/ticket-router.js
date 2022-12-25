const express = require('express')
const {
    addTicket,
    getTicket,
    getUserTickets,
    getAllTickets,
    updateTicket,
    deleteTicket } = require('../controllers/ticketController')

const router = express.Router()

router.post('/ticket', addTicket)
router.get('/ticket', getTicket)
router.get('/tickets/user', getUserTickets)
router.get('/tickets', getAllTickets)
router.put('/ticket', updateTicket)
router.delete('/ticket', deleteTicket)

module.exports = {
    routes: router
}
