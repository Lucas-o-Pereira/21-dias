//criando variáveis
let nome
let idade
let temCarta = false
let temCarro = false

//pedindo informações ao usuário
nome = prompt("digite seu nome")
idade = parseInt(prompt("digite sua idade"))
let opçãoCarta = prompt("você tem carta de motorista? (s/n)")
if (opçãoCarta == "s") {
    temCarta = true
} 
let opçãoCarro = prompt("você tem carro? (s/n)")
if (opçãoCarro == "s") {
    temCarro = true

    //exibindo mensagem no console
    if (idade < 18 || !temCarta) {
        console.log (nome +", você não pode dirigir")
    } else if (idade >= 18 && temCarta && !temCarro) {
        console.log (nome +", você pode dirigir, mas não tem um carro")
    } else {
        console.log (nome +", você será o motorista")
    }