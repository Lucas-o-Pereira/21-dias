const temFome = prompt("Você está com fome? (sim/nao)")
const temDinehiro = prompt("Você tem dinheiro (sim/nao)")
const restauranteAberto = prompt("O restaurante está aberto? (sim/nao)")

if (temFome === "não" || temDinehiro === "não") {
    console.log("Hoje a janta será em casa");
} else if (temDinehiro === "sim" && restauranteAberto === "sim") {
    console.log("Hoje a janta será no seu restaurante favorito");
} else {
    console.log ("Peça um delivery!");
}    