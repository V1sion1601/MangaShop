const res = require("express/lib/response");
const db = require("../connect");
const mysql = require("mysql");
const req = require("express/lib/request");
const product = function (product) {
  this.id = product.id;
  this.Name = product.Name;
  this.price = product.price;
  this.ID_author = product.ID_author;
  this.ID_publisher = product.ID_publisher;
  this.image = product.image;
  this.status = product.status;
  this.ID_category = product.ID_category;
  this.quantity = product.quantity;
};
product.get_all = function (result) {
  db.query("SELECT * FROM product WHERE status = '0'", function (err, product) {
    if (err) {
      result(null);
      return;
    }
    result(product);
  });
};
product.getbyId = function (id, result) {
  //console.log(id);
  db.query("SELECT * FROM product WHERE ID = ?", id, function (err, product) {
    // console.log(err,product);
    if (err) {
      result(null);
      return;
    }
    result(product);
  });
};
// product.create = function(data, result){
//     db.query("INSERT INTO product SET ?", data , function(err, book)){
//         if(err){
//             throw err;
//         }
//         else{
//             result({id:});
//         }
//     }
// }
product.updatecart = function (id, quantity, result) {
  db.query(
    "UPDATE product SET quantity=quantity - ? WHERE ID=?",
    [quantity, id],
    function (err, product) {
      if (err) {
        result(null);
        return;
      } else {
        result(1);
      }
    }
  );
};
product.create = function (name, price, quantity, image, cateID, result) {
  db.query(
    "INSERT INTO product (ID, Name, price, ID_author, ID_publisher, image, status, ID_category, quantity)" +
      "VALUES(NULL,?,?,'1','7',?,'0',?,?)",
    [name, price, image, cateID, quantity],
    function (err, product) {
      if (err) {
        result(null);
        return;
      } else {
        result({
          ID: product.insertId,
          Name: name,
          price: price,
          quantity: quantity,
          ID_category: cateID,
          image: image,
        });
      }
    }
  );
};
product.delete = function (id, result) {
  db.query(
    "UPDATE product SET status='1' WHERE ID=?",
    id,
    function (err, product) {
      if (err) {
        result(null);
        return;
      } else {
        result(1);
      }
    }
  );
};
product.updateproduct = function (id, name, price, quantity, result) {
  db.query(
    "UPDATE product SET Name=?,price=?,quantity=quantity+? WHERE ID = ?",
    [name, price, quantity, id],
    function (err, product) {
      if (err) {
        result(null);
        return;
      } else {
        result({ ID: id, Name: name, price: price, quantity: quantity });
      }
    }
  );
};

module.exports = product;
