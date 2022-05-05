const res = require('express/lib/response');
const db = require('../connect');
const mysql = require('mysql');
const req = require('express/lib/request');
const product = function(product){
    this.id = product.id;
    this.Name = product.Name;
    this.price = product.price;
    this.ID_author = product.ID_author;
    this.ID_publisher = product.ID_publisher;
    this.image = product.image;
    this.status = product.status;
    this.ID_category = product.ID_category;
}
product.get_all = function(result){
    db.query("SELECT * FROM product", function(err, product){
        if(err){
            result(null);
            return;
        }
        result(product);
    });
}
product.getbyId = function(id, result){
    //console.log(id);
    db.query("SELECT * FROM product WHERE ID = ?", id, function(err, product){
        // console.log(err,product);
        if(err){
            result(null);
            return;
        }
        result(product);

    });
}
// product.create = function(data, result){
//     db.query("INSERT INTO product SET ?", data , function(err, book)){
//         if(err){
//             throw err;
//         }
//         else{
//             result({id:});
//         }
//     }
// }
module.exports= product;
