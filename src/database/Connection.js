const mysql = require('mysql')

const dbConfig = {
    host: "localhost",
    user: "root",
    password: "",
    port: "3306",
    database: "nodejs-mysql"
}

const db = mysql.createPool(dbConfig)

module.exports = (query) => {
    db.connect(err => {
        return new Promise((resolve, reject) => {
            db.getConnection((err, sql) => {
                if (err) {
                    reject(err)
                } else {
                    sql.query(query, (err, results) => {
                        if (err) {
                            reject(err)
                        } else { 
                            resolve(results)
                        }

                        sql.release()
                    })
                }
            })
        })
    })
}