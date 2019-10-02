const Member = require("../models/member")

const create = async(req) => {
    let {
        nik,
        nama,
        alamat,
        email,
        phone
    } = req.body
    phone = parseInt(phone)
    var insert_data = {
        nik,
        nama,
        alamat,
        email,
        phone
    }

    let data = new Member(insert_data)

    try {
        await data.save()

        return data
    } catch (err) {
        throw err
    }
}

const getAll = async() => {
    try {
        let query = await Member.find({}).exec()
        let data = query.map((v, i) => {
            return {
                nik: v.nik,
                name: v.nama,
                alamat: v.alamat,
                email: v.email,
                phone: v.phone
            }
        })

        return data
    } catch (err) {
        throw err
    }
}

const getDetail = async(id) => {
    try {
        let query = await Member.findOne({
            _id: id
        }).exec()

        return query
    } catch (err) {
        throw err
    }
}

const update = async(id, updated_data) => {
    let {
        nik,
        nama,
        alamat,
        email,
        phone,
        fresh
    } = updated_data
    let opts = {
        new: fresh === "true" ? true : false
    }
    let data = {
        nik,
        nama,
        alamat,
        email,
        phone
    }

    try {
        let query = await Member.findOneAndUpdate({
            _id: id
        }, data, opts).exec()

        return query
    } catch (err) {
        throw err
    }
}

const destroy = async(id) => {
    try {
        let query = await Member.findOneAndDelete({
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
    getDetail,
    update,
    destroy
}