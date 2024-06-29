//Criando variáveis/Loop
let confirmar = "n"
while (confirmar != "s") {
    let nome = prompt("Digite o seu nome")
    let idade = parseInt(prompt("Digite sua idade"))
    let salarioAtual = parseFloat(prompt("Digite seu salário atual"))
     console.log("Nome: " + nome + ", idade: " + idade +", Salário atual: " + salarioAtual)
     confirmar = prompt("As informações estão corretas? (s/n)")
}
  
// Fazendo a previsão do salário
let aumento = 0.015
console.log("previsão salarial para os próximos 10 anos:")

  for (let ano = 1; ano <= 10; ano++) {
 salarioAtual += salarioAtual * aumento
    aumento *= 2

    console.log((2024 + ano) + "=R$" + salarioAtual)
}