const User = require("../../models/user")

class SearchUser {
    constructor(req) {
        this.query = req
    }

    async getAll() {
        try {

            let query1 = await User.find(this.query)

            // if (query1.length == 0) {
            //     throw error ("Data not found")
            // }

            return query1
        } catch (err) {
            throw err
        }
    }
}

module.exports = SearchUser