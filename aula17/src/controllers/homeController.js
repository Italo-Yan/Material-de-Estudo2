// Controlador da página inicial, essa função é responsável por renderizar a visualização 'index' a visualização recebe alguns dados como parâmetros para serem utilizados na renderização.
exports.paginaInicial = (req, res) => {
    res.render('index', {
        titulo: 'Este será o título da página',
        numeros: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        csrfToken: () => {}
    });
    return;
};

// Controlador para tratamento de um POST, essa função é responsável por tratar uma requisição HTTP do tipo POST. Ela envia de volta ao cliente a informação contida no corpo (body) da requisição, essa resposta é geralmente utilizada para confirmar que a informação foi recebida e processada corretamente pelo servidor.
exports.trataPost = (req, res) => {
    res.send(req.body);
    return;
};
