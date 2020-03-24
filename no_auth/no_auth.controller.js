const express = require('express');
const router = express.Router();

var dados = {
    status: 'Success',
    data: 'nada1'
};

router.route('/').get(getData);
router.route('/toggle').get(getToggledData);

module.exports = router;

function getData(req, res, next) {
    res.status(200).json({
        status: 'success',
        data: 'no-auth'
    });
}

function getToggledData(req, res, next) {
    const opcoes = ['corona', 'covid', 'nada1', 'nada2'];

    var atual = dados['data'];

    for (var [i, opcao] of opcoes.entries()) {
        if (atual === opcao) {
            i += 1;
            if (i === opcoes.length) {
                i = 0;
            }
            break;
        }
    }

    dados['data'] = opcoes[i];

    res.status(200).json({
        status: 'success',
        data: dados
    });
}
