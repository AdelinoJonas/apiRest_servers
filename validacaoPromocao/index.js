function taValendo(solicitacao) {
    const dateInicio = new Date(+solicitacao);
    const dateTermino = new Date(+solicitacao);

    dateInicio.setHours(8, 0, 0, 0);

    if (solicitacao.getDay() === 6)
    
        
    dateTermino.setHours(12, 0, 0, 0);

    return +solicitacao >= +dateInicio && +solicitacao <= +dateTermino && solicitacao.getDay() >= 1 && solicitacao.getDay() <= 6;
};

console.log(taValendo());
// console.log(taValendo(new Date(2021, 3, 26, 12)));

// console.log(taValendo(new Date(2021,3,26,12)));

// console.log(taValendo(new Date(2021,3,26,7,59)));