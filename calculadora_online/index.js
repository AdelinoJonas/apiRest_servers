const express = require("express");

const app = express();

app.get("/somar", (req, res) => {


    let num1 = Number(req.query.num1);
    let num2 = Number(req.query.num2);

    if (!isNaN(num1) && !isNaN(num2)) {
        res.send(`${num1 + num2}`);
    } else {
        res.send('NaN');
    }
    console.log(req.query);
});

app.get("/subtrair", (req, res) => {


    let num1 = Number(req.query.num1);
    let num2 = Number(req.query.num2);

    if (!isNaN(num1) && !isNaN(num2)) {
        res.send(`${num1 - num2}`);
    } else {
        res.send('NaN');
    }
    console.log(req.query);
});
app.get("/multiplicar", (req, res) => {


    let num1 = Number(req.query.num1);
    let num2 = Number(req.query.num2);

    if (!isNaN(num1) && !isNaN(num2)) {
        res.send(`${num1 * num2}`);
    } else {
        res.send('NaN');
    }
    console.log(req.query);
});

app.get("/dividir", (req, res) => {


    let num1 = Number(req.query.num1);
    let num2 = Number(req.query.num2);

    if (!isNaN(num1) && !isNaN(num2)) {
        res.send(`${num1 / num2}`);
    } else {
        res.send('NaN');
    }
    console.log(req.query);
});
app.listen(8000);