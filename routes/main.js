const member = require("./member")
const index = require("./index")
const books = require("./book")
const shops = require("./shop.route")
const user = require("./user.routes")

const routes = (app) => {
    app.use("/user", member)
    app.use("/", index)
    app.use("/book", books)
    app.use("/shop", shops)
    app.use("/user", user)
}

module.exports = routes