const res = require('express/lib/response');
const db = require('../connect');
const mysql = require('mysql');
const req = require('express/lib/request');
const order = function(order){
    this.id = order.id;
    this.ID_customer = order.ID_customer;
    this.price = order.price;
    this.quantity = order.quantity;
}
order.get_all = function(result){
    db.query("SELECT * FROM `order` WHERE 1", function(err, order){
        if(err){
            result(null);
            return;
        }
        result(order);
    });
}
order.getbyId = function(id, result){
    //console.log(id);
    db.query("SELECT * FROM `order` WHERE `ID_customer` = ?", id, function(err, order){
        // console.log(err,product);
        if(err){
            result(null);
            return;
        }
        result(order);

    });
}
module.exports = order;