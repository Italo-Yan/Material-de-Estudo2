exports.index = (req, res) => {
    res.render('login');
};

exports.register = (req, res, next) => {
    res.render('Olá');
};