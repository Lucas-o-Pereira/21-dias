let modelos = []
let anos = []
let valores = []
let continuar = true
let contador = 0

//criando loop
while (continuar) {
    let modelo = prompt("Digite o modelo do carro")
    modelos[contador] = modelo
    let ano = prompt("Digite o ano do carro")   
    anos[contador] = ano
    let valor = parseFloat(prompt("Digite o valor do carro"))
    valores[contador] = valor
    contador++

    let resposta  = prompt("Desejs inserir outro carro? (s/n)")
    if (resposta == "n")
        continuar = false
}

//exibindo informações
console.log("carros cadastrados:")
for (let i = 0; i < modelos.length; i++) {
    console.log(modelos[i] + "-" + anos[i] + "-" + valores[i])
}

//Ordenar por preço
for (let i = 0; i < valores.length -1; i++) {
    for (let j = 0; j < valores.length - i - 1; j++) {
        if (valores[j] > valores[j+1]) {


            let modeloMaiorValor = modelos[j]
            modelos[j] = modelos[j + 1]
            modelos[j + 1] = modeloMaiorValor
            

            let anoMaiorValor = anos[j]
            anos[j] = anos[j + 1]
            anos[j + 1] = anoMaiorValor

            let maiorValor = valores[j]
            valores[j] = valores[j + 1]
            valores[j + 1] = maiorValor
        
        }
    }
}

console.log("Carros ordenados por preço:")
for (let i = 0; i < modelos.length; i++) {
    console.log(modelos[i] + "-" + anos[i] + "-" + valores[i])
}