var adr = 'Mountain 21';
var sql = 'SELECT * FROM clientes WHERE address = ' + mysql.escape(adr);
con.query(sql, function (err, result) {
  if (err) throw err;
  console.log(result);
});