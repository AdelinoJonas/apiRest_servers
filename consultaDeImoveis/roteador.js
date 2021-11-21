const express = require("express");
const listaDeImoveis = require("./controladores/imoveis");

const roteador = express();

// GET /imoveis
roteador.get("/imoveis", listaDeImoveis.consultarTodosOsImoveis);
// GET /imoveis/2
roteador.get("/imoveis/:id", listaDeImoveis.consultarUmImovel);

//EXPORTANDO ROTEADOR
module.exports = roteador;