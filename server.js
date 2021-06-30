const express = require('express')
const userRouter = require('./routes/userRouter');
const con = require('./config/db')
const path = require('path');

const app = express()
const port = 3000

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// connecting route to database
app.use(function (req, res, next) {
    req.con = con
    next()
})

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

//Routing
app.use('/user', userRouter);
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Bismillah'
    })
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})