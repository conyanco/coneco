/* 1. expressモジュールをロードし、インスタンス化してappに代入。*/
'ise strict';
const express = require("express");
const app = express();
const http = require('http');
const base_url = 'http://shopping.yahooapis.jp/ShoppingWebService/V1/json/itemSearch?&type=all&image_size=300&affiliate_type=vc&affiliate_id=http%3a%2f%2fck%2ejp%2eap%2evaluecommerce%2ecom%2fservlet%2freferral%3fsid%3d3103511%26pid%3d882391693%26vc_url%3d&appid=dj0zaiZpPUZCV2h2YUZxdnZ5SCZzPWNvbnN1bWVyc2VjcmV0Jng9NmQ-';

let url = base_url + keyword + category;

/*query=fashion&category_id=13457*/

/* 2. listen()メソッドを実行して3000番ポートで待ち受け。*/
let server = app.listen(3000, function(){
    console.log("Node.js is listening to PORT:" + server.address().port);
});

/* 3. 以後、アプリケーション固有の処理 */

// 写真のサンプルデータ
/*
var photoList = [
    {
        id: "001",
        name: "photo001.jpg",
        type: "jpg",
        dataUrl: "http://localhost:3000/data/photo001.jpg"
    },{
        id: "002",
        name: "photo002.jpg",
        type: "jpg",
        dataUrl: "http://localhost:3000/data/photo002.jpg"
    }
]
*/
// 写真リストを取得するAPI
app.get("/call/", function(req, res, next){
    res.json(base_url);
});

app.get("/call/:keyword", function(req, res, next){
    var result;
    for (i = 0; i < keyword.length; i++){
        if (photoList[i].id == req.params.photoId){
            var result = keyword[i];
        }
    }
    res.json(result);
});

// View EngineにEJSを指定。
app.set('view engine', 'ejs');

// "/"へのGETリクエストでindex.ejsを表示する。拡張子（.ejs）は省略されていることに注意。
app.get("/", function(req, res, next){
    res.render("index", {});
});
