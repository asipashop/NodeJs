const express = require('express')
const app = express()
require("./db") // database connection

// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({
    extended: true
}))

require('./routes/main')(app) // all routes imported

port = 3300
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})