const express = require('express')
const app = express()

app.use(express.urlencoded({
    extended: true
}))

app.get('/', (req, res) => {
    var x, y, z
    x = 5
    y = 3
    z = x + y

    return res.send(`The Value of z is ${z}`)
})

app.post('/', (req, res) => {
    let email = req.body.email
    return res.send(`The email value is ${email}`)
})

app.post('/kondisi', (req, res) => {
    var a, b, c, d;
    /**
     * Data type of variable a & b must be number, not string
     */
    a = parseInt(req.body.a)
    b = parseInt(req.body.b)
    c = parseInt(req.body.c)
    d = a + b * c

    if (d < 10) {
        text = "Good morning";
    } else if (d > 20) {
        text = "Good day";
    } else {
        text = "Good evening";
    }
    /**
     * Check data type of all variable
     */
    console.log(typeof a)
    console.log(typeof b)
    console.log(typeof c)
    console.log(typeof d)


    return res.send(`The result value is ${text}`)
})

// tambah

app.post('/tambah', (req, res) => {
    var a, b, c

    a = parseInt(req.body.a)
    b = parseInt(req.body.b)
    c = parseInt(req.body.c)
    d = a + b + c

    if (d < 10) {
        message = "kekurangan";
    } else if (d > 20) {
        message = "kelebihan";
    } else {
        message = "tepat";
    }

    console.log(typeof a)
    console.log(typeof b)
    console.log(typeof c)
    console.log(typeof d)


    return res.send(`The result value is ${message}`)
})


app.listen(3300, () => {
    console.log(`Example app listening on port 3300`)
})