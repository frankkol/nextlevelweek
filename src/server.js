const express = require('express')
const server = express()
require('dotenv').config()
const nunjucks = require('nunjucks')
const db = require("./database/db")

server.use(express.static("public"))

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

server.get("/search-results", function(req, res) {

    const querySelect = "SELECT * FROM places"

    db.all(querySelect, function(err,rows) {
        if(err) {
            return console.log(err)
        }
        return res.render("search-results.html", { places: rows })  
    })
})




const PORT = process.env.SERVER_PORT || 5000
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})