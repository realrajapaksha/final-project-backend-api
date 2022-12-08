const express = require('express')
const flight = require("./api/flight")

const app = express()
const port = 3000

app.use("/api/flight", flight);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})