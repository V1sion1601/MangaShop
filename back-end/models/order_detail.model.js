const res = require('express/lib/response');
const db = require('../connect');
const mysql = require('mysql');
const req = require('express/lib/request');
const order_detail = function(order_detail){
    this.id = order_detail.id;
    this.ID_product = order_detail.ID_product;
    this.quantity = order_detail.quantity;
}
order_detail.getbyId = function(id, result){
    //console.log(id);
    db.query("SELECT orderdetail.ID_order, product.Name, product.image, orderdetail.quantity, product.price * orderdetail.quantity as price FROM `orderdetail`, `product` WHERE `ID_product` = product.ID AND `ID_order` = ?"
    ,id, function(err, order_detail){
        // console.log(err,product);
        if(err){
            result(null);
            return;
        }
        result(order_detail);

    });
}
    order_detail.create = function(id,id_product,quantity,result){
        db.query("INSERT INTO `orderdetail` (`ID_order`,`ID_product`, `quantity`)" 
        +"VALUES (?, ?, ?);",[id,id_product,quantity], function(err,order){
            if(err){
                result(null);
                return;
            }
            else{
                result(1);
            }
        });
}
module.exports = order_detail;