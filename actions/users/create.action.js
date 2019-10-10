const UserModel = require("../../models/user") //import model

class CreateUser {
    constructor(req) {
        this.name = req.body.name
        this.email = req.body.email
        this.telepon = req.body.telepon
        this.alamat = req.body.alamat
    }

    async exec() {
        try {
            let query = new UserModel({
                name: this.name,
                email: this.email,
                telepon: this.telepon,
                alamat: this.alamat
            })
            await query.save()

            return query
        } catch (err) {
            throw err
        }
    }
}

module.exports = CreateUser