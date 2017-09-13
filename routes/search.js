'use strict'

const express = require('express');
const router = express.Router();
const http = require('http');

const base_url = 'http://shopping.yahooapis.jp/ShoppingWebService/V1/json/itemSearch?&type=all&image_size=300&affiliate_type=vc&affiliate_id=http%3a%2f%2fck%2ejp%2eap%2evaluecommerce%2ecom%2fservlet%2freferral%3fsid%3d3103511%26pid%3d882391693%26vc_url%3d&appid=dj0zaiZpPUZCV2h2YUZxdnZ5SCZzPWNvbnN1bWVyc2VjcmV0Jng9NmQ-';

let category = '13457';
let keyword = 'fashion';

let url = base_url + keyword + '&category_id=' + category;

http.get(url, (res) => {
  let body = '';
  res.setEncoding('utf8');
  res.on('data', (chunk) => {
    body += chunk;
  });
  res.on('end', (res) => {
    res = JSON.parse(body);
    JSON.parse(JSON.stringify(res), function(key, value){
      console.log(key + ':' + value);

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
	res.render('index', { search: value});
	res.end();
});

module.exports = router;
