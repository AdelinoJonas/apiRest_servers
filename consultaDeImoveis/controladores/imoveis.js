const listaDeImoveis = require("../dados/imoveis");

function consultarTodosOsImoveis(req, res) {
    res.json(listaDeImoveis);
};

function consultarUmImovel(req, res) {
        const imovel = listaDeImoveis.find((imovel) => imovel.id === Number(req.params.id));
    
        res.json(imovel);
};

module.exports = {
    consultarTodosOsImoveis,
    consultarUmImovel,
};