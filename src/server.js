const express = require('express')
const bodyParser = require('body-parser')

const app = express()

// Middleware
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

// Routes
const accountsRoutes = require('./routes/Accounts')
app.use('/accounts', accountsRoutes)

const port = 3000

const DB = mysql.createConnection(dbConfig)

app.listen(port, () => {
    console.log("Listening on port: ", port)
})