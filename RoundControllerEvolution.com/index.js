const express = require('express');

const app = express();

const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];

let jogador = 0;

app.get("/", (req, res) => {

    const nomeJogador = jogadores[jogador];

    jogador++;

    if (jogador >= jogadores.length) {
        jogador = 0;
    }

    res.send(`É a vez de ${nomeJogador} jogar`);
});

app.get("/consultar",(req, res) => {
    res.send(jogadores);
});

app.get("/remover", (req, res) => {

    const indice = Number(req.query.indice);

    if (indice >= jogadores.length) {

        res.send(`Não existe jogador no indice informado(${indice}) para ser removido.`);
    } else {
        jogadores.splice(indice, 1);

        res.send(jogadores);
    }
});

app.get("/adicionar", (req, res) => {
    let nomeJogador = req.query.nome;
    const indice = Number(req.query.indice);

    nomeJogador = nomeJogador[0].toUpperCase() + nomeJogador.substr(1).toLowerCase();

    if (isNaN(indice)) {
        jogadores.push(nomeJogador);
        res.send(jogadores);
    } else {
        if (indice >= jogadores.length) {
            res.send(`O índice informado (${indice}) não existe no array. Novo jogador não adicionado.`);
        } else {
            jogadores.splice(indice, 0, nomeJogador);
            res.send(jogadores);
        }
    }
});

app.listen(8000);