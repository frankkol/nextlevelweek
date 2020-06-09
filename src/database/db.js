const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db
db.serialize(() => {
    // db.run(`
    //     CREATE TABLE IF NOT EXISTS places (
    //         id INTEGER PRIMARY KEY AUTOINCREMENT,
    //         image TEXT,
    //         name TEXT,
    //         address TEXT,
    //         address2 TEXT,
    //         state TEXT,
    //         city TEXT,
    //         items TEXT
    //     );
    // `)

    // const queryInsert = `
    //     INSERT INTO places (
    //         image,
    //         name,
    //         address,
    //         address2,
    //         state,
    //         city,
    //         items
    //     ) VALUES (?,?,?,?,?,?,?);
    // `

    // const values = [
    //     "https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    //     "ColecUdi",
    //     "Rua Alfa, Saraiva",
    //     "195",
    //     "Minas Gerais",
    //     "Uberlândia",
    //     "Resíduos Eletrônicos"
    // ]

    // function afterInsertData(err) {
    //     if(err) {
    //         return console.log(err)
    //     }
    //     console.log("Cadastrado com sucesso")
    //     console.log(this)
    // }

    // db.run(queryInsert, values, afterInsertData)

    // const querySelect = "SELECT * FROM places"

    // db.all(querySelect, function(err,rows) {
    //     if(err) {
    //         return console.log(err)
    //     }
    //     console.log("Registros encontrados")
    //     console.log(rows)
    // })

    // const queryDelete = "DELETE FROM places WHERE id = ?"
    
    // function afterDelete(err) {
    //     if(err) {
    //         return console.log(err)
    //     }
    //     console.log("Delete realizado com sucesso")
    //     console.log(this)
    // }

    // db.run(queryDelete, [5], afterDelete)

})