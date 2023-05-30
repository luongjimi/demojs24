const path = require('path');
const express = require('express');

// su li view o mot file rieng
const cfViewEng = (app) => {
    // them template engine
    app.set('views', path.join('./src', 'views'));
    app.set('view engine', 'ejs');
    app.use(express.static(path.join('./src', 'public')));  // cau hinh file nao duoc xem
    // neu file o sever.js thi sua './src' -> __dirname
};

module.exports = cfViewEng;