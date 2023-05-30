const express = require('express');
const router = express.Router();
const { getpage, loi } = require('../control/homecont.js');

// khai bao route (phuong thuc GET)
router.get('/', getpage);
router.get('/loi', loi);

module.exports = router;