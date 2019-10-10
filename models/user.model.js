const mongoose = require("mongoose")
const Schema = mongoose.Schema

let userSchema = new Schema({
    name: {
        type: String,
        validate(value) {
            if (validator.isEmpty(value)) {
                throw new Error('Field deskripsi tidak boleh kosong!')
            }
        }
    },
    email: {
        type: String,
        unique: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email yang anda masukan tidak valid')
            }
        }
    },
    phone: Number,
    alamat: String,
    password: String,
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    }
})

let User = mongoose.model("User", userSchema)

module.exports = User