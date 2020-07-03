/* === Dependencies === */
const express = require("express");
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const logger = require('morgan');
const path = require("path");
const fs = require("fs")
const flash = require('connect-flash');

/* === Set the PORT to work with deployment environment === */
const PORT = process.env.PORT || 3001;

/* === Middleware === */
app.use(logger('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(require('express-session')({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false
}));
app.use(flash());

/* === Telling Express to Listen === */
app.listen(PORT, function () {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
  });
  