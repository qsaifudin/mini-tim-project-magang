module.exports = {
    getAll: (con, callback) => {
        con.query('SELECT * FROM students ORDER BY id ASC', callback)
    },
    getById: (con, id, callback) => {
        con.query('SELECT * FROM students ORDER BY id ASC', callback)
    },
    store: (con, data, callback) => {
        const { id, name } = data
        con.query('INSERT INTO students (id, name) VALUES ($1, $2)', [id, name], callback)
    },
    update: (con, data, id_arg, callback) => {
        const id = parseInt(id_arg)
        const { name } = data
        con.query('UPDATE students SET name = $1 WHERE id = $2', [name, id], callback)
    },
    delete: (con, id_arg, callback) => {
        const id = parseInt(id_arg)
        con.query('DELETE from students WHERE id = $1', [id], callback)
    }
}