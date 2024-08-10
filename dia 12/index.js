//Crie dois arrays para nomes e senhas
let nomes = []
let senhas = []
let contador = 0

let continuar = true 

while(continuar){
    //passo 2  e 3: solicitando qual operação o usuário deseja fazer e organizando a execução do código 
    //              com um switchCase dentro de um while
     let opcao = prompt("O que deseja fazer? 1 - Cadastro / 2  - Login / 3  - Excluir / 4 - encerrar")

     switch(opcao) {
         case "1":
            // Passo 4: criando um cadastro de usuário
            nomes [contador] = prompt("Qual o seu nome?")
            senhas [contador] = prompt("Qual a senha?")
            contador++

            break;

        case "2":
            // Passo 5: Criando um login
            let nome = prompt("Qual o nome?")
            let senha = prompt("Qual a senha?")
            let loginValido = false

            for (let i = 0; i < nomes.length; i++){
                if (nome == nomes[i] && senha == senhas[i]){
                    loginValido = true
                }
            }

            if (loginValido) {
                alert("Login feito com sucesso. Bem vindo!")
            }  else {
                alert("login ou senha incorretos!")
            }

            break;

        case "3":
            // Passo 6: Criando Excluir
            let nomeExcluir = prompt("Qual o nome que deseja excluir?")
            let nomesAux = []
            let senhasAux = []
            let contadorAux = 0 

            for (let i = 0; i < contador; i++){
                if (nomeExcluir == nomes[i]){
                    alert("cadastro excluído com sucesso!")
                }    else {
                    nomesAux[contadorAux] = nomes[i]
                    senhasAux[contadorAux] = senhas[i]
                    contadorAux++
                }
            }

            nomes = nomesAux
            senhas = senhasAux
            contador--

            break;
        case "4":
            continuar = false
            break;
        default:
            console.log("Opção inválida escolha outra!")
            break;
        }
    

}