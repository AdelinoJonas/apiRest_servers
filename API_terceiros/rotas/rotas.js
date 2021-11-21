const express = require('express');
const {obterEmpresa} = require('./controladores/empresas');

const rotas = express();

rotas.get('/empresas/:dominio', obterEmpresa);

module.exports = rotas;