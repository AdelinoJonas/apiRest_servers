const express = require('express');
const axios = require('axios');
const fs = require('fs/promises');

const app = express();

app.use(express.json());

app.get('/enderecos', async function encontrarEndereco(req, res) {
    const cep = req.params.cep;

    if (!cep) {
        res.status(400).json({
            mensagem: "Um cep deve ser informado."
        });
        return;
    }
    console.log(cep);

    const enderecos = JSON.parse(await fs.readFile('./dados/enderecos'));

    let enderecoEncontrado = enderecos.find(e => e.cep.replace('-', '') === cep);

    if (enderecos && Array.isArray(enderecos)) {
        enderecoEncontrado = enderecos.find(e => e.cep.replace('-', '') === cep);

        if (enderecoEncontrado) {
            res.json(enderecoEncontrado);
            return;
        }

        enderecoEncontrado = (await axios.get(`https://viacep.com.br/ws/${cep}/json/`)).data;

        if (enderecoEncontrado) {
            enderecos.push(enderecoEncontrado);

            fs.writeFile('./dados/enderecos.json', JSON.stringify(enderecos));

            res.json(enderecoEncontrado);
            return;
        }
    }
});


app.listen(8080);