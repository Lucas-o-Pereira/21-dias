//Criando classe hotel
class Hotel {
    Id
    Nome
    Categoria
    Endereco
    telefone
    constructor(Id, Nome, Categoria, Endereco, telefone) {
        this.Id = Id
        this.Nome = Nome
        this.Categoria = Categoria
        this.Endereco = Endereco
        this.telefone = telefone
    }
}

//Criando classe reserva
class Reserva {
    Id
    idHotel
    Responsavel
    Diaentrada
    DiaSaida
    constructor(Id, idHotel, Responsavel, Diaentrada, DiaSaida) {
        this.Id = Id
        this.idHotel = idHotel
        this.Responsavel = Responsavel
        this.Diaentrada = Diaentrada
        this.DiaSaida = DiaSaida
    }
}

//Criando Arrays
let hoteis = []
let reservas = []
let idHotel = 1
let idReserva = 1

//Função para cadastrar hotel
function cadastrarHotel() {
    let nome = prompt("Digite o nome do hotel")
    let categoria = parseInt(prompt("Digite a categoria do hotel"))
    let endereco = prompt("Digite o endereço do hotel")
    let telefone = prompt("Digite o telefone do hotel")
    let hotel = new Hotel(idHotel, nome, categoria, endereco, telefone)
    idHotel++
    hoteis.push(hotel)
}

//Função para cadastrar reserva
function cadastrarReserva() {
    let idHotel 
    let existe = false
    do {
        idHotel = parseInt(prompt("Digite o id do hotel"))
        for (let i = 0; i < hoteis.length; i++) {
            if (idHotel == hoteis[i].id) {
                i = hoteis.length
                existe = true
            } else if (i == hoteis.length - 1) {
                console.log("id de hotel não cadastrado")
            }
        }
    } while (!existe)


    let nome = prompt("Digite o nome do responsável")
    let diaEntrada = parseInt(prompt("Digite o dia de entrada"))
    let diaSaida 
    do{
        diaSaida = parseInt(prompt("Digite o dia de saída"))
        if(diaSaida < diaEntrada){
            console.log("Dia de saída deve ser maior que o dia de entrada")
        }
    } while(diaSaida < diaEntrada)

    let reserva = new Reserva(idReserva, idHotel, nome, diaEntrada, diaSaida)
    idReserva++
    reservas.push(reserva)
}

//FUNÇÃO PARA PROCURAR RESERVAS PELO HOTEL
function ProcurarReservasPeloHotel (idHoteI) {
    reservas.forEach(reserva => {
    if (idHotel == reserva.idHotel) {
    let i = idHotel - 1
        console.log("hotel:", hoteis[i].Nome)
        console.log("responsável:", reserva.Responsavel)
        console.log("dia de entrada:", reserva.DiaEntrada)
        console.log("dia de saída:", reserva.DiaSaida)
    }
    })
}

//FUNÇÃO PARA PROCURAR HOTEL PELA RESERVA
function ProcurarHotelPelaReserva(idReserva) {
    let i = reservas[idReserva - 1].idHotel
        console.log("hotel:", hoteis[idHotel -1].Nome)
        console.log("endereço:", hoteis[idHotel].Endereco)
        console.log("dia de entrada:", reservas[idReserva -1].DiaEntrada)
        console.log("dia de saída:", reservas[idReserva -1].DiaSaida)
    }

    //FUNÇÃO PARA PROCURAR RESERVA PELO RESPONSÁVEL
    function ProcurarReservaPeloNome(nome) {
        for (let i = 0; i < reservas.length; i++) {
            if (nome == reservas[i].Responsavel) {
                console.log("id da Reserva: " + reservas[i].Id)
                console.log("hotel: " + hoteis[(reservas[i].idHotel) - 1].Nome)
    }
  } 
}
    
//FUNÇÃO PARA PROCURAR HOTÉIS PELA CATEGORIA
Function ProcurarHotelPelaCategoria(categoria) {
    let hoteisProcurados = []
    for (let i = 0; i < hoteis.length; i++) {
        if (categoria == hoteis[i].Categoria) {
            hoteisProcurados.push(hoteis[i].nome)
        }
    }
    return hoteisProcurados
}

//FUNÇÃO PARA ATUALIZAR TELEFONE DO HOTEL
Function AtualizarTelefone(idHotel, telefone) {
    hoteis[idHotel - 1].telefone = telefone
    console.log("Número de telefone atualizado")
}

//Fluxo de funcionamento
let continuar = true
do {
    let opcao =  prompt("escolha uma opção: \n1 - Cadastrar hotel \n2 - Cadastrar Reserva \n3 - Procurar reservas pelo hotel" + 
        "\n4 - Procurar hotel pela reserva \n5 - Procurar reserva pelo responsável \n6 - Procurar hotéis pela categoria" + 
        "\n7 - Atualizar telefone de um hotel \n8 - encerrar o programa")

    switch (opcao) {
        case "1":
            cadastrarHotel()
            break;
        case "2":
            cadastrarReserva()
            break;
        case "3":
            ProcurarReservasPeloHotel(prompt("Digite o id do hotel"))   
            break;
        case "4":
            ProcurarHotelPelaReserva(prompt("Digite o id da reserva"))
            break;
        case "5":
            ProcurarReservaPeloNome(prompt("Digite o nome do responsável pela reserva"))
            break;
        case "6":
            let hoteisProcurados = ProcurarHotelPelaCategoria(parseInt(prompt("Digite a categoria que deseja procurar")))
            console.log(hoteisProcurados)
            break;
        case "7":
            let idHotel = parseInt(prompt("Digite o id do hotel que deseja atualizar"))
            let telefone = prompt("Digite o novo telefone")
            AtualizarTelefone(idHotel, telefone)
            break;
        case "8":
            console.log("Programa encerrado")
            continuar = false
            break;
        default:
            console.log("Opção inválida")
            break;
    }
} while (continuar)