const express = require("express");

const app = express();

app.use(express.json());

const convidados = ["Carlos", "Amanda", "Fernanda", "Juliana", "Lucas", "Roberto"];

app.get("/convidados", (req, res) => {

    if (!req.query.nome) {

        res.json(convidados);

    } else {
        const convidado = convidados.find(convidado => convidado === req.query.nome);

        if (!convidado) {
            res.json(
                "O convidado buscado não está presente na lista."
            );

        } else {
            res.json(
                "Candidato presente"
            );
            console.log(convidado);
        }
    }
});

app.post("/convidados", (req, res) => {
    const novoConvidado = convidados.find(convidado => convidado === req.body.nome);

    if (novoConvidado) {
        res.json({
            "mensagem": "O nome do convidado a ser adicionado já existe na lista. Caso queria adicionar outro convidado de mesmo nome, favor fornecer o sobrenome também."
        });
    } else {
        convidados.push(req.body.nome);
        res.json({
            "mensagem": "Convidado adicionado."
        });
    }

    res.send();
});

app.delete("/convidados/:nome", (req, res) => {
    const indiceNovoConvidado = convidados.findIndex(convidado => convidado === req.params.nome);

    if(indiceNovoConvidado < 0){
        res.json({"mensagem": "O nome do convidado a ser removido não existe na lista. Nenhum convidado foi removido."}); 
    }
        else {
            convidados.splice(indiceNovoConvidado, 1);

            console.log(convidados);

            res.json({"mensagem": "Convidado removido."});
        }
});

app.listen(8000);