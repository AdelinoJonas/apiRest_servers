const express = require("express");
const roteador = require("./roteador");

const app = express();

app.use(roteador);

app.use = (express.json());


app.listen(8000);
