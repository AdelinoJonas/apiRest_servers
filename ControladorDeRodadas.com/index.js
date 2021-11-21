const express = require("express");

const app = express();

const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];

let jogador = 0;

app.get("/", (req, res) => {



    const nomeJogador = jogadores[jogador];

    jogador++;

    if (jogador >= jogadores.length) {
        jogador = 0;
    }

    res.send(`É a vez de ${nomeJogador} jogar`)

    console.log(nomeJogador);
});

app.listen(8000);