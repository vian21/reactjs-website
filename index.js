//Back end server for Api request
const express = require('express')
const app = express()
require('dotenv').config()

var cors = require('cors')
var bodyParser = require('body-parser')                       //used to get data from client

const bcrypt = require('bcrypt');
const mysql = require('mysql');
const jwt = require('jsonwebtoken');
const dayjs = require('dayjs');                              //used to format date

// 404
const notFound = "<center><h1>404</h1><h4>Page not found!</h4></center>"

//Enable API to accessed
app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())                                    //parse json from client

//Mysql connection
var connect = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'learning',
    socketPath: '/Applications/XAMPP/xamppfiles/var/mysql/mysql.sock' // not necesary! Only required for Unix Operating systems
});


/*
 * Students API
 */
app.get('/students', (req, res) => {
    connect.query("SELECT * FROM students", (error, results, fields) => {
        if (error) {
            res.status(404).send(notFound)
        }

        res.status(200).json(results)
    })
})

app.post('/students/create', (req, res) => {
    const data = req.body
    connect.query(`INSERT INTO students(name,grade,gender,DOB)
                    VALUES('${data.name}','${data.grade}',${data.gender},'${data.DOB}')`, (error, results, fields) => {
        if (error) {
            res.status(404).send(notFound)
        }

        res.status(200).json({ message: "ok" })
    })
})

app.get('/students/:id', (req, res) => {
    connect.query(`SELECT * FROM students WHERE id=${req.params.id}`, (error, results, fields) => {
        if (error) {
            res.status(404).send(notFound)
        }

        if (results.length != 0) {
            //format date from UTC to YYYY-MM-DD
            results[0].DOB = dayjs(results[0].DOB).format('YYYY-MM-DD')

            res.status(200).json(results[0])
        } else {
            res.status(404).send(notFound)
        }

    })
})

app.post('/students/:id/update', (req, res) => {
    const data = req.body
    connect.query(`UPDATE students SET
                    name = '${data.name}',
                    grade = '${data.grade}',
                    gender = ${data.gender},
                    DOB = '${data.DOB}'
                    WHERE id = ${req.params.id}`, (error, results, fields) => {
        if (error) {
            res.status(404).send(notFound)
        }

        res.status(200).json({ message: "ok" })
    })
})

app.delete('/students/:id/delete', (req, res) => {
    connect.query(`DELETE FROM students WHERE id=${req.params.id}`, (error, results, fields) => {
        if (error) throw error
        res.status(200).json({ message: "ok" })
    })
})

/*
 * User API
 */
app.post('/users/login', (req, res) => {
    const data = req.body
    //query
    connect.query(`SELECT*FROM users WHERE email='${data.email}'`, (error, results, fields) => {
        if (error) {
            res.status(404).send(notFound)
        }

        //if user exists
        if (results) {
            //check password
            bcrypt.compare(data.password, results[0].password, function (err, result) {
                if (err) throw err

                //if passwords match
                if (result) {
                    const user = {
                        name: results[0].name,
                        email: results[0].email,
                    }

                    //generate jwt token
                    var token = jwt.sign(user, "passKey123");

                    //send token to user browser
                    res.status(200).json({ token: token })

                } else {
                    res.send("ko")
                }
            });
        } else {
            res.send("ko")
        }
    })

})

app.use((req, res, next) => {
    res.status(404).send(notFound)
})

app.listen(process.env.PORT || 5000)