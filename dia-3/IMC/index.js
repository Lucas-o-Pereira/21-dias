//Declração de variáveis
let nome = ""
let idade = 0
let altura = 0
let peso = 0

//Solicitanso informações ao usuário e atribuindo valores as variáveis
nome = prompt("Digite seu nome: ")
idade = parseInt(prompt("Digite sua idade: "))
altura = parseFloat(prompt("Digite sua altura: "))
peso = parseInt(prompt("Digite seu peso: "))


//Calculando o ano em que a pessoa nasceu e o IMC
let anoNasc = 0
anoNasc = 2024 - idade

let IMC = 0
IMC = peso / (altura * altura)

//exibindo informaçoes no console
 console.log ("Olá, " + nome + "! Você tem " + idade + " anos, nasceu em " + anoNasc + ", tem " + altura + " de altura e pesa " + peso + " kg. Seu IMC é " + IMC +  "kg/m²")