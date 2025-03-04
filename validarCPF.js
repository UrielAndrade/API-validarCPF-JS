function verificarCPF(CPF) {
    CPF = CPF.replace(/\D/g, '');
    if (CPF.length !== 11) return false;

    const multiplicadores1 = [10, 9, 8, 7, 6, 5, 4, 3, 2];
    const multiplicadores2 = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2];

    let somaMultiplicacao = 0;
    for (let i = 0; i < 9; i++) {
        somaMultiplicacao += parseInt(CPF[i]) * multiplicadores1[i];
    }

    let digitoVerificador1 = (somaMultiplicacao * 10) % 11;
    if (digitoVerificador1 === 10) digitoVerificador1 = 0;

    somaMultiplicacao = 0;
    for (let i = 0; i < 10; i++) {
        somaMultiplicacao += parseInt(CPF[i]) * multiplicadores2[i];
    }

    let digitoVerificador2 = (somaMultiplicacao * 10) % 11;
    if (digitoVerificador2 === 10) digitoVerificador2 = 0;

    return digitoVerificador1 === parseInt(CPF[9]) && digitoVerificador2 === parseInt(CPF[10]);
}

module.exports = verificarCPF;