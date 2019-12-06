const express = require('express')
const db = require('./db')
const Image = require('./image/model')
const imageRouter = require('./image/router')
const cors = require('cors')
const bodyParser = require('body-parser')
const port = process.env.PORT || 4000

const app = express()

const corsMiddleware = cors()
app.use(corsMiddleware)

const parseMiddleware = bodyParser.json()
app.use(parseMiddleware)

app.use(imageRouter)

app.listen(port, () => console.log(`Listening on port: ${port}`))
