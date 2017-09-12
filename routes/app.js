/* 1. expressモジュールをロードし、インスタンス化してappに代入。*/
'ise strict';
const express = require('express');
const app = express();
//const router = express.Router();
const http = require('http');
const base_url = 'http://shopping.yahooapis.jp/ShoppingWebService/V1/json/itemSearch?&type=all&image_size=300&affiliate_type=vc&affiliate_id=http%3a%2f%2fck%2ejp%2eap%2evaluecommerce%2ecom%2fservlet%2freferral%3fsid%3d3103511%26pid%3d882391693%26vc_url%3d&appid=dj0zaiZpPUZCV2h2YUZxdnZ5SCZzPWNvbnN1bWVyc2VjcmV0Jng9NmQ-';

let category = '13457';
let keyword = 'fashion';


let url = base_url + keyword + '&category_id=' + category;

/*query=fashion&category_id=13457*/


/* 3. 以後、アプリケーション固有の処理 */


// 写真リストを取得するAPI

http.get(url, function(req, res, next){
let body = '';
  res.setEncoding('utf8');
  res.on('data', (chunk) => {
    body += chunk;
});
    res.json(res.body);
});

app.get("/call:keyword", function(req, res, next){
    let result;
    for (i = 0; i < keyword.length; i++){
        if (url[i].id == req.params.keyword){
            let result = keyword[i];
        }
    }
    res.json(result);
});

// View EngineにEJSを指定。
//app.set('view engine', 'ejs');

// "/"へのGETリクエストでindex.ejsを表示する。拡張子（.ejs）は省略されていることに注意。
app.get("/", function(req, res, next){
    res.render("index", {});
});
