'use strict';

const firestore = require('../db')
const Ticket = require('../models/Ticket')

const addTicket = async (req, res) => {
    try {
        const data = req.body
        await firestore.collection('tickets').doc(data.id).set(data)
        res.status(200).send("Save tickets complete")
    } catch (error) {
        res.status(400).send(error.message)
    }
}

const getTicket = async (req, res) => {
    try {
        const id = req.body.id
        const ticket = await firestore.doc('tickets/' + id).get()
        if (!ticket.exists) {
            res.status(404).send("no ticket found")
        } else {
            const t = new Ticket(
                ticket.id,
                ticket.data().araival,
                ticket.data().destination
            )
            res.status(200).send(t)
        }
    } catch (error) {
        res.status(404).send(error.message)
    }
}

const getUserTickets = async (req, res) => {
    try {
        const id = req.body.id
        const tickets = await firestore.collection('tickets').get()
        const ticketsArray = []
        if (tickets.empty) {
            res.status(404).send("no tickets found")
        } else {
            tickets.forEach(doc => {
                if (doc.data().userId == id) {
                    const t = new User(
                        doc.data().id,
                        doc.data().araival,
                        doc.data().destination
                    )
                    ticketsArray.push(t)
                }
            })
            res.status(200).send(ticketsArray)
        }
    } catch (error) {
        res.status(404).send(error.message)
    }
}

const getAllTickets = async (req, res) => {
    try {
        const tickets = await firestore.collection('tickets').get()
        const ticketsArray = []
        if (tickets.empty) {
            res.status(404).send("no tickets found")
        } else {
            tickets.forEach(doc => {
                const t = new User(
                    doc.data().id,
                    doc.data().araival,
                    doc.data().destination
                )
                ticketsArray.push(t)
            })
            res.status(200).send(ticketsArray)
        }
    } catch (error) {
        res.status(404).send(error.message)
    }
}

const updateTicket = async (req, res) => {
    try {
        const data = req.body
        await firestore.collection('tickets').doc(data.id).update(data)
        res.status(200).send("Update tickets complete")
    } catch (error) {
        res.status(400).send(error.message)
    }
}

const deleteTicket = async (req, res) => {
    try {
    } catch (error) {
        res.status(400).send(error.message)
    }
}

module.exports = {
    addTicket, getTicket, getUserTickets, getAllTickets, updateTicket, deleteTicket
}