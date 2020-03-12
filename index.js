const express = require('express')
const app = express()
var exphbs = require("express-handlebars");


var db = require('./db')
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var imageRouter = require('./imageController')
app.use('/user',imageRouter)

module.exports = app