exports.foodController = {
    async index(req, res, db) {
        db.select('*')
            .from('tb_food')
            .then(items => {
                if (items.length) {
                    res.json(items)
                } else {
                    res.json({ dataExists: 'false' })
                }
            })
            .catch(err => res.status(400).json({ 
                dbError: 'db error' 
            }))
    },
    async get(req, res, db) {
        const { id } = req.params

        db('tb_food')
            .where('id', id)
            .then((dados) => {
                res.send(dados)
            })
            .catch(err => res.status(400).send({
                error: 'Not Found'
            }))
    },
    async put(req, res, db) {
        const { id } = req.params

        db('tb_food')
            .where('id', id)
            .update(req.body)
            .then((dados) => {
                res.send("Dados Atualizados")
            })
            .catch(err => res.status(400).send({
                error: 'Not Found'
            }))
    },
    async del(req, res, db) {
        const { id } = req.params

        db('tb_food')
            .where('id', id)
            .delete(req.body)
            .then((dados) => {
                res.send("Dados Excluidos")
            })
            .catch(err => res.status(400).send({
                error: 'Not Found'
            }))
    },
    async post(req, res, db) {
        db('tb_food')
            .insert(req.body)
            .then((dados) => {
                res.send(dados)
            })
            .catch(err => res.status(400).json({
                dbError: 'db error'
            }))
    }

} 