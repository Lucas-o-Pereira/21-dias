let nomes = []
let senhas = []
let contador = 0

 
//(Resolução alternativa para login e exclusão)


// Função para encontrar o índice de um nome no array de nomes (login e exclusão)
function encontrarIndice(nome) {
    for (let i = 0; i < nomes.length; i++) {
        if (nomes[i] === nome) {
            return i;   
        }
    }
    return -1;
}

// Lógica do login  (login e exclusão)
const nome = prompt("Digite o nome de usuário:");
const senha = prompt("Digite a senha:");

const indice = encontrarIndice(nome);

if (indice !== -1 && senhas[indice] === senha) {
   console.log("login bem sucedido");
} else {
    console.log("Nome de usuário ou senha incorretos.");
}

// Lógica para excluir um cadastro
const nomeExcluir = prompt("Digite o nome de usuário a ser excluído:");

const indiceExcluir = encontrarIndice(nome);

if (indice != -1) {
    //Remove o elemento encontrado, movendo os elementos posteriores uma posição para trás
    for (let i = indice; i < nomes.length - 1; i++) {
        nomes[i] = nomes[i + 1];
        senhas[i] = senhas[i + 1];
    }
    //Reduz o comprimento dos arrays 
    nomes.length--;
    senhas.length--;

    console.log("Cadastro excluído com sucesso!");
} else {
    console.log("Nome de usuário não encontrado.");
}