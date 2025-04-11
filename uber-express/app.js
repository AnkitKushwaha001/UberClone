// npm init
// npm i express
// npm i dotenv cors
// npm i nodemon -> start with = npx nodemon
// npm i mongoose
// npm i bcrypt jsonwebtoken
// npm i express-validator
// npm install --save-dev @types/express
// npm i cookie-parser

// Copilot -> GitHub Copilot Chat

const dotenv = require('dotenv');
dotenv.config();
const express = require("express");
const cors = require('cors');
const app = express();
const cookieParser = require('cookie-parser');
const connectToDb = require('./db/db')
const userRoute = require('./routes/user.route')

connectToDb();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

app.get("/", (req, res) => {
    res.send("Hello world");
})

app.use('/users', userRoute);

module.exports = app;