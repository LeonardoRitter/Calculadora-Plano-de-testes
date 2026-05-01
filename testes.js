function testar(descricao, fn) {
    try {
        fn();
        console.log("✅ PASSOU: " + descricao);
    } catch (erro) {
        console.log("❌ FALHOU: " + descricao + " → " + erro.message);
    }
}

testar("Visor deve estar presente na página", () => {
    const visor = document.getElementById("visor");
    if (!visor) throw new Error("Visor não encontrado");
});

testar("Botões de número devem estar presentes", () => {
    const botoes = document.querySelectorAll("button");
    if (botoes.length === 0) throw new Error("Nenhum botão encontrado");
});

testar("Botão C deve estar presente", () => {
    const botoes = document.querySelectorAll("button");
    const botaoC = Array.from(botoes).find(b => b.textContent === "C");
    if (!botaoC) throw new Error("Botão C não encontrado");
});

testar("Botão = deve estar presente", () => {
    const botoes = document.querySelectorAll("button");
    const botaoIgual = Array.from(botoes).find(b => b.textContent === "=");
    if (!botaoIgual) throw new Error("Botão = não encontrado");
});

testar("Função calcular deve existir", () => {
    if (typeof calcular !== "function") throw new Error("Função calcular não encontrada");
});

testar("Função limpar deve existir", () => {
    if (typeof limpar !== "function") throw new Error("Função limpar não encontrada");
});

testar("Função clicarNumero deve existir", () => {
    if (typeof clicarNumero !== "function") throw new Error("Função clicarNumero não encontrada");
});

testar("Clicar no número deve atualizar o visor", () => {
    clicarNumero("1");
    const visor = document.getElementById("visor");
    if (visor.value === "") throw new Error("Visor não foi atualizado");
    limpar();
});

testar("Botão C deve limpar o visor", () => {
    clicarNumero("1");
    limpar();
    const visor = document.getElementById("visor");
    if (visor.value !== "") throw new Error("Visor não foi limpo");
});