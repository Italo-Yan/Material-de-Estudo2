const express = require('express');
const app = express();

//          CRIAR   LER   ATUALIZAR DELETE
//  CROD -> CREATE, READ, UPDATE,   DELETE
//          POST    GET   PUT       DELETE

// Rota para a página inicial ("/")
app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome: <input type="text" name="nome">
    </form>
    `);
});

// Rota para receber a submissão do formulário ("/") via método POST
app.post('/', (req, res) => {
    res.send('Recebo o formulário');
});

// Rota para a página de contato ("/contato")
app.get('/contato', (req, res) => {
    res.send('Obrigado por entrar em contato com a gente.');
});

// Inicia o servidor na porta 3000
app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
});
