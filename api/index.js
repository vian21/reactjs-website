//Back end server for Api request

const express = require('express')
const app = express()
const mysql = require('mysql')

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
        if (error) throw error
        res.json(results)
    })
})
app.get('/students/:id', (req, res) => {
    connect.query(`SELECT * FROM students WHERE id=${req.params.id}`, (error, results, fields) => {
        if (error) throw error
        res.json(results)
    })
})

/*
 * User API
 */ 


app.listen(5000)