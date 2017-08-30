

'use strict'


let http = require('htts');
const url = 'http://shopping.yahooapis.jp/ShoppingWebService/V1/json/itemSearch?query=fashion&category_id=13457&type=all&image_size=300&affiliate_type=vc&affiliate_id=http%3a%2f%2fck%2ejp%2eap%2evaluecommerce%2ecom%2fservlet%2freferral%3fsid%3d3103511%26pid%3d882391693%26vc_url%3d&appid=dj0zaiZpPUZCV2h2YUZxdnZ5SCZzPWNvbnN1bWVyc2VjcmV0Jng9NmQ-';
let response = http.get(url, function(res){
	let body = '';
	res.setEncoding('utf8');

	res.on('data', function(chunk){
		body += chunk;
	});

	res.on('end', function(res){
		let ret = JSON.parse(body);
		response = ret.data;
	});
}).on('error', function(e){
	console.log(e.message);
});

exports.index = function(req, res){
	res.render('index', { title: 'Express', data: response});
};
