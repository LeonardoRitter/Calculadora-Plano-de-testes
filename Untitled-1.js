let numeroAtual = "";
let numeroAnterior = "";
let operacao = "";

function clicarNumero(num) {
    numeroAtual += num;
    document.getElementById("visor").value = numeroAtual;
}

function definirOperacao(op) {
    numeroAnterior = numeroAtual;
    numeroAtual = "";
    operacao = op;
} 

function calcular() {
    let resultado;

    let n1 = parseFloat(numeroAnterior);
    let n2 = parseFloat(numeroAtual);

    if (operacao === "+") resultado = n1 + n2;
    if (operacao === "-") resultado = n1 - n2;
    if (operacao === "*") resultado = n1 * n2;
    if (operacao === "/") resultado = n1 / n2;

    document.getElementById("visor").value = resultado;
    numeroAtual = resultado;
}

function limpar() {
    numeroAtual = "";
    numeroAnterior = "";
    operacao = "";  
    document.getElementById("visor").value = "";
}

function calcularPorcentagem() {
    if (numeroAtual !== "") {
        numeroAtual = parseFloat(numeroAtual) / 100;
        document.getElementById("visor").value = numeroAtual;
    }
}
    