const listaDeAlunos = require("../dados/alunos");

function consultarTodosOsAlunos(req, res) {
    res.json(listaDeAlunos);
};

function consultarUmAluno(req, res) {
    const aluno = listaDeAlunos.find(
        (aluno) => aluno.id === Number(req.params.id)
    );
    let id = req.params.id;

    if (id !== isNaN) {
        if (!id) {
            res.status(404);
            res.json({
                erro: "O ID " + req.params.id + " não foi encontrado."
            });
            return;
        }
    } else {
        res.status(400);
        res.json({
            erro: "O ID " + req.params.id + " deve ser um numero válido."
        });
        return;
    }
    res.json(aluno);
}

function validarAluno(aluno) {
    if (!aluno.nome) {
        return "O campo 'nome' é obrigatório.";
    }
    if (!aluno.sobrenome) {
        return "O campo 'sobrenome' é obrigatório.";
    }
    if (!aluno.idade) {
        return "O campo 'idade' é obrigatório.";
    }
    if (!aluno.curso) {
        return "O campo 'curso' é obrigatório.";
    }
    if (typeof aluno.nome !== "string") {
        return "O campo 'nome' deve ser preenchido com um texto.";
    }
    if (typeof aluno.sobrenome !== "string") {
        return "O campo 'nome' deve ser preenchido com um texto.";
    }
    if (typeof aluno.idade !== "number") {
        return "O campo 'idade' deve ser preenchido com um número.";
    }
    if (aluno.idade < 18) {
        return "O aluno deve ser maior de idade.";
    }
    if (aluno.nome === " ") {
        return "O Campo 'nome', não pode ser preenchido com espaço vazio."
    }
    if (aluno.sobrenome === " ") {
        return "O Campo 'sobrenome', não pode ser preenchido com espaço vazio."
    }
    if (aluno.curso === " ") {
        return "O Campo 'curso', não pode ser preenchido com espaço vazio."
    }
}

let proximoId = 1;

function cadastrarUmAluno(req, res) {

    const erro = validarAluno(req.body);

    if (erro) {
        res.status(400);
        res.json({
            erro
        });
        return;
    } else {
        res.status(201);
    }

    const novoAluno = {
        id: proximoId,
        nome: req.body.nome,
        sobrenome: req.body.sobrenome,
        idade: req.body.idade,
        curso: req.body.curso,
    };

    if (!proximoId) {
        proximoId++;
    } else {
        listaDeAlunos.push(novoAluno);
        proximoId++;
    }

    res.json(novoAluno);
}

function deletarUmAluno(req, res) {
    const aluno = listaDeAlunos.find(
        (aluno) => aluno.id === Number(req.params.id)
    );

    if (!aluno) {
        res.status(400);
        res.json({
            erro: "O aluno com ID: " + req.params.id + " informado não existe."
        });
        return;
    } else {
        res.status(200);
    }

    const indice = listaDeAlunos.indexOf(aluno);

    listaDeAlunos.splice(indice, 1);
    res.json(aluno);
}
module.exports = {
    cadastrarUmAluno,
    consultarTodosOsAlunos,
    consultarUmAluno,
    deletarUmAluno,
};