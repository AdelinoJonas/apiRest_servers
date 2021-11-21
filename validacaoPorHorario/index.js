function taAberto(clienteChegou) {
    abertura = new Date(+clienteChegou);
    fechamento = new Date(+clienteChegou);

    abertura.setHours(8, 0, 0, 0);
    fechamento.setHours(18, 0, 0, 0);

    return +clienteChegou >= +abertura &&
        +clienteChegou <= +fechamento;
};

console.log(taAberto(new Date(2015,1,1,12)));
console.log(taAberto(new Date(2015,1,1,2)));
