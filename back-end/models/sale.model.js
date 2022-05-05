const res = require('express/lib/response');
const db = require('../connect');
const mysql = require('mysql');
const req = require('express/lib/request');
const sale = function(sale){
    this.id = sale.id;
    this.percent = sale.percent;
    this.require = sale.require;
    this.description = sale.description;
}
sale.get_all = function(result){
    db.query("SELECT * FROM `sale` WHERE 1", function(err, sale){
        if(err){
            result(null);
            return;
        }
        result(sale);
    });
}
sale.getbyId = function(id, result){
    //console.log(id);
    db.query("SELECT * FROM `sale` WHERE `ID` = ?", id, function(err, sale){
        // console.log(err,product);
        if(err){
            result(null);
            return;
        }
        result(sale);

    });
}
module.exports = sale;