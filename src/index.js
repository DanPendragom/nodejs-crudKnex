const express = require('express')
const cors = require('cors')
const app = express()
const http = require('http').createServer(app)
const bodyparser = require('body-parser')

const PORT = 4000
const HOST = '0.0.0.0'

app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json())
app.use(cors())

http.listen(PORT, HOST, () => {
    console.log('Listening on Port ' + PORT)
})

exports.db = require('knex')({
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: '',
        database: 'db_food'
    }
})
app.use(require('./routes'))
