const UserModel = require("../../models/user") //import model

class getAll {
    constructor() {

    }

    async exec() {
        try {
            let query = await UserModel.find({}).exec()
            return query
        } catch (err) {
            throw err
        }
    }
}

module.exports = getAll