const mysql = require("mysql");
const con = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "mangastore"
});

con.getConnection((err, connection) => {
    if(err) throw err;
});

module.exports = con ;