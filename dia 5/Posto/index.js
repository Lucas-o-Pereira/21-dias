// Criando variáveis
let valor
let quantidade
let opção = prompt("Bem vindo ao nosso posto de gasolina!, você deseja: " + "\n1 - abastecer com gasolina; \n2 - abastecer com álcool; \n3 - calibrar os pneus")

// Criando switchcase
switch (opção){
    case "1": 
        valor parseInt(prompt("Digite o valor desejado para abastecer: "))
        quantidade = valor / 5
        console.log("foram abastecidos " + quantidade + "L de gasolina")
        break;
    case "2":
        valor = parseInt(prompt("Digite o valor desejado para abastecer: "))
        quantidade = valor / 3
        console.log("Foram abastecidos " + quantidade + "L de álcool") 
        break;
    default:
        console.log("Pneus calibrados com sucesso")
        break;
}