const express = require('express');
const {
    listaPokemons,
    pokemon
} = require("./constroladores/pokeApi");

const app = express();
app.use(express.json());

app.get('/pokemons', listaPokemons);
app.get('/pokemons/:idouNome', pokemon);

app.listen(8000);