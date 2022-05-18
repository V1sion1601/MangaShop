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
    db.query("SELECT account.ID, account.username, customers.Name, account.status  FROM `account`, `customers` WHERE account.ID = customers.ID_account", function(err, account){
        if(err){
            result(null);
            return;
        }
        result(account);
    });
}
account.getbyId = function(id, password, result){
    //console.log(id);
    db.query("SELECT ID, username,status, role FROM `account` WHERE `username` = ?   AND `Password` = ?", [id,password], function(err, account){
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
    db.query("SELECT ID, username,status, role FROM `account` WHERE `ID_google` = ? ", id, function(err, account){
        // console.log(err,product);
        if(err){
            result(null);
            return;
        }
        result(account);

    });
}
account.getbyusername = function(username, result){
    //console.log(id);
    db.query("SELECT ID, username,status, role FROM `account` WHERE `username` = ? ", username, function(err, account){
        // console.log(err,product);
        if(err){
            result(null);
            return;
        }
        result(account);

    });
}
account.create = (username,password, result)=>{
    db.query("INSERT INTO `account` (`ID`, `Username`, `Password`, `ID_google`, `status`, `role`)" 
    +"VALUES (NULL, ?, ?, NULL, '1', '0');",[username,password], function(err,account){
        if(err){
            result(null);
            return;
        }
        else{
            result({id: account.insertId, username, password});
        }
    });
}
account.createforgoogle = (username,password,ID_google, result)=>{
    db.query("INSERT INTO `account` (`ID`, `Username`, `Password`, `ID_google`, `status`, `role`)" 
    +"VALUES (NULL, ?, ?, ?, '1', '0');",[username,password,ID_google], function(err,account){
        if(err){
            result(null);
            return;
        }
        else{
            result({id: account.insertId, username, password});
        }
    });
}
account.updatepassword = (id,password,result)=>{
    db.query("UPDATE account SET Password =? WHERE ID=?",[password,id],function(err){
        if(err){
            result(null);
            return;
        }
        else{
            result(1);
        }
    })
}
account.updatestatus = (id,status,result)=>{
    db.query("UPDATE account SET status = ? WHERE ID = ?",[status,id],function(err){
        if(err){
            result(null);
            return;
        }
        else{
            result({ID: id,status: status});
        }
    })
}
module.exports = account;