// #1
//criando variáveis
let numero = parseInt(prompt("Digite um número inteiro e positivo"));

//Criando loop for
for (let i = 0; i <= numero; i++) {
    console.log(i)
}

//  #2
//Criando loop for
for (let i  = 0; i <= 50; i += 5) {
    console.log(i)
}

//#3
//Criando loop for
for (let i = 50; i >= 0; i -= 5) {
    console.log(i)
}

// #4
//Criando variáveis
//let numero = parseInt(prompt("Digite um número inteiro e positivo"))
for (let i = numero; i <= numero + 2; i++) {
    console.log("tabuada do número: " + i)
    for (let j = 0; j <= 10; j++) {
        console.log(i + " x " + j + " = " + (i * j))
    }
}