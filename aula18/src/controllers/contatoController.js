const Contato = require('../models/ContatoModel');

exports.index = (req, res) => {
    res.render('contato', {
        contato: {}
    });
};

exports.register = async (req, res) => {
    try {
        const contato = new Contato(req.body);
        await contato.register();

        if(contato.errors.length > 0) {
            req.flash('errors', contato.errors);
            req.session.save(() => res.redirect('back')); 
            return;
        }

        req.flash('success', 'Contato registrado com sucesso.'); 
        req.session.save(() => res.redirect('back')); 
        return;
    } catch(e) {
        console.log(e);
        res.render('404');
    }
};
