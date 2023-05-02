var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "aluno01",
    database: "banco"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM clientes ORDER BY name DESC", function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});