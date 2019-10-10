/**
 * Book Schema
 */

const mongoose = require("mongoose")
const Schema = mongoose.Schema

let memberSchema = new Schema({
    nik: Number,
    name: String,
    alamat: String,
    email: String,
    phone: Number,
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    }
})

let Member = mongoose.model("Member", memberSchema)

module.exports = Member