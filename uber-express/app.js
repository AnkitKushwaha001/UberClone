// npm init
// npm i express
// npm i dotenv cors
// npm i nodemon -> start with = npx nodemon

const dotenv = require('dotenv');
dotenv.config();
const express = require("express");
const cors = require('cors');
const app = express();

app.use(cors());

app.get("", (req, res) => {
    res.send("Hello world");
})

module.exports = app;