//Arrays para armazenar nomes e senhas
let nomes = [];
let senhas = [];

//Função para solicitar a opção ao usuário
function solicitarOpcao() {
    let opcao = prompt("Escolha uma opção:\n1. Cadastrar\n2. Faça login" + "\n3. Excluir cadastro\n4. Encerrar progrma");
    return opcao;
}

//Função para solicitar nome e senha ao usuário
function CadastrarUsuario() {
    nomes.push(prompt("Digite seu nome:"))
    senhas.push(prompt("Digite sua senha:"))
}

//Função para fazer login
function fazerLogin(nime, senha) {
    let indice = nomes.indexof(nome);
    if (indice !== -1 && senhas[indice] === senha) {
       return true;
    }  else {
       return false;   
    }
}


//Função para excluir um cadastro
function excluirCadastro(nome) {
    let indice = nomes.indexof(nome);
    if (indice !== -1){
        nomes.splice(indice, 1);
        senhas.splice(indice, 1);
        console.log("Cadastro excluído com sucesso!");
    } else {
        console.log("Usuário não encontrado.");
    }
}


//fluxo de funcionamento do programa
let continuar = true;
while (continuar) {
    let opcao = solicitarOpcao();

    switch (opcao) {
        case "1":
            cadastrarUsuario();
            break;
        case "2":
            let nome = prompt("digite seu nome")
            let senha = prompt("digite sua senha")
            let login = fazerLogin(nome, senha);
            if (login) {
                console.log("Login feito com sucesso");
            } else {
                console.log("nome ou senha incorretos!" );
            }   
            break;
        case "3":
           nome = prompt("digite seu nome")
            excluirCadastro(nome);
            break;
        case "4":
            continuar = false;
            break;
        default:
            console.log("Opção inválida. Tente novamente.");
            break;
    }
}