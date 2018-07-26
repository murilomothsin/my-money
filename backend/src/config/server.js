const port = 3003

const bodyParser = require('body-parser')
const queryParser = require('express-query-int')
const express = require('express')
const server = express()
const allowCors = require('./cors')

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(allowCors)
server.use(queryParser)

server.listen(port, () => {
    console.log(`Backend running in ${port}`)
})

module.exports = server