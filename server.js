const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');

const indexRouter = require('./routes/index');
const mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: ""
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});


app.set("view engine", "ejs");
    app.set('views', 'views');
    app.set("layouts", 'layouts/layout');
    app.use(expressLayouts);
    app.use(express.static('public'));
    app.use('/', indexRouter);
    app.listen(process.env.PORT || 3000);