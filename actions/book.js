const Book = require("../models/book")
const {
    isInteger
} = require("lodash")
const User = require("../models/user")

const create = (req) => {
    let {
        title,
        description,
        price
    } = req.body
    price = parseInt(price)
    console.log(`Value of price ${price}`)

    if (isInteger(price) === false) {
        return "Wrong type of `price`"
    }

    var insert_data = {
        title,
        description,
        price
    }

    let data = new Book(insert_data)
    data.save()

    return data
}

const getAll = async() => {
    let query = await Book.find({})

    .populate([{
        path: 'author',
        model: User
    }]).exec()

    return query
}

const update = async(id, updated_data) => {
    let {
        title,
        description,
        price,
        fresh
    } = updated_data
    let opts = {
        new: fresh === "true" ? true : false
    }
    let data = {
        title,
        description,
        price
    }

    try {
        let query = await Book.findOneAndUpdate({
            _id: id
        }, data, opts).exec()

        return query
    } catch (err) {
        throw err
    }
}

const detail = async(id) => {
    try {
        let query = await Book.findOne({
            _id: id
        }).exec()

        return query
    } catch (err) {
        throw err
    }
}

const destroy = async(id) => {
    try {
        let query = await Book.findOneAndDelete({
            _id: id
        }).exec()

        return query
    } catch (err) {
        throw err
    }
}





module.exports = {
    create,
    getAll,
    update,
    destroy,
    detail
}