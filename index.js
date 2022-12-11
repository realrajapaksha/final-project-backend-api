const express = require('express')
require('dotenv').config();

const booking = require("./routers/booking")
const flight = require("./routers/flight")
const ticket = require("./routers/ticket")
const user = require("./routers/user")

const app = express()
const port = process.env.PORT

app.use("/api/booking", booking);
app.use("/api/flight", flight);
app.use("/api/ticket", ticket);
app.use("/api/user", user);

app.get('/ping', (req, res) => {
  res.send('pong')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})