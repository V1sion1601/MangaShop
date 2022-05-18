const res = require('express/lib/response');
const db = require('../connect');
const mysql = require('mysql');
const req = require('express/lib/request');
const sale = function(sale){
    this.id = sale.id;
    this.percent = sale.percent;
    this.require = sale.require;
    this.name = sale.name;
    this.date_start = sale.date_start;
    this.date_finish = sale.date_finish;
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
    db.query("SELECT * FROM `sale` WHERE `Name` = ?", id, function(err, sale){
        // console.log(err,product);
        if(err){
            result(null);
            return;
        }
        result(sale);

    });
}
sale.create = function(name,percent,require,date_start,date_finish,result){
    db.query("INSERT INTO `sale` (`ID`, `Percent`, `Require`, `date_start`, `date_finish`, `Name` )" 
    +"VALUES (NULL, ?, ?, ?, ?, ?);",[percent,require,date_start,date_finish,name], function(err,sale){
        if(err){
            result(null);
            return;
        }
        else{
            result({ID: sale.insertId,Name: name,percent: percent,require: require,date_start: date_start,date_finish: date_finish});
        }
    });
}
sale.update = function(id,name,percent,require,date_start,date_finish,result){
    console.log(date_start);
    console.log(date_finish);
    db.query("UPDATE `sale` SET `Percent` = ?, `Require` = ?, `date_start` = ?, `date_finish` = ?, `Name` = ? WHERE `sale`.`id` = ?;",[percent,require,date_start,date_finish,name,id], function(err,sale){
        if(err){
            result(null);
            return;
        }
        else{
            result({ID: id,Name: name,percent: percent,require: require,date_start: date_start,date_finish: date_finish});
        }
    });
}
module.exports = sale;