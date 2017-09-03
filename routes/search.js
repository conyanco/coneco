'use strict'

const express = require('express');
const router = express.Router();
const http = require('http');
const url = 'http://shopping.yahooapis.jp/ShoppingWebService/V1/json/itemSearch?query=fashion&category_id=13457&type=all&image_size=300&affiliate_type=vc&affiliate_id=http%3a%2f%2fck%2ejp%2eap%2evaluecommerce%2ecom%2fservlet%2freferral%3fsid%3d3103511%26pid%3d882391693%26vc_url%3d&appid=dj0zaiZpPUZCV2h2YUZxdnZ5SCZzPWNvbnN1bWVyc2VjcmV0Jng9NmQ-';

http.get(url, (res) => {
  let body = '';
  res.setEncoding('utf8');
  res.on('data', (chunk) => {
    body += chunk;
  });
  res.on('end', (res) => {
    res = JSON.parse(body);
    JSON.parse(JSON.stringify(res), function(key, value){
      console.log(key + ":" + value);
      return value;
    });
  }).on('error', (e) => {
    console.log(e.message);
  });
});


/* GET home page. */
  router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express',key: value});
});

router.post('/', function(req, res, next){
	var title = req.body.title.value;
	console.log(title)
	res.render('index', { search: value});
	res.end();
});

module.exports = router;
