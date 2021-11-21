function taAberto(clienteChegou) {
    //GUARDANDO O MOMENTO 
    const abertura = new Date(+clienteChegou);
    const fechamento = new Date(+clienteChegou);

    //SETTING A HORA DO MOMENTO
    abertura.setHours(8,0,0,0);
    fechamento.setHours(18,0,0,0);

    //CONDIÇÃO PARA SABER SE É DIA DE SEMANA E SE ESTÁ ABERTO
    return +clienteChegou >= +abertura && +clienteChegou <= +fechamento && clienteChegou.getDay() >= 1 && clienteChegou.getDay() <= 6;
};
//TESTANDO
console.log(taAberto(new Date(2021, 9, 16, 12, 30)));

console.log(taAberto(new Date(2021,3,27,12,30)));

console.log(taAberto(new Date(2021,3,27,7,59)));
