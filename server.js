const express = require("express");
const app = express();

app.set("view engine", "ejs")

app.get('/home', (req, res) => {
    res.render("index")
})

app.get('/about-us', (req, res) => {
    res.render("about-us")
})

app.get('/contact-us', (req, res) => {
    res.render("contact-us")
})

app.listen(1700);
console.log("1700 Server Running...");