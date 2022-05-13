const res = require('express/lib/response');
const db = require('../connect');
const mysql = require('mysql');
const req = require('express/lib/request');
const account = function(account){
    this.id = account.id;
    this.username = account.username;
    this.password = account.password;
    this.status = account.status;
}
account.get_all = function(result){
    db.query("SELECT ID, username FROM `account` WHERE 1", function(err, account){
        if(err){
            result(null);
            return;
        }
        result(account);
    });
}
account.getbyId = function(id, password, result){
    //console.log(id);
    db.query("SELECT ID, username, role FROM `account` WHERE `username` = ?   AND `Password` = ?", [id,password], function(err, account){
        // console.log(err,product);
        if(err){
            result(null);
            return;
        }
        result(account);

    });
}
account.getbyIdgoogle = function(id, result){
    //console.log(id);
    db.query("SELECT ID, username, role FROM `account` WHERE `ID_google` = ? ", id, function(err, account){
        // console.log(err,product);
        if(err){
            result(null);
            return;
        }
        result(account);

    });
}
module.exports = account;