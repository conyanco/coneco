'use strict'

const express = require('express');
const router = express.Router();
const http = require('http');

const base_url = 'https://itunes.apple.com/search?';

//let category = '13457';
let keyword = 'fashion';

let url = base_url + term + '&category_id=' + category;

http.get(url, (res) => {
  let body = '';
  res.setEncoding('utf8');
  res.on('data', (chunk) => {
    body += chunk;
  });
  res.on('end', (res) => {
    res = JSON.parse(body);
    JSON.parse(JSON.stringify(res), function(key, value){
      console.log(key, value);

    });
  }).on('error', (e) => {
    console.log(e.message);
  });
});


/* GET home page. */
  router.get('/', function(req, res, next) {
  res.send('index', { title: 'Express',key: value});
});

router.post('/', function(req, res, next){
	var title = req.body.title.value;
	console.log(title)
	res.render('index', {});
	res.end();
});

module.exports = router;
