const express = require('express')
const server = express()
require('dotenv').config()
const nunjucks = require('nunjucks')
const db = require("./database/db")

server.use(express.static("public"))

server.use(express.urlencoded({ extended: true}))

nunjucks.configure("src/views", {
    express: server,
    noCache: true,
})

server.get("/", function(req, res) {
    return res.render("index.html")
})

server.get("/create-point", function(req, res) {
    return res.render("create-point.html")
})

server.post("/save-point", function(req, res) {
    const queryInsert = `
        INSERT INTO places (
            image,
            name,
            address,
            address2,
            state,
            city,
            items
        ) VALUES (?,?,?,?,?,?,?);
    `

    const values = [
        req.body.image,
        req.body.name,
        req.body.address,
        req.body.address2,
        req.body.state,
        req.body.city,
        req.body.items
    ]

    function afterInsertData(err) {
        if(err) {
            console.log(err)
            return res.send("Erro no cadastro!")
        }
        console.log("Cadastrado com sucesso")
        console.log(this)
    }

    db.run(queryInsert, values, afterInsertData)
    return res.render("create-point.html", { saved: true })
})

server.get("/search-results", function(req, res) {

    const search = req.query.search

    if(search == ""){
        return res.render("search-results.html", { total: 0 })  
    }

    const querySelect = `SELECT * FROM places WHERE city LIKE '%${search}%'`
    db.all(querySelect, function(err,rows) {
        if(err) {
            return console.log(err)
        }
        const total = rows.length
        return res.render("search-results.html", { places: rows, total: total })  
    })
})




const PORT = process.env.SERVER_PORT || 5000
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})