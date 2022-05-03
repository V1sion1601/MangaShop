const express = require("express");
const res = require("express/lib/response");
const bodyparser = require("body-parser");
const app = express();
app.listen(8000, () => {
  console.log("server đang chạy");
});
// DataBase
const mysql = require("mysql");
const con = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "mangastore",
});
// con.connect(function(err){
//   if(err){
//     console.log('Error connecting to Db');
//     return 'Error connecting to Db';
//   }
//   console.log('Connection established');
//   return "Connection established";
// });

// app.use(function(req,res,next){
//     req.con = con;
//     res.send("connect");
// });
app.get("/api", (req, res) => {
  con.getConnection((err, connection) => {
    if (err) throw err;
    console.log("connected ");
    connection.query("SELECT * from product", (err, rows) => {
      connection.release();
      if (!err) {
        res.send(rows);
      } else {
        console.log(err);
      }
    });
  });
});
