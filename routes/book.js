const express = require('express')
const router = express.Router()
const {
    create,
    getAll,
    update,
    destroy,
    detail
} = require("../actions/book")

router.post("/", (req, res) => {
    let {
        title,
        description,
        price
    } = req.body
    var insert_data = {
        title,
        description,
        price
    }

    let data = new create(insert_data)
    data.save()

    return res.send({
        status: "success",
        data,
        message: "Book created successfully!"
    })
})

router.get("/", async(req, res) => {
    let hasil = await getAll()

    return res.send({
        status: "success",
        hasil,
        message: "List Book"
    })
})

router.put("/:id", async(req, res) => {
    let {
        id
    } = req.params
    let {
        title,
        description,
        price,
        fresh
    } = req.body
    let updated_data = {
        title,
        description,
        price,
        fresh
    }

    try {
        let data = await update(id, updated_data)

        return res.status(200).json({
            status: "success",
            data,
            message: "User data updated successfully!",
            updated_data
        })
    } catch (err) {
        return res.status(400).json({
            status: "error",
            message: err.message
        })
    }
})


router.delete("/:id", async(req, res) => {
    let {
        id
    } = req.params

    try {
        let data = await destroy(id)

        return res.status(200).json({
            status: "success",
            data,
            message: "User data deleted successfully!"
        })
    } catch (err) {
        return res.status(400).json({
            status: "error",
            message: err.message
        })
    }
})

router.get("/:id", async(req, res) => {
    let {
        id
    } = req.params

    try {
        let data = await detail(id)

        return res.status(200).json({
            status: "success",
            data,
            message: "User data deleted successfully!"
        })
    } catch (err) {
        return res.status(400).json({
            status: "error",
            message: err.message
        })
    }
})





module.exports = router