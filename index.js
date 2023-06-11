const express = require('express');
const server = express();
const filmes = require('./src/filmes.json');

server.get('/filmes', (req, res) => {
  try {
    return res.json({ filmes });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Ocorreu um erro ao processar a solicitação' });
  }
});

server.listen(5040, () => {
  console.log('Servidor está funcionando');
});
