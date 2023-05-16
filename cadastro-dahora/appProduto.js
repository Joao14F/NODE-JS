
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/cadastro", (req, res) => {
  res.sendFile(__dirname + "/cadastro.html");
});

app.post("/cadastro", (req, res) => {
  const { id, descricao, quantidade, valor } = req.body;
  if (!id || !descricao || !quantidade || !valor) {
    res.status(400).send("Id, descrição, quantidade e valor são campos obrigatórios.");
    return;
  }

  const produto = { id, descricao, quantidade, valor  };
  connection.query("INSERT INTO produtos SET ?", produto, (err, result) => {
    if (err) throw err;
    console.log(`Cliente ${id} cadastrado com sucesso!`);
    res.redirect("/");
  });
});

// Rota para processar a listagem
app.get('/listagem', (req, res) => {

    // Consulta no banco de dados
    connection.query(`SELECT * FROM produtos`, (error, results, fields) => {
      if (error) throw error;
      
      // Exibição dos resultados
      let html = `
        <!DOCTYPE html>
        <html>
          <head>
            <title>Clientes</title>
          </head>
          <body>
            <h1>Clientes encontrados</h1>
            <table>
              <tr>
                <th>Id</th>
                <th>Deiscrção</th>
                <th>Quantidade</th>
                <th>Valor</th>
              </tr>
      `;
      
      results.forEach((produto) => {
        html += `
          <tr>
            <td>${produto.id}</td>
            <td>${produto.descricao}</td>
            <td>${produto.quantidade}</td>
            <td>${produto.valor}</td>
          </tr>
        `;
      });
      
      html += `
            </table>
            <a href="/">Voltar</a>
          </body>
        </html>
      `;
      
      res.send(html);
    });
  });
  
  // Rota para exibir o formulário de consulta
  app.get('/consulta', (req, res) => {
    res.send(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Consulta de produtos</title>
        </head>
        <body>
          <h1>Consulta de produtos</h1>
          <form method="POST" action="/consulta">
            <label for="id">Id:</label>
            <input type="text" id="id" name="id"><br><br>
            <button type="submit">Consultar</button>
          </form>
        </body>
      </html>
    `);
  });
  
  // Rota para processar a consulta
  app.post('/consulta', (req, res) => {
    //const id = req.body.id;
    const { id, descricao, quantidade, valor } = req.body;
    //const descricao = req.body.descricao;
    //const descricao = req.body.quantidade;
    //const descricao = req.body.valor;
    
    // Consulta no banco de dados
    connection.query(`SELECT * FROM produtos WHERE id LIKE '%${id}%'`, (error, results, fields) => {
      if (error) throw error;
      
      // Exibição dos resultados
      let html = `
        <!DOCTYPE html>
        <html>
          <head>
            <title>Clientes</title>
          </head>
          <body>
            <h1>Clientes encontrados</h1>
            <table>
              <tr>
                <th>Id</th>
                <th>Descrição</th>
                <th>Quantidade</th>
                <th>Valor</th>
              </tr>
      `;
      
      results.forEach((produto) => {
        html += `
          <tr>
            <td>${produto.id}</td>
            <td>${produto.descricao}</td>
            <td>${produto.quantidade}</td>
            <td>${produto.valor}</td>
          </tr>
        `;
      });
      
      html += `
            </table>
            <a href="/">Voltar</a>
          </body>
        </html>
      `;
      
      res.send(html);
    });
  });
  
  connection.connect((err) => {
    if (err) throw err;
    console.log("Conectado ao banco de dados MySQL!");
  });
  
  app.listen(3000, () => {
    console.log("Servidor iniciado na porta 3000");
  });
  