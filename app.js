//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {
    let input = document.getElementById("amigo");
    let nome = input.value.trim();
    
    // Verifica se o campo está vazio
    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }
    
    // Verifica se o nome contém apenas letras e espaços
    if (!/^[A-Za-zÀ-ÖØ-öø-ÿ ]+$/.test(nome)) {
        alert("Por favor, insira um nome válido.");
        return;
    }
    
    // Verifica se o nome já foi adicionado
    if (amigos.includes(nome)) {
        alert("Este nome já foi adicionado! Por favor, insira um nome diferente.");
        return;
    }
    
    // Adiciona o nome ao array e atualiza a lista
    amigos.push(nome);
    input.value = "";
    atualizarLista();
}

function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    
    for (let amigo of amigos) {
        let item = document.createElement("li");
        item.textContent = amigo;
        lista.appendChild(item);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione pelo menos um amigo antes de sortear.");
        return;
    }
    
    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceSorteado];
    
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>Amigo sorteado: ${amigoSorteado}</li>`;
}

