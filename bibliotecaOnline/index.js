const express = require("express");

const app = express();

app.use(express.json());

const livros = [{
        id: 1,
        titulo: "A Odisséia de Jonas",
        autor: "Thomas Crawling",
        ano: 2001,
        numPaginas: 197
    },
    {
        id: 2,
        titulo: "Jonas e a sociedade escondida",
        autor: "Claire Crawling",
        ano: 2004,
        numPaginas: 158
    }
];

let proximoId = 3;

// CONSULTANDO LIVROS
app.get("/livros", (req, res) => {
    res.json(livros);
});

// CONSULTANDO POR ID

app.get("/livros/:id", (req, res) => {

    const idLivro = Number(req.params.id);

    console.log(idLivro);
    // VERIFICANDO SE É UM NUMERO VALIDO
    if (isNaN(idLivro)) {
        res.json({
            mensagem: "O valor do parâmetro ID da URL não é um número válido."
        });
    } else {
        // SE NÃO, VARRER OS OBJETOS BUSCANDO O ID
        const livro = livros.find(livro => livro.id === idLivro);

        if (!livro) {
            res.json({
                mensagem: "Não existe livro para o ID informado."
            });
        } else {
            res.json(livro);
        };
    }
});

app.post("/livros", (req, res) => {

    const novoLivro = {
        id: proximoId,
        titulo: req.body.titulo,
        autor: req.body.autor,
        ano: req.body.ano,
        numPaginas: req.body.numPaginas
    };

    livros.push(novoLivro);

    proximoId++

    res.json({
        mensagem: "Livro Adicionado com Sucesso!"
    });

});
app.put("/livros/:id", (req, res) => {

    const livroDaLista = livros.find(livro => livro.id === Number(req.params.id));

    if (!livroDaLista) {
        res.json({
            "mensagem": "Não existe livro a ser substituído para o ID informado."
        });
    } else {
        {
            livroDaLista.titulo = req.body.titulo;
            livroDaLista.autor = req.body.autor;
            livroDaLista.ano = req.body.ano;
            livroDaLista.numPaginas = req.body.numPaginas;

            res.json({
                "mensagem": "Livro substituído."
            });
        }
    }
});
app.patch("/livros/:id", (req, res) => {

    const livroDaLista = livros.find(livro => livro.id === Number(req.params.id));

    if (!livroDaLista) {
        res.json({
            "mensagem": "Não existe livro a ser alterado para o ID informado."
        });
    } else {
        if (livroDaLista.titulo !== undefined) {
            livroDaLista.titulo = req.body.titulo;
        }
        if (livroDaLista.autor !== undefined) {
            livroDaLista.autor = req.body.autor;
        }
        if (livroDaLista.ano !== undefined) {
            livroDaLista.ano = req.body.ano;
        }
        if (livroDaLista.numPaginas !== undefined) {
            livroDaLista.numPaginas = req.body.numPaginas;
        }
        res.json(livroDaLista);

        res.json({
            "mensagem": "Livro alterado."
        });
    }
});

app.delete("/livros/:id", (req, res) => {

    const livroDaLista = livros.find((livro) => livro.id === Number(req.params.id));

    if (!livroDaLista) {
        res.json({
            "mensagem": "Não existe livro a ser removido para o ID informado."
        });
    } else {
        const indice = livros.indexOf(livroDaLista);

        livros.splice(indice, 1);

        res.json({
            "mensagem": "Livro removido."
          });
    };
});

app.listen(8000);