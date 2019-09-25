const express = require("express"); //import express
const app = express();
const array_routes = require("./routes"); //import dari routes.js
const array_sort = require("./lib/task1.js");
const array_lib = require("./lib/task1");
const object_lib = require("./lib/object.js");

app.use(express.urlencoded({
    extended: true
}));


app.get("/", (req, res) => {
    //home
    return res.send(`Welcome to the hell`);
});

// Task-1 dan Task-2
app.get("/task-1", (req, res) => {
    let alpha = ["Q", "W", "E", "A", "S", "D", "Z", "C"];
    console.log("Before", alpha);

    let result = array_sort.ascending_test(alpha);
    console.log("After", result);
});

app.get("/task-2", (req, res) => {
    let alpha = ["Q", "W", "E", "A", "S", "D", "Z", "C"];
    console.log("Before", alpha);

    let result = array_sort.descending_test(alpha);
    console.log("After", result);

    return res.send(result);
});

// Nama-1, 2, 3, 4
app.get("/nama-1", (req, res) => {
    let alpha = ["Yosafat", "Joko Kuncoro", "Hendriono", "Tosikin", "Tiara", "Soni"];
    console.log("Before", alpha);

    let result = array_sort.ascending_test(alpha);
    console.log("After", result);

    return res.send(result);
});

app.get("/nama-2", (req, res) => {
    let alpha = ["Yosafat", "Joko Kuncoro", "Hendriono", "Tosikin", "Tiara", "Soni"];
    console.log("Before", alpha);

    let result = array_sort.descending_test(alpha);
    console.log("After", result);

    return res.send(result);
});

app.get("/nama-3", (req, res) => {
    let data = ["Yosafat", "Joko Kuncoro", "Hendriono", "Tosikin", "Tiara", "Soni"]
    let result = array_lib.manipulate(data)

    return res.send(result)
});


app.get("/nama-4", (req, res) => {
    let input = ["Trie", "Pawit"];
    let data = ["Yosafat", "Joko Kuncoro", "Hendriono", "Tosikin", "Tiara", "Soni"];
    console.log("before", data);

    let result = object_lib.merge((data = data), (input = input));
    console.log("after", result);

    return res.send(result);
});


app.use("/array", array_routes);

app.listen(3300, () => {
    console.log(`Example app listening on port 3300`);
});