const express = require("express");
const res = require("express/lib/response");
const bodyparser = require("body-parser");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const productroutes = require("./routes/product");
const orderroutes = require("./routes/order");
const customerroutes = require("./routes/customer");
const categoryroutes = require("./routes/category");
const saleroutes = require("./routes/sale");
const accountroutes = require("./routes/account");
const order_detailroutes = require("./routes/order_detail");
app.listen(8000, () => {
  console.log("server đang chạy");
});
app.use(bodyparser.json({ limit: "50mb" }));
app.use(cors());
app.use(morgan("common"));
//Routes
app.use("/product", productroutes);
app.use("/order", orderroutes);
app.use("/cus", customerroutes);
app.use("/cate", categoryroutes);
app.use("/sale", saleroutes);
app.use("/account", accountroutes);
app.use("/order/detail/", order_detailroutes);
// DataBase
// const mysql = require("mysql");
// const con = mysql.createPool({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "mangastore"
// });

// app.get('/api', (req,res) =>{
//     con.getConnection((err, connection) => {
//         if(err) throw err;
//         console.log('connected ');
//         connection.query('SELECT * from product', (err , rows)=>{
//             connection.release();
//             if(!err){
//                 res.send(rows);
//             }   else {
//                 console.log(err);
//             }
//         })
//     })
// });
