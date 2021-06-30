const Student = require('../models/Student')

module.exports = {
    index: (req, res) => {
        Student.getAll(req.con, (err, result) => {
            res.json(result.rows)
        })
    },
    store: (req, res) => {
        Student.store(req.con, req.body, (error, results) => {
            if (error) {
                throw error
            }
            // res.redirect('/user')
            res.json('okk')
        })
    },

    update: (req, res) => {
        Student.update(req.con, req.body, req.params.id, (error, results) => {
            if (error) {
                throw error
            }
            res.send('okk')
        })
    },

    delete: (req, res) => {
        // let id = req.params.userId
        // users = users.filter(user => user.id != id)
        // res.send({
        //     status: true,
        //     data: users,
        //     message: 'hapus data',
        //     method: req.method,
        //     url: req.url
        // })

        Student.delete(req.con, req.params.id, (error, results) => {
            if (error) {
                throw error
            }
            res.send('delete')
        })
    }
}