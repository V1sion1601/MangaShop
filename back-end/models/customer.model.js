const res = require('express/lib/response');
const db = require('../connect');
const mysql = require('mysql');
const req = require('express/lib/request');
const { NULL } = require('mysql/lib/protocol/constants/types');
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
customer.create = function(name,ID_account,address,phone,result){
    console.log(name);
    console.log(ID_account);
    console.log(address);
    console.log(phone);
    db.query("INSERT INTO `customers` (`ID`, `Name`, `ID_account`, `adress`, `phone`)" 
    +"VALUES (NULL, ?, ?, ?, ?);",[name,ID_account,address,phone], function(err,customer){
        if(err){
            result(null);
            return;
        }
        else{
            result({ID: customer.insertId,Name: name,adress: address,phone: phone});
        }
    });
}
customer.createforgoogle = function(name,ID_account,result){
    console.log(name);
    console.log(ID_account);
    db.query("INSERT INTO `customers` (`ID`, `Name`, `ID_account`, `adress`, `phone`)" 
    +"VALUES (NULL, ?, ?, '', '');",[name,ID_account], function(err,customer){
        if(err){
            result(null);
            return;
        }
        else{
            result({ID: customer.insertId,Name: name,adress: NULL,phone: NULL});
        }
    });
}
customer.updateprofile = function(id,name,address,phone,ID_account,result){
    db.query("UPDATE customers SET Name=?,adress=?,phone=? WHERE ID=?",[name,address.replace(".","/"),phone,id],function(err,customer){
        if(err){
            result(null);
            return;
        }
        else{
            result({ID: id,Name: name,adress: address.replace(".","/"),phone: phone,ID_account: ID_account});
        }
    });
}
module.exports = customer;