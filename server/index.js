const express = require('express')
var cors = require('cors')
require('dotenv').config()

const routes = require('./controllers/routes')

const app = express()
app.use(cors())

const PORT = process.env.PORT || 8080

app.listen(PORT, console.log (`listening on ${PORT}`));