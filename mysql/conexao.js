var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "aluno01"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});