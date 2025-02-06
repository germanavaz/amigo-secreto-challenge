// //O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// Funcionalidades:
// Adicionar nomes: Os usuários escreverão o nome de um amigo em um campo de texto e o adicionarão a uma lista visível ao clicar em "Adicionar".

// Validar entrada: Se o campo de texto estiver vazio, o programa exibirá um alerta solicitando um nome válido.

// Visualizar a lista: Os nomes inseridos aparecerão em uma lista abaixo do campo de entrada.

// Sorteio aleatório: Ao clicar no botão "Sortear Amigo", um nome da lista será selecionado aleatoriamente e exibido na página.

//Cria um array para armazenar os nomes
let listaDeAmigos = [];

//Implementa uma função para agregar amigos
function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();
    
    if (nome === "") {
        alert("Por favor, digite um nome válido.");
        return;
    }
    
    listaDeAmigos.push(nome);
    input.value = "";
    atualizarLista();
}




