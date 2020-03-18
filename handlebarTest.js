var express = require("express");
var exphbs  = require('express-handlebars');
var session = require("express-session");
// Requiring passport as we've configured it
var passport = require("./config/passport");
var mysql = require('mysql'); 
var app = express();

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
 
app.get('/', function (req, res) {
    res.render('home');
});
 
app.listen(3000);