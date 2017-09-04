'use strict';
const express = require('express');
const router = express.Router();
const search = require('search');
/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

module.exports = router;


