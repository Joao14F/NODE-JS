var adr = 'Mountain 21';
var sql = 'SELECT * FROM clientes WHERE address = ?';
con.query(sql, [adr], function (err, result) {
  if (err) throw err;
  console.log(result);
});
