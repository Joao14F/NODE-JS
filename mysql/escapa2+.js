var name = 'Amy';
var adr = 'Mountain 21';
var sql = 'SELECT * FROM clientes WHERE name = ? OR address = ?';
con.query(sql, [name, adr], function (err, result) {
  if (err) throw err;
  console.log(result);
});