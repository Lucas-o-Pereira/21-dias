//while
//criando variáveis
let mediageral = 0
let qtdHomens = 0
qtdMulheresAcimaDe7 = 0
let maiorNotaHomens = 0
let contador = 1

//nota,sexo

while (contador <=10) {
    nota = parseInt(prompt("Digite a nota do" + contador + "º aluno"))
    sexo = prompt("digite o sexo do aluno (M/F)")


if (sexo == "m") {
    if (nota > maiorNotaHomens) {
        maiorNotaHomens = nota
    }
    qtdHomens++
}

if (sexo == "f" && nota >7) {
    qtdMulheresAcimaDe7++
}

mediageral += nota
contador++

}

mediageral = mediageral / 10

console.log("A média geral dos alunos foi:" + mediageral)
console.log("a quantidade de homens cadastrados foi:" + qtdHomens)
console.log("a quantidade de mulheres com nota acima de 7 foi:" + qtdMulheresAcimaDe7)
console.log("a maior nota entre os homens foi:" + maiorNotaHomens)