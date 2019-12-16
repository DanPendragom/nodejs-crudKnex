const routes = require('express').Router()
const {foodController} = require('./controllers/foodController')
const {db} = require('./index')

routes.get('/food', (req, res) => foodController.index(req, res, db))
routes.get('/food/:id', (req, res) => foodController.get(req, res, db))
routes.post('/create', (req, res) => foodController.post(req, res, db))
routes.put('/update/:id', (req, res) => foodController.put(req, res, db))
routes.delete('/delete/:id', (req, res) => foodController.del(req, res, db))


module.exports = routes