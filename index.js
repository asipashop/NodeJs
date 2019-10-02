const express = require('express')
const app = express()
require("./db") // database connection

/**
 * Import routes files
 */
const index_routes = require("./routes/index")
const book_routes = require("./routes/books")
const member_routes = require("./routes/member")

// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({
    extended: true
}))


app.get('/', (req, res) => {
    return res.send(`<marquee>Welcome to the beginning of nothingness</marquee>`)
})

/**
 * Set routes imported
 */
app.use("/index", index_routes)
app.use("/book", book_routes)
app.use("/member", member_routes)


port = 3300
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})