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