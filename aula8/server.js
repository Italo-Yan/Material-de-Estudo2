const express = require('express');
const app = express();

// Configuração do middleware 'urlencoded' para análise de dados de formulários HTML
// A opção 'extended' está definida como 'true' para permitir a análise de dados codificados de forma complexa
app.use(express.urlencoded({ extended:true }));

app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome do cliente: <input type="text" name="nome">
    <button>Olá mundo</button>
    </form>
    `);
});

// Rota para testes com parâmetros opcionais
app.get('/testes/:idUsuarios?/:parametro?', (req, res) => {
    console.log(req.params); // Mostra os parâmetros na URL como um objeto
    console.log(req.query); // Mostra os parâmetros de consulta na URL como um objeto
    res.send(req.query.facebookprofile); // Retorna o valor do parâmetro 'facebookprofile' na resposta
});

app.post('/', (req, res) => {
    res.send('Recebo o formulário'); // Retorna uma resposta após receber um formulário via método POST
});

app.get('/contato', (req, res) => {
    res.send('Obrigado por entrar em contato com a gente.'); // Retorna uma mensagem de agradecimento na rota '/contato'
});

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000'); // Mostra a URL para acessar o servidor
    console.log('Servidor executando na porta 3000'); // Mostra uma mensagem informando que o servidor está em execução na porta 3000
});
