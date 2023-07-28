// Esse middleware é executado para todas as rotas da aplicação.
// Ele adiciona uma variável local chamada "umaVariavelLocal" ao objeto "res" com o valor 'Este é o valor da variável local'.
exports.middlewareGlobal = (req, res, next) => {
    res.locals.umaVariavelLocal = 'Este é o valor da variável local';
    next();
};

// Esse middleware é executado para todas as rotas da aplicação.
exports.outroMiddleware = (req, res, next) => {
    next();
};

// Esse middleware é usado para verificar se ocorreu algum erro relacionado ao token CSRF.
// Se o erro existir e o código do erro for igual a 'EBADCSRFTOKEN', o middleware renderiza o arquivo "404.ejs" localizado na pasta de visualizações (views).
// Esse middleware é comumente usado para proteção contra ataques CSRF em formulários.
exports.checkCsrfError = (err, req, res, next) => {
    if (err && 'EBADCSRFTOKEN' === err.code) {
        return res.render('../views/404.ejs');
    }
};

// Esse middleware é responsável por adicionar um token CSRF (geralmente um valor aleatório) à variável local "csrfToken" do objeto "res".
// Esse token é usado para proteger as rotas contra ataques CSRF em formulários e outras solicitações.
exports.csrfMiddelware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
};
