require('dotenv').config();
const express = require('express');
const app = express(); // goi app express
const { hostname } = require('os');
const webroute = require('./route/web.js')
// lay xong thu vien can thiet

const cfViewEngine = require('./config/vieweng.js');
const port = process.env.PORT || 1000; //de lay ra tham so port
const hsname = process.env.HOST_NAME;

cfViewEngine(app); // chay viewengine

// khai bai route
app.use('/', webroute); //tat ca route khai bao se o sau duong link nay (/v1)

app.listen(port, hsname, () => {
    console.log(` ${hsname}:${port}`)
});

