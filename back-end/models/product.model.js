const res = require('express/lib/response');
const db = require('../connect');
const product = function(product){
    this.id = product.id;
    this.Name = product.Name;
    this.price = product.price;
    this.ID_author = product.ID_author;
    this.ID_publisher = product.ID_publisher;
    this.image = product.image;
    this.status = product.status;
}
product.get_all = function(result){
    db.query("SELECT * FROM product", function(err, book){
        if(err){
            result(err);
            return;
        }
        result(data); 
    });
}
product.getbyId = function(id, result){
    //console.log(id);
    db.query("SELECT * FROM product WHERE id = ?", id, function(err, product){
        console.log(err,product);
        if(err){
            result(null);
            return;
        }
        result(product);

    });
}
