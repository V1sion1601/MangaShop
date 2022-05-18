const res = require('express/lib/response');
const db = require('../connect');
const mysql = require('mysql');
const req = require('express/lib/request');
const category = function(category){
    this.ID = category.ID;
    this.Name = category.Name;
}
category.get_all = function(result){
    db.query("SELECT * FROM `category` WHERE status='0'", function(err, category){
        if(err){
            result(null);
            return;
        }
        result(category);
    });
}
category.getbyId = function(id, result){
    //console.log(id);
    db.query("SELECT * FROM `category` WHERE `ID` = ?", id, function(err, category){
        // console.log(err,product);
        if(err){
            result(null);
            return;
        }
        result(category);

    });
}
category.create = function(name,result){
    db.query("INSERT INTO category (ID, Name, status)   VALUES(NULL,?,'0');",[name],function(err,category){
        if(err){
            result(null);
            return;
        }
        else result({ID: category.insertId, Name: name, status: '0'});
    });
}
category.update = function(id,result){
    db.query("UPDATE category SET status='1' WHERE ID = ? ",id,function(err,category){
        if(err){
            result(null);
            return;
        }
        else result({ID: id});
    })
}
module.exports = category;