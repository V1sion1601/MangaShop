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
order.create = function(id,price,quantity,result){
    db.query("INSERT INTO `order` (`ID`, `price`, `quantity`, `ID_customer`, `status`)" 
    +"VALUES (NULL, ?, ?, ?, '0');",[price,quantity,id], function(err,order){
        if(err){
            result(null);
            return;
        }
        else{
            result({id:order.insertId});
        }
    });
}
order.update = function(id,status,result){
    db.query("UPDATE `order` SET status = ? WHERE ID = ?",[status,id],function(err,order){
        if(err){
            result(null);
            return;
        }else{
            result({id: id});
        }
    });
}
module.exports = order;