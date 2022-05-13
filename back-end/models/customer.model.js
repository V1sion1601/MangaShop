const res = require('express/lib/response');
const db = require('../connect');
const mysql = require('mysql');
const req = require('express/lib/request');
const customer = function(customer){
    this.id = customer.id;
    this.Name = customer.Name;
    this.ID_account = customer.ID_account;
    this.address = customer.address;
    this.phone = customer.phone;
}
customer.get_all = function(result){
    db.query("SELECT * FROM `customers` WHERE 1", function(err, customer){
        if(err){
            result(null);
            return;
        }
        result(customer);
    });
}
customer.getbyId = function(id, result){
    //console.log(id);
    db.query("SELECT * FROM `customers` WHERE `ID_account` = ?", id, function(err, customer){
        if(err){
            result(null);
            return;
        }
        result(customer);

    });
}
module.exports = customer;