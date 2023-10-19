'use strict';

const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const config = require('./config')

const userRoutes = require('./routes/user-routes')
const searchRouter = require('./routes/search-router');
const productsRouter = require('./routes/products-router');
const cartRouter = require('./routes/products-router');

const app = express()

app.use(express.json())
app.use(cors())
app.use(bodyParser.json())

app.use('/api', userRoutes.routes)
app.use('/api', searchRouter)
app.use('/api', productsRouter.routes)
app.use('/api', cartRouter.routes)

app.listen(config.port, () => console.log("app listening on localhost" + config.port))

app.get('/ping', (req, res) => {
  res.send('pong')
})

//help to understand structure
app.get('/api/user/help', (req, res) => {
  res.json({
    message: "Simple Guide for users",
    user_get: "/api/user -> one user get. need to send Id (json)",
    user_post: "/api/user -> one user add. need to send id, firstName, lastName (json)",
    user_put: "/api/user -> one user update. need to send id firstName, lastName (json)",
    users_get: "/api/users -> get all users",
  });
})
