const res = require('express/lib/response');
const db = require('../connect');
const mysql = require('mysql');
const req = require('express/lib/request');
const category = function(category){
    this.ID = category.ID;
    this.Name = category.Name;
}
category.get_all = function(result){
    db.query("SELECT * FROM `category` WHERE 1", function(err, category){
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
module.exports = category;